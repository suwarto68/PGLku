import express, { Request, Response } from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

// Load environment variables (.env files)
dotenv.config();

const app = express();
const PORT = 3000;

// Enable JSON parser for request bodies
app.use(express.json());

// Initialize server-side Gemini GenAI Client safely
const apiKey = process.env.GEMINI_API_KEY || '';

// Always guard client initialization to prevent crash on missing variables during build setup
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build', // Telemetry standard as per instructions
      },
    },
  });
}

// ==========================================
// API ENDPOINT: Generate Personalized AI Task
// ==========================================
app.post('/api/tasks/generate', async (req: Request, res: Response) => {
  const { nama, minat, kesulitaan, kesulitan } = req.body;
  const activeDifficulty = kesulitan || kesulitaan || 'sedang';

  if (!ai) {
    return res.status(500).json({
      success: false,
      message: 'GEMINI_API_KEY is not configured on the server. Please add your key in the Settings > Secrets segment.',
    });
  }

  // System instructions for custom task generation
  const systemInstruction = `Anda adalah seorang Guru Matematika SMP Kelas 7 Fase D bernama Suwarto, S.Pd. 
Tugas Anda adalah membuat 1 (satu) soal cerita matematika kontekstual kustom tentang materi "Persamaan Garis Lurus" (PGL).
Soal cerita harus dibawakan secara menarik, ramah, dan disesuaikan khusus dengan nama siswa serta minat/hobi pilihan mereka.
Panduan struktur soal cerita PGL:
1. Karakter utama dalam cerita haruslah siswa tersebut: "${nama}".
2. Latar cerita harus disesuaikan dengan minat mereka: "${minat}".
3. Skenario harus melibatkan laju perubahan konstan (Gradien m) dan nilai awal konstan (Intercept c).
   Contoh: tarif awal sewa gawai, koin gim mula-mula dengan laju penambahan, sisa energi, atau poin pertandingan.
4. Sesuaikan ke tingkat kesulitan: "${activeDifficulty}" (mudah: perhitungan gradien sederhana atau penentuan y=mx+c langsung; sedang: pemodelan linear & pengerjaan 1 langkah lanjutan; sulit: membandingkan dua peristiwa linier atau melacak perpotongan garis).
5. Ajukan pertanyaan eksplisit di akhir soal cerita agar siswa melukis model persamaannya (y = mx + c) atau menghitung hasil akhir.
6. Ketik dengan bahasa Indonesia yang jelas, hangat, sopan, dan memotivasi tanpa membeberkan kunci jawabannya.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: `Halo Pak Suwarto, tolong buatkan saya satu soal cerita matematika tentang Persamaan Garis Lurus yang melibatkan diri saya (${nama}) dan hobi saya (${minat}) dengan tingkat kesulitan (${activeDifficulty}).`,
      config: {
        systemInstruction,
        temperature: 0.8,
      },
    });

    return res.json({
      success: true,
      question: response.text,
    });
  } catch (err: any) {
    console.error('Error generating AI task:', err);
    return res.status(500).json({
      success: false,
      message: err.message || 'Gagal menghasilkan tugas kustom dari Gemini.',
    });
  }
});

// ==========================================
// API ENDPOINT: Evaluate Student Answer with AI
// ==========================================
app.post('/api/tasks/evaluate', async (req: Request, res: Response) => {
  const { nama, question, answer } = req.body;

  if (!ai) {
    return res.status(500).json({
      success: false,
      message: 'GEMINI_API_KEY is not configured on the server.',
    });
  }

  const systemInstruction = `Anda adalah korektor ulung matematika bernama Pak Suwarto, S.Pd.
Tugas Anda adalah menilai jawaban dari lembar tugas siswa bernama "${nama}".
Informasi yang diberikan:
- Soal Cerita yang Diberikan: "${question}"
- Jawaban yang Ditulis Siswa: "${answer}"

Format Evaluasi yang harus Anda kembalikan dalam Bahasa Indonesia:
1. **Apresiasi**: Beri pujian hangat atas perjuangan belajar mereka di awal komentar.
2. **Koreksi Langkah-by-Langkah**: Bedah jawaban siswa. Jelaskan apakah penentuan gradien (m) dan nilai awal (c) sudah tepat. Tunjukkan langkah pengerjaan yang benar secara runtut berupa persamaan akhir garis lurus yang sesuai dan kalkulasi tujuannya.
3. **Skor Akhir**: Beri nilai performa mereka berkisar antara 0 hingga 10 poin secara logis dan adil.
4. **Kalimat Penyemangat**: Berikan untaian kata penyemangat agar mereka makin termotivasi mendalami Persamaan Garis Lurus.

Gunakan tata bahasa Indonesia yang edukatif, ramah, bersahabat, namun tetap secara ilmiah akurat.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: `Silakan koreksi lembar jawaban saya, Pak Suwarto!\nSiswa: ${nama}\nSoal: ${question}\nJawaban Saya: ${answer}`,
      config: {
        systemInstruction,
        temperature: 0.3, // Low temperature for consistent grading feedback
      },
    });

    return res.json({
      success: true,
      feedback: response.text,
    });
  } catch (err: any) {
    console.error('Error in grading feedback:', err);
    return res.status(500).json({
      success: false,
      message: err.message || 'Gagal menilai jawaban.',
    });
  }
});

// ==========================================
// VITE DEV SERVER MIDDLEWARE & PRODUKSI
// ==========================================
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    // Inject Vite middleware to transparently transpile frontend assets on demand
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve production static assets from 'dist'
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[FULL-STACK PORTAL] Server running on http://localhost:${PORT}`);
  });
}

startServer();

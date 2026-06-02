import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Sparkles,
  Play,
  CheckCircle,
  HelpCircle,
  BrainCircuit,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { StudentInfo } from '../types';

interface TugasProps {
  studentInfo: StudentInfo;
}

export default function Tugas({ studentInfo }: TugasProps) {
  const [interest, setInterest] = useState('Gaming');
  const [difficulty, setDifficulty] = useState('sedang');
  const [loading, setLoading] = useState(false);
  
  // States of generated task
  const [taskQuestion, setTaskQuestion] = useState<string | null>(null);
  
  // Answer submission states
  const [studentAnswer, setStudentAnswer] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationFeedback, setEvaluationFeedback] = useState<string | null>(null);

  // Calls server-side route `/api/tasks/generate`
  const handleGenerateTask = async () => {
    setLoading(true);
    setTaskQuestion(null);
    setStudentAnswer('');
    setEvaluationFeedback(null);

    const payload = {
      nama: studentInfo.nama || 'Siswa Berbakat',
      minat: interest,
      kesulitan: difficulty,
    };

    try {
      const response = await fetch('/api/tasks/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      setLoading(false);
      if (data.success) {
        setTaskQuestion(data.question);
      } else {
        setTaskQuestion(`Umpan balik server: Gagal menghasilkan tugas. Pastikan kunci GEMINI_API_KEY telah diisi di halaman Secrets.`);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      setTaskQuestion('Kesalahan Jaringan: Gagal terkoneksi dengan backend server. Pastikan server aktif dan berjalan.');
    }
  };

  // Calls server-side route `/api/tasks/evaluate`
  const handleEvaluateAnswer = async () => {
    if (!studentAnswer.trim()) {
      alert('Silakan tulis jawaban Anda terlebih dahulu sebelum dikoreksi oleh AI!');
      return;
    }
    setIsEvaluating(true);
    setEvaluationFeedback(null);

    const payload = {
      nama: studentInfo.nama || 'Siswa Berbakat',
      question: taskQuestion,
      answer: studentAnswer,
    };

    try {
      const response = await fetch('/api/tasks/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      setIsEvaluating(false);
      if (data.success) {
        setEvaluationFeedback(data.feedback);
      } else {
        setEvaluationFeedback('Gagal mengevaluasi jawaban Anda. Pastikan API key dikonfigurasi dengan benar.');
      }
    } catch (err) {
      console.error(err);
      setIsEvaluating(false);
      setEvaluationFeedback('Kesalahan Jaringan: Tidak bisa terkoneksi dengan server evaluasi AI.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Overview header */}
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
          <span className="p-2 bg-blue-600/10 text-blue-400 rounded-lg">
            <BrainCircuit className="h-6 w-6" />
          </span>
          Penugasan AI Kustom
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Mekanisme canggih generator kecerdasan buatan (Gemini 3.5) untuk membuat tugas matematika kustom yang relevan hobi Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Settings options card (Left 4 cols) */}
        <div className="md:col-span-4 bg-slate-900 border border-slate-850 p-5 rounded-2xl space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-850 pb-2">
            <Sparkles className="h-4.5 w-4.5 text-blue-400" />
            <h4 className="font-bold text-slate-200 text-sm font-sans">Generator Kustom AI</h4>
          </div>

          {/* Interest Selector */}
          <div className="space-y-1.5">
            <label className="block text-xxs font-extrabold text-slate-450 uppercase tracking-wider">
              Minat/Hobi Favorit Anda:
            </label>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded-lg px-3 py-2 text-xs"
            >
              <option value="Gaming">Bermain Video Games</option>
              <option value="Olahraga">Olahraga (Sepakbola/Basket)</option>
              <option value="Musik">Musik & Konser Festival</option>
              <option value="Teknologi">Teknologi & Robotika</option>
              <option value="Kuliner">Masak-Memasak & Kuliner</option>
              <option value="Antariksa">Penjelajahan Antariksa</option>
            </select>
          </div>

          {/* Difficulty levels */}
          <div className="space-y-1.5">
            <label className="block text-xxs font-extrabold text-slate-450 uppercase tracking-wider">
              Tingkat Kesulitan:
            </label>
            <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-850 text-xs">
              {['mudah', 'sedang', 'sulit'].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setDifficulty(diff)}
                  className={`flex-1 py-1.5 rounded-md font-bold capitalize transition duration-150 ${
                    difficulty === diff ? 'bg-blue-600 text-white' : 'text-slate-450 hover:text-slate-300'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerateTask}
            disabled={loading}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center gap-1.5"
          >
            <Play className="h-4 w-4" />
            <span>{loading ? 'AI Sedang Merumuskan...' : 'Buat Soal dengan AI'}</span>
          </button>

          <div className="bg-slate-950/40 p-3 rounded-lg border border-slate-850 text-[10px] leading-relaxed text-slate-400">
            <AlertCircle className="h-4 w-4 text-blue-400 inline-block mr-1 shrink-0 align-text-bottom" />
            AI akan menyusun soal matematika fiksi cerita kontekstual yang berisikan persamaan garis lurus sesuai input Anda.
          </div>
        </div>

        {/* Task Worksheet Panel (Right 8 cols) */}
        <div className="md:col-span-8 space-y-6">
          <div className="bg-slate-900 border border-slate-850 rounded-2xl p-5 sm:p-6 shadow-md min-h-120 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {/* No task state */}
              {!taskQuestion && !loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center p-8 space-y-3 min-h-96"
                >
                  <FileText className="h-10 w-10 text-slate-600 animate-bounce" />
                  <div className="space-y-1">
                    <span className="font-bold text-slate-350 block text-sm">Belum Ada Soal Terbuka</span>
                    <span className="text-xs text-slate-500 block max-w-sm">
                      Silakan sesuaikan minat Anda pada panel sebelah kiri lalu klik "Buat Soal dengan AI" untuk mengaktifkan pembuat soal pintar!
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Loading State */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center p-8 space-y-4 min-h-96"
                >
                  <div className="relative">
                    <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                    <Sparkles className="h-5 w-5 text-yellow-400 absolute top-3.5 left-3.5 animate-pulse" />
                  </div>
                  <div className="space-y-1.5 max-w-sm">
                    <span className="font-bold text-slate-200 block text-sm">Merumuskan Algoritma Matematika...</span>
                    <span className="text-xs text-slate-400 leading-normal block">
                      Gemini model sedang mendesain studi kasus bercerita persamaan garis lurus tentang <strong>{interest}</strong> dengan tingkat kesulitan <strong>{difficulty}</strong>. Silakan tunggu sejenak!
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Task Question Display with Workspace */}
              {taskQuestion && !loading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6 flex-1 flex flex-col justify-between min-h-96"
                >
                  {/* Task Header */}
                  <div className="space-y-4">
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-2 text-xs text-slate-300">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2 font-mono text-[10px] text-blue-400">
                        <span className="font-bold">STUDI KASUS AI KUSTOM</span>
                        <span className="bg-slate-900 px-2 py-0.5 border border-slate-800 rounded uppercase text-[8px] font-bold font-mono">Topik: {interest} • {difficulty}</span>
                      </div>
                      <p className="leading-relaxed whitespace-pre-line text-sm text-slate-200 font-sans">
                        {taskQuestion}
                      </p>
                    </div>

                    {/* Work Space textarea */}
                    <div className="space-y-2">
                      <label className="block text-xxs font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                        Lembar Jawaban Anda (Uraikan Cara Kerja Anda):
                      </label>
                      <textarea
                        value={studentAnswer}
                        onChange={(e) => setStudentAnswer(e.target.value)}
                        placeholder="Tuliskan persamaan linier-nya, langkah hitung gradien m, atau jawaban akhir beserta caranya di sini..."
                        rows={6}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl p-4 text-xs text-slate-300 font-sans outline-none outline-0 leading-relaxed"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-850 flex justify-end">
                    <button
                      onClick={handleEvaluateAnswer}
                      disabled={isEvaluating}
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-bold text-xs rounded-xl transition shadow flex items-center gap-1.5"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>{isEvaluating ? 'AI sedang mengoreksi...' : 'Kirim & Koreksi dengan AI'}</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Evaluation Feedback Panel */}
          <AnimatePresence>
            {evaluationFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="bg-slate-900 border border-slate-850 rounded-2xl p-5 sm:p-6 shadow-md space-y-4"
              >
                <div className="flex items-center gap-2 border-b border-slate-850 pb-2">
                  <MessageSquare className="h-5 w-5 text-emerald-400" />
                  <h4 className="font-bold text-slate-200 text-sm">Analisis Penilaian Korektor Gemini AI</h4>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 text-xs text-slate-300 leading-relaxed font-sans whitespace-pre-line">
                  {evaluationFeedback}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

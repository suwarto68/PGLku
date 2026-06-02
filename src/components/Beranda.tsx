import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smile, Meh, Frown, Sparkles, MoveRight } from 'lucide-react';
import { StudentInfo } from '../types';

interface BerandaProps {
  studentInfo: StudentInfo;
  setStudentInfo: (info: StudentInfo) => void;
  onStartLearning: () => void;
}

type MoodType = 'sedih' | 'netral' | 'senang' | null;

export default function Beranda({ studentInfo, setStudentInfo, onStartLearning }: BerandaProps) {
  const [selectedMood, setSelectedMood] = useState<MoodType>(null);

  // Motivational message array
  const moodMessages = {
    sedih: {
      title: 'Jangan berkecil hati! Matematika ada untuk membantumu.',
      text: 'Belajar Persamaan Garis Lurus mirip dengan mendaki sebuah bukit. Walaupun awalnya terasa berat (gradien mendaki), setiap langkah membawa Anda lebih dekat ke puncak. Mari nikmati prosesnya bersama Pak Suwarto hari ini—kita buat matematika terasa mudah!',
      bgColor: 'bg-indigo-950/40 border-indigo-550/40 text-indigo-200',
      iconColor: 'text-indigo-400',
    },
    netral: {
      title: 'Hari biasa adalah kesempatan prima untuk berkembang!',
      text: 'Mari temukan keseruan baru dalam memahami dunia melalui lensa garis lurus. Kita akan mempelajari bagaimana GPS memandu pengemudi ojek online atau bagaimana menghitung kemiringan jembatan yang kokoh. Siap belajar dengan santai namun bermakna?',
      bgColor: 'bg-slate-800/40 border-slate-700 text-slate-200',
      iconColor: 'text-slate-400',
    },
    senang: {
      title: 'Luar biasa! Pertahankan energi positifmu!',
      text: 'Semangat membara adalah modal paling berharga untuk menguasai ilmu baru! Persamaan garis lurus akan memberi Anda cara berpikir logis yang sangat tajam. Mari salurkan keceriaan ini untuk menaklukan tantangan grafik koordinat dan gradien hari ini!',
      bgColor: 'bg-emerald-950/40 border-emerald-500/45 text-emerald-200',
      iconColor: 'text-emerald-400',
    },
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Welcome Banner Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl"
      >
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <Sparkles className="h-44 w-44 text-blue-500" />
        </div>

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            Selamat Datang di Portal Belajar
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mari Taklukkan Grafis, Meluncur Bersama Garis!
          </h2>

          <p className="text-slate-300 text-base leading-relaxed max-w-3xl">
            Selamat datang di media pembelajaran interaktif matematika tentang{' '}
            <strong>Persamaan Garis Lurus (PGL)</strong>. Melalui modul interaktif ini, kita
            akan mengeksplorasi hubungan unik antara himpunan titik-titik koordinat pada bidang
            Cartesius, konsep kemiringan (gradien) yang menyokong struktur arsitektur miring,
            hingga merumuskan persamaan matematisnya melalui simulator visual yang interaktif.
          </p>

          <p className="text-slate-400 text-sm italic">
            Belajar jadi lebih asyik, aplikatif, dan dibantu oleh kecerdasan buatan (AI) untuk
            latihan tugas mandiri Anda!
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onStartLearning}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-xl transition duration-200 shadow-md shadow-blue-900/30"
            >
              <span>Mulai Petualangan Belajar</span>
              <MoveRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Student Profile Setup */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-slate-900 border border-slate-850 rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
          Identitas Siswa (Untuk Kuis ANBK)
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          Isi nama dan kelas terlebih dahulu agar data pengerjaan kuis Anda otomatis terintegrasi
          pada Nilai Kelas Google Spreadsheet milik guru.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={studentInfo.nama}
              onChange={(e) => setStudentInfo({ ...studentInfo, nama: e.target.value })}
              placeholder="Masukkan nama lengkapmu..."
              className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-sm text-slate-200 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Kelas / Kelompok Belajar
            </label>
            <input
              type="text"
              value={studentInfo.kelas}
              onChange={(e) => setStudentInfo({ ...studentInfo, kelas: e.target.value })}
              placeholder="Contoh: VII-A atau Kelompok 3"
              className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl px-4 py-2.5 text-sm text-slate-200 outline-none transition"
            />
          </div>
        </div>
      </motion.div>

      {/* Mood Selector Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-slate-900 border border-slate-850 rounded-2xl p-6 sm:p-8 text-center space-y-6 shadow-lg relative"
      >
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white tracking-tight">Bagaimana Perasaanmu Saat Ini?</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Beritahu kami mood belajarmu hari ini! Klik salah satu ekspresi di bawah untuk
            mendapatkan suntikan motivasi khusus sebelum memulai.
          </p>
        </div>

        {/* 3 Interactive Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
          {/* Frown */}
          <button
            onClick={() => setSelectedMood('sedih')}
            className={`flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform border ${
              selectedMood === 'sedih'
                ? 'bg-blue-600/20 border-blue-500 text-blue-400 -translate-y-1 scale-102 shadow-lg shadow-blue-900/20'
                : 'bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-300 hover:bg-slate-800 hover:-translate-y-0.5'
            }`}
          >
            <Frown className="h-5 w-5 text-indigo-400" />
            <span>😢 Sedih / Lelah</span>
          </button>

          {/* Neutral */}
          <button
            onClick={() => setSelectedMood('netral')}
            className={`flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform border ${
              selectedMood === 'netral'
                ? 'bg-slate-700/30 border-slate-500 text-slate-300 -translate-y-1 scale-102 shadow-lg shadows-slate-900/35'
                : 'bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-300 hover:bg-slate-800 hover:-translate-y-0.5'
            }`}
          >
            <Meh className="h-5 w-5 text-slate-400" />
            <span>😐 Biasa Saja</span>
          </button>

          {/* Happy */}
          <button
            onClick={() => setSelectedMood('senang')}
            className={`flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform border ${
              selectedMood === 'senang'
                ? 'bg-emerald-600/20 border-emerald-500 text-emerald-400 -translate-y-1 scale-102 shadow-lg shadow-emerald-900/20'
                : 'bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-300 hover:bg-slate-800 hover:-translate-y-0.5'
            }`}
          >
            <Smile className="h-5 w-5 text-emerald-400" />
            <span>😊 Senang / Siap</span>
          </button>
        </div>

        {/* Dynamic Motivational Area */}
        <div className="min-h-36 relative">
          <AnimatePresence mode="wait">
            {selectedMood && (
              <motion.div
                key={selectedMood}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`p-5 rounded-xl border text-left space-y-2 text-sm ${moodMessages[selectedMood].bgColor}`}
              >
                <div className="flex items-center gap-2 font-bold mb-1">
                  <Sparkles className={`h-4 w-4 ${moodMessages[selectedMood].iconColor}`} />
                  <span>{moodMessages[selectedMood].title}</span>
                </div>
                <p className="leading-relaxed text-slate-300/90">{moodMessages[selectedMood].text}</p>
              </motion.div>
            )}
            {!selectedMood && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl"
              >
                Silakan pilih satu mood di atas untuk memunculkan pesan motivasi belajarmu hari ini!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

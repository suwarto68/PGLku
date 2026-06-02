import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CheckCircle, Smile, HelpCircle, Heart, Star } from 'lucide-react';
import { ReflectionResponse } from '../types';

export default function Penutup() {
  const [reflection, setReflection] = useState<ReflectionResponse>({
    paham: 'ya',
    reaksi: 'Sangat Seru',
    masukan: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Submit Reflection
  const handleSubmitReflection = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Overview header */}
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
          <span className="p-2 bg-blue-600/10 text-blue-400 rounded-lg">
            <Award className="h-6 w-6" />
          </span>
          Rangkuman & Refleksi Belajar
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Penutup, rangkuman inti pemahaman, beserta penyematan evaluasi performa belajar siswa.
        </p>
      </div>

      {/* Rangkuman Materi Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-slate-900 border border-slate-850 rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg"
      >
        <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <span className="p-1.5 bg-blue-900/40 text-blue-400 rounded-md">
            <CheckCircle className="h-4.5 w-4.5" />
          </span>
          Rangkuman Ringkas Persamaan Garis Lurus
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm leading-relaxed text-slate-350">
          <div className="space-y-3">
            <p>
              🥇 <strong className="text-white">Persamaan Garis Lurus (PGL)</strong> merupakan representasi grafik fisis linier yang berwujud satu garis lurus di bidang datar, dengan pangkat tertinggi variabel bebas dan terikat bernilai 1.
            </p>
            <p>
              🥈 <strong className="text-white">Sistem Koordinat Cartesius</strong> menuangkan kedudukan letak titik absolut <code className="text-blue-400 font-mono font-bold">(x, y)</code> berdasarkan dua poros tegak lurus Sumbu-X (Datar/Absis) dan Sumbu-Y (Tegak/Ordinat) yang berpotongan di 0(0,0).
            </p>
            <p>
              🥉 <strong className="text-white">Gradien (m)</strong> mewakili kecondongan / kemiringan dari garis tersebut. Garis mendaki ke kanan bergradien positif, garis meluncur ke kanan bawah bergradien negatif, garis datar horizontal m = 0, sedangkan vertikal m = tidak terdefinisi.
            </p>
          </div>

          <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-850 text-xs text-slate-450">
            <span className="font-extrabold text-slate-300 block mb-1 font-mono uppercase tracking-widest text-[9px]">Glosarium Rumus Cepat PGL:</span>
            <ul className="space-y-2 font-mono text-[11px] text-slate-300">
              <li className="flex items-center justify-between border-b border-slate-900 pb-1">
                <span>Nilai Gradien (2 titik):</span>
                <span className="text-emerald-400 font-bold">m = (y₂ - y₁) / (x₂ - x₁)</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-900 pb-1">
                <span>Gradien Garis Implisit:</span>
                <span className="text-emerald-400 font-bold">m = -A / B (Ax+By+C=0)</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-900 pb-1">
                <span>PGL Melalui 1 titik:</span>
                <span className="text-blue-450 font-bold">y - y₁ = m(x - x₁)</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-900 pb-1">
                <span>Syarat Garis Sejajar:</span>
                <span className="text-purple-450 font-bold">m₁ = m₂</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Syarat Garis Tegak Lurus:</span>
                <span className="text-purple-450 font-bold">m₁ × m₂ = -1</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Interactive Refleksi Form */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-slate-900 border border-slate-850 rounded-2xl p-6 sm:p-8 shadow-lg"
      >
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-5">
          <Heart className="h-5 w-5 text-rose-500 animate-pulse" />
          <h3 className="text-lg font-bold text-white">Lembar Refleksi Pembelajaran Siswa</h3>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="reflection-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmitReflection}
              className="space-y-4 text-xs font-sans text-slate-300"
            >
              {/* Question 1: Rasa Paham */}
              <div className="space-y-2">
                <label className="block text-slate-300 font-bold">1. Apakah Anda sudah memahami seluruh konsep di media belajar ini?</label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { id: 'ya', label: 'Ya, Sangat Paham!' },
                    { id: 'sebagian', label: 'Paham Sebagian (Perlu latihan)' },
                    { id: 'tidak', label: 'Belum Paham (Perlu bimbingan)' },
                  ].map((option) => (
                    <label key={option.id} className={`flex items-center gap-2 px-3 py-2 border rounded-xl cursor-pointer transition ${
                      reflection.paham === option.id
                        ? 'bg-blue-600/10 border-blue-500 text-blue-300'
                        : 'bg-slate-950 border-slate-850 text-slate-500 hover:text-slate-400'
                    }`}>
                      <input
                        type="radio"
                        name="reflection-paham"
                        checked={reflection.paham === option.id}
                        onChange={() => setReflection({ ...reflection, paham: option.id as any })}
                        className="accent-blue-500 h-4 w-4"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 2: Reaksi Belajar */}
              <div className="space-y-2 pt-2">
                <label className="block text-slate-300 font-bold">2. Bagaimana perasaan belajar Anda menggunakan bantuan modul AI ini?</label>
                <div className="flex flex-wrap gap-3">
                  {['Sangat Seru', 'Cukup Menghibur', 'Biasa Saja', 'Membingungkan'].map((feeling) => (
                    <label key={feeling} className={`flex items-center gap-2 px-3 py-2 border rounded-xl cursor-pointer transition ${
                      reflection.reaksi === feeling
                        ? 'bg-rose-600/10 border-rose-500 text-rose-300'
                        : 'bg-slate-950 border-slate-850 text-slate-500 hover:text-slate-400'
                    }`}>
                      <input
                        type="radio"
                        name="reflection-reaksi"
                        checked={reflection.reaksi === feeling}
                        onChange={() => setReflection({ ...reflection, reaksi: feeling })}
                        className="accent-rose-500 h-4 w-4"
                      />
                      <span>{feeling}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 3: Message feedback */}
              <div className="space-y-2 pt-2">
                <label className="block text-slate-300 font-bold">3. Apakah ada pesan masukan bagi kemajuan portal belajar buatan Pak Suwarto ini?</label>
                <textarea
                  value={reflection.masukan}
                  onChange={(e) => setReflection({ ...reflection, masukan: e.target.value })}
                  placeholder="Tuliskan ide saran Anda di sini..."
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl p-3 text-xs outline-none focus:ring-1 focus:ring-blue-500 text-slate-350 leading-relaxed"
                />
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition shadow flex items-center gap-1.5"
                >
                  <Smile className="h-4 w-4" />
                  <span>Kirim Lembar Refleksi</span>
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="reflection-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-8 space-y-4"
            >
              <div className="w-12 h-12 bg-emerald-950/20 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-400 animate-bounce">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <span className="font-extrabold text-slate-300 text-base block">Terima Kasih atas Refleksi Belajarmu!</span>
                <span className="text-xs text-slate-400 max-w-sm block">
                  Masukan dan respon jujur Anda sangat membantu Pak Suwarto, S.Pd dalam menyempurnakan kualitas media pembelajaran interaktif ini. Selamat atas perjuangan belajarmu hari ini!
                </span>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-1.5 bg-slate-850 hover:bg-slate-850 text-slate-400 hover:text-slate-300 rounded-lg text-xs"
              >
                Tulis Ulang Refleksi
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Embedded teacher Google Form reflection / placeholder */}
      <div className="bg-slate-905 border border-slate-850 rounded-2xl p-6 shadow-lg space-y-4">
        <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-blue-500" />
          Formulir Refleksi Guru Terintegrasi (Google Form)
        </h4>
        <p className="text-xs text-slate-350 leading-relaxed mb-4">
          Sekolah memiliki formulir refleksi resmi yang dapat disematkan (embedded) langsung dalam modul ini.
        </p>

        <div className="bg-slate-950 border border-dashed border-slate-800 p-8 rounded-xl text-center flex flex-col items-center justify-center min-h-48 gap-3">
          <div className="p-2 bg-slate-900 border border-slate-800 text-slate-400 text-xs rounded-xl flex gap-2 max-w-md text-left leading-normal items-start">
            <Star className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
            <span>
              <strong>Petunjuk Guru:</strong> Sematkan Google Form Anda di sini dengan mengedit file <code>src/components/Penutup.tsx</code> dan mempaste kodenya dalam iframe tag, misalnya:<br />
              <code>&lt;iframe src="LINK_GOOGLE_FORM" width="100%" height="500px"&gt;&lt;/iframe&gt;</code>
            </span>
          </div>
          <span className="text-xxs text-slate-500 font-mono">[ Menunggu penyematan Google Form refleksi guru ]</span>
        </div>
      </div>
    </div>
  );
}

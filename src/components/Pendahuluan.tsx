import { motion } from 'motion/react';
import { Target, Lightbulb, Compass, Star, ArrowUpRight } from 'lucide-react';

export default function Pendahuluan() {
  const learningGoals = [
    {
      title: 'Pemahaman Sumbu Koordinat',
      desc: 'Peserta didik mampu mendeskripsikan dan meletakkan posisi titik-titik koordinat pada bidang koordinat Cartesius dengan tepat.',
    },
    {
      title: 'Pemahaman Konsep Persamaan Garis',
      desc: 'Peserta didik mampu mengidentifikasi serta membedakan persamaan linear (persamaan garis lurus) dari berbagai ragam bentuk aljabar.',
    },
    {
      title: 'Keahlian Melukis Grafik',
      desc: 'Peserta didik mampu menyusun tabel koordinat dan menggambar garis lurus pada bidang Cartesius berdasarkan fungsi persamaannya.',
    },
    {
      title: 'Pemahaman Konsep Gradien (m)',
      desc: 'Peserta didik mampu menganalisis kecondongan atau kemiringan garis lurus (kemantapan gradien) dan merumuskannya dalam konteks fisis asli.',
    },
    {
      title: 'Penyelesaian Masalah Nyata',
      desc: 'Peserta didik mampu menyusun rekayasa matematika linier untuk memecahkan kasus ojek online, tarif bensin, penyusutan aset, dan debit kebocoran air.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
          <span className="p-2 bg-blue-600/10 text-blue-400 rounded-lg">
            <Compass className="h-6 w-6" />
          </span>
          Pendahuluan & Apersepsi
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Latar belakang pentingnya menguasai konsep matematika persamaan garis lurus di kehidupan nyata.
        </p>
      </div>

      {/* Apersepsi Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-slate-900 border border-slate-850 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md"
      >
        <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1">
          <Lightbulb className="h-5 w-5 text-amber-400" />
          Apersepsi: Mengapa Kita Harus Belajar Persamaan Garis Lurus?
        </h3>

        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            Pernahkah Anda mencoba memesan layanan ojek online melalui aplikasi gawai? Bagaimana
            bisa aplikasi tersebut langsung mengetahui posisi tepat Anda di depan gerbang sekolah,
            sementara pengemudi ojek online menelusuri rute navigasi terdekat yang paling efisien?
            Semua navigasi canggih tersebut menggunakan konsep <strong>Sistem Koordinat Cartesius</strong> yang
            digabungkan dengan sistem meluncur linier untuk memperkirakan posisi dinamis.
          </p>

          <p>
            Tidak hanya ojek online, coba perhatikan tangga akses darurat sekolah atau jalur landai
            kursi roda (ramp) bagi kaum disabilitas di rumah sakit. Mengapa pembuatannya tidak
            boleh dibuat semrawut dan tegak lurus ke atas? Tentu saja karena ada aturan batasan
            kemiringan aman agar pengguna tidak gampang terjungkal! Dalam ilmu matematika, nilai
            kemiringan lereng atau tangga ini disebut dengan <strong>Gradien (m)</strong>.
          </p>

          <p>
            Dengan mempelajari Persamaan Garis Lurus, kita belajar memodelkan perubahan konstan
            yang terjadi di alam semesta. Mulai dari laju penyusutan nilai laptop impian Anda setiap
            tahunnya, sisa penurunan isi bensin mobil yang melaju teratur, kapasitas baterai handphone
            saat dipakai bermain gim, hingga perhitungan kecepatan jelajah kapal selam terdalam!
          </p>
        </div>

        {/* Feature info callout */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex gap-3 text-xs leading-relaxed text-slate-400">
          <ArrowUpRight className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-300 block mb-0.5">Info Fakta Matematika</span>
            Koordinat Cartesius dirintis oleh René Descartes pada abad ke-17. Ia mendapatkan inspirasi meletakkan posisi suatu lalat yang hinggap di langit-langit kamar menggunakan jarak terhadap dua dinding sudut yang tegak lurus. Penemuan brilian ini mempertemukan cabang ilmu Aljabar dan Geometri!
          </div>
        </div>
      </motion.div>

      {/* Learning Goals (Tujuan Pembelajaran) */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Target className="h-5 w-5 text-emerald-400" />
          Tujuan Pembelajaran (Fase D • Matematika)
        </h3>
        <p className="text-xs text-slate-400">
          Berdasarkan capaian Kurikulum Merdeka Fase D, berikut adalah daftar kompetensi utama yang akan Anda kuasai setelah melahap materi di portal ini:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learningGoals.map((goal, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={index}
              className="bg-slate-900 border border-slate-850 hover:border-slate-800 p-5 rounded-xl space-y-2 transition-all shadow-sm"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <span className="flex items-center justify-center bg-blue-900/40 text-blue-400 w-6 h-6 rounded-full text-xs">
                  {index + 1}
                </span>
                <span>{goal.title}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-8">{goal.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

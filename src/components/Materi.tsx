import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus, BookOpen, AlertCircle, Youtube, Play } from 'lucide-react';

interface AccordionItem {
  id: number;
  title: string;
  content: string | React.ReactNode;
  hasInteractiveGraph?: boolean;
}

export default function Materi() {
  const [openId, setOpenId] = useState<number | null>(1);

  // In-line rendering of dynamic Cartesian graph previews to render under appropriate units
  const renderCartesianSVG = (type: 'points' | 'basicLine' | 'grid' | 'slopePositive' | 'slopeNegative' | 'anotherLine') => {
    return (
      <div className="w-full max-w-sm mx-auto bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-inner flex flex-col items-center gap-1.5 font-mono text-xxs text-slate-400">
        <svg viewBox="0 0 200 200" className="w-48 h-48 sm:w-56 sm:h-56">
          {/* Grid lines */}
          <g stroke="#1e293b" strokeWidth="0.5">
            {Array.from({ length: 9 }).map((_, i) => {
              const pos = 20 + i * 20;
              return (
                <g key={i}>
                  <line x1={pos} y1="0" x2={pos} y2="200" />
                  <line x1="0" y1={pos} x2="200" y2={pos} />
                </g>
              );
            })}
          </g>

          {/* Sumbu X dan Y */}
          <line x1="100" y1="0" x2="100" y2="200" stroke="#f1f5f9" strokeWidth="1.5" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="#f1f5f9" strokeWidth="1.5" />

          {/* Arrow Heads */}
          <polygon points="100,0 96,10 104,10" fill="#f1f5f9" />
          <polygon points="200,100 190,96 190,104" fill="#f1f5f9" />

          {/* Sumbu Labels */}
          <text x="190" y="90" fill="#f1f5f9" className="text-xs font-bold">X</text>
          <text x="110" y="15" fill="#f1f5f9" className="text-xs font-bold">Y</text>
          <text x="88" y="112" fill="#94a3b8" className="text-xxs">0</text>

          {/* Type-Specific Graph Draws */}
          {type === 'points' && (
            <>
              {/* Point A(3, 2) which translates to x = 100 + (3 * 20) = 160, y = 100 - (2 * 20) = 60 */}
              <circle cx="160" cy="60" r="4" fill="#60a5fa" />
              <line x1="160" y1="100" x2="160" y2="60" stroke="#60a5fa" strokeDasharray="2,2" />
              <line x1="100" y1="60" x2="160" y2="60" stroke="#60a5fa" strokeDasharray="2,2" />
              <text x="165" y="55" fill="#60a5fa" className="text-xxs font-bold">A(3, 2) - Kuadran I</text>

              {/* Point B(-2, -3) which translates to x = 100 - (2 * 20) = 60, y = 100 + (3 * 20) = 160 */}
              <circle cx="60" cy="160" r="4" fill="#f43f5e" />
              <line x1="60" y1="100" x2="60" y2="160" stroke="#f43f5e" strokeDasharray="2,2" />
              <line x1="100" y1="160" x2="60" y2="160" stroke="#f43f5e" strokeDasharray="2,2" />
              <text x="15" y="150" fill="#f43f5e" className="text-xxs font-bold">B(-2, -3) - Kuadran III</text>
            </>
          )}

          {type === 'basicLine' && (
            <>
              {/* Line y = 2x => m = 2, passes through (0,0), (-2,-4) -> x=60,y=180, (2, 4) -> x=140,y=20 */}
              <line x1="50" y1="200" x2="150" y2="0" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="100" cy="100" r="3" fill="#f59e0b" />
              <circle cx="120" cy="60" r="3" fill="#60a5fa" />
              <text x="125" y="55" fill="#60a5fa" className="text-sans text-xxs font-bold">(1, 2)</text>
              <text x="135" y="180" fill="#3b82f6" className="text-sans text-xxs font-bold">y = 2x</text>
            </>
          )}

          {type === 'slopePositive' && (
            <>
              {/* Positive Slope m = 1/2 through y = 1/2x + 1. passes through (0,1) -> 100,80, (-2,0) -> 60,100, (2,2) -> 140,60 */}
              <line x1="20" y1="140" x2="180" y2="60" stroke="#10b981" strokeWidth="2.5" />
              {/* Draw Rise / Run illustration */}
              <path d="M 100 80 L 140 80 L 140 60" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" />
              <circle cx="100" cy="80" r="3.5" fill="#f59e0b" />
              <circle cx="140" cy="60" r="3.5" fill="#111827" stroke="#10b981" strokeWidth="2" />
              <text x="110" y="95" fill="#f59e0b" className="text-xxs font-bold">Run = 2 (datar)</text>
              <text x="145" y="75" fill="#f59e0b" className="text-xxs font-bold">Rise = 1 (tegak)</text>
              <text x="40" y="130" fill="#10b981" className="text-xxs font-bold">m = +1/2 (Condong Kanan)</text>
            </>
          )}

          {type === 'slopeNegative' && (
            <>
              {/* Negative Slope m = -1 through y = -x + 2. passes through (0,2) -> 100,60, (2,0) -> 140,100, (-2,4) -> 60,20 */}
              <line x1="50" y1="10" x2="190" y2="150" stroke="#ef4444" strokeWidth="2.5" />
              <path d="M 100 60 L 140 60 L 140 100" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" />
              <circle cx="100" cy="60" r="3.5" fill="#ef4444" />
              <circle cx="140" cy="100" r="3.5" fill="#ef4444" />
              <text x="110" y="52" fill="#f59e0b" className="text-xxs font-bold">Run = 2</text>
              <text x="145" y="80" fill="#f59e0b" className="text-xxs font-bold">Rise = -2</text>
              <text x="35" y="40" fill="#ef4444" className="text-xxs font-bold">m = -1 (Condong Kiri)</text>
            </>
          )}

          {type === 'anotherLine' && (
            <>
              {/* Other form: Ax + By = C. Let's do 3x + 2y = 6 => 2y = -3x + 6 => graph passes through (2,0) -> 140,100 and (0,3) -> 100,40 */}
              <line x1="60" y1="100" x2="160" y2="-50" stroke="#d946ef" strokeWidth="2.5" />
              <circle cx="140" cy="100" r="4" fill="#a855f7" />
              <circle cx="100" cy="40" r="4" fill="#a855f7" />
              <text x="125" y="112" fill="#a855f7" className="text-xxs font-bold">(2, 0) Tipot X</text>
              <text x="105" y="32" fill="#a855f7" className="text-xxs font-bold">(0, 3) Tipot Y</text>
              <text x="25" y="85" fill="#d946ef" className="text-xxs font-bold">3x + 2y = 6</text>
            </>
          )}
        </svg>
        <span className="text-slate-400 text-xxs font-sans font-medium text-center">
          {type === 'points' && 'Garis Sumbu Koordinat Cartesius menunjukkan Kuadran'}
          {type === 'basicLine' && 'Representasi Fungsi Linear Dasar: y = 2x'}
          {type === 'slopePositive' && 'PGL Bergradien Positif (Laju mendaki ke kanan)'}
          {type === 'slopeNegative' && 'PGL Bergradien Negatif (Laju menurun ke bawah)'}
          {type === 'anotherLine' && 'Bentuk Implisit PGL Ax + By = C (Melalui Titik Potong)'}
        </span>
      </div>
    );
  };

  const accordions: AccordionItem[] = [
    {
      id: 1,
      title: '1. Memahami Bentuk Persamaan Linier',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-sm leading-relaxed">
            Persamaan linear adalah sebuah persamaan aljabar di mana setiap sukunya hanya memiliki variabel dengan pangkat (derajat) paling tinggi adalah <strong>1</strong>. Mengapa disebut persamaan linear? Karena jika kita melukiskan persamaan ini di koordinat Cartesius, ia akan membentuk satu garis yang lurus linier (tidak berbelok, melengkung, atau terputus).
          </p>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block font-mono">Bentuk Umum Aljabar:</span>
            <div className="text-center py-2 text-xl font-mono text-blue-400 font-bold bg-slate-900 rounded-lg border border-slate-800">
              y = mx + c
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 pt-1">
              <div>• <strong className="text-slate-300">y & x:</strong> Variabel bebas dan terikat</div>
              <div>• <strong className="text-slate-300">m:</strong> Gradien (Kemiringan)</div>
              <div>• <strong className="text-slate-300">c:</strong> Konstanta (Perpotongan sumbu-Y)</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center bg-slate-950/30 p-4 rounded-xl border border-slate-850">
            <div className="space-y-2 flex-1 text-sm text-slate-300">
              <strong className="text-blue-300 block mb-1 font-bold">Contoh Persamaan Garis Lurus:</strong>
              <ol className="list-decimal list-inside space-y-1 text-xs">
                <li><code className="text-blue-400 bg-slate-950 px-1 py-0.5 rounded font-mono font-bold">y = 3x - 5</code> (Gradien m=3, Konstanta c=-5)</li>
                <li><code className="text-blue-400 bg-slate-950 px-1 py-0.5 rounded font-mono font-bold">2x + y = 8</code> (Bentuk implisit)</li>
                <li><code className="text-blue-400 bg-slate-950 px-1 py-0.5 rounded font-mono font-bold">y = -x</code> (Gradien m=-1, melewati titik pusat (0,0))</li>
              </ol>

              <strong className="text-rose-400 block mt-3 mb-1 font-bold">Bukan Persamaan Garis Lurus:</strong>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li><code className="text-rose-400 bg-slate-950 px-1 py-0.5 rounded font-mono">y = x² + 2</code> (Variabel x berpangkat dua, membentuk parabola melengkung)</li>
                <li><code className="text-rose-400 bg-slate-950 px-1 py-0.5 rounded font-mono">xy = 5</code> (Kedua variabel dikalikan, membentuk hiperbola)</li>
              </ul>
            </div>
            {renderCartesianSVG('basicLine')}
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: '2. Menjelaskan Koordinat Cartesius',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-sm leading-relaxed">
            Sistem Koordinat Cartesius digunakan untuk meletakkan dan mencari letak mutlak suatu titik berdasarkan dua sumbu tegak lurus: <strong>Sumbu-X (Horizontal)</strong> dan <strong>Sumbu-Y (Vertikal)</strong>. Setiap lokasi diwakili oleh pasangan bilangan terurut <code className="text-blue-400 bg-slate-950 px-1 py-0.5 rounded font-mono">(x, y)</code> yang menggambarkan jaraknya dari sumbu-X dan sumbu-Y.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="space-y-4 text-xs">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <span className="font-bold text-slate-200 block mb-1">Empat Daerah Kuadran:</span>
                <ul className="space-y-1.5 text-slate-400">
                  <li>🟢 <strong className="text-slate-300">Kuadran I:</strong> Nilai x (+) dan y (+). Contoh: (3, 2)</li>
                  <li>🟡 <strong className="text-slate-300">Kuadran II:</strong> Nilai x (-) dan y (+). Contoh: (-4, 3)</li>
                  <li>🔴 <strong className="text-slate-300">Kuadran III:</strong> Nilai x (-) dan y (-). Contoh: (-2, -3)</li>
                  <li>🔵 <strong className="text-slate-300">Kuadran IV:</strong> Nilai x (+) dan y (-). Contoh: (5, -4)</li>
                </ul>
              </div>

              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                <span className="font-bold text-slate-200 block mb-1">Cara Menulis & Menemukan Titik:</span>
                <p className="text-slate-400 leading-normal">
                  Sumbu-X dinamakan <strong>Absis</strong>, sedangkan Sumbu-Y disebut <strong>Ordinat</strong>. Titik potong pusat (0,0) disebut koordinat titik asal (origin). Jarak titik P(x, y) terhadap sumbu-X diwakili oleh nilai mutlak ordinat y, sedangkan jarak terhadap sumbu-Y diwakili nilai mutlak absis x.
                </p>
              </div>
            </div>
            {renderCartesianSVG('points')}
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: '3. Menggambar Garis Lurus Pada Koordinat Cartesius',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-sm leading-relaxed">
            Menggambar garis lurus dari sebuah persamaan pada koordinat Cartesius sangat sederhana! Anda sebetulnya hanya perlu mencari <strong>dua buah titik pembantu utama</strong> yang dilewati garis tersebut, lalu menghubungkan keduanya menggunakan penggaris lurus.
          </p>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block font-mono">Langkah-Langkah Menggambar Garis (Contoh: y = 2x - 4):</span>
            <div className="space-y-2 text-sm text-slate-300">
              <p><strong>Langkah 1:</strong> Cari titik potong dengan sumbu-Y (setel nilai <code className="text-blue-400 font-mono">x = 0</code>)</p>
              <div className="pl-4 text-xs font-mono text-slate-400">
                y = 2(0) - 4 &rArr; y = -4. Titik potong pertama adalah <strong className="text-blue-400">(0, -4)</strong>
              </div>

              <p className="pt-2"><strong>Langkah 2:</strong> Cari titik potong dengan sumbu-X (setel nilai <code className="text-blue-400 font-mono">y = 0</code>)</p>
              <div className="pl-4 text-xs font-mono text-slate-400">
                0 = 2x - 4 &rArr; 2x = 4 &rArr; x = 2. Titik potong kedua adalah <strong className="text-blue-400">(2, 0)</strong>
              </div>

              <p className="pt-2"><strong>Langkah 3:</strong> Gambar kedua titik ini di lembar kertas berpetak, lalu gunakan penggaris lurus untuk menarik garis melewati kedua titik tersebut!</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: '4. Memahami Konsep Gradien (Kemiringan)',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-sm leading-relaxed">
            <strong>Gradien (ditulis dengan huruf m)</strong> adalah nilai yang menunjukkan tingkat kemiringan atau kecondongan suatu garis lurus. Konsep ini menjelaskan seberapa cepat variabel y berubah terhadap perubahan variabel x.
          </p>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block font-mono">Rumus Menghitung Gradien (m):</span>
            <div className="text-center py-2 text-lg font-mono text-emerald-450 font-bold bg-slate-900 rounded-lg border border-slate-800">
              m = Perubahan Tegak / Perubahan Datar = (y₂ - y₁) / (x₂ - x₁)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-2">
              <span className="text-xs font-bold text-emerald-400 font-mono block">Gradien Positif (m &gt; 0)</span>
              <p className="text-xs text-slate-400 leading-normal">
                Garis condong miring ke kanan atas. Seiring pertambahan nilai x, nilai y ikut bertambah (laju mendaki bukit). Contoh: y = 2x + 1.
              </p>
              {renderCartesianSVG('slopePositive')}
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-2">
              <span className="text-xs font-bold text-rose-450 font-mono block">Gradien Negatif (m &lt; 0)</span>
              <p className="text-xs text-slate-400 leading-normal">
                Garis condong miring ke kiri atas (atau meluncur ke kanan bawah). Seiring pertambahan nilai x, nilai y justru menurun (laju menuruni bukit). Contoh: y = -x + 2.
              </p>
              {renderCartesianSVG('slopeNegative')}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: '5. Memahami Konsep Bentuk Persamaan Garis Lurus',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-sm leading-relaxed">
            Bagaimana merumuskan persamaan garis lurus baru? Rumus penyusunannya bergantung pada informasi geometri awal apa yang berhasil Anda catat dari lapangan:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase block font-mono">A. Jika diketahui Gradien m & satu titik (x₁, y₁):</span>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800 text-center text-sm font-mono text-slate-200">
                y - y₁ = m(x - x₁)
              </div>
              <p className="text-xxs text-slate-400 leading-relaxed pt-1">
                <strong>Contoh:</strong> Gradien m = 3 melewati titik (2, 5).<br />
                &rArr; y - 5 = 3(x - 2)<br />
                &rArr; y - 5 = 3x - 6 &rArr; y = 3x - 1
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase block font-mono">B. Jika diketahui dua titik lurus (x₁, y₁) & (x₂, y₂):</span>
              <div className="p-2.5 bg-slate-900/80 rounded border border-slate-800 text-center text-sm font-mono text-slate-200">
                (y - y₁) / (y₂ - y₁) = (x - x₁) / (x₂ - x₁)
              </div>
              <p className="text-xxs text-slate-400 leading-relaxed pt-1">
                <strong>Contoh:</strong> Garis melewati titik (1, 2) dan (3, 6).<br />
                &rArr; (y - 2) / (6 - 2) = (x - 1) / (3 - 1)<br />
                &rArr; (y - 2) / 4 = (x - 1) / 2 &rArr; 2(y-2) = 4(x-1) &rArr; y = 2x
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: '6. Menggambarkan Bentuk Lain Persamaan Garis Lurus',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-sm leading-relaxed">
            Persamaan garis lurus tidak selalu disajikan dalam pola rapi <code className="text-blue-400 font-mono">y = mx + c</code> (yang disebut juga <strong>Bentuk Eksplisit</strong>). Adakalanya Anda menjumpai bentuk tertutup di mana seluruh komponen diletakkan pada salah satu suku sebelah kiri, yang dikenal sebagai <strong>Bentuk Implisit</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="space-y-3">
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <span className="text-xs font-semibold text-slate-450 block font-mono uppercase tracking-wider">Persamaan Implisit Alami:</span>
                <div className="text-center font-bold text-base font-mono text-purple-400 bg-slate-900 p-2 rounded border border-slate-800">
                  Ax + By + C = 0
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-2 text-xs text-slate-300">
                <span className="font-bold text-slate-200 block">Menghitung Gradien m dari Ax + By + C = 0:</span>
                <p>Kita dapat merombak persamaan ke bentuk eksplisit:</p>
                <code className="block text-center font-mono text-purple-300 bg-slate-900 py-1 rounded">By = -Ax - C &rArr; y = (-A/B)x - (C/B)</code>
                <p className="text-slate-400">Sehingga, rumus cepat gradien bentuk implisit adalah:</p>
                <div className="text-center font-bold font-mono text-sm py-1.5 bg-purple-950/40 border border-purple-800 rounded">
                  m = -A / B
                </div>
                <p className="text-xxs text-slate-450 leading-normal">
                  <strong>Contoh:</strong> 3x + 2y - 6 = 0 &rArr; A = 3, B = 2.<br />Gradien m = -A/B = -3/2 atau -1,5.
                </p>
              </div>
            </div>
            {renderCartesianSVG('anotherLine')}
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: '7. Menentukan Penyelesaian dari Suatu Persamaan Linier',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-sm leading-relaxed">
            Menentukan penyelesaian dari satu persamaan linear satu variabel atau dua variabel artinya kita mencari <strong>pasangan nilai x dan y</strong> yang membuat persamaan tersebut bernilai BENAR. 
          </p>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-sm text-slate-300 leading-relaxed">
            <p className="font-bold text-blue-400">Jumlah Penyelesaian Tak Terhingga:</p>
            <p className="text-xs text-slate-400">
              Satu persamaan garis lurus tunggal memiliki <strong>tak terhingga penyelesaian</strong> ! Mengapa? Karena di sepanjang garis lurus tersebut, ada titik koordinat yang tak terhingga jumlahnya. Contoh: Untuk y = 2x.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-center font-mono text-xs border border-slate-800 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-slate-300 border-b border-slate-800">
                    <th className="py-2 px-3 border-r border-slate-800">Nilai x</th>
                    <th className="py-2 px-3 border-r border-slate-800">Kerja Rumus (y = 2x)</th>
                    <th className="py-2 px-3 border-r border-slate-800">Nilai y</th>
                    <th className="py-2 px-3">Penyelesaian (x, y)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850 text-slate-400">
                  <tr>
                    <td className="py-2 border-r border-slate-800">-1</td>
                    <td className="py-2 border-r border-slate-800">2 * (-1)</td>
                    <td className="py-2 border-r border-slate-800">-2</td>
                    <td className="py-2 text-blue-400 font-bold">(-1, -2)</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-r border-slate-800">0</td>
                    <td className="py-2 border-r border-slate-800">2 * (0)</td>
                    <td className="py-2 border-r border-slate-800">0</td>
                    <td className="py-2 text-blue-400 font-bold">(0, 0)</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-r border-slate-800">1</td>
                    <td className="py-2 border-r border-slate-800">2 * (1)</td>
                    <td className="py-2 border-r border-slate-800">2</td>
                    <td className="py-2 text-blue-400 font-bold">(1, 2)</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-r border-slate-800">2</td>
                    <td className="py-2 border-r border-slate-800">2 * (2)</td>
                    <td className="py-2 border-r border-slate-800">4</td>
                    <td className="py-2 text-blue-400 font-bold">(2, 4)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xxs text-slate-500 pt-1">
              Catatan: Titik-titik inilah yang jika diletakkan pada bidang Cartesius lalu ditarik lurus dengan penggaris akan membentuk Garis Persamaan y = 2x.
            </p>
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Introduction Header */}
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
          <span className="p-2 bg-blue-600/10 text-blue-400 rounded-lg">
            <BookOpen className="h-6 w-6" />
          </span>
          Materi Inti Pembelajaran
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Simak penjelasan materi menarik di bawah ini, atau klik sub-materi untuk penjelasan tertulis komprehensif.
        </p>
      </div>

      {/* Embedded YouTube Lecture Video */}
      <div className="bg-slate-900 border border-slate-850 p-4 sm:p-5 rounded-2xl shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1 px-2.5 bg-rose-600/10 text-rose-450 border border-rose-900/30 font-bold rounded-lg text-xxs tracking-wider uppercase flex items-center gap-1">
              <Youtube className="h-3 w-3" />
              <span>Video PGL</span>
            </span>
            <h3 className="font-extrabold text-slate-200 text-sm sm:text-base flex items-center gap-2">
              <Play className="h-4 w-4 text-rose-500 fill-rose-500" />
              Menentukan Persamaan Garis Lurus (PGL)
            </h3>
          </div>
          <span className="text-xxs font-mono text-slate-500">Oleh: Guru Pendamping SMP</span>
        </div>

        {/* Responsive Video Container with real YouTube Embed */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/aLdYlnXe-zU"
            title="Video Penjelasan Persamaan Garis Lurus"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="text-xxs sm:text-xs text-slate-400 leading-relaxed font-sans">
          💡 <strong>Tips Belajar:</strong> Klik tombol putar (play) pada video di atas untuk menyimak pemaparan visual mengenai langkah demi langkah menentukan persamaan garis lurus menggunakan rumus praktis. Anda juga bisa melebarkan ukuran video ke layar penuh (Fullscreen) dengan mengklik tombol ikon di pojok kanan bawah bingkai video.
        </div>
      </div>

      {/* Accordions Wrapper */}
      <div className="space-y-3">
        {accordions.map((item) => (
          <div
            key={item.id}
            className="border border-slate-850 rounded-2xl bg-slate-900/80 overflow-hidden shadow-sm"
          >
            {/* Accordion Trigger */}
            <button
              id={`accordion-trigger-${item.id}`}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-850 transition duration-150 group"
            >
              <h4 className="font-bold text-slate-200 group-hover:text-white transition duration-150 text-sm sm:text-base">
                {item.title}
              </h4>
              <motion.span
                animate={{ rotate: openId === item.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400 group-hover:text-slate-200"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </button>

            {/* Accordion Body Panel */}
            <AnimatePresence initial={false}>
              {openId === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-6 pt-2 border-t border-slate-850 bg-slate-950/40">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* General tip bar */}
      <div className="bg-blue-950/20 border border-blue-900/40 rounded-xl p-4 flex gap-3 text-xs leading-relaxed text-blue-300">
        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-blue-400" />
        <div>
          <span className="font-bold block mb-0.5">Petunjuk Belajar Mandiri:</span>
          Bacalah materi di atas satu per satu sebelum masuk ke sub-menu <strong>Eksplorasi</strong> untuk mencoba simulasi meletakkan garis lurus secara visual, serta menu <strong>Kuis AKM</strong> untuk memetakan capaian pemahamanmu!
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, RefreshCw, Layers, Sliders, Play, Info, BookOpen, ArrowRight } from 'lucide-react';

export default function Eksplorasi() {
  // Points configuration: range -5 to +5
  const [ptA, setPtA] = useState({ x: -2, y: -1 });
  const [ptB, setPtB] = useState({ x: 2, y: 2 });

  // Material-based presets configuration
  const materiPresets = [
    {
      name: 'Kuadran Kartesius',
      desc: 'Letak titik A(3, 2) di Kuadran I dan B(-2, -3) di Kuadran III.',
      sub: 'Materi 2',
      a: { x: 3, y: 2 },
      b: { x: -2, y: -3 }
    },
    {
      name: 'Persamaan y = 2x',
      desc: 'PGL dasar melewati titik pusat (0,0) dan koordinat (1,2).',
      sub: 'Materi 1 & 7',
      a: { x: 0, y: 0 },
      b: { x: 1, y: 2 }
    },
    {
      name: 'Gradien Positif',
      desc: 'Uji condong kanan y = 0.5x + 1 melewati titik (0,1) dan (2,2).',
      sub: 'Materi 4',
      a: { x: 0, y: 1 },
      b: { x: 2, y: 2 }
    },
    {
      name: 'Gradien Negatif',
      desc: 'Uji condong kiri y = -x + 2 melewati lereng (0,2) dan (2,0).',
      sub: 'Materi 4',
      a: { x: 0, y: 2 },
      b: { x: 2, y: 0 }
    },
    {
      name: 'Menggambar y = 2x - 4',
      desc: 'Grafik dari titik potong sumbu utama (0,-4) dan (2,0).',
      sub: 'Materi 3',
      a: { x: 0, y: -4 },
      b: { x: 2, y: 0 }
    }
  ];

  const [activePreset, setActivePreset] = useState<number | null>(null);

  const applyPreset = (idx: number) => {
    setPtA(materiPresets[idx].a);
    setPtB(materiPresets[idx].b);
    setActivePreset(idx);
  };

  // Reset to default
  const handleReset = () => {
    setPtA({ x: -2, y: -1 });
    setPtB({ x: 2, y: 2 });
    setActivePreset(null);
  };

  // Convert math units to SVG coordinates
  // Range: -5 to +5. Graph bounds: 0 to 300, center is 150.
  // Each step is 25px.
  const toSvgX = (x: number) => 150 + x * 25;
  const toSvgY = (y: number) => 150 - y * 25; // In SVG, Y goes downwards

  const x1 = ptA.x;
  const y1 = ptA.y;
  const x2 = ptB.x;
  const y2 = ptB.y;

  // Intermediate calculations
  const dy = y2 - y1;
  const dx = x2 - x1;

  // Gradient m
  let mStr = '';
  let mVal = 0;
  let isUndefined = false;
  if (dx === 0) {
    isUndefined = true;
    mStr = '∞ (Tidak Terdefinisi / Vertikal)';
  } else {
    mVal = dy / dx;
    mStr = mVal % 1 === 0 ? String(mVal) : `${dy}/${dx} (${mVal.toFixed(2)})`;
  }

  // Equation formulation: y - y1 = m(x - x1) => y = m(x - x1) + y1 => y = mx - mx1 + y1
  // c = -mx1 + y1
  let equationStr = '';
  if (isUndefined) {
    equationStr = `x = ${x1}`;
  } else {
    const c = -mVal * x1 + y1;
    const mPart = mVal === 0 ? '' : mVal === 1 ? 'x' : mVal === -1 ? '-x' : `${mVal.toFixed(1)}x`;
    const cPart = c === 0 ? '' : c > 0 ? ` + ${c.toFixed(1)}` : ` - ${Math.abs(c).toFixed(1)}`;
    
    if (mPart === '' && cPart === '') {
      equationStr = 'y = 0';
    } else {
      equationStr = `y = ${mPart}${cPart}`.replace('+ -', '- ');
    }
  }

  // Draw infinite line function (returns x1,y1,x2,y2 in SVG coordinates)
  const getInfiniteLineCoords = () => {
    if (isUndefined) {
      return { sx1: toSvgX(x1), sy1: 10, sx2: toSvgX(x1), sy2: 290 };
    }
    // Calculate for bounds x = -6 to +6
    const minX = -6;
    const maxX = 6;
    const minY = mVal * (minX - x1) + y1;
    const maxY = mVal * (maxX - x1) + y1;
    return {
      sx1: toSvgX(minX),
      sy1: toSvgY(minY),
      sx2: toSvgX(maxX),
      sy2: toSvgY(maxY),
    };
  };

  const line = getInfiniteLineCoords();

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
          <span className="p-2 bg-blue-600/10 text-blue-400 rounded-lg">
            <Compass className="h-6 w-6" />
          </span>
          Eksplorasi & Simulasi Interaktif
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Ubah koordinat titik secara langsung untuk melihat pengaruhnya terhadap gradien dan persamaan garis lurus!
        </p>
      </div>

      {/* Main Interactive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Simulator Draw Column */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-850 rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-400 uppercase font-mono flex items-center gap-1.5">
              <Layers className="h-4 w-4 text-blue-500" />
              PGL Coordinate Canvas (2D)
            </span>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-semibold"
            >
              <RefreshCw className="h-3 w-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Sumbu Board */}
          <div className="relative w-full max-w-md aspect-square bg-[#030712] border border-slate-850 rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
            <svg viewBox="0 0 300 300" className="w-full h-full p-2 select-none">
              {/* Minor grid lines */}
              <g stroke="#111827" strokeWidth="0.5">
                {Array.from({ length: 21 }).map((_, i) => {
                  const pos = i * 25;
                  return (
                    <g key={i}>
                      <line x1={pos} y1="0" x2={pos} y2="300" />
                      <line x1="0" y1={pos} x2="300" y2={pos} />
                    </g>
                  );
                })}
              </g>

              {/* Major axes */}
              <line x1="150" y1="0" x2="150" y2="300" stroke="#f1f5f9" strokeWidth="1.5" />
              <line x1="0" y1="150" x2="300" y2="150" stroke="#f1f5f9" strokeWidth="1.5" />

              {/* Arrowheads */}
              <polygon points="150,0 146,8 154,8" fill="#f1f5f9" />
              <polygon points="300,150 292,146 292,154" fill="#f1f5f9" />

              {/* Draw Axis Numbers */}
              {[-5, -4, -3, -2, -1, 1, 2, 3, 4, 5].map((val) => {
                const sx = toSvgX(val);
                const sy = toSvgY(val);
                return (
                  <g key={val} className="text-[8px] fill-slate-500 font-mono">
                    {/* X scale ticks */}
                    <line x1={sx} y1="147" x2={sx} y2="153" stroke="#475569" strokeWidth="1" />
                    <text x={sx - 3} y="162">{val}</text>
                    {/* Y scale ticks */}
                    <line x1="147" y1={sy} x2="153" y2={sy} stroke="#475569" strokeWidth="1" />
                    <text x="135" y={sy + 3}>{val}</text>
                  </g>
                );
              })}

              <text x="288" y="142" fill="#f1f5f9" className="text-[10px] font-bold font-mono">X</text>
              <text x="158" y="12" fill="#f1f5f9" className="text-[10px] font-bold font-mono">Y</text>

              {/* Draw Dynamic Equation Infinite Line */}
              <motion.line
                initial={{ opacity: 0 }}
                animate={{
                  x1: line.sx1,
                  y1: line.sy1,
                  x2: line.sx2,
                  y2: line.sy2,
                  opacity: 1,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                stroke="#3b82f6"
                strokeWidth="2.5"
              />

              {/* Draw Rise / Run Steps Triangle (dashed lines) */}
              {!isUndefined && (
                <motion.path
                  animate={{
                    d: `M ${toSvgX(x1)} ${toSvgY(y1)} L ${toSvgX(x2)} ${toSvgY(y1)} L ${toSvgX(x2)} ${toSvgY(y2)}`,
                  }}
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="1.2"
                  strokeDasharray="3,3"
                />
              )}

              {/* Anchor Point A */}
              <motion.circle
                animate={{ cx: toSvgX(x1), cy: toSvgY(y1) }}
                r="7"
                fill="#3b82f6"
                stroke="#1e3a8a"
                strokeWidth="2"
                className="cursor-pointer"
              />
              <motion.text
                animate={{ x: toSvgX(x1) + 10, y: toSvgY(y1) - 6 }}
                fill="#3b82f6"
                className="text-[10px] font-bold font-mono"
              >
                A({x1}, {y1})
              </motion.text>

              {/* Anchor Point B */}
              <motion.circle
                animate={{ cx: toSvgX(x2), cy: toSvgY(y2) }}
                r="7"
                fill="#10b981"
                stroke="#064e3b"
                strokeWidth="2"
                className="cursor-pointer"
              />
              <motion.text
                animate={{ x: toSvgX(x2) + 10, y: toSvgY(y2) - 6 }}
                fill="#10b981"
                className="text-[10px] font-bold font-mono"
              >
                B({x2}, {y2})
              </motion.text>
            </svg>
          </div>
          <p className="text-xxs text-slate-500 mt-3 font-mono text-center">
            Poin A (<span className="text-blue-400">Biru</span>) & Poin B (<span className="text-emerald-400">Hijau</span>) membentuk jembatan rel linier di atas.
          </p>
        </div>

        {/* Calculation Steps Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Presets Card */}
          <div className="bg-slate-900 border border-slate-850 rounded-2xl p-5 shadow-md space-y-3.5">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-500" />
              Preset Otomatis Berdasarkan Materi
            </h3>
            <p className="text-xs text-slate-450 leading-relaxed font-sans">
              Klik salah satu contoh materi di bawah ini untuk mengisi koordinat secara otomatis sesuai teori atau persamaan pada menu <strong>Materi</strong>:
            </p>
            <div className="space-y-2 pt-1">
              {materiPresets.map((preset, idx) => {
                const isActive = (ptA.x === preset.a.x && ptA.y === preset.a.y && ptB.x === preset.b.x && ptB.y === preset.b.y);
                return (
                  <button
                    key={idx}
                    onClick={() => applyPreset(idx)}
                    className={`w-full text-left p-2.5 px-3 rounded-xl border transition-all flex items-center justify-between gap-3 text-xs font-sans ${
                      isActive
                        ? 'bg-blue-600/10 border-blue-500 text-blue-300 shadow shadow-blue-950/50'
                        : 'bg-slate-950 border-slate-850 text-slate-400 hover:bg-slate-850 hover:text-slate-200'
                    }`}
                  >
                    <div className="space-y-0.5 max-w-[85%]">
                      <div className="flex items-center gap-1.5 font-bold">
                        <span className="bg-blue-950/50 text-blue-400 border border-blue-900/40 px-1.5 py-0.2 rounded font-mono text-[9px] uppercase tracking-wider">{preset.sub}</span>
                        <span className={isActive ? 'text-blue-300' : 'text-slate-200'}>{preset.name}</span>
                      </div>
                      <p className="text-[11px] text-slate-450 leading-snug">{preset.desc}</p>
                    </div>
                    <ArrowRight className={`h-4 w-4 shrink-0 transition ${isActive ? 'text-blue-450 translate-x-1' : 'text-slate-600'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Controllers Card */}
          <div className="bg-slate-900 border border-slate-850 rounded-2xl p-5 shadow-md space-y-5">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sliders className="h-5 w-5 text-blue-500" />
              Kendali Koordinat Titik
            </h3>

            {/* Slider Point A */}
            <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-850">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-blue-400">Titik A (x₁, y₁)</span>
                <span className="font-mono bg-blue-950/40 text-blue-300 px-2.5 py-0.5 rounded border border-blue-900/40">
                  ({x1}, {y1})
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Posisi Horizontal (x₁):</span>
                    <span>{x1}</span>
                  </div>
                  <input
                    type="range"
                    min="-5"
                    max="5"
                    value={x1}
                    onChange={(e) => setPtA({ ...ptA, x: parseInt(e.target.value) })}
                    className="w-full accent-blue-500"
                  />
                </div>
                <div className="pt-2">
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Posisi Vertikal (y₁):</span>
                    <span>{y1}</span>
                  </div>
                  <input
                    type="range"
                    min="-5"
                    max="5"
                    value={y1}
                    onChange={(e) => setPtA({ ...ptA, y: parseInt(e.target.value) })}
                    className="w-full accent-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Slider Point B */}
            <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-850">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-emerald-400">Titik B (x₂, y₂)</span>
                <span className="font-mono bg-emerald-950/40 text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-900/40">
                  ({x2}, {y2})
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Posisi Horizontal (x₂):</span>
                    <span>{x2}</span>
                  </div>
                  <input
                    type="range"
                    min="-5"
                    max="5"
                    value={x2}
                    onChange={(e) => setPtB({ ...ptB, x: parseInt(e.target.value) })}
                    className="w-full accent-emerald-500"
                  />
                </div>
                <div className="pt-2">
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span>Posisi Vertikal (y₂):</span>
                    <span>{y2}</span>
                  </div>
                  <input
                    type="range"
                    min="-5"
                    max="5"
                    value={y2}
                    onChange={(e) => setPtB({ ...ptB, y: parseInt(e.target.value) })}
                    className="w-full accent-emerald-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Math Analysis Results */}
          <div className="bg-slate-900 border border-slate-850 rounded-2xl p-5 shadow-md space-y-4 font-sans text-sm">
            <h3 className="text-base font-bold text-white flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              Analisis Matematika Real-Time
            </h3>

            <div className="space-y-3">
              {/* Perubahan Tegak/Datar */}
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-850 flex items-center justify-between text-xs">
                <span className="text-slate-400">Perubahan Vertikal (&Delta;y):</span>
                <span className="font-mono text-slate-200 font-bold">
                  y₂ - y₁ = {y2} - ({y1}) = <strong className="text-red-400">{dy}</strong>
                </span>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-850 flex items-center justify-between text-xs">
                <span className="text-slate-400">Perubahan Horizontal (&Delta;x):</span>
                <span className="font-mono text-slate-200 font-bold">
                  x₂ - x₁ = {x2} - ({x1}) = <strong className="text-red-400">{dx}</strong>
                </span>
              </div>

              {/* Gradien m */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Gradien Kemiringan (m):</span>
                  <span className="text-xs bg-emerald-950/40 text-emerald-400 px-2 py-0.5 border border-emerald-900/40 rounded font-mono font-bold">m = &Delta;y / &Delta;x</span>
                </div>
                <p className="text-base font-mono text-emerald-400 font-bold text-right pt-1">{mStr}</p>
              </div>

              {/* Line Equation */}
              <div className="bg-gradient-to-r from-blue-950/40 to-slate-950 p-4 rounded-xl border border-blue-900/45 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Hasil Persamaan Garis Lurus:</span>
                  <span className="text-xxs text-blue-400 font-bold font-mono">y - y₁ = m(x - x₁)</span>
                </div>
                <p className="text-lg font-mono text-blue-400 font-bold text-right pt-1">{equationStr}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded 3D / Interactive Simulation area requested by user */}
      <div className="bg-slate-900 border border-slate-850 rounded-2xl p-4 sm:p-6 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-850 pb-3">
          <div className="flex items-center gap-2">
            <Play className="h-5 w-5 text-indigo-400 shrink-0" />
            <h3 className="text-base sm:text-lg font-bold text-white">Laboratorium Virtual Interaktif PhET (Persamaan Garis Lurus)</h3>
          </div>
          <span className="text-xxs font-mono bg-indigo-950/50 text-indigo-400 border border-indigo-900/40 px-2 py-0.5 rounded">
            HTML5 SIMULATION
          </span>
        </div>
        
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          Eksplorasi lebih jauh menggunakan **Laboratorium Simulasi Interaktif PhET** resmi dari University of Colorado di bawah ini. Anda dapat bereksperimen mengubah kemiringan garis (slope), meletakkan titik potong sumbu (intercept), hingga bermain gim tantangan grafik linear secara langsung dan real-time!
        </p>

        {/* Responsive Iframe Container */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#030712] border border-slate-800 shadow-xl min-h-[350px] sm:min-h-[480px]">
          <iframe
            src="https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines_all.html?locale=id"
            width="100%"
            height="100%"
            title="Simulasi Grafik Garis Lurus PhET"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="bg-slate-950 border border-slate-850 px-4 py-3 rounded-lg text-xxs sm:text-xs text-slate-450 flex gap-2 items-start leading-relaxed font-sans">
          <Info className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
          <span>
            <strong>Panduan Singkat Lab virtual:</strong> Gunakan menu tab bawah pada simulasi (Slope / Slope-Intercept / Point-Slope / Game) untuk berpindah jenis praktikum. Gunakan mouse atau ketukan jari Anda untuk memindahkan slider warna merah/biru guna merubah nilai gradien <code className="text-slate-350">m</code> atau titik potong <code className="text-slate-350">c</code>.
          </span>
        </div>
      </div>
    </div>
  );
}

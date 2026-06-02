import { Layers, GraduationCap, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-slate-900 border-b border-slate-800 py-6 px-4 sm:px-8">
      {/* Background coordinate grid decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="headerGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#headerGrid)" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="1.5" />
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between relative z-10 gap-4">
        {/* Title branding */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-blue-400">
            <Layers className="h-5 w-5 animate-pulse" />
            <span className="text-xs font-mono tracking-widest font-semibold uppercase">
              Media Pembelajaran Interaktif
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            PERSAMAAN GARIS LURUS
          </h1>
        </div>

        {/* Level & Teacher details */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-medium">
          <div className="flex items-center gap-2 bg-slate-800 text-slate-200 border border-slate-700 px-3 py-2 rounded-lg">
            <GraduationCap className="h-4 w-4 text-emerald-400" />
            <span>Kelas 7 • Fase D MATEMATIKA</span>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-800 text-slate-200 border border-slate-700 px-3 py-2 rounded-lg">
            <User className="h-4 w-4 text-blue-400" />
            <span>Guru: Suwarto, S.Pd</span>
          </div>
        </div>
      </div>
    </header>
  );
}

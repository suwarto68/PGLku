import { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Beranda from './components/Beranda';
import Pendahuluan from './components/Pendahuluan';
import Materi from './components/Materi';
import Eksplorasi from './components/Eksplorasi';
import Kuis from './components/Kuis';
import Tugas from './components/Tugas';
import Penutup from './components/Penutup';
import { ActiveSection, StudentInfo } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('beranda');
  
  // Persist student information inside client localStorage for convenience
  const [studentInfo, setStudentInfo] = useState<StudentInfo>(() => {
    try {
      const saved = localStorage.getItem('pgl_student_info');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    return { nama: '', kelas: '' };
  });

  useEffect(() => {
    try {
      localStorage.setItem('pgl_student_info', JSON.stringify(studentInfo));
    } catch (e) {
      console.error(e);
    }
  }, [studentInfo]);

  // Navigate directly to the introduction
  const handleStartLearning = () => {
    setActiveSection('pendahuluan');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Visual background atmospheric elements */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>

      {/* Top Header Branding Row */}
      <Header />

      {/* Primary Navigation Hub */}
      <Navbar currentSection={activeSection} onNavigate={setActiveSection} />

      {/* Main Responsive Content Terminal */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {activeSection === 'beranda' && (
          <Beranda
            studentInfo={studentInfo}
            setStudentInfo={setStudentInfo}
            onStartLearning={handleStartLearning}
          />
        )}
        {activeSection === 'pendahuluan' && <Pendahuluan />}
        {activeSection === 'materi' && <Materi />}
        {activeSection === 'eksplorasi' && <Eksplorasi />}
        {activeSection === 'kuis' && (
          <Kuis studentInfo={studentInfo} setStudentInfo={setStudentInfo} />
        )}
        {activeSection === 'tugas' && <Tugas studentInfo={studentInfo} />}
        {activeSection === 'penutup' && <Penutup />}
      </main>

      {/* App Footer */}
      <footer className="bg-slate-900/40 border-t border-slate-900 py-6 text-center text-xxs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-1">
          <p>© 2026 Media Pembelajaran Persamaan Garis Lurus</p>
          <p>Dibuat oleh Suwarto, S.Pd • SMP Negeri Kelas 7 Fase D</p>
        </div>
      </footer>
    </div>
  );
}

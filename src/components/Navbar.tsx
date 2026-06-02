import { useState } from 'react';
import { Menu, X, BookOpen, GraduationCap, Compass, HelpCircle, FileText, Award, Home } from 'lucide-react';
import { ActiveSection } from '../types';

interface NavbarProps {
  currentSection: ActiveSection;
  onNavigate: (section: ActiveSection) => void;
}

export default function Navbar({ currentSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Nav items list
  const navItems = [
    { id: 'beranda' as ActiveSection, label: 'Beranda', icon: Home },
    { id: 'pendahuluan' as ActiveSection, label: 'Pendahuluan', icon: BookOpen },
    { id: 'materi' as ActiveSection, label: 'Materi', icon: GraduationCap },
    { id: 'eksplorasi' as ActiveSection, label: 'Eksplorasi', icon: Compass },
    { id: 'kuis' as ActiveSection, label: 'Kuis AKM', icon: HelpCircle },
    { id: 'tugas' as ActiveSection, label: 'Tugas AI', icon: FileText },
    { id: 'penutup' as ActiveSection, label: 'Penutup', icon: Award },
  ];

  const handleNavClick = (id: ActiveSection) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-850 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <span className="text-sm font-semibold tracking-wider text-slate-300 uppercase">
              Navigasi Belajar
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-desktop-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-900/35'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              id="hamburger-btn"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Buka menu utama</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 border-b border-slate-850' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-mobile-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-left text-base font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

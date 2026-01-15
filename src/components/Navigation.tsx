import { Link, useLocation } from 'react-router-dom';
import { Eye, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/problem', label: 'Problem' },
    { path: '/solution', label: 'Solution' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/impact', label: 'Impact' },
    { path: '/progress', label: 'Progress' },
    { path: '/next-steps', label: 'Next Steps' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Eye className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            <span className="text-xl font-bold text-white">Vantage</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'bg-cyan-500 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:bg-slate-800"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-3 text-sm font-medium border-b border-slate-700 ${
                location.pathname === link.path
                  ? 'bg-cyan-500 text-white'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

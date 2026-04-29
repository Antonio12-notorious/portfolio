import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import { cn } from '../utils/cn';

const navItems = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Projectos', path: '/projectos' },
  { name: 'Contacto', path: '/contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4', 'bg-brand-surface border-b border-border-dim' 
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center text-white group-hover:rotate-6 transition-transform">
            <Terminal size={24} />
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
            Vanildo <span className="text-brand-accent">António</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-medium transition-colors flex items-center gap-3',
                location.pathname === item.path
                  ? 'text-brand'
                  : 'text-text-dim'
              )}
            >
              {location.pathname === item.path ? (
                <motion.div
                  layoutId="active-dot"
                  className="w-1.5 h-1.5 bg-brand-accent rounded-full accent-glow"
                />
              ) : (
                <div className="w-1.5 h-1.5" />
              )}
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-brand-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden text-brand-primary rounded-2xl mt-2 mx-4"
      >
        <div className="py-6 px-8 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-lg font-medium transition-colors flex items-center gap-3 ',
                location.pathname === item.path
                  ? 'text-brand-accent'
                  : 'text-text-dim hover:text-white'
              )}
            >
              {location.pathname === item.path && (
                <motion.div
                  layoutId="active-dot-mobile"
                  className="w-2 h-2 bg-brand-accent rounded-full accent-glow"
                />
              )}
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}

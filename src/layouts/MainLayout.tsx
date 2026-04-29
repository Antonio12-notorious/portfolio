import { ReactNode, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { Linkedin, Github, MessageCircle, Mail, Moon, Sun } from 'lucide-react';
import { cn } from '../utils/cn';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation();
  const [isDark, setIsDark] = useState(true);
  

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/vanildo-antónio-815930196",
      label: "LinkedIn",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/Antonio12-notorious",
      label: "GitHub",
    },
    {
      icon: <MessageCircle size={20} />,
      href: "https://wa.me/258878668672",
      label: "WhatsApp",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:vanildoantonio19@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-surface text-brand-primary transition-colors duration-500">
      <Navbar />

      {/* Theme Toggle Floating */}
      <button
        aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
        onClick={() => setIsDark(!isDark)}
        className="fixed bottom-8 right-8 z-[60] w-14 h-14 glass rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform text-brand-accent group overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ y: 20, rotate: 45 }}
              animate={{ y: 0, rotate: 0 }}
              exit={{ y: -20, rotate: -45 }}
            >
              <Moon size={24} aria-hidden="true" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: 20, rotate: 45 }}
              animate={{ y: 0, rotate: 0 }}
              exit={{ y: -20, rotate: -45 }}
            >
              <Sun size={24} className="text-white" aria-hidden="true" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-16 px-6 border-t border-border-dim bg-card-surface transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <span className="font-display font-bold text-3xl tracking-tighter">
              Vanildo <span className="text-brand-accent">António</span>
            </span>
            <p className="text-sm text-text-dim max-w-xs leading-relaxed">
              Engenharia de Redes e Cibersegurança. Construindo infraestruturas
              resilientes para o amanhã.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center text-text-dim hover:text-brand-accent hover:border-brand-accent/30 transition-all hover:-translate-y-1"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-right flex flex-col gap-2">
            <p className="text-xs text-text-dim uppercase tracking-[2px] font-bold">
              Localização
            </p>
            <p className="text-sm font-medium">Cidade da Beira, Moçambique</p>
            <p className="text-[10px] text-text-dim pt-4">
              © {new Date().getFullYear()} Vanildo António. Desenvolvido com
              Precisão Técnica.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

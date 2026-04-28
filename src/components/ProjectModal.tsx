import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-primary/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-card-surface border border-border-dim rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/5 backdrop-blur-md shadow-lg rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-white"
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto border-r border-border-dim relative group/img">
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover/img:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                <p className="text-white text-sm font-medium">Interessado nesta solução?</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-card-surface">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map(tech => (
                  <span key={tech} className="pill">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl font-display font-bold mb-6 text-brand-primary">{project.title}</h3>
              
              <div className="prose prose-sm text-text-dim mb-8">
                <p className="whitespace-pre-line leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-8 border-t border-border-dim">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-4 bg-brand-primary text-brand-surface rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                  >
                    View Live Demo <ExternalLink size={18} />
                  </a>
                )}
                <Link
                  to="/contacto"
                  onClick={onClose}
                  className="w-full px-6 py-4 bg-brand-accent text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-accent/90 transition-all accent-glow"
                >
                  Solicite um orçamento para mais detalhes
                </Link>
                <Link
                  to="/contacto"
                  onClick={onClose}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-brand-primary"
                >
                  Entrar em contacto directamente
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

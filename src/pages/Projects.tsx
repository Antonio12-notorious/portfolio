import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ArrowUpRight } from 'lucide-react';
import { projects, allTechnologies, Project } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import { cn } from '../utils/cn';
import { getProjectImage } from '../utils/getImage';


export default function Projects() {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesTech = !activeTech || p.technologies.includes(activeTech);
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesTech && matchesSearch;
    });
  }, [activeTech, searchQuery]);

  

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 pb-24">
      {/* Header & Filter */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-display font-bold mb-6">
            Galeria de <span className="text-brand-accent">Inovação.</span>
          </h2>
          <p className="text-lg text-brand-primary/60">
            Explore uma selecção dos meus projectos mais desafiadores,
            abrangendo desde infraestruturas críticas a soluções integradas de
            IoT e segurança.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Search Bar */}
          <div className="relative group w-full md:w-80">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim group-focus-within:text-brand-accent transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Pesquisar projectos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/[0.03] border border-border-dim rounded-xl text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTech(null)}
              className={cn(
                "px-4 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all border cursor-pointer",
                activeTech === null
                  ? "bg-brand-accent text-white border-brand-accent shadow-lg shadow-brand-accent/20"
                  : "bg-transparent border-border-dim text-text-dim hover:text-text-dim",
              )}
            >
              Todos
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveTech(tech)}
                className={cn(
                  "px-4 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all border cursor-pointer",
                  activeTech === tech
                    ? "bg-brand-accent text-white border-brand-accent shadow-lg shadow-brand-accent/20"
                    : "bg-transparent border-border-dim text-text-dim hover:text-text-dim",
                )}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <motion.section
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -5 }}
              className="card group flex flex-col h-full cursor-pointer overflow-hidden p-0"
              onClick={() => handleProjectClick(project)}
            >
              <div className="aspect-[4/3] overflow-hidden relative border-b border-white/5">
                <img
                  src={getProjectImage(project.imageUrl)}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="px-4 py-2 bg-brand-accent text-white font-bold text-xs rounded-full accent-glow">
                    Ver Detalhes ↗
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span key={tech} className="pill py-0">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-dim line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

      {filteredProjects.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-brand-primary/40 text-lg italic">
            Nenhum projecto encontrado para este filtro.
          </p>
        </div>
      )}

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

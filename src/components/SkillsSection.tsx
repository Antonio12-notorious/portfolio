import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section className="px-6 py-24 bg-card-surface/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pill inline-block mb-4"
          >
            Especialidades
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-6"
          >
            Habilidades <span className="text-brand-accent">Técnicas.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-dim max-w-2xl mx-auto"
          >
            Um conjunto de competências versáteis que combinam infraestrutura de TI, cibersegurança e engenharia industrial.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = (LucideIcons as any)[skill.iconName] || LucideIcons.HelpCircle;
            
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:border-brand-accent/30 transition-all p-8 flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
                  <IconComponent className="text-brand-accent" size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">{skill.title}</h3>
                <p className="text-sm text-text-dim leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

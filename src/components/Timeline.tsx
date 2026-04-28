import { motion } from 'motion/react';
import { timelineItems } from '../data/portfolioData';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { cn } from '../utils/cn';

const iconMap: Record<string, any> = {
  certification: <Award className="text-brand-accent" size={18} />,
  experience: <Briefcase className="text-brand-accent" size={18} />,
  education: <GraduationCap className="text-brand-accent" size={18} />,
};

export default function Timeline() {
  return (
    <div className="relative py-12">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border-dim transform md:-translate-x-1/2" />

      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "relative flex flex-col md:flex-row items-center gap-8 md:gap-0",
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            )}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-card-surface border-4 border-brand-accent rounded-full transform -translate-x-1/2 z-10 accent-glow flex items-center justify-center">
               {iconMap[item.category]}
            </div>

            {/* Content Card */}
            <div className={cn(
              "w-full md:w-[45%] pl-12 md:pl-0",
              index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
            )}>
              <div className="card hover:border-brand-accent/40 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
                
                <span className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold mb-3 tracking-widest">
                  {item.year}
                </span>
                <h3 className="text-xl font-display font-bold mb-2 text-brand-primary group-hover:text-brand-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-dim leading-relaxed">
                  {item.description}
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-text-dim opacity-0 group-hover:opacity-100 transition-opacity">
                  Marco Alcançado <div className="w-8 h-px bg-brand-accent" />
                </div>
              </div>
            </div>

            {/* Spacer for reverse layout */}
            <div className="hidden md:block w-[45%]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

export default function TestimonialsSection() {
  return (
    <section className="px-6 py-24 bg-card-surface/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pill inline-block mb-4"
          >
            Social Proof
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-6"
          >
            O que dizem os <span className="text-brand-accent">Parceiros.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-dim max-w-2xl mx-auto"
          >
            Feedback de quem acompanhou de perto a implementação de soluções de engenharia e TI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="card relative flex flex-col justify-between group h-full border border-border-dim hover:border-brand-accent/40 transition-all duration-500"
            >
              <div className="absolute top-6 right-8 text-brand-accent/20 group-hover:text-brand-accent/40 transition-colors">
                <Quote size={48} />
              </div>

              <div className="relative z-10">
                <p className="text-lg text-brand-primary leading-relaxed mb-12 italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-border-dim">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-border-dim group-hover:border-brand-accent"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-brand-primary">{testimonial.name}</h4>
                  <p className="text-xs text-text-dim uppercase tracking-wider">
                    {testimonial.role} • <span className="text-brand-accent/70">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

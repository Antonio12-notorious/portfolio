import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { socialLinks, contactInfo } from '../data/portfolioData';
import profileImg from '../assets/images/profile.webp';

const iconMap: Record<string, any> = {
  Linkedin: <Linkedin size={20} />,
  Github: <Github size={20} />,
  Twitter: <Twitter size={20} />,
  Instagram: <Instagram size={20} />,
};

export default function ProfileSection() {
  return (
    <section className="px-6 py-24 bg-brand-surface relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-brand-accent)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative inline-block mb-12"
        >
          {/* Main Photo Container */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-1.5 border-2 border-brand-accent/30 bg-gradient-to-tr from-brand-accent/20 to-transparent shadow-2xl relative z-10">
            <div className="w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-card-surface border border-brand-primary/5">
              <img
                src={profileImg}
                alt="Vanildo da Silva"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          {/* Status Indicator */}
          <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-brand-surface rounded-full accent-glow" />
          
          {/* Decorative Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 border border-dashed border-brand-accent/20 rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 text-brand-primary">
            Vanildo <span className="text-brand-accent">António</span>
          </h2>
          <p className="text-[10px] uppercase tracking-[5px] font-bold text-text-dim mb-8">Engenheiro & Especialista TI</p>
          
          <div className="max-w-2xl mx-auto space-y-6 text-lg text-text-dim leading-relaxed mb-12">
            <p>
              Especialista resiliente focado na interseção entre tecnologia de ponta e processos industriais complexos. 
              Com uma base sólida em redes Cisco e gestão logística, dedico-me a construir soluções que não apenas funcionam, 
              mas transformam a eficiência operacional de negócios estratégicos.
            </p>
          </div>

          {/* Social Links & Contacts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Contacts */}
            <div className="flex flex-col gap-4 text-left p-8 rounded-3xl">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2">Contacto Direto</h3>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 text-text-dim hover:text-brand-accent transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/5 flex items-center justify-center group-hover:bg-brand-accent/20 transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-medium">{contactInfo.email}</span>
              </a>
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-4 text-text-dim hover:text-brand-accent transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/5 flex items-center justify-center group-hover:bg-brand-accent/20 transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-medium">{contactInfo.phone}</span>
              </a>
              <div className="flex items-center gap-4 text-brand-primary group">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/5 flex items-center justify-center text-text-dim">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-medium text-text-dim">{contactInfo.location}</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4 text-left p-8 rounded-3xl">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2">Presença Digital</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-accent/10 transition-all text-text-dim hover:text-brand-primary group"
                  >
                    <div className="text-brand-accent group-hover:scale-110 transition-transform">
                      {iconMap[social.icon]}
                    </div>
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

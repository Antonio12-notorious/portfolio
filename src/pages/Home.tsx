import { motion } from 'motion/react';
import { ArrowRight, Shield, Globe, Cpu, Download, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import TestimonialsSection from '../components/TestimonialsSection';
import SkillsSection from '../components/SkillsSection';
import ProfileSection from '../components/ProfileSection';
import { cvUrl } from '../data/portfolioData';
import profileImg from '../assets/images/profile.webp'

const MotionLink = motion(Link);

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="px-6 pt-12 md:pt-24 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="pill inline-flex items-center gap-2 mb-6 border-brand-accent/50">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent accent-glow animate-pulse" />
              Disponível para novos projectos
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter text-brand-primary">
              Engenharia & <span className="text-brand-accent">Inovação.</span>
            </h1>
            <p className="text-xl text-text-dim max-w-lg mb-10 leading-relaxed text-justify">
              Futuro Engenheiro de Processos Industriais com sólida base em TI e
              Logística. Da criação de websites corporativos à gestão
              operacional de minerais (Lítio e Ferrocromo), o meu foco é a
              excelência técnica e a optimização sistémica.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contacto"
                  className="px-8 py-4 bg-brand-accent text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-accent/90 transition-all accent-glow"
                >
                  Solicitar Consultoria <ArrowRight size={20} />
                </Link>
                <MotionLink
                  to="/sobre"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-brand-primary/5 border border-brand-primary/10 rounded-xl font-bold text-brand-primary hover:bg-brand-accent hover:text-white transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <User
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  Sobre Mim
                </MotionLink>
              </div>

              <div className="pt-2 border-t border-brand-primary/5">
                <motion.a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{
                    scale: 0.95,
                    boxShadow: "0 0 30px rgba(37, 99, 235, 0.3)",
                  }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-brand-accent text-white rounded-2xl font-bold shadow-xl hover:shadow-brand-accent/10 transition-all group overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-brand-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <Download
                    size={22}
                    className="relative z-10 transition-transform group-hover:-translate-y-0.5"
                  />
                  <span className="relative z-10 text-base text-white">
                    Descarregar Curriculum Vitae
                  </span>
                </motion.a>
                <p className="mt-3 text-[10px] text-text-dim uppercase tracking-[3px] font-medium ml-1">
                  Documentação Profissional Atualizada
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-brand-primary/5 p-4">
              <img
                src={profileImg}
                alt="Vanildo da Silva"
                className="w-full h-full object-cover rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white">
                <Shield size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-brand-primary/40 leading-none mb-1">
                  Expertise
                </p>
                <p className="font-bold text-sm">Security First</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white">
                <Globe size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-brand-primary/40 leading-none mb-1">
                  Redes
                </p>
                <p className="font-bold text-sm">Escalabilidade Global</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SkillsSection />

      {/* Services/Core Values */}
      <section className="px-6 py-24 bg-card-surface/50 border-y border-border-dim transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pill inline-block mb-4"
            >
              Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-6"
            >
              Domínio <span className="text-brand-accent">Tecnológico</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-dim max-w-2xl mx-auto"
            >
              Serviços de alto nível em Segurança Cibernética e Redes Cisco,
              focados em proteger e escalar a sua infraestrutura digital.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <Shield className="text-brand-accent scale-110" size={32} />
                ),
                title: "Segurança Cibernética",
                desc: "Proteção de sistemas, redes e dados contra acessos não autorizados, ataques cibernéticos e vulnerabilidades, garantindo confidencialidade, integridade e disponibilidade da informação.",
              },
              {
                icon: (
                  <Globe className="text-brand-accent scale-110" size={32} />
                ),
                title: "Redes",
                desc: "Planeamento, implementação e gestão de infraestruturas de redes seguras e eficientes, assegurando conectividade, disponibilidade e comunicação entre sistemas",
              },
              {
                icon: <Cpu className="text-brand-accent scale-110" size={32} />,
                title: "Cloud Computing",
                desc: "Fornecimento de recursos computacionais através da internet, permitindo escalabilidade, flexibilidade e redução de custos operacionais em infraestruturas e aplicações.",
              },
              {
                icon: <Cpu className="text-brand-accent scale-110" size={32} />,
                title: "Desenvolvimento de Software",
                desc: "Criação de aplicações web, mobile e desktop adaptadas às necessidades do utilizador, com foco em desempenho, usabilidade e inovação",
              },
              {
                icon: <Cpu className="text-brand-accent scale-110" size={32} />,
                title: "Consultoria IT",
                desc: "Prestação de consultoria tecnológica para identificar necessidades, recomendar soluções e alinhar a tecnologia com os objetivos estratégicos da organização",
              },
              {
                icon: <Cpu className="text-brand-accent scale-110" size={32} />,
                title: "Soluções IA",
                desc: "Desenvolvimento de soluções baseadas em inteligência artificial para automatização, previsão, personalização de serviços e melhoria da eficiência operacional",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card flex flex-col gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-brand-primary">
                  {item.title}
                </h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="px-6 py-24 bg-brand-surface transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-primary">
                Metodologia de{" "}
                <span className="text-brand-accent">Alta Precisão.</span>
              </h2>
              <p className="text-lg text-text-dim leading-relaxed">
                Cada rede é única. O meu processo garante que a solução seja
                adaptada às necessidades específicas do seu negócio.
              </p>
            </div>
            <Link
              to="/servicos"
              className="px-6 py-3 border border-border-dim rounded-xl font-bold text-sm text-text-dim hover:text-brand-accent hover:border-brand-accent transition-all uppercase tracking-widest"
            >
              Explorar Frameworks
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Auditoria",
                desc: "Análise exaustiva da infraestrutura actual e identificação de falhas de segurança.",
              },
              {
                step: "02",
                title: "Design",
                desc: "Arquitetura de soluções Cisco personalizadas para escalabilidade e performance.",
              },
              {
                step: "03",
                title: "Implementação",
                desc: "Configuração rigorosa dos equipamentos e migração segura dos serviços.",
              },
              {
                step: "04",
                title: "Otimização",
                desc: "Monitoria contínua e ajustes finos para garantir a resiliência total.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card relative group overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 text-8xl font-display font-black text-brand-accent/5 group-hover:text-brand-accent/10 transition-colors">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-4 text-brand-primary">
                  {item.title}
                </h4>
                <p className="text-sm text-text-dim leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProfileSection />

      <TestimonialsSection />

      {/* Final CTA */}
      <section className="px-6 py-24 bg-card-surface/30 border-t border-border-dim">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-primary">
            Tudo pronto para começar?
          </h2>
          <p className="text-text-dim max-w-xl mx-auto">
            A sua rede é a espinha dorsal do seu negócio. Não deixe a segurança
            para depois.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contacto"
              className="px-8 py-4 bg-brand-accent text-white rounded-xl font-bold accent-glow"
            >
              Solicitar Proposta
            </Link>
            <Link
              to="/projectos"
              className="px-8 py-4 border border-brand-accent hover:bg-brand-accent hover:text-white hover:border-transparent text-brand-primary rounded-xl font-bold"
            >
              Ver Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

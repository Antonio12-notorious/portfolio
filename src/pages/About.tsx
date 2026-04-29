import { motion } from 'motion/react';
import { certifications, timelineItems, cvUrl } from '../data/portfolioData';
import { Shield, Network, Cpu, ClipboardCheck, GraduationCap, Download } from 'lucide-react';
import Timeline from '../components/Timeline';

const iconMap: Record<string, any> = {
  Shield: <Shield className="text-brand-accent" size={24} />,
  Network: <Network className="text-brand-accent" size={24} />,
  Cpu: <Cpu className="text-brand-accent" size={24} />,
  ClipboardCheck: <ClipboardCheck className="text-brand-accent" size={24} />,
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-24 pb-24">
      {/* Intro Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-display font-bold mb-8">
            Simbiose entre{" "}
            <span className="text-brand-accent">Engenharia e TI.</span>
          </h2>
          <div className="space-y-6 text-lg text-text-dim leading-relaxed text-justify">
            <p>
              A minha formação em Engenharia de Processos Industriais
              permitiu-me desenvolver uma visão sistémica sobre a tecnologia. Ao
              longo da minha jornada, as certificações Cisco surgiram como
              ferramentas fundamentais para sustentar ambientes de automação e
              logística crítica.
            </p>
            <p>
              Com experiência consolidada em empresas como NetWare (IT & Web) e
              Beira Networking (Especialista TI), especializei-me no
              desenvolvimento de websites modernos, sistemas corporativos e
              infraestruturas resilientes em todos os níveis.
            </p>
            <p>
              Atualmente, na Terra-Mar Logística, atuo como Agente Operacional,
              gerindo o fluxo de minerais estratégicos como Lítio e Ferrocromo.
              Esta função permite-me integrar tecnologia de ponta diretamente em
              processos SADs e gestão de frotas industriais.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <motion.a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{
                scale: 0.95,
                boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)",
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-accent text-white rounded-xl font-bold shadow-xl hover:shadow-brand-accent/20 hover:-translate-y-1 transition-all active:brightness-110"
            >
              <Download size={20} />
              Descarregar CV (PDF)
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="space-y-12">
          {/* Experience Timeline Mini */}
          <div className="card space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-brand-primary">
              <GraduationCap className="text-brand-accent accent-glow" />
              <span className="text-[11px] uppercase tracking-[3px] text-text-dim mt-1">
               Frameworks
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  whileHover={{ y: -2 }}
                  className="p-4 bg-white/5 rounded-xl border border-border-dim flex items-start gap-4"
                >
                  <div className="p-2 bg-brand-accent/10 rounded-lg">
                    {iconMap[cert.icon] || <Shield size={24} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm leading-tight text-brand-primary">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] text-text-dim uppercase tracking-wider mt-1">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-brand-accent p-12 rounded-[2.5rem] text-white overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110" />
            <h3 className="text-3xl font-display font-bold mb-6  text-white">
              Foco de Atuação
            </h3>
            <ul className="space-y-4 font-medium opacity-80">
              <li className="flex items-start gap-3 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0" />
                <span>Websites & Sistemas Corporativos</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0" />
                <span>Logística Mineral & Processos SADs</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0" />
                <span>Infraestrutura de Redes Industriais</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Minha Jornada Profissional Section */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Minha Jornada{" "}
            <span className="text-brand-accent">Profissional.</span>
          </h2>
          <p className="text-lg text-text-dim">
            Um percurso dedicado à evolução contínua, certificações rigorosas e
            experiência prática em ambientes tecnológicos críticos.
          </p>
        </div>

        <Timeline />
      </section>

      {/* Vantagens Competitivas */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-display font-bold text-brand-primary leading-tight">
              Porquê escolher a minha{" "}
              <span className="text-brand-accent">Consultoria?</span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Conformidade Rigorosa",
                  desc: "Trabalho sob as normas internacionais da Cisco e frameworks de cibersegurança mais recentes.",
                },
                {
                  title: "Abordagem Holística",
                  desc: "Não olho apenas para o hardware, mas para como a rede serve os objetivos de negócio.",
                },
                {
                  title: "Disponibilidade Crítica",
                  desc: "Experiência em ambientes de missão crítica onde cada segundo de uptime conta.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-border-dim hover:border-brand-accent/30 transition-all group"
                >
                  <h4 className="font-bold mb-2 text-brand-primary group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-dim leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full aspect-video md:aspect-square bg-card-surface rounded-[3rem] border border-border-dim p-4 overflow-hidden group">
            <img
              src="https://tnb.studio/storage/blog/quais-sao-as-vantagens-de-uma-consultoria-de-marketing-em-seu-negocio1627403143.jpg"
              alt="Data Center"
              className="w-full h-full object-cover rounded-[2.5rem] opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Storytelling stats */}
      <section className="bg-card-surface rounded-[3rem] p-12 md:p-24 border border-border-dim">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Projectos", value: "10+" },
            { label: "Cisco Certs", value: "03" },
            { label: "Anos Exp.", value: "05" },
            { label: "Performance", value: "100%" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="text-5xl font-display font-bold text-brand-primary mb-2">
                {stat.value}
              </h4>
              <p className="text-[10px] font-bold text-text-dim uppercase tracking-[2px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

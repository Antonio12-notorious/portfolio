import { motion } from 'motion/react';
import { Shield, Globe, Cpu, Server, Lock, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';

const services = [
  {
    icon: <Globe className="text-brand-accent" size={32} />,
    title: 'Infraestrutura de Redes Cisco',
    description: 'Design e implementação de redes locais (LAN) e de longa distância (WAN) utilizando switches e roteadores Cisco de última geração.',
    features: ['Configuração de VLANs', 'Roteamento Estático e Dinâmico', 'Redundância de Gateway (HSRP/GLBP)', 'Otimização de Performance'],
  },
  {
    icon: <Lock className="text-brand-accent" size={32} />,
    title: 'Cibersegurança Corporativa',
    description: 'Proteção de perímetros e sistemas contra ameaças externas e internas através de auditorias e firewalls avançados.',
    features: ['Configuração de Firewalls ASA/Firepower', 'VPNs Site-to-Site e Remote Access', 'Políticas de Controlo de Acesso (ACLs)', 'Resposta a Incidentes'],
  },
  {
    icon: <Cpu className="text-brand-accent" size={32} />,
    title: 'Integração IoT',
    description: 'Conectividade inteligente para sensores e dispositivos industriais, focada em coleta de dados e automação segura.',
    features: ['Gestão de Dispositivos Edge', 'Segurança em Redes IoT', 'Análise de Telemetria', 'Protocolos MQTT/CoAP'],
  },
  {
    icon: <Server className="text-brand-accent" size={32} />,
    title: 'Monitoria e Auditoria',
    description: 'Acompanhamento constante do estado das redes e sistemas para garantir zero tempo de inatividade e conformidade.',
    features: ['Gestão de Logs (Syslog)', 'Monitoria SNMP', 'Auditoria de Segurança Trimestral', 'Relatórios de KPI Técnicos'],
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-24 pb-24">
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-display font-bold mb-8">
          Serviços de <span className="text-brand-accent">Engenharia.</span>
        </h2>
        <p className="text-lg text-text-dim text-justify leading-relaxed">
          Ofereço soluções integradas que cobrem todo o ciclo de vida da infraestrutura tecnológica, 
          desde o planeamento estratégico até à monitoria operacional contínua.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card group flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-brand-accent/10 rounded-2xl group-hover:bg-brand-accent/20 transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-primary">{service.title}</h3>
            </div>
            
            <p className="text-text-dim leading-relaxed">
              {service.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {service.features.map(feature => (
                <li key={feature} className="flex items-center gap-2 text-sm text-text-dim">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm uppercase tracking-[2px] group/btn"
              >
                Solicitar Proposta <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <FAQSection />

      {/* CTA Section */}
      <section className="bg-brand-accent p-12 md:p-24 rounded-[3rem] text-black text-center relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 transition-transform group-hover:scale-110" />
         <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Pronto para elevar a sua segurança?</h2>
         <p className="text-lg font-medium opacity-70 max-w-2xl mx-auto mb-12">
           Seja para uma nova implementação ou para auditoria de sistemas existentes, estou aqui para garantir a resiliência do seu negócio.
         </p>
         <Link
            to="/contacto"
            className="px-12 py-5 bg-black text-white rounded-2xl font-bold inline-flex items-center gap-3 hover:bg-black/90 transition-all shadow-2xl"
         >
           Obter Orçamento Personalizado <ArrowRight size={20} />
         </Link>
      </section>
    </div>
  );
}

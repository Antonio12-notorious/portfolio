
export const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/vanildosilva', icon: 'Linkedin' },
  { name: 'GitHub', url: 'https://github.com/vanildosilva', icon: 'Github' },
  { name: 'Twitter', url: 'https://twitter.com/vanildosilva', icon: 'Twitter' },
  { name: 'Instagram', url: 'https://instagram.com/vanildosilva', icon: 'Instagram' },
  { name: 'Facebook', url: 'https://facebook.com/vanildodasilva', icon: 'Facebook' },
];


export const contactInfo = {
  email: 'vanildoantonio19@gmail.com',
  phone: '+258 878668672',
  location: 'Cidade da Beira, Moçambique',
};

export const cvUrl = '/cv_vanildo.pdf';


export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
}

export interface Skill {
  title: string;
  description: string;
  iconName: string;
}

export const skills: Skill[] = [
  {
    title: 'Cisco CCNA',
    description: 'Design, implementação e gestão de infraestruturas de rede robustas com equipamentos Cisco.',
    iconName: 'Network'
  },
  {
    title: 'Cybersecurity',
    description: 'Proteção de ativos digitais, resposta a incidentes e implementação de políticas de segurança.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Gestão de Projetos',
    description: 'Aplicação de metodologias ágeis e de engenharia para entrega de projetos complexos no prazo.',
    iconName: 'ClipboardList'
  },
  {
    title: 'Hardware & Software',
    description: 'Manutenção preventiva e corretiva de sistemas computacionais e dispositivos industriais.',
    iconName: 'Monitor'
  },
  {
    title: 'Web & App Dev',
    description: 'Criação de soluções digitais modernas, sistemas corporativos e interfaces intuitivas.',
    iconName: 'Code2'
  },
  {
    title: 'Computer Networks',
    description: 'Arquitetura de sistemas de comunicação, roteamento e switching de alto desempenho.',
    iconName: 'Globe'
  },
  {
    title: 'Microsoft 365',
    description: 'Domínio avançado de ferramentas de produtividade e colaboração em nuvem para empresas.',
    iconName: 'Cloud'
  },
  {
    title: 'Apoio Técnico',
    description: 'Suporte de campo e remoto especializado, garantindo a continuidade das operações de TI.',
    iconName: 'Wrench'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Gestão Logística Terra-Mar',
    description: 'Otimização de processos para exportação de minerais (Lítio, Ferrocromo).',
    longDescription: `Desenvolvimento e suporte técnico para a interface de monitoria de carga no terminal Terra-Mar Logística.
    Este projecto foca na rastreabilidade de minerais estratégicos como Lítio, Enxofre e Ferrocromo com alto teor de carbono.
    Integração de hardware industrial e processos SADs para garantir a eficiência operacional.`,
    technologies: ['Logística', 'Processos', 'IT'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    title: 'Infraestrutura Beira Networking',
    description: 'Especialista de TI e Gestão de Redes Corporativas.',
    longDescription: `Actuação como técnico de TI focado no design de infraestrutura e suporte de campo. 
    Gestão de helpdesk, manutenção de hardware e software, e implementação de protocolos de segurança para redes empresariais.`,
    technologies: ['Redes', 'Cisco', 'Hardware', 'Software'],
    imageUrl: 'bneNet.jpg',
  },
  {
    id: '3',
    title: 'WebSite CrysTech Solutions',
    description: 'Desenvolvimento de websites e sistemas internos.',
    longDescription: `Estágio de dois anos focado na criação de websites institucionais e sistemas de gestão de tickets para suporte técnico.
    Focado em interfaces intuitivas e robustez de sistemas corporativos.`,
    technologies: ['Web Design', 'Sistemas', 'JavaScript', 'Frontend'],
    imageUrl: 'CrysTech.png',
    link: 'https://ais-pre-bkzdo7v2yvqdhsyspen6iu-158147275879.europe-west3.run.app',
  },
  {
    id: '4',
    title: 'Engenharia de Processos Industriais',
    description: 'Automação e optimização de sistemas de produção.',
    longDescription: `Projectos académicos e práticos focados na simbiose entre software de gestão e linhas de produção física.
    Aplicação de conceitos de instrumentação e controlo de processos químicos e físicos.`,
    technologies: ['Sistemas', 'Automação', 'IoT', 'FullStack'],
    imageUrl: 'storeit.png',
  },
];

export const certifications: Certification[] = [
  {
    id: 'c1',
    title: 'Cisco IoT',
    issuer: 'Cisco',
    date: '2025',
    icon: 'Network',
  },
  {
    id: 'c2',
    title: 'Monitoria e Avaliação de Projetos',
    issuer: 'Diversos',
    date: '2024',
    icon: 'ClipboardCheck'
  },
  {
    id: 'c3',
    title: 'Cisco CCNA',
    issuer: 'Cisco',
    date: '2024',
    icon: 'Network'
  },
  {
    id: 'c4',
    title: 'Cisco Cybersecurity',
    issuer: 'Cisco',
    date: '2024',
    icon: 'Shield',
  },
  {
    id: 'c5',
    title: 'Cisco Networking Essentials',
    issuer: 'Cisco',
    date: '2019',
    icon: 'Network',
  },
];

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  category: 'certification' | 'experience' | 'education';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Como a Engenharia de Processos Industriais se conecta com a TI?",
    answer: "A Engenharia de Processos foca na optimização e eficiência. Na TI, aplico essa visão sistémica para desenhar redes industriais robustas, automatização de fluxos e gestão de dados operacionais que reduzem desperdícios."
  },
  {
    question: "Você desenvolve apenas websites institucionais?",
    answer: "Não, desenvolvo desde sites institucionais modernos até sistemas corporativos complexos, incluindo painéis de gestão logística, sistemas de tickets de suporte e interfaces de monitoria em tempo real."
  },
  {
    question: "Quais são as vantagens de contratar uma consultoria híbrida?",
    answer: "Ao combinar conhecimentos de TI (Cisco/Cybersecurity) com processos industriais e logística, consigo entregar soluções que não apenas funcionam tecnicamente, mas que estão perfeitamente alinhadas com as operações físicas e metas de produção."
  },
  {
    question: "Como funciona o processo de orçamento para grandes projetos?",
    answer: "O processo começa com uma auditoria técnica das necessidades. Após a análise, apresento uma proposta detalhada com prazos, marcos de entrega e estimativa de custos baseada na complexidade e escala do projeto."
  }
];

export const timelineItems: TimelineItem[] = [
  {
    id: 't1',
    year: '2023 - actual',
    title: 'Agente Operacional - Terra-Mar Logística',
    description: 'Gestão de logística de minerais (Lítio, Ferrocromo, Enxofre, PIG-IRON) e optimização de processos logísticos.',
    category: 'experience',
  },
  {
    id: 't2',
    year: '2018 - 2021',
    title: 'IT & Redes - Beira Networking',
    description: 'Suporte técnico especializado em infraestrutura de TI e gestão de redes, desenvolvimento Web.',
    category: 'experience',
  },
  {
    id: 't3',
    year: '2020',
    title: 'IT Helpdesk & Web Development - NetWare',
    description: 'Estágio de dois anos focado em manutenção de hardware, software e criação de websites corporativos.',
    category: 'experience',
  },

  {
    id: 't4',
    year: '2026',
    title: 'Finalização: Eng. Processos Industriais',
    description: 'Conclusão da formação superior focada na intersecção entre engenharia e tecnologia aplicada.',
    category: 'education',
  },
  {
    id: 't5',
    year: '2019',
    title: 'Certificações Cisco (CCNA/Cyber/IoT/Networking Essentials)',
    description: 'Especialização técnica para suporte à infraestrutura de redes e segurança industrial.',
    category: 'certification',
  },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Éric António',
    role: 'Director Geral',
    company: 'CrysTech Solutions',
    content: 'O Vanildo transformou a nossa forma como exibimos os nossos produtos aos nossos clientes, uma transformação da nossa maneira de nos apresentar ao mercado e aos nossos clientes com a aquisição de um WebSite completo.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUEd0gulGLgZ2Aq5Io7bmQtEqRMZMffmMeA&s'
  },
  {
    id: '2',
    name: 'Armando Paulo',
    role: 'Programador Senior',
    company: 'NetWare',
    content: 'Um profissional dedicado e com uma capacidade de resolução de problemas acima da média. Superou todas as expectativas durante o seu estágio.',
    avatarUrl: 'https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?w=360'
  },
  {
    id: '3',
    name: 'Carlos Mpande',
    role: 'Engenheiro Chefe',
    company: 'Beira Networking Essentials',
    content: 'A precisão com que o Vanildo executa configurações de rede Cisco é notável. Ele entende a criticidade dos ambientes industriais como poucos.',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZzB-c8w7LlaTVY3_rPHQoDOoS-bsdMQilA&s'
  }
];

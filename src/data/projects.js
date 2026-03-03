export const projects = [
  {
    id: 1,
    title: 'DailyTools',
    description: 'Plataforma Full Stack de ferramentas diárias úteis. Desenvolvida com React no frontend e Node.js + Express no backend. Arquitetura organizada com rotas, controllers e serviços. CI/CD configurado com deploy automatizado.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'Render'],
    github: 'https://github.com/abiass/dailytools',
    demo: 'https://dailytoolsproject.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Disparador de WhatsApp MultiConta',
    description: 'Sistema de gerenciamento de contatos e campanhas com suporte para múltiplas contas WhatsApp. Alternância automática de contas para reduzir bloqueios. Interface administrativa com persistência em PostgreSQL.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'WhatsApp API', 'React'],
    github: 'https://github.com/abiass',
    demo: null,
    featured: false,
  },
];

export const skills = {
  frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  backend: ['Node.js', 'Express', 'Python', 'Flask'],
  database: ['PostgreSQL', 'MySQL'],
  other: ['Docker', 'Linux', 'Git/GitHub', 'APIs REST', 'CI/CD', 'JWT', '2FA'],
};

export const experience = [
  {
    title: 'Desenvolvedor Full Stack Júnior',
    company: 'VELOX CONSULTORIA',
    period: '12/2025 – Atual',
    description: 'Desenvolvimento e manutenção de sistemas web corporativos com Python (Flask) e Node.js. Implementação de autenticação segura com JWT e 2FA. Modelagem e otimização de PostgreSQL.',
    highlights: [
      'Implementação de JWT e 2FA',
      'Criação de painel de vendas com controle de usuários',
      'Automação de envio de e-mails via SMTP',
      'Dashboards analíticos com Plotly Dash',
      'Dockerização de aplicações',
    ],
  },
  {
    title: 'Analista de Indicadores e Qualidade',
    company: 'VELOX CONSULTORIA',
    period: '05/2024 – 12/2025',
    description: 'Desenvolvimento de dashboards automatizados para KPIs e otimização de processos internos.',
  },
  {
    title: 'Supervisor Administrativo',
    company: 'VELOX CONSULTORIA',
    period: '06/2022 – 05/2024',
    description: 'Gestão de equipe e melhoria de processos operacionais.',
  },
];

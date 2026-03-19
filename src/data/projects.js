export const projects = [
  {
    id: 1,
    title: 'DailyTools',
    description: 'Plataforma Full Stack de ferramentas diárias úteis. Desenvolvida com React no frontend e Node.js + Express no backend. Arquitetura organizada com rotas, controllers e serviços. CI/CD configurado com deploy automatizado.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'Render'],
    github: 'https://github.com/abiass/dailytools',
    demo: 'https://dailytoolsproject.vercel.app/',
    featured: false,
  },
  {
    id: 2,
    title: 'Disparador de WhatsApp MultiConta',
    description: 'Sistema de gerenciamento de contatos e campanhas com suporte para múltiplas contas WhatsApp. Alternância automática de contas para reduzir bloqueios. Interface administrativa com persistência em PostgreSQL.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Tailwind CSS', 'Docker', 'Linux', 'SFTP'],
    images: [
      '/disparosmais/disparosmais1.jpeg',
      '/disparosmais/disparosmais2.jpeg',
      '/disparosmais/disparosmais3.jpeg',
      '/disparosmais/disparosmais4.jpeg',
      '/disparosmais/disparosmais5.jpeg',
      '/disparosmais/disparosmais6.jpeg',
      '/disparosmais/disparosmais7.jpeg',
      '/disparosmais/disparosmais8.jpeg',
    ],
    github: 'https://github.com/abiass',
    demo: 'https://disparosmais.com.br',
    featured: true,
  },
  {
    id: 3,
    title: 'Acompanhamento de Disparos Flowbiz',
    description: 'Sistema preparado para operar com ~5 milhões de emails/mês, consolidando dados de envio, aberturas e cliques do Flowbiz com leads e acessos do autobot interno. Substituiu planilhas manuais e horas de trabalho, unificando tudo num dashboard responsivo que correlaciona campanha → leads → acessos.',
    stack: ['Python (Flask)', 'REST API', 'PostgreSQL', 'React', 'Flowbiz API'],
    github: 'https://github.com/abiass/Acompanhamento-Disparos-Email',
    demo: null,
    featured: false,
  },
  {
    id: 4,
    title: 'Catálogo de Bases VELOX',
    description: 'Plataforma web para exportação de grandes bases de dados com autenticação JWT, controle de acesso por permissões, painel administrativo e logging de auditoria. Desenvolvida em Flask com front-end em Jinja2/Tailwind CSS; permite downloads segmentados e elimina planilhas manuais.',
    stack: ['Python (Flask)', 'Jinja2', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/abiass/Catalago-Bases',
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

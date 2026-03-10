export const projects = [
  {
    id: 1,
    title: 'DailyTools',
    description: `Plataforma Full Stack de ferramentas diárias úteis.

Problema: usuários perdiam tempo alternando entre várias ferramentas simples (calculadora, conversor, notas) ao iniciar o dia.
Solução: desenvolvi uma aplicação React no frontend e um backend Node.js + Express, com arquitetura limpa (rotas, controllers e serviços) e persistência em PostgreSQL. Implementei CI/CD com deploy automático em Vercel/Render.
Meu papel: full‑stack developer, responsável por toda a stack desde o design até a infraestrutura.
Impacto: reduziu em 40% o tempo gasto pelos usuários em tarefas rotineiras e permitiu fácil adição de novas ferramentas.
`,
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'Render'],
    github: 'https://github.com/abiass/dailytools',
    demo: 'https://dailytoolsproject.vercel.app/',
    featured: false,
  },
  {
    id: 2,
    title: 'Disparador de WhatsApp MultiConta',
    description: `Sistema de gerenciamento de contatos e campanhas com suporte para múltiplas contas WhatsApp.

Problema: empresas tinham seus envios bloqueados ao usar sempre a mesma conta.
Solução: criei uma lógica de alternância automática entre contas e um painel administrativo em React, com backend em Node.js/Express e banco PostgreSQL.
Meu papel: design da arquitetura backend e interface do usuário, além da implementação da alternância de contas.
Impacto: diminuiu os bloqueios em 70% e permitiu escalabilidade de campanhas.
`,
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Tailwind CSS'],
    github: 'https://github.com/abiass',
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: 'Acompanhamento de Disparos Flowbiz',
    description: `Dashboard de acompanhamento de envios por Flowbiz, preparado para ~5 milhões de emails/mês.

Problema: os dados de envio, aberturas e cliques eram dispersos em planilhas manuais.
Solução: integrei a API do Flowbiz com nossos leads e acessos do autobot interno, consolidando tudo em um dashboard responsivo usando Flask/Python no backend e React no frontend.
Meu papel: análise de requisitos, integração com API e criação dos gráficos em React.
Impacto: eliminou horas de trabalho manual e tornou possível correlacionar campanhas com resultados em tempo real.
`,
    stack: ['Python (Flask)', 'REST API', 'PostgreSQL', 'React', 'Flowbiz API'],
    github: 'https://github.com/abiass/Acompanhamento-Disparos-Email',
    demo: null,
    featured: false,
  },
  {
    id: 4,
    title: 'Catálogo de Bases VELOX',
    description: `Plataforma web para exportação de grandes bases de dados com autenticação JWT e controle de acesso.

Problema: o processo de exportação de bases era baseado em planilhas e manualidades, sujeito a erros.
Solução: desenvolvi uma aplicação em Flask com frontend em Jinja2/Tailwind que permite downloads segmentados, painel administrativo e logging de auditoria.
Meu papel: implementação full stack e design do sistema de permissões.
Impacto: reduziu erros de exportação para zero e acelerou processos em 3x.
`,
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



# 🚀 Portfólio Pessoal - Abias Samuel

## ✨ Sobre o Projeto

Seu portfólio pessoal foi criado com as melhores práticas modernas de desenvolvimento web. É um site profissional, responsivo e otimizado para SEO.

### Tecnologias Utilizadas

- **React 19** - Framework UI
- **Vite** - Build tool de alta performance
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Biblioteca de animações
- **React Helmet Async** - Gerenciamento de SEO
- **PostCSS + Autoprefixer** - Processamento de CSS

---

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar.jsx      # Barra de navegação
│   ├── ThemeToggle.jsx # Toggle de tema (dark/light)
│   └── ProjectCard.jsx # Card de projeto
│
├── sections/           # Seções das páginas
│   ├── Hero.jsx        # Seção inicial
│   ├── About.jsx       # Sobre você
│   ├── Stack.jsx       # Stack técnica
│   ├── Projects.jsx    # Projetos destacados
│   ├── Contact.jsx     # Contato
│   └── Footer.jsx      # Rodapé
│
├── hooks/              # Hooks customizados
│   └── useTheme.jsx    # Hook para gerenciar tema
│
├── data/               # Dados estáticos
│   └── projects.js     # Dados de projetos e habilidades
│
├── App.jsx             # Componente principal
├── App.css             # Estilos globais removidos (usando Tailwind)
├── main.jsx            # Entry point
└── index.css           # Tailwind + estilos globais
```

---

## 🎨 Funcionalidades

### ✅ Implementadas

- [x] **Dark Mode/Light Mode** - Tema alternável com persistência localStorage
- [x] **Responsivo** - Mobile First design (Mobile, Tablet, Desktop)
- [x] **Animações Suaves** - Framer Motion na maioria dos elementos
- [x] **SEO Otimizado** - Meta tags, Open Graph, Twitter Card
- [x] **Navegação Suave** - Scroll comportado para seções
- [x] **Formulário de Contato** - Feedback visual (frontend)
- [x] **Performance** - Vite oferece build otimizada

### 🎯 Possibilidades de Expansão

- [ ] Backend para formulário de contato (Node.js + Email)
- [ ] Blog/Articles section
- [ ] Testemunhos de clientes
- [ ] Analytics (Google Analytics, Plausible)
- [ ] CMS integrado (Contentful, Strapi)

---

## 🚀 Como Usar

### 1. Instalação

```bash
npm install
```

### 2. Desenvolvimento

Para rodar em desenvolvimento com hot reload:

```bash
npm run dev
```

Acesse em `http://localhost:5174`

### 3. Build para Produção

```bash
npm run build
```

Gera arquivos otimizados na pasta `dist/`

### 4. Preview da Build

```bash
npm run preview
```

### 5. Lint

```bash
npm run lint
```

---

## 📝 Como Customizar

### Adicionar/Editar Projetos

Edite o arquivo [src/data/projects.js](src/data/projects.js):

```javascript
export const projects = [
  {
    id: 1,
    title: "DailyTools",
    description: "Descrição do projeto...",
    stack: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/...",
    demo: "https://...",
    featured: true, // true para destacar em primeiro lugar
  },
  // ...
];
```

### Editar Stack Técnica

Também em [src/data/projects.js](src/data/projects.js):

```javascript
export const skills = {
  frontend: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Python", "Flask"],
  database: ["PostgreSQL", "MySQL"],
  other: ["Docker", "Linux", "Git/GitHub", "APIs REST"],
};
```

### Cores e Tema

Edite [tailwind.config.js](tailwind.config.js) para customizar cores:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#4f46e5', // Mude a cor primária
    },
  },
}
```

**Cores Atuais:**

- Primary: indigo-600 (#4f46e5)
- Dark Background: zinc-900 (#09090b)
- Light Background: white (#ffffff)

### Editar Informações de Contato

No arquivo [src/sections/Contact.jsx](src/sections/Contact.jsx), atualize os links sociais:

```jsx
<a href="https://linkedin.com/in/seu-perfil" target="_blank">
```

---

## 🌐 Deploy

### Vercel (Recomendado)

1. Push seu código para GitHub
2. Conecte o repositório no [Vercel](https://vercel.com)
3. Configure a branch padrão
4. Deploy automático ao fazer push

Exemplo de URL: `https://seu-dominio.vercel.app`

### Outros Serviços

- **Netlify**: Suporta build automático, arraste e solte a pasta `dist/`
- **GitHub Pages**: Configure no repositório e faça push
- **Render**: Similar ao Vercel

---

## 🔍 SEO

O projeto já está otimizado com:

- ✅ Meta tags dinâmicas
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Card
- ✅ Sitemap friendly
- ✅ Schema.org (estruturado)
- ✅ Mobile-friendly
- ✅ Performance otimizado

Para melhorar mais:

1. **Adicione um sitemap.xml** na pasta `public/`
2. **Robots.txt** na pasta `public/`
3. **Envie para Google Search Console**
4. **Adicione Google Analytics** (opcional)

---

## 🎯 Dicas de Manutenção

### Atualizar Dependências

```bash
npm outdated          # Ver quais estão desatualizadas
npm update            # Atualizar para versões menores
npm install package@latest  # Atualizar para última versão
```

### Performance

1. **Lazy Loading**: Projetos e imagens carregam sob demanda
2. **Code Splitting**: Vite faz automaticamente
3. **CSS Otimizado**: Tailwind PurgeCSS remove CSS não usado

### Acessibilidade

- ✅ Atributos `aria-label` em botões
- ✅ Navegação por teclado (tecla Tab)
- ✅ Contraste adequado de cores
- ✅ Semântica HTML correta

---

## 📚 Recursos Úteis

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Helmet Async](https://github.com/steverob/react-helmet-async)
- [Vite Docs](https://vitejs.dev/)
- [Web Vitals](https://web.dev/vitals/)

---

## 🆘 Troubleshooting

### Erro: "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind não funciona

```bash
# Verifique se o tailwind.config.js está correto
# e se o index.css contém as diretivas @tailwind
```

### Build lento

```bash
npm run build -- --profile  # Analisa o build
```

### Dark mode não funciona

Verifique se `dark` foi adicionado à classe do `<html>` No `useTheme.jsx`

---

## 📱 Checklist Antes de Deploy

- [ ] Atualizou todos os links sociais (LinkedIn, GitHub)?
- [ ] Verificou links de projetos e demos?
- [ ] Testou dark mode?
- [ ] Verificou responsividade em mobile?
- [ ] Testou formulário de contato?
- [ ] Verificou espaçamento e alinhamento?
- [ ] Rodou `npm run build` com sucesso?
- [ ] Testou a build localmente com `npm run preview`?

---

## 📝 Licença

Seu portfólio é totalmente seu! Use, modifique e compartilhe como desejar.

---

**Criado com ❤️ usando React + Tailwind + Framer Motion**

Boa sorte na sua jornada como desenvolvedor fullstack! 🚀

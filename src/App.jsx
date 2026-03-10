import { HelmetProvider, Helmet } from "react-helmet-async";
import { useTheme } from "./hooks/useTheme";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Stack } from "./sections/Stack";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function AppContent() {
  useTheme();

  return (
    <>
      <Helmet>
        <title>Abias Melo - Desenvolvedor Fullstack | React | Node.js</title>
        <meta
          name="description"
          content="Portfólio de Abias Melo, desenvolvedor fullstack especializado em React, Node.js e PostgreSQL. Conheça meus projetos e entre em contato."
        />
        <meta
          name="keywords"
          content="Desenvolvedor Fullstack, React, Node.js, PostgreSQL, Portfólio, Web Developer"
        />
        <meta name="author" content="Abias Melo" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Abias Melo - Desenvolvedor Fullstack"
        />
        <meta
          property="og:description"
          content="Portfólio profissional de um desenvolvedor fullstack com experiência em React, Node.js e PostgreSQL"
        />
        <meta property="og:url" content="https://abias-portfolio.vercel.app" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Abias Melo - Desenvolvedor Fullstack"
        />
        <meta
          name="twitter:description"
          content="Portfólio profissional de desenvolvedor fullstack"
        />
      </Helmet>

      <Navbar />
      <main className="bg-alt">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
        <AppContent />
    </HelmetProvider>
  );
}

import { HelmetProvider, Helmet } from "react-helmet-async";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useTheme } from "./hooks/useTheme";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
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
          content="Portfólio de Abias Melo, desenvolvedor fullstack com React, Next.js, TypeScript, Node.js e PostgreSQL. Sistemas corporativos, integrações com WhatsApp e IA. Conheça meus projetos."
        />
        <meta
          name="keywords"
          content="Desenvolvedor Fullstack, React, Next.js, TypeScript, Node.js, PostgreSQL, Supabase, WhatsApp API, IA, Portfólio"
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
          content="Portfólio profissional de um desenvolvedor fullstack com experiência em React, Next.js, Node.js, PostgreSQL e integrações com IA"
        />
        <meta property="og:url" content="https://abias.vercel.app" />

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
        <Experience />
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
      <SpeedInsights />
    </HelmetProvider>
  );
}

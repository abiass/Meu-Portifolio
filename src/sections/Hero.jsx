import { motion as Motion } from "framer-motion";
import { Button } from "../components/Button";

const EASE = [0.22, 1, 0.36, 1];

/* Linha de texto que sobe de dentro de uma máscara overflow-hidden */
function LineReveal({ children, delay = 0, className = "" }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <Motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </Motion.span>
    </span>
  );
}

function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    >
      {children}
    </Motion.div>
  );
}

const stack = ["React", "Node.js", "PostgreSQL", "Python"];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/abiass" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/abiasmelo" },
  { name: "Email", url: "mailto:abias.melo@hotmail.com" },
];

export function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col bg-paper pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full flex-1 flex flex-col justify-center py-16">
        <LineReveal delay={0.1}>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Desenvolvedor Full-Stack
          </p>
        </LineReveal>

        <h1 className="font-display font-semibold text-ink mt-6 text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.95] tracking-tight">
          <LineReveal delay={0.2}>Abias</LineReveal>
          <LineReveal delay={0.3}>
            <em className="text-accent">Melo</em>
          </LineReveal>
        </h1>

        <FadeIn delay={0.6}>
          <p className="mt-8 max-w-xl text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            Construo sistemas web corporativos de ponta a ponta — backend com
            foco em segurança e performance, interfaces que resolvem o problema
            sem ruído.
          </p>
        </FadeIn>

        <FadeIn delay={0.75} className="mt-10 flex items-center gap-6 flex-wrap">
          <Button onClick={() => scrollToSection("projects")}>
            Ver projetos
          </Button>
          <button
            onClick={() => scrollToSection("contact")}
            className="group font-mono text-sm text-ink hover:text-accent transition-colors"
          >
            Entre em contato{" "}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>
        </FadeIn>
      </div>

      {/* Rodapé do hero: metadados em mono sobre linha fina */}
      <FadeIn delay={0.9}>
        <div className="border-t border-stone-200 dark:border-stone-800">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
            <span>{stack.join(" · ")}</span>
            <span className="hidden md:block">Brasil — Remoto</span>
            <span className="flex gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {social.name} ↗
                </a>
              ))}
            </span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

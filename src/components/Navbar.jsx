import { motion as Motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Sobre", id: "about" },
  { label: "Experiência", id: "experience" },
  { label: "Stack", id: "stack" },
  { label: "Projetos", id: "projects" },
  { label: "Contato", id: "contact" },
];

/* Seção cujo topo cruzou a faixa logo abaixo da navbar */
function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = ["hero", ...navItems.map((i) => i.id)];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-paper border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-display italic text-lg text-ink hover:text-accent transition-colors"
          >
            Abias Melo
          </button>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`relative font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent ${
                    active === item.id
                      ? "text-ink"
                      : "text-stone-500 dark:text-stone-400"
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <Motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-ink hover:text-accent transition-colors"
              aria-label="Abrir menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 bg-paper border-b border-stone-200 dark:border-stone-800 z-40 md:hidden overflow-hidden"
          >
            <nav className="px-6 py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`text-left py-3 font-mono text-sm uppercase tracking-widest hover:text-accent transition-colors border-b border-stone-100 dark:border-stone-900 last:border-0 ${
                    active === item.id ? "text-accent" : "text-stone-600 dark:text-stone-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

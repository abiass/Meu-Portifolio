import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Sobre", id: "about" },
    { label: "Stack", id: "stack" },
    { label: "Projetos", id: "projects" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md z-50 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
          whileHover={{ scale: 1.05 }}
        >
          Abias
        </motion.div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}

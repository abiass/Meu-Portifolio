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
      className="fixed top-0 w-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl z-50 border-b border-zinc-200 dark:border-zinc-800 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-5 flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 tracking-tight"
          whileHover={{ scale: 1.05 }}
        >
          Abias
        </motion.div>

        <div className="flex items-center gap-10">
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group relative text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium pb-2"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}

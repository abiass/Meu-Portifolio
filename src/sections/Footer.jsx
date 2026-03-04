import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 dark:bg-zinc-950 text-zinc-100 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 md:px-6 text-center border-t border-zinc-800 pt-8"
      >
        <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Abias Melo</h3>
        <p className="text-zinc-400 mb-4 text-sm tracking-wide">
          Desenvolvedor Full Stack | React | Node.js | PostgreSQL
        </p>
        <p className="text-zinc-500 text-xs letter-spacing">
          Criado com React, Tailwind e Framer Motion.
        </p>
      </motion.div>
    </footer>
  );
}

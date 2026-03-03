import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 dark:bg-zinc-950 text-zinc-100 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Abias Melo</h3>
        <p className="text-zinc-400 mb-4">
          Desenvolvedor Full Stack | React | Node.js | PostgreSQL
        </p>
        <p className="text-zinc-500 text-sm">
          © {year} Todos os direitos reservados. Criado com React, Tailwind e
          Framer Motion.
        </p>
      </motion.div>
    </footer>
  );
}

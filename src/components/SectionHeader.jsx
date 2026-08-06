import { motion as Motion } from "framer-motion";

/* Cabeçalho padrão de seção: índice + label em mono sobre fio fino,
   título grande em Fraunces. O título vem como children para permitir
   trechos em itálico/acento. */
export function SectionHeader({ number, label, children }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14"
    >
      <div className="flex items-baseline gap-4 border-t border-stone-200 dark:border-stone-800 pt-5 mb-8">
        <span className="font-mono text-xs text-accent">{number}</span>
        <span className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
          {label}
        </span>
      </div>
      <h2 className="font-display font-semibold text-ink text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-3xl">
        {children}
      </h2>
    </Motion.div>
  );
}

import { motion } from "framer-motion";
import { skillsWithIcons } from "../data/skills";

const categoryMeta = {
  frontend: { label: "Front-end", accent: "from-cyan-500 to-blue-500", bg: "bg-cyan-50 dark:bg-cyan-900/10", border: "border-cyan-200 dark:border-cyan-800/40", dot: "bg-cyan-500", number: "01" },
  backend:  { label: "Back-end",  accent: "from-violet-500 to-purple-600", bg: "bg-violet-50 dark:bg-violet-900/10", border: "border-violet-200 dark:border-violet-800/40", dot: "bg-violet-500", number: "02" },
  database: { label: "Banco de Dados", accent: "from-emerald-500 to-teal-600", bg: "bg-emerald-50 dark:bg-emerald-900/10", border: "border-emerald-200 dark:border-emerald-800/40", dot: "bg-emerald-500", number: "03" },
  other:    { label: "Ferramentas",  accent: "from-orange-400 to-pink-500", bg: "bg-orange-50 dark:bg-orange-900/10", border: "border-orange-200 dark:border-orange-800/40", dot: "bg-orange-400", number: "04" },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Stack() {
  return (
    <section id="stack" className="py-28 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-bold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase">
            02 — Stack Técnica
          </span>
          <span className="flex-1 h-px bg-indigo-200 dark:bg-indigo-900 max-w-[80px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-14"
        >
          Tecnologias que{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            uso no dia a dia
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsWithIcons).map(([category, techs], catIdx) => {
            const meta = categoryMeta[category] || categoryMeta.other;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className={`relative rounded-2xl border p-6 ${meta.bg} ${meta.border} hover:shadow-xl transition-all group`}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${meta.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />

                {/* Category header */}
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display font-bold text-zinc-900 dark:text-white text-base">
                    {meta.label}
                  </h3>
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">{meta.number}</span>
                </div>

                {/* Skills list */}
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.07, delayChildren: catIdx * 0.08 }}
                  className="space-y-2.5"
                >
                  {techs.map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <motion.li
                        key={idx}
                        variants={itemVariants}
                        className="flex items-center gap-2.5 group/item"
                      >
                        <div className="w-7 h-7 rounded-lg bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm group-hover/item:shadow flex-shrink-0 transition-shadow">
                          {Icon ? (
                            <Icon size={15} style={{ color: tech.color }} />
                          ) : (
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tech.color }} />
                          )}
                        </div>
                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover/item:text-zinc-900 dark:group-hover/item:text-white transition-colors">
                          {tech.name}
                        </span>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

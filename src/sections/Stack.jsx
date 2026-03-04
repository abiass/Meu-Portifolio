import { motion } from "framer-motion";
import { skillsWithIcons } from "../data/skills";

export function Stack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="stack" className="py-20 bg-alt">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center"
        >
          Stack Técnica
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsWithIcons).map(([category, techs]) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6 h-full hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4 capitalize">
                  {category === "other"
                    ? "Outros"
                    : category === "database"
                      ? "Banco de Dados"
                      : category === "backend"
                        ? "Back-end"
                        : "Front-end"}
                </h3>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="space-y-3"
                >
                  {techs.map((tech, idx) => {
                    const Icon = tech.icon;
                    return (
                      <motion.li
                        key={idx}
                        variants={itemVariants}
                        className="text-zinc-600 dark:text-zinc-400 flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white transition-colors"
                      >
                        {Icon ? (
                          <Icon
                            size={20}
                            style={{ color: tech.color }}
                            className="flex-shrink-0"
                          />
                        ) : (
                          <span
                            className="w-5 h-5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: tech.color }}
                          />
                        )}
                        <span className="text-sm font-medium">{tech.name}</span>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

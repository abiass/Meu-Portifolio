import { motion as Motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { skillsWithIcons } from "../data/skills";

const categoryMeta = {
  frontend: { label: "Front-end", number: "01" },
  backend: { label: "Back-end", number: "02" },
  database: { label: "Banco de dados", number: "03" },
  other: { label: "Ferramentas", number: "04" },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function Stack() {
  return (
    <section id="stack" className="py-24 bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader number="02" label="Stack técnica">
          Tecnologias que uso <em className="text-accent">no dia a dia</em>
        </SectionHeader>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {Object.entries(skillsWithIcons).map(([category, techs], catIdx) => {
            const meta = categoryMeta[category] || categoryMeta.other;
            return (
              <Motion.div
                key={category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ staggerChildren: 0.05, delayChildren: catIdx * 0.08 }}
              >
                <div className="border-t border-stone-300 dark:border-stone-700 pt-4 mb-5 flex items-baseline justify-between">
                  <h3 className="font-display font-semibold text-ink text-lg">
                    {meta.label}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    {meta.number}
                  </span>
                </div>

                <ul className="space-y-2">
                  {techs.map((tech) => (
                    <Motion.li
                      key={tech.name}
                      variants={itemVariants}
                      className="text-sm text-stone-600 dark:text-stone-400"
                    >
                      {tech.name}
                    </Motion.li>
                  ))}
                </ul>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

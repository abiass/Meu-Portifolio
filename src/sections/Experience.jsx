import { motion as Motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { experience } from "../data/projects";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* Linha do tempo: período em mono à esquerda, cargo à direita, fio fino
   entre as linhas. Mesma linguagem do resto do site, sem cards. */
export function Experience() {
  return (
    <section id="experience" className="py-24 bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader number="02" label="Experiência">
          Onde venho <em className="text-accent">construindo</em>
        </SectionHeader>

        <Motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          {experience.map((job) => (
            <Motion.li
              key={`${job.title}-${job.period}`}
              variants={itemVariants}
              className="grid md:grid-cols-[200px_1fr] gap-x-10 gap-y-3 py-8 border-t border-stone-200 dark:border-stone-800 last:border-b"
            >
              <span
                className={`font-mono text-xs uppercase tracking-widest ${
                  job.period.includes("Atual")
                    ? "text-accent"
                    : "text-stone-500 dark:text-stone-400"
                }`}
              >
                {job.period}
              </span>

              <div>
                <h3 className="font-display font-semibold text-xl md:text-2xl text-ink">
                  {job.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-accent mt-1">
                  {job.company}
                </p>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed mt-4 max-w-3xl">
                  {job.description}
                </p>
                {job.highlights && (
                  <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm text-stone-600 dark:text-stone-400"
                      >
                        <span className="mt-[0.6em] w-1 h-1 bg-accent shrink-0" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Motion.li>
          ))}
        </Motion.ol>
      </div>
    </section>
  );
}

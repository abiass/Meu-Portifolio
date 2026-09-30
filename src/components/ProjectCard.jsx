import { motion as Motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ProjectLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono text-xs uppercase tracking-widest text-ink hover:text-accent transition-colors"
    >
      {children} ↗
    </a>
  );
}

/* Links do projeto; sem nenhum link, explica por que não há deploy público */
export function ProjectLinks({ project, demoLabel = "Deploy", className }) {
  const hasLink = project.github || project.demo || project.whatsapp || project.telegram;
  return (
    <div className={className}>
      {project.github && <ProjectLink href={project.github}>GitHub</ProjectLink>}
      {project.demo && <ProjectLink href={project.demo}>{demoLabel}</ProjectLink>}
      {project.whatsapp && <ProjectLink href={project.whatsapp}>WhatsApp</ProjectLink>}
      {project.telegram && <ProjectLink href={project.telegram}>Telegram</ProjectLink>}
      {!hasLink && (
        <span className="font-mono text-xs text-stone-400 dark:text-stone-600">
          Código privado · sistema de uso interno
        </span>
      )}
    </div>
  );
}

/* Entregas principais: marcador quadrado no acento, como na Experiência */
export function Highlights({ items, className = "" }) {
  return (
    <ul className={`grid gap-x-8 gap-y-2.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm text-stone-600 dark:text-stone-400 leading-relaxed"
        >
          <span className="mt-[0.6em] w-1 h-1 bg-accent shrink-0" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProjectCard({ project }) {
  return (
    <Motion.article
      variants={containerVariants}
      className="group border border-stone-200 dark:border-stone-800 bg-paper flex flex-col hover:border-stone-400 dark:hover:border-stone-600 transition-colors"
    >
      {project.cover && (
        <div className="aspect-[16/9] overflow-hidden bg-alt border-b border-stone-200 dark:border-stone-800">
          <img
            src={project.cover}
            alt={`Prévia do site ${project.title}`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        {project.context && (
          <p className="font-mono text-[11px] uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
            {project.context}
          </p>
        )}

        <h3 className="font-display font-semibold text-xl text-ink mb-3">
          {project.title}
        </h3>

        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-5">
          {project.description}
        </p>

        {project.highlights && (
          <Highlights items={project.highlights} className="mb-5" />
        )}

        <p className="font-mono text-xs text-stone-500 dark:text-stone-500 leading-relaxed mb-6">
          {project.stack.join(" · ")}
        </p>

        <ProjectLinks
          project={project}
          className="flex gap-6 mt-auto pt-4 border-t border-stone-100 dark:border-stone-900"
        />
      </div>
    </Motion.article>
  );
}

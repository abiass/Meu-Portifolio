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

export function ProjectCard({ project }) {
  return (
    <Motion.article
      variants={containerVariants}
      className="group border border-stone-200 dark:border-stone-800 bg-paper flex flex-col"
    >
      {project.cover && (
        <div className="aspect-[16/9] overflow-hidden bg-alt border-b border-stone-200 dark:border-stone-800">
          <img
            src={project.cover}
            alt={`Prévia do site ${project.title}`}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-xl text-ink mb-3">
          {project.title}
        </h3>

        <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-5">
          {project.description}
        </p>

        <p className="font-mono text-xs text-stone-500 dark:text-stone-500 leading-relaxed mb-6">
          {project.stack.join(" · ")}
        </p>

        <div className="flex gap-6 mt-auto pt-4 border-t border-stone-100 dark:border-stone-900">
          {project.github && <ProjectLink href={project.github}>GitHub</ProjectLink>}
          {project.demo && <ProjectLink href={project.demo}>Deploy</ProjectLink>}
          {project.whatsapp && <ProjectLink href={project.whatsapp}>WhatsApp</ProjectLink>}
          {project.telegram && <ProjectLink href={project.telegram}>Telegram</ProjectLink>}
          {!project.github && !project.demo && !project.whatsapp && !project.telegram && (
            <span className="font-mono text-xs text-stone-400 dark:text-stone-600">
              Uso interno, sem deploy público
            </span>
          )}
        </div>
      </div>
    </Motion.article>
  );
}

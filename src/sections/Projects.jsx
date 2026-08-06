import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data/projects";

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative w-full min-h-[280px] md:min-h-[520px] bg-alt flex items-center justify-center overflow-hidden">
      <img
        src={images[current]}
        alt={`Screenshot ${current + 1}`}
        className="w-full h-full object-contain"
      />
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-paper/90 text-ink hover:text-accent border border-stone-200 dark:border-stone-800 p-2.5 transition-colors"
        aria-label="Imagem anterior"
      >
        <FaChevronLeft size={12} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-paper/90 text-ink hover:text-accent border border-stone-200 dark:border-stone-800 p-2.5 transition-colors"
        aria-label="Próxima imagem"
      >
        <FaChevronRight size={12} />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === current
                ? "bg-accent"
                : "bg-stone-400/60 hover:bg-stone-400"
            }`}
            aria-label={`Ir para imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  // Cards com prévia do site vão primeiro: como o grid estica os cards de uma
  // mesma linha até a altura do maior, misturar card com capa e sem capa deixa
  // um vazio grande no menor. Agrupados, cada linha fica homogênea.
  const otherProjects = [
    ...projects.filter((p) => !p.featured && p.cover),
    ...projects.filter((p) => !p.featured && !p.cover),
  ];

  return (
    <section id="projects" className="py-24 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader number="03" label="Projetos">
          O que já <em className="text-accent">construí</em>
        </SectionHeader>

        {/* Projetos em destaque */}
        {featuredProjects.map((project, idx) => (
          <Motion.article
            key={project.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 border border-stone-200 dark:border-stone-800 bg-paper"
          >
            {project.images && project.images.length > 0 ? (
              <ImageCarousel images={project.images} />
            ) : (
              project.cover && (
                <div className="w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden bg-alt border-b border-stone-200 dark:border-stone-800">
                  <img
                    src={project.cover}
                    alt={`Prévia do site ${project.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )
            )}

            <div className="p-8 md:p-10">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-mono text-xs text-accent">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
                  Destaque
                </span>
              </div>

              <h3 className="font-display font-semibold text-2xl md:text-3xl text-ink mb-4">
                {project.title}
              </h3>

              <p className="text-stone-600 dark:text-stone-400 leading-relaxed max-w-3xl mb-6">
                {project.description}
              </p>

              <p className="font-mono text-xs text-stone-500 leading-relaxed mb-8">
                {project.stack.join(" · ")}
              </p>

              <div className="flex gap-8 flex-wrap pt-5 border-t border-stone-100 dark:border-stone-900">
                {project.github && (
                  <ProjectLink href={project.github}>GitHub</ProjectLink>
                )}
                {project.demo && (
                  <ProjectLink href={project.demo}>Ver deploy</ProjectLink>
                )}
                {project.whatsapp && (
                  <ProjectLink href={project.whatsapp}>Grupo WhatsApp</ProjectLink>
                )}
                {project.telegram && (
                  <ProjectLink href={project.telegram}>Grupo Telegram</ProjectLink>
                )}
                {!project.demo && !project.whatsapp && !project.telegram && !project.github && (
                  <span className="font-mono text-xs text-stone-400 dark:text-stone-600">
                    Em processo de validação para deploy
                  </span>
                )}
              </div>
            </div>
          </Motion.article>
        ))}

        {/* Demais projetos */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProjectCard, ProjectLinks, Highlights } from "../components/ProjectCard";
import { SectionHeader } from "../components/SectionHeader";
import { projects, projectCategories } from "../data/projects";

function ImageCarousel({ images, title }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div
      className="relative w-full min-h-[280px] md:min-h-[520px] bg-alt flex items-center justify-center overflow-hidden border-b border-stone-200 dark:border-stone-800"
      role="group"
      aria-roledescription="carrossel"
      aria-label={`Telas do projeto ${title}`}
    >
      <img
        src={images[current]}
        alt={`${title}: tela ${current + 1} de ${images.length}`}
        loading="lazy"
        className="w-full h-full object-contain"
      />
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-paper text-ink hover:text-accent border border-stone-200 dark:border-stone-800 p-2.5 transition-colors"
        aria-label="Imagem anterior"
      >
        <FaChevronLeft size={12} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-paper text-ink hover:text-accent border border-stone-200 dark:border-stone-800 p-2.5 transition-colors"
        aria-label="Próxima imagem"
      >
        <FaChevronRight size={12} />
      </button>
      <span className="absolute top-3 right-3 bg-paper border border-stone-200 dark:border-stone-800 px-2 py-1 font-mono text-[11px] text-stone-500 dark:text-stone-400">
        {current + 1}/{images.length}
      </span>
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
            aria-current={i === current}
          />
        ))}
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function FeaturedProject({ project, index }) {
  return (
    <Motion.article
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-12 border border-stone-200 dark:border-stone-800 bg-paper"
    >
      {project.images?.length > 0 ? (
        <ImageCarousel images={project.images} title={project.title} />
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
        <div className="flex items-baseline gap-4 mb-4 flex-wrap">
          <span className="font-mono text-xs text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
            {project.context ?? "Destaque"}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
          <h3 className="font-display font-semibold text-2xl md:text-3xl text-ink">
            {project.title}
          </h3>
          {project.metric && (
            <span className="shrink-0 self-start border border-accent text-accent font-mono text-xs uppercase tracking-widest px-3 py-1.5">
              {project.metric}
            </span>
          )}
        </div>

        <p className="text-stone-600 dark:text-stone-400 leading-relaxed max-w-3xl mb-6">
          {project.description}
        </p>

        {project.highlights && (
          <Highlights items={project.highlights} className="mb-8 max-w-4xl lg:grid-cols-2" />
        )}

        <p className="font-mono text-xs text-stone-500 leading-relaxed mb-8">
          {project.stack.join(" · ")}
        </p>

        <ProjectLinks
          project={project}
          demoLabel="Ver deploy"
          className="flex gap-8 flex-wrap pt-5 border-t border-stone-100 dark:border-stone-900"
        />
      </div>
    </Motion.article>
  );
}

export function Projects() {
  const [category, setCategory] = useState("todos");

  const visible =
    category === "todos"
      ? projects
      : projects.filter((p) => p.category === category);

  const featuredProjects = visible.filter((p) => p.featured);
  // Cards com prévia do site vão primeiro: como o grid estica os cards de uma
  // mesma linha até a altura do maior, misturar card com capa e sem capa deixa
  // um vazio grande no menor. Agrupados, cada linha fica homogênea.
  const otherProjects = [
    ...visible.filter((p) => !p.featured && p.cover),
    ...visible.filter((p) => !p.featured && !p.cover),
  ];

  const filters = [
    { id: "todos", label: "Todos", count: projects.length },
    ...projectCategories.map((c) => ({
      ...c,
      count: projects.filter((p) => p.category === c.id).length,
    })),
  ];

  return (
    <section id="projects" className="py-24 bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader number="04" label="Projetos">
          O que já <em className="text-accent">construí</em>
        </SectionHeader>

        {/* Filtro por categoria: texto em mono, ativo sublinhado no acento */}
        <div
          className="flex flex-wrap gap-x-6 gap-y-3 mb-12 -mt-4"
          role="toolbar"
          aria-label="Filtrar projetos por categoria"
        >
          {filters.map((f) => {
            const active = f.id === category;
            return (
              <button
                key={f.id}
                onClick={() => setCategory(f.id)}
                aria-pressed={active}
                className={`font-mono text-xs uppercase tracking-widest pb-1 border-b-2 transition-colors ${
                  active
                    ? "text-ink border-accent"
                    : "text-stone-500 dark:text-stone-400 border-transparent hover:text-accent"
                }`}
              >
                {f.label}{" "}
                <span className="text-stone-400 dark:text-stone-500">
                  {String(f.count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <Motion.div
            key={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {featuredProjects.map((project, idx) => (
              <FeaturedProject key={project.id} project={project} index={idx} />
            ))}

            {otherProjects.length > 0 && (
              <>
                {featuredProjects.length > 0 && (
                  <p className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-20 mb-6">
                    Outros projetos
                  </p>
                )}
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
              </>
            )}
          </Motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { stackIcons } from "../data/skills";

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative w-full min-h-[280px] md:min-h-[520px] bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center overflow-hidden">
      <img
        src={images[current]}
        alt={`Screenshot ${current + 1}`}
        className="w-full h-full object-contain transition-all duration-300"
      />
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition"
        aria-label="Imagem anterior"
      >
        <FaChevronLeft size={14} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition"
        aria-label="Próxima imagem"
      >
        <FaChevronRight size={14} />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === current ? "bg-indigo-500" : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Ir para imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function TechStack({ techs, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {techs.map((tech, idx) => {
        const Icon = stackIcons[tech];
        return (
          <div
            key={idx}
            className="flex items-center gap-1 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg font-medium text-xs"
            title={tech}
          >
            {Icon && <Icon size={14} />}
            {tech}
          </div>
        );
      })}
    </div>
  );
}

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-alt">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-14 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
        >
          Projetos
        </motion.h2>

        {/* Featured Projects */}
        {featuredProjects.map((featuredProject) => (
          <motion.div
            key={featuredProject.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-14"
          >
            <div className="bg-white dark:bg-zinc-700 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-l-4 border-indigo-600 dark:border-indigo-500">
              {/* Carrossel de imagens — largura total */}
              {featuredProject.images && featuredProject.images.length > 0 && (
                <ImageCarousel images={featuredProject.images} />
              )}
              {/* Conteúdo abaixo */}
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:gap-10">
                  {/* Texto */}
                  <div className="flex-1 mb-6 md:mb-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white text-xs font-bold rounded-full tracking-wide">
                        DESTAQUE
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
                      {featuredProject.title}
                    </h3>
                    <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
                      {featuredProject.description}
                    </p>
                  </div>
                  {/* Stack + Botões */}
                  <div className="md:w-auto shrink-0 flex flex-col gap-5 md:items-end">
                    <TechStack techs={featuredProject.stack} className="md:justify-end" />
                    <div className="flex gap-4 items-center flex-wrap">
                    {featuredProject.github && (
                      <motion.a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-zinc-900 dark:bg-zinc-600 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition-all shadow inline-block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                      </motion.a>
                    )}
                    {featuredProject.demo && (
                      <motion.a
                        href={featuredProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-7 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl inline-block"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Ver Deploy
                      </motion.a>
                    )}
                    {!featuredProject.demo && (
                      <span className="text-zinc-500 dark:text-zinc-400 italic text-sm">
                        Em processo de validação para deploy
                      </span>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-7"
        >
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

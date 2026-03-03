import { motion } from "framer-motion";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { stackIcons } from "../data/skills";

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

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-800">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center"
        >
          Projetos
        </motion.h2>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <div className="bg-white dark:bg-zinc-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-indigo-600 dark:bg-indigo-500 text-white text-xs font-bold rounded-full">
                    EM DESTAQUE
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                  {featuredProject.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6">
                  {featuredProject.description}
                </p>
                <div className="mb-6">
                  <TechStack techs={featuredProject.stack} />
                </div>
                <div className="flex gap-4">
                  {featuredProject.github && (
                    <motion.a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-zinc-900 dark:bg-zinc-600 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors inline-block"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Código
                    </motion.a>
                  )}
                  {featuredProject.demo && (
                    <motion.a
                      href={featuredProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors inline-block"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Acessar Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

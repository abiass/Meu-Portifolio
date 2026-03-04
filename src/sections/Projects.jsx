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

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-alt">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
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
            className="mb-12"
          >
            <div className="bg-white dark:bg-zinc-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-600 dark:border-indigo-500">
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
                <div className="flex gap-4 items-center">
                  {/* GitHub button removed - show validation text instead */}
                  <span className="text-zinc-600 dark:text-zinc-400 italic">
                    Em processo de validação para deploy
                  </span>
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
        ))}

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

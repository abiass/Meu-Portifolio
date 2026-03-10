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
    <section id="projects" className="py-24 bg-alt">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
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
              <div className="p-10 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white text-xs font-bold rounded-full tracking-wide">
                    DESTAQUE
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-5">
                  {featuredProject.title}
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300 text-lg mb-8 leading-relaxed">
                  {featuredProject.description}
                </p>
                <div className="mb-8">
                  <TechStack techs={featuredProject.stack} />
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-zinc-500 dark:text-zinc-400 italic text-sm">
                    Em processo de validação para deploy
                  </span>
                  {featuredProject.demo && (
                    <motion.a
                      href={featuredProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl inline-block"
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

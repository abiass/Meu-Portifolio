import { motion } from "framer-motion";
import { stackIcons } from "../data/skills";

export function ProjectCard({ project }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-zinc-800 rounded-lg p-6 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all"
    >
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {project.title}
      </h3>

      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.slice(0, 3).map((tech, idx) => {
          const Icon = stackIcons[tech];
          return (
            <div
              key={idx}
              className="flex items-center gap-1 px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded font-medium"
              title={tech}
            >
              {Icon && <Icon size={12} />}
              <span>{tech}</span>
            </div>
          );
        })}
        {project.stack.length > 3 && (
          <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs rounded font-medium">
            +{project.stack.length - 3}
          </span>
        )}
      </div>

      <div className="flex gap-3">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 bg-zinc-900 dark:bg-zinc-700 text-white text-sm font-medium rounded hover:bg-indigo-600 transition-colors text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        )}
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-medium rounded hover:bg-indigo-700 transition-colors text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

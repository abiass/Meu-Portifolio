import { motion } from "framer-motion";
import { stackIcons } from "../data/skills";
import { useState } from "react";

function ExpandableDescription({ text }) {
  const [open, setOpen] = useState(false);
  const paragraphs = text.split("\n\n");

  return (
    <div className="text-zinc-600 dark:text-zinc-400 text-sm mb-5 leading-relaxed">
      {open ? (
        paragraphs.map((p, i) => <p key={i}>{p}</p>)
      ) : (
        <p className="line-clamp-3">{paragraphs[0]}</p>
      )}
      {paragraphs.length > 1 && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-2 text-indigo-600 dark:text-indigo-400 text-xs font-medium"
        >
          {open ? 'Mostrar menos' : 'Mostrar mais'}
        </button>
      )}
    </div>
  );
}

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
      whileHover={{ y: -5, scale: 1.02 }}
      className="group bg-white dark:bg-zinc-800 rounded-xl p-7 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all shadow-lg hover:shadow-xl dark:shadow-lg dark:hover:shadow-xl"
    >
      <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-zinc-900 dark:text-white">
        {project.title}
      </h3>

      <ExpandableDescription text={project.description} />

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech, idx) => {
          const Icon = stackIcons[tech];
          return (
            <div
              key={idx}
              className="flex items-center gap-1 px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-lg font-medium border border-indigo-200 dark:border-indigo-800/30 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors"
              title={tech}
            >
              {Icon && <Icon size={13} />}
              <span>{tech}</span>
            </div>
          );
        })}
      </div>

      <div className="flex gap-3">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 bg-zinc-900 dark:bg-zinc-700 text-white text-sm font-semibold rounded-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition-all text-center shadow-sm"
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
            className="flex-1 py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all text-center shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Deploy
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

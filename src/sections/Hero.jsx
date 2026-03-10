import { motion } from "framer-motion";
import { FaReact, FaNode } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const mainTechs = [
    { name: "React", icon: FaReact, color: "#61dafb" },
    { name: "Node.js", icon: FaNode, color: "#68a063" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl px-4 md:px-6"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Abias Melo
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-2xl md:text-3xl text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide">
            Desenvolvedor Fullstack
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-10">
          <div className="flex justify-center gap-4 flex-wrap">
            {mainTechs.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950/50 dark:to-purple-950/50 text-indigo-700 dark:text-indigo-300 rounded-lg font-medium text-sm hover:shadow-md transition-all border border-indigo-200 dark:border-indigo-800/50"
                >
                  <Icon size={20} color={tech.color} />
                  {tech.name}
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl leading-relaxed"
        >
          Desenvolvedor Full Stack com experiência em sistemas web corporativos. Especializado em backend com foco em segurança, performance e arquitetura organizada.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl dark:shadow-lg/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Projetos
          </motion.button>
          <motion.a
            href="#contact"
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3.5 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contato
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-20"
        >
          <svg
            className="w-6 h-6 mx-auto text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

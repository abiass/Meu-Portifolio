import { motion } from "framer-motion";
import { FaReact, FaNode, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiPostgresql, SiPython } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { Button } from "../components/Button";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
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
    { name: "Python", icon: SiPython, color: "#3572A5" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/abiass" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/abias-samuel-0927aa196/" },
    { name: "Email", icon: HiMail, url: "mailto:abias.melo@hotmail.com" },
  ];

  return (
    <section className="min-h-screen relative flex items-center overflow-hidden bg-white dark:bg-zinc-950 pt-20">
      
      {/* Background Decorativo: Gradientes e Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:20px_20px]"></div>
        {/* Glowing Orbs - Repositioned */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full mix-blend-multiply dark:mix-blend-normal blur-3xl filter opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-normal blur-3xl filter opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-400/20 dark:bg-pink-600/20 rounded-full mix-blend-multiply dark:mix-blend-normal blur-3xl filter opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                  Abias Melo
                </span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={itemVariants}>
              <h2 className="font-display text-2xl md:text-4xl text-zinc-800 dark:text-zinc-200 font-bold">
                Desenvolvedor <span className="text-indigo-600 dark:text-indigo-400">Fullstack</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl"
            >
              Desenvolvedor Full Stack com experiência em sistemas web corporativos.
              Especializado em backend com foco em <strong>segurança</strong>, <strong>performance</strong> e
              arquitetura organizada.
            </motion.p>

            {/* Tech Stack */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap gap-3">
                {mainTechs.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-500 transition-all shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <Icon size={18} color={tech.color} />
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 flex-wrap"
            >
              <Button onClick={() => scrollToSection("projects")}>
                Ver Projetos
              </Button>
              <Button 
                variant="secondary"
                onClick={() => scrollToSection("contact")}
              >
                Entre em Contato
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex items-center justify-center relative"
          >
            {/* Decorative Code/Tech Illustration */}
            <div className="relative w-full h-[500px]">
              {/* Floating Cards with Tech Stack */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl shadow-2xl w-64 transform rotate-3"
              >
                <div className="text-white">
                  <div className="text-sm font-mono mb-2 opacity-70">const developer = {'{'}</div>
                  <div className="pl-4 space-y-1 text-sm font-mono">
                    <div>name: <span className="text-yellow-300">"Abias"</span>,</div>
                    <div>role: <span className="text-green-300">"Fullstack"</span>,</div>
                    <div>skills: <span className="text-blue-300">["React", "Node"]</span></div>
                  </div>
                  <div className="text-sm font-mono opacity-70">{'}'}</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-0 left-0 bg-gradient-to-br from-pink-500 to-orange-500 p-6 rounded-2xl shadow-2xl w-64 transform -rotate-3"
              >
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <div className="text-sm font-semibold">Backend API</div>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-green-300">✓</span> PostgreSQL
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-300">✓</span> REST APIs
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-300">✓</span> Authentication
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-2xl border-2 border-indigo-200 dark:border-indigo-800"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    <FaReact className="text-white text-4xl animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                  <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Building</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">Amazing Products</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <svg
          className="w-6 h-6 text-zinc-400"
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
    </section>
  );
}

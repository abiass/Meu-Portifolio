import { motion } from "framer-motion";
import { FiCode, FiServer, FiShield, FiZap } from "react-icons/fi";

const stats = [
  { value: "2+", label: "Anos de Experiência" },
  { value: "10+", label: "Projetos Entregues" },
  { value: "5+", label: "Tecnologias Dominadas" },
];

const values = [
  {
    icon: FiCode,
    title: "Código Limpo",
    desc: "Arquitetura organizada, legível e escalável.",
  },
  {
    icon: FiServer,
    title: "Backend Sólido",
    desc: "APIs seguras, performáticas e bem documentadas.",
  },
  {
    icon: FiShield,
    title: "Segurança",
    desc: "Autenticação, validação e boas práticas de segurança.",
  },
  {
    icon: FiZap,
    title: "Entrega Rápida",
    desc: "CI/CD, deploys automatizados e iterações ágeis.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function About() {
  return (
    <section id="about" className="py-28 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-bold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase">
            01 — Sobre Mim
          </span>
          <span className="flex-1 h-px bg-indigo-200 dark:bg-indigo-900 max-w-[80px]" />
        </motion.div>

        {/* Title + Intro */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white leading-tight mb-6">
              Construindo soluções que{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                fazem diferença
              </span>
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Sou um Desenvolvedor Full Stack com foco em sistemas corporativos
              de alto impacto. Trabalho da concepção à produção, do banco de
              dados à interface e sempre com foco em{" "}
              <strong className="text-zinc-900 dark:text-white">
                qualidade
              </strong>
              ,{" "}
              <strong className="text-zinc-900 dark:text-white">
                segurança
              </strong>{" "}
              e{" "}
              <strong className="text-zinc-900 dark:text-white">
                performance
              </strong>
              .
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Já desenvolvi plataformas que processam milhões de requisições,
              sistemas de automação, dashboards analíticos e ferramentas SaaS.
              Cada projeto é tratado como um produto real, com atenção ao
              detalhe e visão de longo prazo.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-700/50 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
              >
                <span className="font-display text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  {stat.value}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-700/50 rounded-2xl p-6 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg dark:hover:shadow-indigo-900/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-4 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 transition-colors">
                  <Icon
                    size={20}
                    className="text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white text-sm mb-1.5">
                  {v.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

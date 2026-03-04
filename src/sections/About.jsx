import { motion } from "framer-motion";

export function About() {
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

  return (
    <section id="about" className="py-24 bg-alt">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
          >
            Sobre Mim
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                Sou um Desenvolvedor Full Stack apaixonado por criar soluções
                web de alta qualidade. Com experiência em sistemas corporativos,
                trago uma mentalidade orientada a boas práticas de engenharia de
                software e melhoria contínua.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                Meu foco está em resolver problemas complexos através de código
                limpo, bem arquitetado e seguro. Estou sempre buscando novos
                desafios que me permitam crescer como desenvolvedor.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-zinc-700 rounded-xl p-8 shadow-lg dark:shadow-none border border-indigo-100 dark:border-indigo-900/30">
                <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  Informação de Contato
                </h3>
                <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
                  <li>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      Email:
                    </span>{" "}
                    <span className="block mt-1 text-sm">abias.melo@hotmail.com</span>
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      Localização:
                    </span>{" "}
                    <span className="block mt-1 text-sm">Maringá, PR - Brasil</span>
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      Telefone:
                    </span>{" "}
                    <span className="block mt-1 text-sm">+55 (45) 99930-6874</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

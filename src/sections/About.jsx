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
    <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-zinc-900 dark:text-white mb-8"
          >
            Sobre Mim
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                Sou um Desenvolvedor Full Stack apaixonado por criar soluções
                web de alta qualidade. Com experiência em sistemas corporativos,
                trago uma mentalidade orientada a boas práticas de engenharia de
                software e melhoria contínua.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                Meu foco está em resolver problemas complexos através de código
                limpo, bem arquitetado e seguro. Estou sempre buscando novos
                desafios que me permitam crescer como desenvolvedor.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white dark:bg-zinc-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                  Informação de Contato
                </h3>
                <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                  <li>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      Email:
                    </span>{" "}
                    abias.melo@hotmail.com
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      Localização:
                    </span>{" "}
                    Maringá, PR - Brasil
                  </li>
                  <li>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      Telefone:
                    </span>{" "}
                    +55 (45) 99930-6874
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

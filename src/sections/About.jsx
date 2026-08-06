import { motion as Motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";

const stats = [
  { value: "2+", label: "Anos de experiência" },
  { value: "10+", label: "Projetos entregues" },
  { value: "5+", label: "Tecnologias dominadas" },
];

const values = [
  {
    index: "01",
    title: "Código limpo",
    desc: "Arquitetura organizada, legível e escalável.",
  },
  {
    index: "02",
    title: "Backend sólido",
    desc: "APIs seguras, performáticas e bem documentadas.",
  },
  {
    index: "03",
    title: "Segurança",
    desc: "Autenticação, validação e boas práticas em cada camada.",
  },
  {
    index: "04",
    title: "Entrega rápida",
    desc: "CI/CD, deploys automatizados e iterações ágeis.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function About() {
  return (
    <section id="about" className="py-24 bg-paper">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader number="01" label="Sobre mim">
          Construindo soluções que{" "}
          <em className="text-accent">fazem diferença</em>
        </SectionHeader>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-stone-600 dark:text-stone-400 leading-relaxed"
          >
            <p>
              Sou um Desenvolvedor Full Stack com foco em sistemas corporativos
              de alto impacto. Trabalho da concepção à produção, do banco de
              dados à interface — sempre com foco em{" "}
              <strong className="text-ink font-medium">qualidade</strong>,{" "}
              <strong className="text-ink font-medium">segurança</strong> e{" "}
              <strong className="text-ink font-medium">performance</strong>.
            </p>
            <p>
              Já desenvolvi plataformas que processam milhões de requisições,
              sistemas de automação, dashboards analíticos e ferramentas SaaS.
              Cada projeto é tratado como um produto real, com atenção ao
              detalhe e visão de longo prazo.
            </p>
          </Motion.div>

          {/* Stats tipográficos: número grande em Fraunces, sem cards */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-3 gap-6 self-start"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t border-stone-200 dark:border-stone-800 pt-4"
              >
                <span className="font-display font-semibold text-4xl md:text-5xl text-accent block">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-2 block leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </Motion.div>
        </div>

        {/* Princípios: índice em mono + fio fino, sem ícones nem cards */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10"
        >
          {values.map((v) => (
            <Motion.div
              key={v.index}
              variants={itemVariants}
              className="border-t border-stone-200 dark:border-stone-800 pt-4"
            >
              <span className="font-mono text-xs text-accent">{v.index}</span>
              <h3 className="font-display font-semibold text-ink text-lg mt-3 mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                {v.desc}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}

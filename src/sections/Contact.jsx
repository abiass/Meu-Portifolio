import { motion as Motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { Button } from "../components/Button";

const contactLinks = [
  {
    label: "E-mail",
    value: "abias.melo@hotmail.com",
    href: "mailto:abias.melo@hotmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abiasmelo",
    href: "https://linkedin.com/in/abiasmelo",
  },
  {
    label: "GitHub",
    value: "github.com/abiass",
    href: "https://github.com/abiass",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader number="04" label="Contato">
          Vamos construir algo <em className="text-accent">juntos?</em>
        </SectionHeader>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed max-w-md mb-8">
              Estou aberto a projetos freelance, oportunidades CLT/PJ e
              colaborações técnicas. Me manda uma mensagem e respondo rápido.
            </p>
            <Button href="mailto:abias.melo@hotmail.com">
              Enviar e-mail →
            </Button>
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-10">
              Maringá, PR · Brasil · remoto ou híbrido
            </p>
          </Motion.div>

          {/* Lista de contatos: linhas com fio fino, sem cards nem ícones */}
          <Motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 py-5 border-t border-stone-200 dark:border-stone-800 last:border-b transition-colors"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    {link.label}
                  </span>
                  <span className="text-sm text-ink group-hover:text-accent transition-colors truncate">
                    {link.value}{" "}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </Motion.ul>
        </div>
      </div>
    </section>
  );
}

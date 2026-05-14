import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";

const contactLinks = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abiasmelo",
    href: "www.linkedin.com/in/abiasmelo",
    icon: FaLinkedin,
    accent: "hover:border-blue-500 dark:hover:border-blue-400",
    iconColor: "#0a66c2",
  },
  {
    label: "GitHub",
    value: "github.com/abiass",
    href: "https://github.com/abiass",
    icon: FaGithub,
    accent: "hover:border-zinc-400 dark:hover:border-zinc-400",
    iconColor: "currentColor",
  },
  {
    label: "E-mail",
    value: "abias.melo@hotmail.com",
    href: "mailto:abias.melo@hotmail.com",
    icon: HiMail,
    accent: "hover:border-indigo-500 dark:hover:border-indigo-400",
    iconColor: "#6366f1",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 bg-white dark:bg-zinc-950">
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
            04 — Contato
          </span>
          <span className="flex-1 h-px bg-indigo-200 dark:bg-indigo-900 max-w-[80px]" />
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 shadow-xl mb-10"
        >
          {/* Background gradient accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.12),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_60%)]" />

          <div className="relative z-10 px-8 md:px-16 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white leading-tight mb-4">
                Vamos construir algo{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  incrível juntos?
                </span>
              </h2>
              <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 max-w-md">
                Estou aberto a projetos freelance, oportunidades CLT/PJ e
                colaborações técnicas. Me manda uma mensagem e respondo rápido.
              </p>
              <motion.a
                href="mailto:abias.melo@hotmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all text-base"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <HiMail size={20} />
                Enviar e-mail
                <FiExternalLink size={14} className="opacity-70" />
              </motion.a>
            </div>

            {/* Right: Location + links */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm">
                <HiLocationMarker
                  size={18}
                  className="text-indigo-400 flex-shrink-0"
                />
                <span>Maringá, PR — Brasil · remoto ou híbrido</span>
              </div>

              <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 ${link.accent} transition-all group`}
                    whileHover={{ x: 4 }}
                  >
                    <Icon
                      size={20}
                      style={{ color: link.iconColor }}
                      className="flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-zinc-400 dark:text-zinc-500 mb-0.5">
                        {link.label}
                      </div>
                      <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate">
                        {link.value}
                      </div>
                    </div>
                    <FiExternalLink
                      size={14}
                      className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

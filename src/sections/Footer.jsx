import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const navLinks = [
  { label: "Sobre", id: "about" },
  { label: "Stack", id: "stack" },
  { label: "Projetos", id: "projects" },
  { label: "Contato", id: "contact" },
];

const socialLinks = [
  { label: "GitHub", icon: FaGithub, href: "https://github.com/abiass" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/abias-samuel-0927aa196/" },
  { label: "E-mail", icon: HiMail, href: "mailto:abias.melo@hotmail.com" },
];

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 md:px-8 py-14"
      >
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Abias Melo</h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Desenvolvedor Fullstack construindo produtos web com foco em qualidade, segurança e performance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase mb-4">Navegação</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase mb-4">Redes</p>
            <div className="flex gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} className="text-zinc-300" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-zinc-800 text-xs text-zinc-600">
          © {year} Abias Melo. Todos os direitos reservados.
        </div>
      </motion.div>
    </footer>
  );
}

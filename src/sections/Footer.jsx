const socialLinks = [
  { label: "GitHub", href: "https://github.com/abiass" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abiasmelo" },
  { label: "E-mail", href: "mailto:abias.melo@hotmail.com" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="font-display italic text-ink">Abias Melo</span>

        <span className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-stone-400 flex gap-5">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              {s.label} ↗
            </a>
          ))}
        </span>

        <span className="font-mono text-xs text-stone-400 dark:text-stone-600">
          © {year} — Todos os direitos reservados
        </span>
      </div>
    </footer>
  );
}

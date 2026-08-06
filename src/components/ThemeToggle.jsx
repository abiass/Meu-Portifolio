import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-stone-500 dark:text-stone-400 hover:text-accent dark:hover:text-accent transition-colors"
      aria-label="Alternar tema"
    >
      {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
    </button>
  );
}

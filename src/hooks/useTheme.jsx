import { useState, useEffect } from "react";

function getInitialDark() {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem("theme");
  if (saved) return saved === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function useTheme() {
  const [isDark, setIsDark] = useState(getInitialDark);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // Cada componente que chama useTheme tem estado próprio; o evento
  // customizado mantém todas as instâncias sincronizadas.
  useEffect(() => {
    const handleThemeChange = (event) => {
      if (event?.detail?.isDark != null) {
        setIsDark(event.detail.isDark);
      }
    };

    window.addEventListener("theme-change", handleThemeChange);
    return () => window.removeEventListener("theme-change", handleThemeChange);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    window.dispatchEvent(
      new CustomEvent("theme-change", { detail: { isDark: nextDark } }),
    );
  };

  return { isDark, toggleTheme };
}

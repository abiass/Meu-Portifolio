import { useState, useEffect } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = saved ? saved === "dark" : prefersDark;

    setIsDark(shouldBeDark);
    setMounted(true);

    const root = document.documentElement;
    if (shouldBeDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("theme", isDark ? "dark" : "light");

    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark, mounted]);

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

  return { isDark, toggleTheme, mounted };
}

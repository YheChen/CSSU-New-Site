"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Theme = "light" | "dark";

const STORAGE_KEY = "cssu-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(
      document.documentElement.classList.contains("light") ? "light" : "dark",
    );
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("light", next === "light");
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage unavailable — ignore */
      }
      return next;
    });
  };

  const goingToLight = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileTap={{ scale: 0.92 }}
      aria-label={
        goingToLight ? "Switch to light theme" : "Switch to dark theme"
      }
      title={goingToLight ? "Switch to light theme" : "Switch to dark theme"}
      className="group fixed bottom-5 right-5 z-40 grid size-12 place-items-center overflow-hidden rounded-full border border-border bg-background-soft/80 text-foreground shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md transition-colors duration-300 hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="pointer-events-none absolute inset-0 bg-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mounted ? theme : "init"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="relative"
        >
          {theme === "light" ? (
            <Moon className="size-5" />
          ) : (
            <Sun className="size-5" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

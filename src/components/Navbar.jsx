import { useState, useEffect } from "react";

import { Sun, Moon, Rocket } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  // keep DOM class in sync with isDark
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((v) => !v);
  };

  // track scroll to switch navbar background
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md ${
        scrolled ? "bg-nav-bg" : "transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <a href="#about" className="flex items-center gap-2">
          <Rocket />
          <h1 className="text-2xl font-bold transition-colors">Starman</h1>
        </a>
        <div className="hidden md:flex gap-6 items-center">
          <a href="#about" className="hover:text-primary ">
            About
          </a>
          <a href="#projects" className="hover:text-primary ">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary ">
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-black/30 "
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
        <button
          className="md:hidden text-2xl  z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col items-center w-full border border-border bg-nav-bg py-4 md:hidden overflow-hidden"
          >
            <a
              href="#about"
              className="block px-4 py-2 text-inherit dark:text-inherit hover:text-primary "
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 text-inherit dark:text-inherit hover:text-primary "
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-inherit hover:text-primary  "
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 mt-2 rounded-lg text-inherit dark:text-inherit hover:bg-white/20 dark:hover:bg-black/30 "
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

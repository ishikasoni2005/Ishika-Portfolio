import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-6 ${
          isScrolled
            ? "border-border/80 bg-surface/85 shadow-soft backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#home"
          className="flex items-center gap-3 text-sm font-semibold tracking-[0.25em] text-text"
          aria-label="Go to homepage"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-base font-bold text-slate-950">
            IK
          </span>
          <span className="hidden text-xs uppercase text-muted sm:inline">
            Ishika Portfolio
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navigationLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="secondary-button px-4 py-2"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>
          <a href="/resume.pdf" download className="primary-button px-4 py-2.5">
            <FiDownload size={16} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="secondary-button px-4 py-2"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((currentValue) => !currentValue)}
            className="secondary-button px-4 py-2"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-border/80 bg-surface/95 p-5 shadow-soft backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-base"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="primary-button mt-2 w-full"
                onClick={closeMenu}
              >
                <FiDownload size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}


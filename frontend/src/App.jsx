import { lazy, Suspense, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function SectionFallback() {
  return (
    <div className="section-shell pt-0">
      <div className="glass-panel h-48 animate-pulse bg-surface-alt/70" />
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-text">
      <motion.div
        className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-accent via-sky-400 to-accent-soft"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_58%)] dark:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_58%)]" />
      <div className="pointer-events-none absolute right-0 top-64 -z-10 h-[24rem] w-[24rem] rounded-full bg-accent-soft/10 blur-3xl" />

      <Navbar
        theme={theme}
        toggleTheme={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
      />

      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}


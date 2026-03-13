import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLayers, FiLinkedin, FiTarget, FiTwitter } from "react-icons/fi";

const rotatingLines = [
  "scalable full stack products.",
  "AI-assisted developer tools.",
  "clean interfaces with strong UX."
];

const stats = [
  { label: "Projects Built", value: "15+" },
  { label: "Hackathons", value: "4" },
  { label: "Certifications", value: "3+" }
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/your-username", icon: FiGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-profile", icon: FiLinkedin },
  { label: "Twitter", href: "https://twitter.com/your-handle", icon: FiTwitter }
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Small typewriter loop without pulling in an extra dependency.
    const currentLine = rotatingLines[wordIndex];
    const isComplete = typedText === currentLine;
    const isErased = typedText.length === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && !isComplete) {
          setTypedText(currentLine.slice(0, typedText.length + 1));
          return;
        }

        if (!isDeleting && isComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && !isErased) {
          setTypedText(currentLine.slice(0, typedText.length - 1));
          return;
        }

        setIsDeleting(false);
        setWordIndex((currentValue) => (currentValue + 1) % rotatingLines.length);
      },
      isDeleting ? 45 : isComplete ? 1500 : 90
    );

    return () => window.clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <section id="home" className="section-shell pb-16 pt-16 sm:pt-20">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <span className="section-label">Computer Science Student</span>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl">
              Ishika, building toward a future as a{" "}
              <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Aspiring Software Engineer focused on full stack development, clean system design, and ambitious products that stand out in recruiter interviews.
            </p>
            <div className="flex min-h-[2rem] items-center text-base font-semibold text-accent sm:text-lg">
              I enjoy building&nbsp;
              <span className="min-w-[18rem] sm:min-w-[24rem]">
                {typedText}
                <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-accent align-middle" />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="primary-button">
              View Projects
              <FiArrowRight size={17} />
            </a>
            <a href="/resume.pdf" download className="secondary-button">
              <FiDownload size={17} />
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="social-chip"
                aria-label={label}
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="glass-panel p-5"
              >
                <p className="text-2xl font-bold text-text">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-accent-soft/20 blur-2xl" />
          <div className="glass-panel relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-grid opacity-40 [background-size:32px_32px]" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <div className="rounded-[1.75rem] border border-border/80 bg-slate-950/90 p-6 text-slate-100 shadow-glow dark:bg-slate-950/70">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sky-200/80">
                  Personal Blueprint
                </p>
                <div className="space-y-4 text-sm leading-7">
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <FiLayers className="mt-1 text-sky-300" size={18} />
                    <div>
                      <p className="font-semibold text-white">Full Stack Focus</p>
                      <p className="text-slate-300">
                        Shipping polished React frontends backed by reliable APIs and databases.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <FiTarget className="mt-1 text-teal-300" size={18} />
                    <div>
                      <p className="font-semibold text-white">Career Goal</p>
                      <p className="text-slate-300">
                        Building the depth, problem-solving, and portfolio quality expected by FAANG recruiters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-panel animate-float p-5">
                  <p className="text-sm font-semibold text-text">Preferred Stack</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    React, TailwindCSS, Node.js, Django, REST APIs, Docker
                  </p>
                </div>
                <div className="glass-panel p-5">
                  <p className="text-sm font-semibold text-text">Engineering Mindset</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    Clean UI, measurable performance, maintainable architecture, and thoughtful product execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


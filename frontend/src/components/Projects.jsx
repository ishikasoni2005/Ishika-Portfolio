import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/projects";

const filters = ["All", ...new Set(projects.map((project) => project.category))];

const fallbackThemes = {
  AI: {
    background: "bg-gradient-to-br from-sky-500/25 via-cyan-400/15 to-teal-500/25",
    accent: "bg-sky-200/15 text-sky-100"
  },
  "Full Stack": {
    background: "bg-gradient-to-br from-emerald-500/25 via-teal-400/15 to-lime-400/20",
    accent: "bg-emerald-200/15 text-emerald-100"
  },
  Analytics: {
    background: "bg-gradient-to-br from-amber-500/25 via-orange-400/15 to-yellow-300/20",
    accent: "bg-amber-100/20 text-amber-50"
  },
  Algorithms: {
    background: "bg-gradient-to-br from-fuchsia-500/25 via-violet-400/15 to-indigo-500/25",
    accent: "bg-fuchsia-100/15 text-fuchsia-50"
  },
  Hardware: {
    background: "bg-gradient-to-br from-rose-500/25 via-red-400/15 to-orange-400/20",
    accent: "bg-rose-100/15 text-rose-50"
  },
  Frontend: {
    background: "bg-gradient-to-br from-slate-500/25 via-zinc-400/15 to-stone-400/20",
    accent: "bg-slate-100/15 text-slate-50"
  },
  Default: {
    background: "bg-gradient-to-br from-accent/25 via-accent-soft/10 to-sky-400/20",
    accent: "bg-white/10 text-white"
  }
};

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} preview`}
        loading="lazy"
        className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  const theme = fallbackThemes[project.category] || fallbackThemes.Default;
  const initials = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className={`relative flex h-56 w-full overflow-hidden ${theme.background}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_32%)]" />
      <div className="absolute -right-10 top-8 h-28 w-28 rounded-full border border-white/10 bg-white/5 blur-sm" />
      <div className="absolute -left-6 bottom-4 h-20 w-20 rounded-full border border-white/10 bg-white/5" />
      <div className="relative flex w-full flex-col justify-between p-6 text-white">
        <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${theme.accent}`}>
          GitHub Project
        </span>
        <div>
          <p className="text-4xl font-bold tracking-[0.2em] text-white/90">{initials}</p>
          <p className="mt-3 max-w-[14rem] text-sm font-medium leading-6 text-white/80">
            {project.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-shell">
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-5">
          <span className="section-label">Projects</span>
          <h2 className="section-title">A portfolio of practical builds designed to show engineering range.</h2>
          <p className="section-copy">
            These projects combine product thinking, clean UI, and technical depth across AI, web engineering, real-time systems, analytics, algorithms, and hardware prototypes.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-accent text-slate-950 shadow-glow"
                  : "border border-border/80 bg-surface/80 text-muted hover:border-accent/40 hover:text-text"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              whileHover={{ y: -8 }}
              className="group glass-panel overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <ProjectVisual project={project} />
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold text-slate-100 backdrop-blur">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-text">{project.title}</h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-button px-3 py-2"
                      aria-label={`Open ${project.title} GitHub repository`}
                    >
                      <FiGithub size={16} />
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="secondary-button px-3 py-2"
                        aria-label={`Open ${project.title} live demo`}
                      >
                        <FiArrowUpRight size={16} />
                      </a>
                    ) : null}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((techItem) => (
                    <span key={techItem} className="tag">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

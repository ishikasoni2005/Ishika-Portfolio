import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/projects";

const filters = ["All", "AI", "Full Stack", "Analytics", "Algorithms"];

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
            These projects combine product thinking, clean UI, and technical depth across AI, web engineering, data visualization, and analytics.
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
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
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
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-button px-3 py-2"
                      aria-label={`Open ${project.title} live demo`}
                    >
                      <FiArrowUpRight size={16} />
                    </a>
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

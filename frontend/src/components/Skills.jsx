import { motion } from "framer-motion";
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiDjango,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiVite
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { skillGroups } from "../data/skills";

const iconMap = {
  Python: SiPython,
  "C++": SiCplusplus,
  Java: FaJava,
  JavaScript: SiJavascript,
  React: SiReact,
  Vite: SiVite,
  HTML: SiHtml5,
  CSS: SiCss,
  TailwindCSS: SiTailwindcss,
  Django: SiDjango,
  "Django REST Framework": TbApi,
  "Django Channels": TbApi,
  "REST APIs": TbApi,
  WebSockets: TbApi,
  Celery: TbApi,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  Docker: SiDocker,
  Linux: SiLinux
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mb-12 space-y-5">
        <span className="section-label">Skills</span>
        <h2 className="section-title">A balanced skill set across product development and engineering fundamentals.</h2>
        <p className="section-copy">
          My strongest work sits around React interfaces, Django backends, data-driven features, and the tooling that helps teams build with more confidence.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass-panel p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-text">{group.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{group.description}</p>
              </div>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                {group.items.length} skills
              </span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {group.items.map((skill) => {
                const Icon = iconMap[skill];

                return (
                  <div
                    key={skill}
                    className="rounded-2xl border border-border/70 bg-surface-alt/70 p-4 transition hover:border-accent/40 hover:bg-surface-alt"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                        {Icon ? <Icon size={20} /> : null}
                      </div>
                      <span className="text-sm font-semibold text-text">{skill}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

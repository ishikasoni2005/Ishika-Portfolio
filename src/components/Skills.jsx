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
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { skillGroups } from "../data/skills";

const iconMap = {
  "C++": SiCplusplus,
  Python: SiPython,
  JavaScript: SiJavascript,
  React: SiReact,
  HTML: SiHtml5,
  CSS: SiCss,
  Tailwind: SiTailwindcss,
  "Node.js": SiNodedotjs,
  Django: SiDjango,
  "REST APIs": TbApi,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
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
          I enjoy working across the stack, from responsive interfaces to backend services and the tooling that helps teams ship faster.
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

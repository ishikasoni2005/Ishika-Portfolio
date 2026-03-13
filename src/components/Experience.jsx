import { motion } from "framer-motion";
import { LuBadgeCheck, LuFolderGit2, LuGitPullRequest, LuTrophy } from "react-icons/lu";

const achievements = [
  {
    icon: LuTrophy,
    title: "Hackathons",
    stat: "4+",
    text: "Built rapid prototypes, collaborated under time pressure, and learned how to ship clear demos fast."
  },
  {
    icon: LuFolderGit2,
    title: "Projects Built",
    stat: "15+",
    text: "From dashboards to AI tools, I keep building projects that show problem-solving depth and polish."
  },
  {
    icon: LuBadgeCheck,
    title: "Certifications",
    stat: "3+",
    text: "Continuously strengthening fundamentals in web development, APIs, and software engineering workflows."
  },
  {
    icon: LuGitPullRequest,
    title: "Open Source",
    stat: "Ongoing",
    text: "Contributing to repositories, documentation, and issue discussions to grow as a collaborative engineer."
  }
];

const milestones = [
  {
    year: "2023",
    title: "Built a stronger DSA and problem-solving routine",
    description: "Focused on C++, interview patterns, and writing cleaner, more structured solutions."
  },
  {
    year: "2024",
    title: "Shifted into full stack project building",
    description: "Started building portfolio-grade apps with React, Django, Node.js, APIs, and modern UI systems."
  },
  {
    year: "2025",
    title: "Expanded into AI and developer productivity projects",
    description: "Explored applied ML ideas, intelligent workflows, and products that solve student-facing problems."
  },
  {
    year: "2026",
    title: "Preparing for software engineering internships and top-tier roles",
    description: "Refining system design knowledge, portfolio quality, and recruiter-facing storytelling."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mb-12 space-y-5">
        <span className="section-label">Experience & Achievements</span>
        <h2 className="section-title">Momentum built through hands-on projects, competitions, and continuous learning.</h2>
        <p className="section-copy">
          Even as a student, I treat every project like a serious product exercise: clear problem, strong execution, and measurable growth from one build to the next.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {achievements.map(({ icon: Icon, title, stat, text }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass-panel p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <Icon size={22} />
            </div>
            <p className="mt-5 text-3xl font-bold text-text">{stat}</p>
            <h3 className="mt-2 text-xl font-semibold text-text">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="glass-panel p-6 sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Current Focus
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-text">What I am sharpening right now</h3>
          <div className="mt-6 space-y-4">
            {[
              "Writing cleaner, more scalable React components",
              "Improving backend API design and authentication flows",
              "Practicing data structures and interview-style problem solving",
              "Building project case studies that speak clearly to recruiters"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-surface-alt/70 p-4">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="text-sm leading-7 text-muted">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="glass-panel p-6 sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Growth Timeline
          </p>
          <div className="mt-6 space-y-5">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-bold text-slate-950">
                    {milestone.year}
                  </div>
                  <div className="mt-2 h-full w-px bg-border/80" />
                </div>
                <div className="pb-6">
                  <h3 className="text-lg font-semibold text-text">{milestone.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


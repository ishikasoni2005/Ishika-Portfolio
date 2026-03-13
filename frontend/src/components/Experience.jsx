import { motion } from "framer-motion";
import { LuBadgeCheck, LuFolderGit2, LuGitPullRequest, LuTrophy } from "react-icons/lu";

const achievements = [
  {
    icon: LuTrophy,
    title: "Academic Rank",
    stat: "Top 5%",
    text: "Ranked among the top 5% of students in the department based on cumulative academic performance."
  },
  {
    icon: LuFolderGit2,
    title: "Projects Built",
    stat: "11",
    text: "Built public projects spanning frontend, full stack, analytics, algorithms, AI-powered systems, and hardware prototypes."
  },
  {
    icon: LuBadgeCheck,
    title: "Certifications",
    stat: "5",
    text: "Earned certifications across Data Engineering, Generative AI, Artificial Intelligence, IT, and professional skills."
  },
  {
    icon: LuGitPullRequest,
    title: "DSA Practice",
    stat: "500+",
    text: "Solved 500+ problems on LeetCode and GeeksforGeeks to strengthen algorithmic thinking and coding efficiency."
  }
];

const milestones = [
  {
    year: "2023",
    title: "Built a strong academic and coding foundation",
    description: "Started B.Tech in CSE (AI & Data Science), strengthened fundamentals, and built a steady DSA routine."
  },
  {
    year: "2024",
    title: "Shifted into full stack project building",
    description: "Moved from small experiments to structured React and Django projects with cleaner architecture."
  },
  {
    year: "2025",
    title: "Expanded into internships, APIs, and AI workflows",
    description: "Worked on IPO backend systems during internship and built AI, analytics, and real-time products."
  },
  {
    year: "2026",
    title: "Sharpening real-time and product-focused engineering",
    description: "Doubling down on stronger systems thinking, polished case studies, and production-style execution."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mb-12 space-y-5">
        <span className="section-label">Experience & Achievements</span>
        <h2 className="section-title">Momentum built through internship work, shipped projects, and steady practice.</h2>
        <p className="section-copy">
          I try to make every semester visible in the work: better systems, cleaner interfaces, stronger fundamentals, and more confidence shipping end-to-end products.
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
            Internship Snapshot
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-text">Bluestock | SDE Intern</h3>
          <p className="mt-2 text-sm font-medium text-muted">July 2025 to August 2025 · Remote</p>
          <div className="mt-6 space-y-4">
            {[
              "Engineered a Django and MySQL backend for IPO management that handled 1000+ IPO records.",
              "Designed and implemented 15+ RESTful APIs used by a React frontend for filtering, pagination, and structured responses.",
              "Optimized Django ORM queries and indexing to reduce API response time by 35%.",
              "Worked in a Git-based team workflow while maintaining code quality across multiple contributors."
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

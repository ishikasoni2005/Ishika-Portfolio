import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiFlag, FiStar } from "react-icons/fi";

const highlights = [
  {
    icon: FiBookOpen,
    title: "Education",
    text: "B.Tech student in CSE (AI & Data Science) at CGC University, Mohali with an 8.6 CGPA and a strong base in CS fundamentals."
  },
  {
    icon: FiCode,
    title: "Full Stack Builds",
    text: "I enjoy pairing polished React interfaces with Django APIs, real-time backends, and data flows that stay maintainable as projects grow."
  },
  {
    icon: FiFlag,
    title: "Problem Solving",
    text: "I have solved 500+ DSA problems across LeetCode and GeeksforGeeks to keep sharpening logic, speed, and coding discipline."
  },
  {
    icon: FiStar,
    title: "What I Care About",
    text: "Clear communication, reliable implementation, measurable improvement, and building products that feel thoughtful from backend to UI."
  }
];

const technologies = [
  "React.js",
  "Vite",
  "TailwindCSS",
  "Django REST Framework",
  "Django Channels",
  "WebSockets",
  "WebRTC",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "MongoDB",
  "Docker",
  "GitHub"
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mb-12 space-y-5">
        <span className="section-label">About Me</span>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <h2 className="section-title">A student engineer building real products and stronger fundamentals each semester.</h2>
            <p className="section-copy">
              I am a full stack software engineering student who likes products that are fast, useful, and technically sound. Most of my work lives where responsive frontend experiences meet reliable backend systems.
            </p>
          </div>
          <div className="glass-panel max-w-md p-5">
            <p className="text-sm font-semibold text-text">What matters to me</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              Writing maintainable code, improving with feedback, and treating every project like a chance to get better at real engineering work.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {highlights.map(({ icon: Icon, title, text }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass-panel p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <Icon size={22} />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-text">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-panel mt-8 p-6 sm:p-8"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Favorite Technologies
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-text">Tools I reach for when building meaningful products</h3>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-muted">
            I especially enjoy full stack workflows where frontend polish, backend reliability, and product thinking all need to move together cleanly.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span key={technology} className="tag px-4 py-2 text-sm">
              {technology}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

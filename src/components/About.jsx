import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiFlag, FiStar } from "react-icons/fi";

const highlights = [
  {
    icon: FiBookOpen,
    title: "Education",
    text: "Computer Science student focused on data structures, operating systems, and software engineering fundamentals."
  },
  {
    icon: FiCode,
    title: "Passion for Coding",
    text: "I enjoy turning complex ideas into elegant products, especially when frontend polish meets reliable backend architecture."
  },
  {
    icon: FiFlag,
    title: "Career Goal",
    text: "I am intentionally building a recruiter-ready portfolio to prepare for Software Engineering roles at high-impact companies, including FAANG."
  },
  {
    icon: FiStar,
    title: "Tech I Enjoy",
    text: "React, TailwindCSS, Node.js, Django, REST APIs, MongoDB, MySQL, and everything around developer productivity."
  }
];

const technologies = [
  "React",
  "TailwindCSS",
  "Framer Motion",
  "Node.js",
  "Django",
  "MongoDB",
  "MySQL",
  "Docker",
  "Linux",
  "GitHub"
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mb-12 space-y-5">
        <span className="section-label">About Me</span>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <h2 className="section-title">A student developer preparing for ambitious engineering teams.</h2>
            <p className="section-copy">
              I am a Computer Science student who loves building products that feel thoughtful, fast, and useful. My work sits at the intersection of software engineering, UI craftsmanship, and real-world problem solving.
            </p>
          </div>
          <div className="glass-panel max-w-md p-5">
            <p className="text-sm font-semibold text-text">What matters to me</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              Writing maintainable code, learning quickly, collaborating well, and staying curious enough to keep improving every project.
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
            I especially enjoy frontend architecture and full stack workflows where thoughtful interfaces, backend reliability, and product sense all need to come together.
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


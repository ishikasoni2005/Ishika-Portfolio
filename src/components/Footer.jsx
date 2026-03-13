import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/your-username", icon: FiGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-profile", icon: FiLinkedin },
  { label: "Twitter", href: "https://twitter.com/your-handle", icon: FiTwitter }
];

export default function Footer() {
  return (
    <footer className="section-shell pt-8">
      <div className="glass-panel flex flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-base font-semibold text-text">Ishika</p>
          <p className="mt-2 text-sm text-muted">
            Built with React & Tailwind. Designed to be recruiter-ready across desktop and mobile.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
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
      </div>

      <div className="flex flex-col gap-2 px-2 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Ishika. All rights reserved.</p>
        <p>Built with React & Tailwind</p>
      </div>
    </footer>
  );
}

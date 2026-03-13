import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { socialLinks } from "../data/profile";

const socialIconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  leetcode: SiLeetcode
};

export default function Footer() {
  return (
    <footer className="section-shell pt-8">
      <div className="glass-panel flex flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-base font-semibold text-text">Ishika</p>
          <p className="mt-2 text-sm text-muted">
            Built with React, TailwindCSS, and a Django backend structure for smooth local development.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map(({ key, label, href }) => {
            const Icon = socialIconMap[key];

            return (
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
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2 px-2 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Ishika. All rights reserved.</p>
        <p>Frontend and backend organized in separate folders</p>
      </div>
    </footer>
  );
}

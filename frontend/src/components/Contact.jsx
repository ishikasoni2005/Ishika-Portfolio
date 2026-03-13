import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { contactItems } from "../data/profile";

const contactIconMap = {
  email: FiMail,
  github: FiGithub,
  linkedin: FiLinkedin,
  leetcode: SiLeetcode
};

const initialFormState = {
  name: "",
  email: "",
  message: ""
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentValue) => ({ ...currentValue, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "info",
        message:
          "Add your EmailJS credentials in frontend/.env to activate the contact form. The UI is already wired and ready."
      });
      return;
    }

    try {
      setIsSubmitting(true);

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: "Ishika"
        },
        { publicKey }
      );

      setStatus({
        type: "success",
        message: "Message sent successfully. Thanks for reaching out."
      });
      setFormData(initialFormState);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong while sending the message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="space-y-5"
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let’s connect about opportunities, projects, or collaboration.</h2>
          <p className="section-copy">
            I am actively building my portfolio, looking for growth opportunities, and always open to conversations around engineering, internships, and impactful products.
          </p>

          <div className="space-y-4 pt-3">
            {contactItems.map(({ key, label, value, href }) => {
              const Icon = contactIconMap[key];

              return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="glass-panel flex items-center gap-4 p-4 transition hover:-translate-y-1 hover:border-accent/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{label}</p>
                    <p className="text-sm text-muted">{value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="glass-panel p-6 sm:p-8"
        >
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Send a Message
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Use EmailJS credentials in{" "}
              <code className="rounded-full bg-surface-alt px-2 py-1 text-xs text-text">frontend/.env</code>{" "}
              to activate the contact form. The Django backend is ready for API growth, while contact delivery stays simple and frontend-friendly.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-text">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Your name"
                  required
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-text">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label className="space-y-2 text-sm font-medium text-text">
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="input-field resize-none"
                placeholder="Tell me a little about your opportunity or project..."
                required
              />
            </label>

            {status.message ? (
              <div
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-success/30 bg-success/10 text-success"
                    : status.type === "error"
                      ? "border-danger/30 bg-danger/10 text-danger"
                      : "border-accent/30 bg-accent/10 text-accent"
                }`}
              >
                {status.message}
              </div>
            ) : null}

            <button type="submit" disabled={isSubmitting} className="primary-button w-full sm:w-auto">
              <FiSend size={16} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

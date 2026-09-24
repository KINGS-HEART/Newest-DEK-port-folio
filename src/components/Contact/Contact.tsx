import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "motion/react";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    // Simulate sending message or preparing mailto link
    setTimeout(() => {
      setStatus("success");
      const mailtoLink = `mailto:kingsleydunu@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Contact Form Message"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoLink, "_blank");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-32 text-white sm:px-10 lg:px-20"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-purple-300/60"
        >
          Contact
        </motion.p>

        {/* Heading */}
        <motion.h2
          id="contact-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
        >
          Let's build something
          <br />
          <span className="text-white/30">great together.</span>
        </motion.h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Column: Information & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-base leading-relaxed text-white/50 sm:text-lg">
              Have a project, job opportunity, or technical discussion in mind?
              Feel free to reach out directly through the form or using any of
              my social profiles below.
            </p>

            {/* Direct Contacts List */}
            <div className="mt-10 space-y-6">
              <a
                href="mailto:kingsleydunu@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-purple-300 transition-colors group-hover:bg-purple-500/20">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">Email</p>
                  <p className="text-sm font-medium text-white group-hover:text-purple-300 sm:text-base">
                    kingsleydunu@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/KINGS-HEART"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-purple-300 transition-colors group-hover:bg-purple-500/20">
                  <FiGithub className="text-xl" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">GitHub</p>
                  <p className="text-sm font-medium text-white group-hover:text-purple-300 sm:text-base">
                    github.com/KINGS-HEART
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/kingsley-ebuka-dunu-a67102230/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-purple-300 transition-colors group-hover:bg-purple-500/20">
                  <FiLinkedin className="text-xl" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40">LinkedIn</p>
                  <p className="text-sm font-medium text-white group-hover:text-purple-300 sm:text-base">
                    linkedin.com/in/kingsley-ebuka-dunu
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10"
          >
            {status === "success" ? (
              <div className="py-12 text-center">
                <FiCheckCircle className="mx-auto text-5xl text-purple-400" />
                <h3 className="mt-4 text-2xl font-bold text-white">Message Prepared!</h3>
                <p className="mt-2 text-sm text-white/60">
                  Thank you! Your default email app should open now. Feel free to also send a direct email to{" "}
                  <span className="text-purple-300">kingsleydunu@gmail.com</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-full bg-white/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-white/20"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium uppercase tracking-widest text-white/50">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium uppercase tracking-widest text-white/50">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium uppercase tracking-widest text-white/50">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium uppercase tracking-widest text-white/50">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-semibold text-black transition-all hover:bg-white/90 disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <FiSend />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-24 h-px origin-left bg-white/10"
        />

        {/* Footer info line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col justify-between gap-4 text-sm text-white/30 sm:flex-row sm:items-center"
        >
          <p>Let's create something meaningful.</p>

          <a
            href="mailto:kingsleydunu@gmail.com"
            className="transition-colors hover:text-white"
          >
            kingsleydunu@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
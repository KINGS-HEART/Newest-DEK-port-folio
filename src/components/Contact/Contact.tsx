import { motion } from "motion/react";

function Contact() {
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

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg"
        >
          Have a project, opportunity or idea you would like to discuss?
          Feel free to get in touch. I'm always open to meaningful
          conversations and new opportunities.
        </motion.p>

        {/* Contact buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="mailto:kingsleydunu@gmail.com"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
          >
            Email Me →
          </a>

          <a
            href="https://github.com/KINGS-HEART"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white"
          >
            GitHub ↗
          </a>
        </motion.div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-24 h-px origin-left bg-white/10"
        />

        {/* Email information */}
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
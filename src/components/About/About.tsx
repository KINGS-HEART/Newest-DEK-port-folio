import { motion } from "motion/react";

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-32 text-white sm:px-10 lg:px-20"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-150px] top-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]"
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
          About Me
        </motion.p>

        {/* Main heading */}
        <motion.h2
          id="about-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
        >
          Building digital experiences
          <br />
          <span className="text-white/30">that make an impact.</span>
        </motion.h2>

        {/* Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-xl leading-relaxed text-white/70 sm:text-2xl">
              I am Ebuka Kingsley, a Frontend Engineer with strong expertise in building scalable, high-performance web applications using React, Next.js, TypeScript, and modern JavaScript (ES6+).
            </p>

            <p className="mt-7 text-base leading-relaxed text-white/50 sm:text-lg">
              Experienced in developing responsive e-commerce platforms, integrating secure payment systems (Paystack), and managing complex application state with Zustand.
            </p>

            <p className="mt-7 text-base leading-relaxed text-white/50 sm:text-lg">
              Skilled at translating Figma designs into pixel-perfect, production-ready interfaces with clean architecture, comprehensive QA/testing, and optimized performance.
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border-t border-white/10 pt-6"
          >
            <div className="border-b border-white/10 py-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Role
              </p>
              <p className="mt-2 text-lg text-white/80">
                Frontend Engineer
              </p>
            </div>

            <div className="border-b border-white/10 py-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Core Stack
              </p>
              <p className="mt-2 text-lg text-white/80">
                React · Next.js · TypeScript · Zustand
              </p>
            </div>

            <div className="border-b border-white/10 py-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Location & Availability
              </p>
              <p className="mt-2 text-lg text-white/80">
                Nigeria · Open to Remote Opportunities
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-24 h-px origin-left bg-white/10"
        />
      </div>
    </section>
  );
}

export default About;
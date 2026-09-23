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
              I am Dunu Ebuka Kingsley, a Frontend Engineer passionate about
              building modern, interactive and meaningful web applications.
            </p>

            <p className="mt-7 text-base leading-relaxed text-white/50 sm:text-lg">
              I combine clean code, thoughtful design and modern frontend
              technologies to create digital experiences that are responsive,
              accessible and enjoyable to use.
            </p>

            <p className="mt-7 text-base leading-relaxed text-white/50 sm:text-lg">
              My primary tools include JavaScript, TypeScript, React and
              modern frontend technologies. I enjoy turning ideas into
              functional products and continuously improving my craft.
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
                React · TypeScript · JavaScript
              </p>
            </div>

            <div className="border-b border-white/10 py-5">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Focus
              </p>
              <p className="mt-2 text-lg text-white/80">
                UI · Performance · Accessibility
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
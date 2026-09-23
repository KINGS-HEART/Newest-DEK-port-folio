import { motion } from "motion/react";

function Blog() {
  const achievements = [
    {
      number: "01",
      title: "Frontend Engineering",
      description:
        "Building modern web applications with JavaScript, TypeScript and React.",
    },
    {
      number: "02",
      title: "Continuous Learning",
      description:
        "Continuously improving my skills in frontend development and modern web technologies.",
    },
    {
      number: "03",
      title: "Real-World Projects",
      description:
        "Turning ideas into functional and responsive web applications.",
    },
  ];

  return (
    <section
      id="blog"
      aria-labelledby="blog-title"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white sm:px-10 lg:px-20"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-1/3 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-purple-300/60">
            Blog & Achievements
          </p>

          <h2
            id="blog-title"
            className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
          >
            Learning, building
            <br />
            <span className="text-white/30">and growing.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            My journey is driven by curiosity, practical experience and a
            commitment to becoming a better frontend engineer with every
            project.
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group relative min-h-[330px] overflow-hidden bg-[#080808] p-8 transition-all duration-500 hover:bg-white/[0.06] sm:p-10"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-[0.3em] text-white/20 transition-colors duration-300 group-hover:text-purple-300/60">
                  {achievement.number}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-white/30 group-hover:text-white">
                  ↗
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-10 left-8 right-8 sm:left-10 sm:right-10">
                <h3 className="text-2xl font-semibold tracking-tight text-white/90 transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                  {achievement.title}
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-white/40 transition-colors duration-300 group-hover:text-white/60 sm:text-base">
                  {achievement.description}
                </p>

                <div className="mt-7 h-px w-0 bg-white/40 transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full border border-white/10 transition-all duration-500 group-hover:scale-125 group-hover:border-white/20" />
            </motion.article>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex items-center gap-4 text-sm text-white/30"
        >
          <span className="h-px w-12 bg-white/10" />
          Learning never stops.
        </motion.div>
      </div>
    </section>
  );
}

export default Blog;
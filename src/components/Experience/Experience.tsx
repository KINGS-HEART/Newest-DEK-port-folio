import { motion } from "motion/react";

function Experience() {
  const experiences = [
    {
      period: "2024 — Present",
      role: "Frontend Engineer",
      description:
        "Building responsive and interactive web applications using modern frontend technologies.",
    },
    {
      period: "2023 — 2024",
      role: "Frontend Developer",
      description:
        "Developed web interfaces with JavaScript, React and modern CSS technologies.",
    },
    {
      period: "2022 — 2023",
      role: "Frontend Engineering Student",
      description:
        "Focused on JavaScript, TypeScript, React, web development fundamentals and software engineering practices.",
    },
  ];

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-32 text-white sm:px-10 lg:px-20"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-1/3 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[130px]"
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
            Experience
          </p>

          <h2
            id="experience-title"
            className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
          >
            My professional
            <br />
            <span className="text-white/30">journey so far.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            A timeline of my growth as I continue developing my skills,
            building products and gaining practical experience in frontend
            engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[220px]"
          />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.period}-${experience.role}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="relative grid gap-6 pl-10 md:grid-cols-[180px_1fr] md:gap-10 md:pl-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-[#0a0a0a] md:left-[213px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/50 transition-all duration-300" />
                </div>

                {/* Period */}
                <div className="pt-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30 sm:text-sm">
                    {experience.period}
                  </p>
                </div>

                {/* Experience content */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] sm:p-9">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold tracking-tight text-white/90 sm:text-3xl">
                      {experience.role}
                    </h3>

                    <span className="text-xs tracking-[0.25em] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/45 sm:text-base">
                    {experience.description}
                  </p>

                  <div className="mt-7 h-px w-full bg-white/10" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex items-center gap-4 text-sm text-white/30"
        >
          <span className="h-px w-12 bg-white/10" />
          Progress is built one project at a time.
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
import { motion } from "motion/react";

function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "REST APIs",
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-purple-300/60">
            Skills
          </p>

          <h2
            id="skills-title"
            className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-7xl"
          >
            Technologies I use to turn
            <br />
            <span className="text-white/30">ideas into products.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            I work across the frontend stack to build responsive,
            accessible and interactive digital experiences with a focus on
            clean architecture and maintainable code.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group relative min-h-[180px] overflow-hidden bg-[#080808] p-7 transition-all duration-500 hover:bg-white/[0.06]"
            >
              {/* Number */}
              <span className="text-xs font-medium tracking-[0.2em] text-white/20 transition-colors duration-300 group-hover:text-purple-300/60">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Skill */}
              <div className="absolute bottom-7 left-7 right-7">
                <h3 className="text-xl font-semibold tracking-tight text-white/80 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white">
                  {skill}
                </h3>

                {/* Hover line */}
                <div className="mt-4 h-px w-0 bg-white/40 transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Corner decoration */}
              <div className="absolute right-6 top-6 h-2 w-2 rounded-full border border-white/20 transition-all duration-300 group-hover:scale-150 group-hover:border-purple-300/60" />
            </motion.div>
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
          Always learning. Always building.
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
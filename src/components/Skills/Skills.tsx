import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiCode, FiLayers, FiCpu, FiCheckCircle } from "react-icons/fi";

interface SkillItem {
  name: string;
  category: "Languages" | "Frameworks" | "Tools" | "Practices";
  level: "Advanced" | "Proficient" | "Experienced";
  description: string;
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const skillItems: SkillItem[] = [
    {
      name: "React.js & Next.js",
      category: "Frameworks",
      level: "Advanced",
      description: "Component architecture, server components, routing, hooks & scalable web app patterns.",
    },
    {
      name: "TypeScript",
      category: "Languages",
      level: "Advanced",
      description: "Static typing, interfaces, type narrowing, generics & safe API contract definitions.",
    },
    {
      name: "JavaScript (ES6+)",
      category: "Languages",
      level: "Advanced",
      description: "Asynchronous JS, promises, async/await, DOM manipulation & modern ES features.",
    },
    {
      name: "Zustand State Management",
      category: "Frameworks",
      level: "Advanced",
      description: "Centralized store management, persistent state, atomic actions & clean state flows.",
    },
    {
      name: "HTML5 & CSS3 Architecture",
      category: "Languages",
      level: "Advanced",
      description: "Semantic DOM, CSS Grid, Flexbox, responsive design & accessible UI patterns.",
    },
    {
      name: "Paystack & REST APIs",
      category: "Tools",
      level: "Advanced",
      description: "Secure payment gateway integration, Postman, fetch/Axios & asynchronous data flows.",
    },
    {
      name: "Bootstrap & Styling Systems",
      category: "Frameworks",
      level: "Proficient",
      description: "Utility classes, responsive grid systems, component styling & custom theme architecture.",
    },
    {
      name: "QA & Automated Testing",
      category: "Practices",
      level: "Advanced",
      description: "Playwright, Cypress, manual, functional, regression, sanity & UAT test case execution.",
    },
    {
      name: "Git, GitHub & Vercel",
      category: "Tools",
      level: "Advanced",
      description: "Branching workflows, version control, CI/CD, production deployment & code reviews.",
    },
    {
      name: "Vite & Modern Build Tools",
      category: "Tools",
      level: "Proficient",
      description: "Fast module bundling, asset optimization, dev server configuration & build scripts.",
    },
    {
      name: "Component Architecture",
      category: "Practices",
      level: "Advanced",
      description: "Modular design, reusability, prop typing & clean maintainable code principles.",
    },
    {
      name: "Performance Optimization",
      category: "Practices",
      level: "Advanced",
      description: "Code splitting, lazy loading, asset optimization, bundle minimization & lighthouse audits.",
    },
  ];

  const categories = [
    { id: "All", label: "All Skills", icon: FiCpu },
    { id: "Languages", label: "Languages", icon: FiCode },
    { id: "Frameworks", label: "Frameworks & State", icon: FiLayers },
    { id: "Tools", label: "Tools & APIs", icon: FiCpu },
    { id: "Practices", label: "QA & Practices", icon: FiCheckCircle },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skillItems
      : skillItems.filter((skill) => skill.category === activeCategory);

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
            Skills & Technical Expertise
          </p>

          <h2
            id="skills-title"
            className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-7xl"
          >
            Core technical skills
            <br />
            <span className="text-white/30">and engineering tools.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            I specialize in building responsive, high-performance web applications using modern React patterns, Next.js, Zustand, TypeScript, and robust QA testing workflows.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-2.5"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-lg"
                    : "border border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                <Icon className="text-sm" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden bg-[#080808] p-7 transition-all duration-500 hover:bg-white/[0.06]"
              >
                {/* Number & Skill Level Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-white/20 transition-colors duration-300 group-hover:text-purple-300/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-purple-300">
                    {skill.level}
                  </span>
                </div>

                {/* Skill Title & Description */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold tracking-tight text-white/90 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white sm:text-xl">
                    {skill.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-white/40 transition-colors duration-300 group-hover:text-white/60">
                    {skill.description}
                  </p>

                  {/* Hover line */}
                  <div className="mt-5 h-px w-0 bg-white/40 transition-all duration-500 group-hover:w-full" />
                </div>

                {/* Corner decoration */}
                <div className="absolute right-5 top-5 h-2 w-2 rounded-full border border-white/20 transition-all duration-300 group-hover:scale-150 group-hover:border-purple-300/60" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex items-center gap-4 text-sm text-white/30"
        >
          <span className="h-px w-12 bg-white/10" />
          Clean architecture. High performance. Continuous learning.
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
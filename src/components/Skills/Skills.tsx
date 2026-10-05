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
      name: "JavaScript (ES6+)",
      category: "Languages",
      level: "Advanced",
      description: "Asynchronous JS, Promises, Event Loop, DOM Manipulation & Modern ES features.",
    },
    {
      name: "TypeScript",
      category: "Languages",
      level: "Proficient",
      description: "Static typing, interfaces, generics, type narrowing & safe API contracts.",
    },
    {
      name: "HTML5 & Semantic Markup",
      category: "Languages",
      level: "Advanced",
      description: "Accessible DOM structure, SEO optimization & ARIA landmarks.",
    },
    {
      name: "CSS3 & Modern Layouts",
      category: "Languages",
      level: "Advanced",
      description: "Flexbox, CSS Grid, animations, variables, custom properties & responsive design.",
    },
    {
      name: "React.js",
      category: "Frameworks",
      level: "Advanced",
      description: "Component architecture, hooks, custom hooks, context, state management & JSX.",
    },
    {
      name: "Vue.js 3",
      category: "Frameworks",
      level: "Proficient",
      description: "Composition API, reactive refs, computed properties & Vue Router.",
    },
    {
      name: "Tailwind CSS",
      category: "Frameworks",
      level: "Advanced",
      description: "Utility-first styling, responsive design systems, custom configuration & dark mode.",
    },
    {
      name: "Pinia & State Management",
      category: "Frameworks",
      level: "Proficient",
      description: "Centralized application state, store actions, getters & reactive state persistence.",
    },
    {
      name: "Git & GitHub",
      category: "Tools",
      level: "Proficient",
      description: "Branching workflows, pull requests, merge conflict resolution & version control.",
    },
    {
      name: "REST APIs & Fetch/Axios",
      category: "Tools",
      level: "Advanced",
      description: "API integration, asynchronous data fetching, error handling & JSON handling.",
    },
    {
      name: "Vite & Build Tools",
      category: "Tools",
      level: "Proficient",
      description: "Fast module bundling, asset optimization, dev server configuration & build scripts.",
    },
    {
      name: "Three.js & WebGL Basics",
      category: "Tools",
      level: "Experienced",
      description: "3D canvas scenes, ambient lighting, particle systems & 3D hero experiences.",
    },
    {
      name: "Responsive Web Design",
      category: "Practices",
      level: "Advanced",
      description: "Mobile-first layouts, media queries, flexible grids & cross-device compatibility.",
    },
    {
      name: "Performance & Optimization",
      category: "Practices",
      level: "Proficient",
      description: "Lazy loading, code splitting, asset compression & lighthouse audit optimization.",
    },
    {
      name: "Web Accessibility (a11y)",
      category: "Practices",
      level: "Proficient",
      description: "Keyboard navigation, screen reader support, focus states & color contrast compliance.",
    },
    {
      name: "UI/UX Implementation",
      category: "Practices",
      level: "Advanced",
      description: "Translating Figma designs into pixel-perfect, interactive frontend components.",
    },
  ];

  const categories = [
    { id: "All", label: "All Skills", icon: FiCpu },
    { id: "Languages", label: "Core Languages", icon: FiCode },
    { id: "Frameworks", label: "Frameworks & State", icon: FiLayers },
    { id: "Tools", label: "Tools & Workflow", icon: FiCpu },
    { id: "Practices", label: "Engineering Practices", icon: FiCheckCircle },
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
            Skills & Capabilities
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
            accessible, and interactive digital experiences with a focus on
            clean architecture and maintainable code.
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
          Always learning. Always building.
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
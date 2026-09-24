import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Project {
  number: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  category: "React" | "Vue" | "JavaScript";
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const projects: Project[] = [
    {
      number: "01",
      title: "QuickServe Web App",
      description:
        "A modern service-based web application designed to provide fast and seamless user interactions.",
      tech: ["Vue.js", "TypeScript", "Pinia", "Vue Router"],
      link: "https://quickserve-wzr9.vercel.app/",
      category: "Vue",
    },
    {
      number: "02",
      title: "Expense Tracker",
      description:
        "A web application for tracking expenses and managing personal finances.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://expence-traker-app-rust.vercel.app/",
      category: "React",
    },
    {
      number: "03",
      title: "Markdown Preview App",
      description:
        "A real-time Markdown editor allowing users to write Markdown and see the formatted result instantly.",
      tech: ["Vue.js", "TypeScript", "Vite"],
      link: "https://markdown-vue-js-ts-assessment-8fef.vercel.app/",
      category: "Vue",
    },
    {
      number: "04",
      title: "E-Commerce Wine Store",
      description:
        "A modern e-commerce interface for browsing and purchasing wine products.",
      tech: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
      link: "https://e-commerce-on-wines.vercel.app/",
      category: "JavaScript",
    },
    {
      number: "05",
      title: "To-Do App",
      description:
        "A simple and responsive task management application for organizing daily activities.",
      tech: ["React", "TypeScript", "CSS"],
      link: "https://to-do-app-livid-eta.vercel.app/",
      category: "React",
    },
    {
      number: "06",
      title: "Weather App",
      description:
        "A responsive weather application that presents weather information in a clean interface.",
      tech: ["React", "TypeScript", "CSS"],
      link: "https://weather-app-project-eight-vert.vercel.app/",
      category: "React",
    },
    {
      number: "07",
      title: "Blog Web Application",
      description:
        "A modern blog platform with structured content layout, responsive design, and clean user interface.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: "https://blog-app-beta-peach.vercel.app/",
      category: "JavaScript",
    },
  ];

  const categories = ["All", "React", "Vue", "JavaScript"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white sm:px-10 lg:px-20"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-150px] top-1/3 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[130px]"
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
            Selected Work
          </p>

          <h2
            id="projects-title"
            className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
          >
            Things I have built
            <br />
            <span className="text-white/30">and learned from.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            A selection of projects where I have applied frontend
            technologies to solve problems, experiment with ideas and build
            useful digital experiences.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-5 py-2 text-xs font-medium tracking-widest uppercase transition-all duration-300 focus:outline-none ${
                activeFilter === cat
                  ? "bg-white text-black shadow-lg"
                  : "border border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.a
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden bg-[#080808] p-8 transition-all duration-500 hover:bg-white/[0.06] sm:p-10"
              >
                {/* Project number & arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.3em] text-white/20 transition-colors duration-300 group-hover:text-purple-300/60">
                    {project.number}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-white/30 group-hover:text-white">
                    ↗
                  </span>
                </div>

                {/* Project content */}
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold tracking-tight text-white/90 transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/40 transition-colors duration-300 group-hover:text-white/60 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-white/25">
                      {project.tech.join(" • ")}
                    </p>

                    <span className="h-px w-0 bg-white/40 transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>

                {/* Hover corner */}
                <div className="absolute bottom-0 right-0 h-20 w-20 translate-x-10 translate-y-10 rounded-full border border-white/10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
              </motion.a>
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
          More projects coming soon.
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
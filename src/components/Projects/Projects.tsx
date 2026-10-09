import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiSearch, FiExternalLink, FiX, FiLayers, FiCode } from "react-icons/fi";

interface Project {
  number: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  link: string;
  category: "React" | "Vue" | "JavaScript";
  highlights?: string[];
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      number: "01",
      title: "QuickServe E-Commerce Platform",
      description:
        "Engineered a fully functional e-commerce storefront with dynamic product rendering and cart state management.",
      longDescription:
        "Integrated secure Paystack payment processing. Implemented persistent cart logic and optimized checkout flow to enhance user experience. Deployed to production using Vercel.",
      tech: ["React", "Next.js", "TypeScript", "Zustand", "Paystack"],
      link: "https://quickserve-wzr9.vercel.app/",
      category: "React",
      highlights: [
        "Architected modular React components with Zustand global state",
        "Integrated secure Paystack payment gateway for checkout processing",
        "Implemented persistent cart logic and optimized performance",
      ],
    },
    {
      number: "02",
      title: "Responsive Multi-Page Web Application",
      description:
        "Built a 3-page responsive platform featuring Landing Page, Registration System, and Admin Dashboard.",
      longDescription:
        "Implemented designs from Figma with pixel-perfect accuracy. Ensured cross-browser compatibility and web accessibility best practices.",
      tech: ["React", "TypeScript", "CSS Grid", "Flexbox", "Figma"],
      link: "https://quickserve-wzr9.vercel.app/",
      category: "React",
      highlights: [
        "Pixel-perfect translation from Figma design system",
        "Comprehensive cross-browser testing & responsive layouts",
        "Accessible forms and structured dashboard user flows",
      ],
    },
    {
      number: "03",
      title: "Markdown Preview App (React)",
      description:
        "Developed an interactive Markdown editor with real-time preview rendering.",
      longDescription:
        "Applied reusable component-based architecture for scalability, allowing side-by-side editing and formatted HTML preview.",
      tech: ["React", "TypeScript", "Vite", "CSS3"],
      link: "https://markdown-vue-js-ts-assessment-8fef.vercel.app/",
      category: "React",
      highlights: [
        "Real-time Markdown parsing with split view rendering",
        "Reusable component architecture for maintainability",
        "Export and formatted text copy functionality",
      ],
    },
    {
      number: "04",
      title: "Authentication & Sign-Up Interface",
      description:
        "Designed structured sign-up forms with validation logic and reusable UI components.",
      longDescription:
        "Built reusable UI components for maintainability, consistency, and seamless user authentication flows.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
      link: "https://to-do-app-livid-eta.vercel.app/",
      category: "React",
      highlights: [
        "Structured sign-up form with instant field validation",
        "Reusable form input components and accessible error states",
        "Seamless integration with state management handlers",
      ],
    },
    {
      number: "05",
      title: "Expense Tracker Dashboard",
      description:
        "Web application for tracking daily expenses, categorized income, and personal finance management.",
      longDescription:
        "An intuitive financial dashboard built with React and Tailwind CSS allowing users to record, filter, and visualize expenses.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://expence-traker-app-rust.vercel.app/",
      category: "React",
      highlights: [
        "Real-time expense calculations & category filtering",
        "Persistent local data storage",
        "Responsive financial summary cards",
      ],
    },
    {
      number: "06",
      title: "E-Commerce Wine Store",
      description:
        "Modern e-commerce interface for browsing wine products with REST API integration.",
      longDescription:
        "A feature-rich e-commerce store front showcasing product catalogs, dynamic filtering, shopping cart functionality, and REST API calls.",
      tech: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
      link: "https://e-commerce-on-wines.vercel.app/",
      category: "JavaScript",
      highlights: [
        "Dynamic REST API product catalog fetching",
        "Interactive shopping cart with quantity controls",
        "Custom CSS animations and responsive grid layout",
      ],
    },
  ];

  const categories = ["All", "React", "JavaScript"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === "All" || project.category === activeFilter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tech.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white sm:px-10 lg:px-20"
    >
      {/* Background Image Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-screen"
        style={{ backgroundImage: `url('/image/Background/bg-projects.webp')` }}
      />

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

        {/* Filter Tabs & Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2.5">
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
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-xs">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 pl-11 pr-4 text-xs text-white placeholder-white/30 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 py-16 text-center">
            <p className="text-sm text-white/50">
              No projects found matching "<span className="text-purple-300">{searchQuery}</span>".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("All");
              }}
              className="mt-4 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs text-white hover:bg-white/20"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden bg-[#080808]/90 backdrop-blur-sm p-8 transition-all duration-500 hover:bg-white/[0.06] sm:p-10"
                >
                  {/* Project number & external link actions */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.3em] text-white/20 transition-colors duration-300 group-hover:text-purple-300/60">
                      {project.number}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold tracking-wider text-white/60 transition hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-purple-300"
                      >
                        DETAILS
                      </button>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-white/30 group-hover:text-white"
                      >
                        ↗
                      </a>
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="mt-10">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer text-2xl font-semibold tracking-tight text-white/90 transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl"
                    >
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
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

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

      {/* Project Quick View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/20 bg-[#0c0c12] p-6 text-white shadow-2xl sm:p-8"
            >
              {/* Modal Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:text-white"
              >
                <FiX className="text-lg" />
              </button>

              {/* Modal Content */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">
                  Project {selectedProject.number} • {selectedProject.category}
                </span>
              </div>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {selectedProject.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              {/* Highlights */}
              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div className="mt-6 border-t border-white/10 pt-5">
                  <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-300/80">
                    <FiLayers /> Key Features & Architecture
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {selectedProject.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-xs text-white/80"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-300/80">
                  <FiCode /> Technologies Used
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex items-center justify-end gap-3 border-t border-white/10 pt-5">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10"
                >
                  Close
                </button>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-black transition hover:bg-white/90"
                >
                  Visit Live Demo <FiExternalLink />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
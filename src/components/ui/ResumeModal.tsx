import { motion, AnimatePresence } from "motion/react";
import { FiX, FiFileText, FiDownload, FiCheckCircle } from "react-icons/fi";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/20 bg-[#0d0d12] p-6 text-white shadow-2xl sm:p-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
                <FiFileText className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  DUNU EBUKA KINGSLEY
                </h3>
                <p className="text-xs font-medium tracking-widest uppercase text-purple-300/70">
                  Frontend Engineer Resume
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Resume Body */}
          <div className="mt-6 space-y-8 text-sm text-white/80">
            {/* Summary */}
            <section>
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                Professional Overview
              </h4>
              <p className="mt-2 leading-relaxed text-white/70">
                Frontend Engineer specializing in building responsive, accessible, and interactive web applications using React, Vue, TypeScript, and modern CSS architecture. Passionate about sleek interfaces, performant web applications, and seamless user experiences.
              </p>
            </section>

            {/* Core Competencies */}
            <section>
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                Technical Stack & Skills
              </h4>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  "JavaScript (ES6+)",
                  "TypeScript",
                  "React.js & Hooks",
                  "Vue.js & Pinia",
                  "Tailwind CSS",
                  "HTML5 & CSS3",
                  "RESTful API Integration",
                  "Git & GitHub Workflow",
                  "Performance & SEO",
                  "Three.js & Animations",
                  "State Management",
                  "Responsive UI/UX",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/90"
                  >
                    <FiCheckCircle className="shrink-0 text-purple-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                Experience Timeline
              </h4>
              <div className="mt-3 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-semibold text-white">Frontend Engineer</h5>
                    <span className="text-xs text-purple-300/80">2024 — Present</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">
                    Designing and implementing responsive user interfaces, optimizing frontend performance, and consuming REST APIs in modern React and Vue projects.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-semibold text-white">Frontend Developer</h5>
                    <span className="text-xs text-purple-300/80">2023 — 2024</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">
                    Developed web applications with JavaScript, React, and Tailwind CSS. Built reusable components and integrated payment systems and third-party APIs.
                  </p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                Education & Background
              </h4>
              <div className="mt-2 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <h5 className="font-semibold text-white">Physics Electronics</h5>
                <p className="mt-1 text-xs text-white/60">
                  Analytical mindset and electronic systems training transitioned into professional software development and engineering.
                </p>
              </div>
            </section>
          </div>

          {/* Modal Footer / Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <a
              href="mailto:kingsleydunu@gmail.com"
              className="text-xs text-white/50 transition hover:text-white"
            >
              Contact: <span className="text-purple-300">kingsleydunu@gmail.com</span>
            </a>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrintResume}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10"
              >
                <FiDownload /> Print / Save PDF
              </button>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition hover:bg-white/90"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
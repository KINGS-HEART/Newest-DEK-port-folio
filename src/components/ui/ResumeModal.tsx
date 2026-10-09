import { motion, AnimatePresence } from "motion/react";
import { FiX, FiFileText, FiDownload, FiCheckCircle, FiPhone, FiMail, FiMapPin, FiBriefcase, FiAward, FiBookOpen } from "react-icons/fi";

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
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/20 bg-[#0d0d12] p-6 text-white shadow-2xl sm:p-10"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-white/10 pb-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
                <FiFileText className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Ebuka Kingsley
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-purple-300">
                  Frontend Engineer | React | Next.js | TypeScript
                </p>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/60">
                  <span className="flex items-center gap-1">
                    <FiMapPin className="text-purple-400" /> Nigeria | Open to Remote Opportunities
                  </span>
                  <span className="flex items-center gap-1">
                    <FiPhone className="text-purple-400" /> +2348135144051 | +2347080745485
                  </span>
                  <span className="flex items-center gap-1">
                    <FiMail className="text-purple-400" /> kingsleydunu@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Resume Body */}
          <div className="mt-6 space-y-8 text-sm text-white/80">
            {/* Professional Summary */}
            <section>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                <FiBriefcase /> Professional Summary
              </h4>
              <p className="mt-3 leading-relaxed text-white/75">
                Frontend Engineer with strong expertise in building scalable, high-performance web applications using React, Next.js, TypeScript, and modern JavaScript (ES6+). Experienced in developing responsive e-commerce platforms, integrating secure payment systems (Paystack), and managing complex application state with Zustand. Skilled at translating Figma designs into pixel-perfect, production-ready interfaces with clean architecture and optimized performance. Passionate about building intuitive digital experiences that drive business growth and user engagement.
              </p>
            </section>

            {/* Core Technical Skills */}
            <section>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                <FiCheckCircle /> Core Technical Skills
              </h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="text-xs font-semibold text-purple-300">Languages & Frameworks:</span>
                  <p className="mt-1 text-xs text-white/70">JavaScript (ES6+), TypeScript, HTML5, CSS3, React, Next.js, Bootstrap</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="text-xs font-semibold text-purple-300">State & Styling:</span>
                  <p className="mt-1 text-xs text-white/70">Zustand, Responsive Design, CSS Grid, Flexbox, Custom CSS Architecture</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="text-xs font-semibold text-purple-300">Payments & APIs:</span>
                  <p className="mt-1 text-xs text-white/70">REST API Integration, Paystack Payment Integration, Postman</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="text-xs font-semibold text-purple-300">Tools & Concepts:</span>
                  <p className="mt-1 text-xs text-white/70">Git, GitHub, Vite, VS Code, Vercel Deployment, Component Architecture, Performance Optimization, DOM Manipulation</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:col-span-2">
                  <span className="text-xs font-semibold text-purple-300">QA & Testing:</span>
                  <p className="mt-1 text-xs text-white/70">Manual Testing, Automated Testing, Functional Testing, Regression Testing, Smoke Testing, Sanity Testing, Cross-Browser Testing, Responsive Testing, UI Testing, User Acceptance Testing (UAT), Test Case Design & Execution, Bug Reporting & Documentation, Playwright, Cypress</p>
                </div>
              </div>
            </section>

            {/* Selected Projects */}
            <section>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                <FiBriefcase /> Selected Projects
              </h4>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <h5 className="font-semibold text-white">QuickServe E-Commerce Platform</h5>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">
                    Engineered a fully functional e-commerce storefront with dynamic product rendering and cart state management. Integrated secure Paystack payment processing. Implemented persistent cart logic and optimized checkout flow to enhance user experience. Deployed to production using Vercel.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <h5 className="font-semibold text-white">Responsive Multi-Page Web Application</h5>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">
                    Built a 3-page responsive platform (Landing Page, Registration System, Admin Dashboard). Implemented designs from Figma with pixel-perfect accuracy. Ensured cross-browser compatibility and accessibility best practices.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <h5 className="font-semibold text-white">Markdown Preview App (React)</h5>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">
                    Developed an interactive Markdown editor with real-time preview rendering. Applied reusable component-based architecture for scalability.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <h5 className="font-semibold text-white">Authentication & Sign-Up Interface</h5>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">
                    Designed structured sign-up forms with validation logic. Built reusable UI components for maintainability and consistency.
                  </p>
                </div>
              </div>
            </section>

            {/* Education & Certification */}
            <section>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                <FiBookOpen /> Education & Certification
              </h4>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-semibold text-white">AltSchool Africa</h5>
                    <span className="text-xs text-purple-300">School of Engineering</span>
                  </div>
                  <p className="mt-1 text-xs text-white/80 font-medium">Diploma in Frontend Engineering</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">
                    Intensive training in modern JavaScript, React, web architecture, and version control. Built and deployed real-world projects following industry best practices. Collaborated in team-based software development environments.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <FiAward className="text-purple-400" /> Frontend Engineering Certificate (Program Completion) — AltSchool Africa
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Development & Additional Strengths */}
            <section>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                Professional Development & Strengths
              </h4>
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-3">
                <p className="text-xs leading-relaxed text-white/70">
                  <strong className="text-white">Professional Development:</strong> Continuously advancing expertise in scalable frontend systems, modern React patterns, performance optimization, and enterprise-level architecture. Committed to continuous learning and delivering high-impact digital solutions.
                </p>
                <p className="text-xs leading-relaxed text-white/70">
                  <strong className="text-white">Additional Strengths:</strong> Strong communicator with growing confidence in technical discussions and presentations. Strategic thinker with hands-on problem-solving ability. Highly adaptable, fast learner, and team-oriented professional.
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
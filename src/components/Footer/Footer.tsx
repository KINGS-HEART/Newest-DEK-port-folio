import { motion } from "motion/react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-10 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-[-0.04em] transition-opacity hover:opacity-70"
            >
              DUNU<span className="text-white/30">.</span>
            </a>

            <p className="mt-2 text-sm text-white/30">
              Frontend Engineer building modern digital experiences.
            </p>
          </div>

          {/* Social Links & Navigation */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/40"
            >
              <a
                href="#about"
                className="transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#skills"
                className="transition-colors hover:text-white"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="transition-colors hover:text-white"
              >
                Projects
              </a>

              <a
                href="#experience"
                className="transition-colors hover:text-white"
              >
                Experience
              </a>

              <a
                href="#contact"
                className="transition-colors hover:text-white"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-3 text-white/50">
              <a
                href="https://github.com/KINGS-HEART"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="rounded-full border border-white/10 p-2 transition-colors hover:border-white/30 hover:text-white"
              >
                <FiGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/kingsley-ebuka-dunu-a67102230/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="rounded-full border border-white/10 p-2 transition-colors hover:border-white/30 hover:text-white"
              >
                <FiLinkedin size={16} />
              </a>
              <a
                href="mailto:kingsleydunu@gmail.com"
                aria-label="Send Email"
                className="rounded-full border border-white/10 p-2 transition-colors hover:border-white/30 hover:text-white"
              >
                <FiMail size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dunu Ebuka Kingsley. All rights reserved.</p>

          <a
            href="#home"
            className="transition-colors hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
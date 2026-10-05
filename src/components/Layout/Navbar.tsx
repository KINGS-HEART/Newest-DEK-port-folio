import { useState, useEffect } from "react";
import ResumeModal from "../ui/ResumeModal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "experience", "blog", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-20">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-lg font-bold tracking-[-0.04em] text-white transition-opacity hover:opacity-70"
          >
            DUNU<span className="text-purple-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative text-xs font-medium tracking-wider uppercase transition-colors hover:text-white ${
                  activeSection === link.id
                    ? "text-purple-300 font-semibold"
                    : "text-white/60"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-purple-400" />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => setIsResumeOpen(true)}
              className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/90 transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-purple-300"
            >
              Resume
            </button>

            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black transition-all duration-300 hover:bg-white/90"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white md:hidden"
          >
            <span className="text-xl">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>

        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#050505]/95 px-6 py-6 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className={`text-sm tracking-wide transition-colors ${
                    activeSection === link.id
                      ? "font-semibold text-purple-300"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-2 flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    setIsResumeOpen(true);
                  }}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white hover:bg-white/10"
                >
                  View Resume
                </button>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black hover:bg-white/90"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Resume Modal Component */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}

export default Navbar;
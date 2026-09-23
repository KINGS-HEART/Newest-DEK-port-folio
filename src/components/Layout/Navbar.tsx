import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-20">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-bold tracking-[-0.04em] text-white transition-opacity hover:opacity-70"
        >
          DUNU<span className="text-white/40">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="relative text-sm text-white/60 transition-colors hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>

          <a
            href="#about"
            className="relative text-sm text-white/60 transition-colors hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>

          <a
            href="#skills"
            className="relative text-sm text-white/60 transition-colors hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="relative text-sm text-white/60 transition-colors hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="relative text-sm text-white/60 transition-colors hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>

        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:block"
        >
          Let's Talk
        </a>

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
          <div className="flex flex-col gap-5">

            <a
              href="#home"
              onClick={closeMenu}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 w-fit rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-white hover:bg-white hover:text-black"
            >
              Let's Talk
            </a>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
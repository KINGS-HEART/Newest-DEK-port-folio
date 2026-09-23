import { lazy, Suspense } from "react";
import { motion } from "motion/react";

const HeroCanvas = lazy(() => import("../Three/HeroCanvas"));

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 pt-20 text-white sm:px-10 lg:px-20"
    >
      {/* 3D Background */}
      <Suspense fallback={null}>
  <HeroCanvas />
</Suspense>

      {/* Background glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px] sm:h-[600px] sm:w-[600px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        
        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />

          <p className="text-xs uppercase tracking-[0.3em] text-white/50 sm:text-sm">
            Available for opportunities
          </p>
        </motion.div>

        {/* Profession */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-5 text-sm font-medium uppercase tracking-[0.4em] text-purple-300/70"
        >
          Frontend Engineer
        </motion.p>

        {/* Name */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.85] tracking-[-0.06em]"
        >
          DUNU
          <br />
          EBUKA
          <br />
          <span className="text-white/30">KINGSLEY</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="mt-10 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg"
        >
          I design and build modern digital experiences that combine
          thoughtful interfaces, smooth interactions and scalable frontend
          architecture using JavaScript, TypeScript and React.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#050505]"
          >
            View My Work →
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#050505]"
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/30"
        >
          <span className="h-px w-10 bg-white/20" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
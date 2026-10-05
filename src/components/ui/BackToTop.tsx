import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#0a0a12]/90 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-purple-400 hover:bg-purple-600/20 hover:text-purple-300 focus:outline-none"
        >
          {/* Progress Ring */}
          <svg className="absolute inset-0 h-full w-full -rotate-90 p-1" viewBox="0 0 36 36">
            <path
              className="text-white/10"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-purple-400 transition-all duration-150"
              strokeDasharray={`${scrollProgress}, 100`}
              strokeWidth="2.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>

          <FiArrowUp className="relative z-10 text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
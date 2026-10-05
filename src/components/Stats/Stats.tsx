import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface CounterProps {
  target: number;
  suffix?: string;
}

function Counter({ target, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // ms
    const incrementTime = 30; // ms
    const steps = duration / incrementTime;
    const stepValue = target / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Stats() {
  const stats = [
    {
      numericValue: 10,
      suffix: "+",
      label: "Projects Built",
    },
    {
      numericValue: 3,
      suffix: "+",
      label: "Years Learning & Building",
    },
    {
      numericValue: 12,
      suffix: "+",
      label: "Technologies Mastered",
    },
    {
      numericValue: 100,
      suffix: "%",
      label: "Passion for Development",
    },
  ];

  return (
    <section
      id="stats"
      aria-labelledby="stats-title"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-32 text-white sm:px-10 lg:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-150px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]"
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
            Statistics
          </p>

          <h2
            id="stats-title"
            className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-7xl"
          >
            My journey
            <br />
            <span className="text-white/30">in numbers.</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group relative min-h-[220px] overflow-hidden bg-[#080808] p-8 transition-all duration-500 hover:bg-white/[0.06]"
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-xs tracking-[0.25em] text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="h-2 w-2 rounded-full border border-white/20 transition-all duration-300 group-hover:scale-150 group-hover:border-purple-300/60" />
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-5xl font-bold tracking-[-0.05em] text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-6xl">
                  <Counter target={stat.numericValue} suffix={stat.suffix} />
                </p>

                <p className="mt-4 max-w-[160px] text-sm leading-relaxed text-white/40 transition-colors duration-300 group-hover:text-white/60">
                  {stat.label}
                </p>

                <div className="mt-5 h-px w-0 bg-white/40 transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex items-center gap-4 text-sm text-white/30"
        >
          <span className="h-px w-12 bg-white/10" />
          Growing through every project.
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;
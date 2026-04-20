"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

type StatItem = {
  value: string;
  label: string;
  detail: string;
};

type StatsShowcaseProps = {
  stats: StatItem[];
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function StatsShowcase({ stats }: StatsShowcaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-surface-dark px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={containerVariants}
          className="relative overflow-hidden rounded-section border border-white/8 bg-surface-dark-2"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,71,10,0.13),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_32%)]"
            aria-hidden="true"
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rounded-full bg-brand/12 blur-3xl"
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, -18, 0],
                    y: [0, 14, 0],
                    opacity: [0.5, 0.9, 0.5],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.35fr]">
            <motion.div
              variants={itemVariants}
              className="relative border-b border-white/8 p-8 md:border-b-0 md:border-r md:p-10"
            >
              <motion.div
                aria-hidden="true"
                className="absolute left-8 top-0 h-px bg-brand/80 md:left-10"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="text-white/70">
                <SectionLabel>Proof In The Work</SectionLabel>
              </div>
              <h2 className="mt-5 max-w-md font-heading text-[30px] font-bold leading-[1.08] text-white md:text-[44px]">
                Small team. Fast hands. Clean delivery.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/58">
                You do not need a bloated agency. You need people who listen,
                move quickly, and ship work that looks sharp and works the way
                it should.
              </p>

              <motion.div
                className="mt-8 space-y-3"
                variants={containerVariants}
              >
                {[
                  {
                    title: "Clear communication",
                    detail: "You always know what is happening, what is next, and what we need from you.",
                  },
                  {
                    title: "No jargon, no confusion",
                    detail: "Straight updates, sharp feedback, and a handoff you can actually use.",
                  },
                ].map((point) => (
                  <motion.div
                    key={point.title}
                    variants={itemVariants}
                    className="group flex items-start gap-4 rounded-card border border-white/8 bg-white/3 px-4 py-4 transition-colors duration-200 hover:border-brand/28 hover:bg-white/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/22 bg-brand/10">
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-brand"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold tracking-[-0.02em] text-white">
                        {point.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/52">
                        {point.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 gap-px bg-white/8 md:grid-cols-2 md:grid-rows-2"
            >
              {stats.map((stat, index) => (
                <motion.article
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -4, backgroundColor: "rgba(47, 51, 64, 1)" }
                  }
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className={`group relative flex h-full flex-col justify-between overflow-hidden bg-surface-dark px-8 py-8 md:px-10 md:py-10 ${
                    index === 0 ? "md:row-span-2" : ""
                  }`}
                >
                  <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0"
                    whileHover={
                      reduceMotion ? undefined : { opacity: 1 }
                    }
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(232,71,10,0.12), transparent 36%)",
                    }}
                  />
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-y-6 left-0 w-px bg-brand/0"
                    whileHover={
                      reduceMotion ? undefined : { backgroundColor: "rgba(232,71,10,0.72)" }
                    }
                    transition={{ duration: 0.24, ease: "easeOut" }}
                  />

                  <div className="relative z-10 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                    <motion.span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-brand"
                      animate={
                        reduceMotion
                          ? undefined
                          : { scale: [1, 1.45, 1], opacity: [0.8, 1, 0.8] }
                      }
                      transition={{
                        duration: 2.4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.24,
                      }}
                    />
                    Devzoo Standard
                  </div>

                  <div className="relative z-10 mt-8">
                    <motion.p
                      className="font-heading text-[3rem] font-extrabold leading-none text-white md:text-[4.25rem]"
                      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.12 + index * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {stat.value}
                    </motion.p>
                    <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/48">
                      {stat.label}
                    </h3>
                    <motion.div
                      aria-hidden="true"
                      className="mt-4 h-px origin-left bg-white/10"
                      initial={{ scaleX: 0.18 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{
                        duration: 0.65,
                        delay: 0.2 + index * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
                      {stat.detail}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

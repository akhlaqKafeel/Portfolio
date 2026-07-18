"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionSpotlight } from "@/components/effects/SceneAtmosphere";
import { cn } from "@/lib/utils";

const companyMeta: Record<
  string,
  { initials: string; tech: string[]; color: string }
> = {
  "Hatim Technologies": {
    initials: "HT",
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    color: "#7A91A7",
  },
  "Hamari Dairy": {
    initials: "HD",
    tech: ["React.js", "Node.js", "Express.js", "SQL"],
    color: "#8C734A",
  },
};

export function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="section-md section-fade relative">
      <SectionSpotlight side="right" />
      <div className="container-premium relative z-[1]">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Shipped in
              <span className="text-gradient"> production.</span>
            </>
          }
          description="My roles at Hatim Technologies and Hamari Dairy — building and maintaining live software."
        />

        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-gradient-to-b from-accent/50 via-white/40 to-transparent md:left-8 md:block" />

          <div className="space-y-5 md:space-y-6">
            {experience.map((job, i) => {
              const meta = companyMeta[job.company];
              const isOpen = active === i;

              return (
                <Reveal key={job.company} delay={i * 0.08}>
                  <article
                    className={cn(
                      "relative md:pl-20",
                      "transition-all duration-500"
                    )}
                  >
                    {/* Node */}
                    <button
                      type="button"
                      aria-label={`Select ${job.company}`}
                      onClick={() => setActive(i)}
                      className={cn(
                        "absolute top-8 left-4 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 transition-all duration-300 md:left-8 md:block",
                        isOpen
                          ? "border-accent bg-accent shadow-[0_0_14px_var(--glow)] scale-125"
                          : "border-border-subtle bg-heading hover:border-accent/60"
                      )}
                    />

                    <motion.button
                      type="button"
                      onClick={() => setActive(i)}
                      layout
                      className={cn(
                        "group w-full overflow-hidden rounded-3xl border text-left transition-all duration-500",
                        isOpen
                          ? "border-accent/30 bg-soft shadow-[0_0_60px_-20px_var(--glow)]"
                          : "border-border-subtle bg-soft hover:border-border hover:bg-soft"
                      )}
                    >
                      <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:p-8">
                        <div
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border-subtle font-display text-lg font-bold text-foreground"
                          style={{
                            background: `linear-gradient(145deg, ${meta?.color}33, transparent)`,
                            boxShadow: isOpen
                              ? `0 0 32px ${meta?.color}44`
                              : undefined,
                          }}
                        >
                          {meta?.initials}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                            <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                              {job.role}
                            </h3>
                            <span className="text-sm text-muted">
                              {job.period}
                            </span>
                          </div>
                          <p className="mt-1 text-base font-medium text-accent">
                            {job.company}
                          </p>
                          <p className="mt-1 text-sm text-muted">
                            {job.location}
                          </p>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/75">
                                  {job.description}
                                </p>

                                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                                  {job.highlights.map((item) => (
                                    <li
                                      key={item}
                                      className="flex items-start gap-2.5 rounded-xl border border-border-subtle bg-soft px-3.5 py-3 text-sm text-foreground/80"
                                    >
                                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>

                                <div className="mt-5 flex flex-wrap gap-2">
                                  {meta?.tech.map((t) => (
                                    <span
                                      key={t}
                                      className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent"
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {!isOpen && (
                            <p className="mt-3 text-sm text-muted/70">
                              Click to expand · Production highlights
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.button>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

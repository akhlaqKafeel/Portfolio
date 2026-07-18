"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionSpotlight } from "@/components/effects/SceneAtmosphere";

export function Skills() {
  return (
    <section id="skills" className="section-tight section-fade relative overflow-hidden">
      <SectionSpotlight side="right" />
      <div className="container-premium relative z-[1]">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              What I&apos;m
              <span className="text-gradient"> good at.</span>
            </>
          }
          description="The skills I use daily on real projects — frontend, backend, APIs, and databases."
          align="center"
        />

        <Stagger className="mx-auto flex max-w-4xl flex-wrap items-stretch justify-center gap-3 md:gap-4">
          {skills.map((skill, i) => (
            <StaggerItem key={skill.name} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]">
              <motion.div
                animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
                transition={{
                  duration: 5 + i * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass group relative h-full overflow-hidden rounded-[1.35rem] px-5 py-5"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--glow)]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-heading">
                  {skill.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {skill.description}
                </p>
                <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

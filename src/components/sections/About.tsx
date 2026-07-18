"use client";

import {
  aboutStory,
  education,
  experience,
  stats,
} from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionSpotlight } from "@/components/effects/SceneAtmosphere";

export function About() {
  return (
    <section id="about" className="section-tight section-fade relative">
      <SectionSpotlight side="left" />
      <div className="container-premium relative z-[1]">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Who I am
              <br />
              <span className="text-gradient">& what I build.</span>
            </>
          }
          description={aboutStory.intro}
        />

        <Stagger className="mb-8 grid grid-cols-2 gap-3 md:mb-10 md:grid-cols-4 md:gap-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glass group relative overflow-hidden rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 md:p-6">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
                <p className="font-display text-3xl font-bold text-heading md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
          <div className="space-y-3 lg:col-span-7">
            {aboutStory.body.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 20)} delay={i * 0.05}>
                <div className="glass rounded-2xl p-5 md:p-6">
                  <p className="text-base leading-relaxed text-foreground/80 md:text-[17px]">
                    {paragraph}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="glass relative overflow-hidden rounded-2xl p-5 md:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Now
                </p>
                <p className="mt-3 font-display text-xl font-semibold text-heading">
                  {experience[0].role}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {experience[0].company}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["React.js", "Next.js", "Node.js", "MongoDB"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs text-champagne"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="glass rounded-2xl p-5 md:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Education
                </p>
                <p className="mt-3 font-display text-lg font-semibold text-heading">
                  {education[0].school}
                </p>
                <p className="mt-1 text-sm text-muted">{education[0].detail}</p>
                <p className="mt-3 text-xs text-muted/80">{education[0].period}</p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="glass rounded-2xl p-5 md:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Previously
                </p>
                <p className="mt-3 font-medium text-heading">
                  {experience[1].role}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {experience[1].company} · {experience[1].period}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

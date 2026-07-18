"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import {
  aboutStory,
  education,
  experience,
  siteConfig,
  stats,
} from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionSpotlight } from "@/components/effects/SceneAtmosphere";
import { MagneticButton } from "@/components/ui/MagneticButton";

const journey = [
  {
    label: "Now",
    title: experience[0].role,
    meta: experience[0].company,
    detail: experience[0].period,
    active: true,
  },
  {
    label: "Previously",
    title: experience[1].role,
    meta: experience[1].company,
    detail: experience[1].period,
    active: false,
  },
  {
    label: "Education",
    title: education[0].detail.split(" · ")[0],
    meta: education[0].school,
    detail: education[0].period,
    active: false,
  },
] as const;

export function About() {
  const router = useRouter();
  const reduce = useReducedMotion();

  return (
    <section id="about" className="section-md section-fade relative overflow-hidden">
      <SectionSpotlight side="left" />

      {/* Soft gold wash */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 15% 30%, rgba(212,175,55,0.07), transparent 60%)",
        }}
      />

      <div className="container-premium relative z-[1]">
        {/* Main composition — heading + story left, image + journey right (aligned top) */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-20">
          {/* Left — heading + story */}
          <div>
            <Reveal className="mb-8 md:mb-10">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-accent">
                About
              </p>
              <h2 className="font-display text-[clamp(2.4rem,5.5vw,3.75rem)] font-bold leading-[1.02] tracking-tight text-heading">
                Who I am
                <br />
                <span className="text-gradient">& what I build.</span>
              </h2>
            </Reveal>

            <Reveal>
              <div className="relative mb-8 pl-5 md:pl-6">
                <span
                  className="absolute top-1 bottom-1 left-0 w-px"
                  style={{
                    background:
                      "linear-gradient(180deg, var(--accent), transparent)",
                  }}
                  aria-hidden
                />
                <p className="font-display text-xl font-medium leading-snug text-heading sm:text-2xl md:text-[1.65rem] md:leading-snug">
                  {aboutStory.intro}
                </p>
              </div>
            </Reveal>

            <div className="space-y-5 md:space-y-6">
              {aboutStory.body.map((paragraph, i) => (
                <Reveal key={paragraph.slice(0, 24)} delay={0.06 + i * 0.06}>
                  <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.28} className="mt-10 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 text-sm text-muted">
                <MapPin size={15} className="text-accent" strokeWidth={1.75} />
                <span>{siteConfig.location}</span>
              </div>
              <span className="hidden h-3 w-px bg-border-subtle sm:block" aria-hidden />
              <MagneticButton
                as="a"
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/contact", { scroll: false });
                }}
                className="border border-border-subtle bg-transparent px-5 py-2.5 text-sm text-foreground hover:border-accent/50 hover:text-heading"
              >
                Let&apos;s talk
                <ArrowUpRight size={14} />
              </MagneticButton>
            </Reveal>
          </div>

          {/* Right — portrait + journey */}
          <div className="relative">
            <Reveal delay={0.1}>
              <div className="relative mb-8 overflow-hidden rounded-[28px] border border-border">
                <div className="relative aspect-[16/11] sm:aspect-[5/3] lg:aspect-[4/3]">
                  <Image
                    src="/portrait.png"
                    alt={`${siteConfig.name} — portrait`}
                    fill
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover object-[center_20%]"
                    quality={88}
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, color-mix(in srgb, var(--background) 88%, transparent) 0%, transparent 55%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-5 sm:p-6">
                    <div>
                      <p className="font-display text-lg font-semibold text-heading">
                        {siteConfig.name}
                      </p>
                      <p className="mt-0.5 text-sm text-muted">
                        {siteConfig.title}
                      </p>
                    </div>
                    <span className="rounded-full border border-accent/30 bg-background/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-md">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Journey rail */}
            <Reveal delay={0.16}>
              <div className="relative pl-1">
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                  Journey
                </p>
                <ol className="relative space-y-0">
                  {/* Rail line */}
                  <span
                    className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-accent via-border to-transparent"
                    aria-hidden
                  />

                  {journey.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={reduce ? false : { opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{
                        delay: 0.1 + i * 0.1,
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative flex gap-4 pb-7 last:pb-0"
                    >
                      <span
                        className={`relative z-10 mt-1.5 flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full border ${
                          item.active
                            ? "border-accent bg-accent/20"
                            : "border-border-subtle bg-elevated"
                        }`}
                        aria-hidden
                      >
                        {item.active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        )}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                            {item.label}
                          </p>
                          {item.label === "Education" && (
                            <GraduationCap
                              size={12}
                              className="text-accent/70"
                              strokeWidth={1.75}
                            />
                          )}
                        </div>
                        <p className="mt-1.5 font-display text-base font-semibold text-heading sm:text-lg">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-sm text-muted">{item.meta}</p>
                        <p className="mt-1 text-xs text-muted/70">{item.detail}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats strip — one job: metrics, not card grid */}
        <Reveal delay={0.12} className="mt-14 md:mt-20">
          <div className="relative overflow-hidden rounded-[24px] border border-border">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--accent), transparent)",
                opacity: 0.55,
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(212,175,55,0.08), transparent 70%)",
              }}
              aria-hidden
            />
            <Stagger className="relative grid grid-cols-2 divide-y divide-border-subtle md:grid-cols-4 md:divide-x md:divide-y-0">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="group px-5 py-7 text-center transition-colors duration-300 hover:bg-soft sm:px-6 sm:py-8">
                    <p className="font-display text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.18em] text-muted sm:text-[11px]">
                      {stat.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projectMetrics, projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { ProjectImageCarousel } from "@/components/ui/ProjectImageCarousel";
import { SectionSpotlight } from "@/components/effects/SceneAtmosphere";
import { cn } from "@/lib/utils";

function ProjectShowcase({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const reversed = index % 2 === 1;
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 180,
    damping: 22,
  });

  const metrics =
    projectMetrics[project.title as keyof typeof projectMetrics] ?? [];

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <Reveal>
      <article
        className={cn(
          "grid items-center gap-10 lg:grid-cols-2 lg:gap-14",
          reversed && "lg:[&>*:first-child]:order-2"
        )}
      >
        {/* Browser mockup */}
        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
          }}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: 1200,
          }}
          className="relative"
        >
          <div
            className="pointer-events-none absolute -inset-8 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${project.accent}33, transparent 70%)`,
            }}
          />

          <div className="animated-border relative rounded-2xl p-[1px]">
            <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface">
              {/* Chrome bar */}
              <div className="flex items-center gap-2 border-b border-border-subtle bg-soft px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
                <div className="ml-3 flex-1 rounded-md border border-border-subtle bg-soft px-3 py-1 text-[10px] text-muted">
                  {project.liveUrl
                    ? project.liveUrl.replace(/^https?:\/\//, "")
                    : "confidential · private build"}
                </div>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden bg-elevated">
                <ProjectImageCarousel
                  images={project.images}
                  alt={project.title}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Featured Project 0{index + 1}
          </p>
          <h3 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {project.description}
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="glass rounded-xl px-3 py-3 text-center"
              >
                <p className="text-[10px] uppercase tracking-wider text-muted">
                  {m.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border-subtle bg-soft px-3 py-1.5 text-xs text-muted"
              >
                {t}
              </li>
            ))}
          </ul>

          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <MagneticButton
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient px-4 py-2 text-xs"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </MagneticButton>
              )}
              {project.githubUrl && (
                <MagneticButton
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border-subtle bg-soft text-foreground hover:bg-soft"
                >
                  <GitHubIcon size={14} />
                  GitHub
                </MagneticButton>
              )}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-lg section-fade relative">
      <SectionSpotlight side="center" />
      <div className="container-premium relative z-[1]">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Work I&apos;ve
              <br />
              <span className="text-gradient">shipped.</span>
            </>
          }
          description="Real production projects I've built and maintained — BetSea, Hamari Dairy, and a confidential invoice system."
        />

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, i) => (
            <ProjectShowcase key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

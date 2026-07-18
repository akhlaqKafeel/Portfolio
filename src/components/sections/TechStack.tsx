"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { techCategories, techStack } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionSpotlight } from "@/components/effects/SceneAtmosphere";
import {
  CssLogo,
  ExpressLogo,
  GitLogo,
  GithubLogo,
  HtmlLogo,
  JsLogo,
  MongoLogo,
  MySqlLogo,
  NextLogo,
  NodeLogo,
  PostmanLogo,
  ReactLogo,
  RestLogo,
  SqlLogo,
  VsCodeLogo,
} from "@/components/ui/TechLogos";

const logos: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "React.js": ReactLogo,
  "Next.js": NextLogo,
  "Node.js": NodeLogo,
  "Express.js": ExpressLogo,
  MongoDB: MongoLogo,
  MySQL: MySqlLogo,
  JavaScript: JsLogo,
  HTML5: HtmlLogo,
  CSS3: CssLogo,
  SQL: SqlLogo,
  Git: GitLogo,
  GitHub: GithubLogo,
  "Visual Studio Code": VsCodeLogo,
  Postman: PostmanLogo,
  "REST APIs": RestLogo,
};

function TechCard({
  tech,
  index,
}: {
  tech: (typeof techStack)[number];
  index: number;
}) {
  const Logo = logos[tech.name] ?? RestLogo;
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const rotateX = useSpring(0, { stiffness: 240, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 240, damping: 22 });
  const glow = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(201,162,39,0.18), transparent 55%)`;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    rotateX.set((y / rect.height - 0.5) * -6);
    rotateY.set((x / rect.width - 0.5) * 7);
  };

  const onLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <StaggerItem>
      <motion.div
        animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
        transition={{
          duration: 4.2 + (index % 5) * 0.35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.08,
        }}
        className="h-full"
      >
        <motion.article
          ref={ref}
          onMouseMove={onMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={onLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: 900,
          }}
          whileHover={{ y: -8, scale: 1.04 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="group relative flex h-full min-h-[176px] flex-col overflow-hidden rounded-[22px] border border-accent/15 bg-[#0A0A0A]/85 p-5 shadow-[0_18px_36px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl"
        >
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: glow }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(201,162,39,0.4), 0 0 28px -8px rgba(201,162,39,0.3)",
            }}
            aria-hidden
          />

          <div className="relative z-[1] flex flex-1 flex-col">
            <div className="mb-4 flex items-start justify-between gap-3">
              <motion.div
                animate={
                  hovered
                    ? { rotate: -8, scale: 1.08, filter: "brightness(1.15)" }
                    : { rotate: 0, scale: 1, filter: "brightness(1)" }
                }
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-2 transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-white/[0.07]"
              >
                <Logo className="h-6 w-6" />
              </motion.div>
              <span className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#E8D5A3]">
                {tech.category}
              </span>
            </div>

            <div className="mb-1 flex items-center gap-2">
              <h3 className="font-display text-[1.05rem] font-bold tracking-tight text-[#FFF8E7]">
                {tech.name}
              </h3>
              <span className="rounded-md bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-muted">
                {tech.tag}
              </span>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-[#A89F91]">
              {tech.description}
            </p>
          </div>
        </motion.article>
      </motion.div>
    </StaggerItem>
  );
}

export function TechStack() {
  return (
    <section
      id="tech"
      className="section-tight section-fade relative overflow-hidden"
    >
      <SectionSpotlight side="center" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 20%, rgba(201,162,39,0.06), transparent 70%)",
        }}
      />

      <div className="container-premium relative z-[1]">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              Tools that build
              <br />
              <span className="text-gradient">production software.</span>
            </>
          }
          description="Technologies I use every day to build scalable, high-performance web applications."
          align="center"
          className="mx-auto"
        />

        {/* Compact category labels */}
        <Stagger
          className="mx-auto mb-8 flex max-w-4xl flex-wrap items-center justify-center gap-2 md:mb-10 md:gap-3"
          stagger={0.05}
        >
          {techCategories.map((cat) => (
            <StaggerItem key={cat.label}>
              <div className="rounded-full border border-accent/15 bg-[#0A0A0A]/70 px-3.5 py-2 backdrop-blur-md">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                  {cat.label}
                </p>
                <p className="mt-0.5 text-xs text-muted">{cat.items}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Full-width balanced grid */}
        <Stagger
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
          stagger={0.05}
        >
          {techStack.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import {
  BookOpen,
  Boxes,
  BrainCircuit,
  Layers3,
  type LucideIcon,
} from "lucide-react";
import { whyMe } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionSpotlight } from "@/components/effects/SceneAtmosphere";
import { cn } from "@/lib/utils";

const icons: LucideIcon[] = [Layers3, Boxes, BookOpen, BrainCircuit];

function WhyCard({
  item,
  icon: Icon,
  index,
}: {
  item: (typeof whyMe)[number];
  icon: LucideIcon;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 22 });

  const glow = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, var(--glow), transparent 55%)`;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
    rotateX.set(py * -4);
    rotateY.set(px * 5);
  };

  const onLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <StaggerItem className={cn("min-h-[180px]", item.span)}>
      <motion.div
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
        whileHover={{ y: -6, rotateZ: index % 2 === 0 ? 0.6 : -0.6 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="group relative h-full overflow-hidden rounded-2xl border border-accent/15 bg-elevated/90 p-5 shadow-[0_20px_40px_-28px_var(--shadow-color)] backdrop-blur-xl md:p-6"
      >
        {/* Mouse-follow lighting */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glow }}
          aria-hidden
        />

        {/* Soft ambient edge */}
        <div
          className="pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500"
          style={{
            background: "var(--glow)",
            opacity: hovered ? 1 : 0.35,
          }}
          aria-hidden
        />

        {/* Animated border sheen */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow:
              "inset 0 0 0 1px var(--glow), 0 0 28px -10px var(--glow)",
          }}
          aria-hidden
        />

        <div className="relative z-[1] flex h-full flex-col">
          <div className="mb-4 flex items-start justify-between gap-3">
            <motion.div
              animate={hovered ? { rotate: -8, scale: 1.06 } : { rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent"
            >
              <Icon size={20} strokeWidth={1.75} />
            </motion.div>
            <span className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-champagne">
              {item.badge}
            </span>
          </div>

          <motion.h3
            animate={hovered ? { x: 3 } : { x: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            className="font-display text-xl font-bold tracking-tight text-heading md:text-[1.35rem]"
          >
            {item.title}
          </motion.h3>
          <p className="mt-2.5 max-w-md text-sm leading-relaxed text-muted md:text-[15px] md:leading-7">
            {item.description}
          </p>
        </div>
      </motion.div>
    </StaggerItem>
  );
}

export function WhyMe() {
  return (
    <section id="why" className="section-md section-fade relative">
      <SectionSpotlight side="center" />
      <div
        className="pointer-events-none absolute inset-0 -z-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 30%, var(--glow), transparent 70%)",
        }}
      />

      <div className="container-premium relative z-[1]">
        <SectionHeading
          eyebrow="Why Work With Me"
          title={
            <>
              How I
              <span className="text-gradient"> work.</span>
            </>
          }
          description="What you can expect when we build together — based on how I already work in production."
          align="center"
        />

        <Stagger
          className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
          stagger={0.1}
        >
          {whyMe.map((item, i) => (
            <WhyCard
              key={item.title}
              item={item}
              icon={icons[i] ?? Layers3}
              index={i}
            />
          ))}
        </Stagger>
      </div>
    </section>
  );
}

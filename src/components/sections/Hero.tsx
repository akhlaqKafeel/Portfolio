"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { useRef } from "react";
import { siteConfig } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AmbientLight } from "@/components/effects/AmbientLight";

const heroDescription =
  "I build scalable production-grade web applications with React, Next.js, Node.js and MongoDB.";

const techIcons = [
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "MongoDB", icon: MongoIcon },
  { name: "JavaScript", icon: JsIcon },
] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 50, damping: 18 });
  const springY = useSpring(my, { stiffness: 50, damping: 18 });
  const rx = useSpring(rotX, { stiffness: 80, damping: 18 });
  const ry = useSpring(rotY, { stiffness: 80, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px * 14);
    my.set(py * 10);
    rotX.set(py * -8);
    rotY.set(px * 10);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
    rotX.set(0);
    rotY.set(0);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-24 pb-10 md:pb-14"
    >
      {/* Cinematic atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 50% 60% at 75% 45%, rgba(201,162,39,0.14), transparent 55%),
            radial-gradient(ellipse 40% 35% at 20% 20%, rgba(255,248,230,0.03), transparent 50%),
            radial-gradient(circle at 50% 120%, rgba(140,115,74,0.12), transparent 45%)
          `,
        }}
      />
      <AmbientLight />

      {/* Grid + light rays */}
      <div className="grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-50" />
      {!reduce && (
        <>
          <motion.div
            className="pointer-events-none absolute -top-20 left-[15%] h-[60vh] w-px origin-top bg-gradient-to-b from-accent/40 via-accent/10 to-transparent"
            animate={{ opacity: [0.2, 0.55, 0.2], scaleY: [0.85, 1, 0.85] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute top-0 right-[28%] h-[50vh] w-px origin-top bg-gradient-to-b from-white/20 via-accent/10 to-transparent"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{
              duration: 10,
              delay: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden
          />
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="pointer-events-none absolute rounded-full border border-accent/15"
              style={{
                width: 180 + i * 140,
                height: 180 + i * 140,
                right: `${8 + i * 4}%`,
                top: `${18 + i * 6}%`,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 40 + i * 20,
                repeat: Infinity,
                ease: "linear",
              }}
              aria-hidden
            />
          ))}
        </>
      )}

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10">
        {/* Left — cinematic copy */}
        <div className="relative max-w-xl xl:max-w-2xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              Portfolio {new Date().getFullYear()}
            </span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 32, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,9vw,6rem)] font-bold leading-[0.92] tracking-tight"
          >
            <span className="text-white">{siteConfig.name.split(" ")[0]}</span>
            <br />
            <span className="text-gradient">{siteConfig.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 text-xl font-medium text-white/90"
          >
            {siteConfig.title}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            {heroDescription}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <MagneticButton
              as="a"
              href="#projects"
              className="btn-gradient"
            >
              View Projects
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton
              as="a"
              href={siteConfig.resumeUrl}
              download="Akhlaq_Kafel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent/40 bg-[#0A0A0A] text-[#E8D5A3] backdrop-blur-md hover:border-accent/70 hover:bg-accent/10"
            >
              <Download size={16} />
              Download Resume
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              className="border border-accent/25 bg-transparent text-[#E8D5A3]/90 hover:border-accent/50 hover:text-[#FFF8E7]"
            >
              <Mail size={16} />
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-14"
          >
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.24em] text-muted">
              Tech Stack
            </p>
            <ul className="flex flex-wrap items-center gap-5">
              {techIcons.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 text-white/40 transition-colors hover:text-white/80"
                  title={name}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden text-xs font-medium sm:inline">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right — luxury portrait showcase */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          {/* Spotlight */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(201,162,39,0.16), transparent 65%)",
            }}
            aria-hidden
          />

          <motion.div
            ref={frameRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="relative"
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={
                reduce
                  ? undefined
                  : {
                      y: {
                        duration: 6.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
            >
              <motion.div
                style={{
                  x: springX,
                  y: springY,
                  rotateX: rx,
                  rotateY: ry,
                  transformStyle: "preserve-3d",
                  perspective: 1200,
                }}
              >
            {/* Glass frame with animated border */}
            <div className="animated-border relative overflow-hidden rounded-[1.75rem] p-[1px]">
              <div className="glass-strong relative overflow-hidden rounded-[1.7rem] p-2 sm:p-3">
                {/* Reflection */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-20 h-1/3 rounded-t-[1.5rem] bg-gradient-to-b from-white/[0.1] to-transparent"
                  aria-hidden
                />

                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                  <Image
                    src="/portrait.png"
                    alt={`${siteConfig.name} — professional portrait`}
                    fill
                    priority
                    quality={92}
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover object-[center_18%]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(5,5,5,0.78) 0%, transparent 42%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                    <p className="font-display text-sm font-semibold text-[#FFF8E7]">
                      Building products that feel premium.
                    </p>
                    <p className="mt-1 text-xs text-[#E8D5A3]/70">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating glass chips */}
            <motion.div
              className="glass absolute -left-3 top-[18%] hidden rounded-xl px-3 py-2 sm:block"
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-[10px] uppercase tracking-wider text-muted">
                Focus
              </p>
              <p className="text-xs font-medium text-white">Full-Stack</p>
            </motion.div>
            <motion.div
              className="glass absolute -right-2 bottom-[28%] hidden rounded-xl px-3 py-2 sm:block"
              animate={reduce ? undefined : { y: [0, 6, 0] }}
              transition={{
                duration: 5.5,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-[10px] uppercase tracking-wider text-muted">
                Status
              </p>
              <p className="text-xs font-medium text-accent">Open to work</p>
            </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ReactIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

function NextIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5h-1.7l-4.3-6.2v6.2H8.8V7.5h1.8l4.2 6.1V7.5h1.7v9z" />
    </svg>
  );
}

function NodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 1.6 3.5 6.5v11l8.5 4.9 8.5-4.9v-11L12 1.6zm0 2.3 6.5 3.75v.2l-6.5 3.75L5.5 7.85l6.5-3.95zm-7 5.7 6.2 3.55v6.85L5 16.95V9.6zm8 10.4V13.15L19 9.6v7.35l-6 3.05z" />
    </svg>
  );
}

function MongoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.3 2.1c-.2 1.6-.7 3-1.5 4.3-.9 1.5-1.5 3.1-1.5 4.9 0 2.2.8 3.9 2.2 5.6.3.4.5.8.5 1.3v1.6c0 .2 0 .3.2.4h.2c.1 0 .2-.1.2-.3l.1-1.8c0-.4.2-.8.5-1.1 1.5-1.8 2.3-3.7 2.3-5.9 0-2.7-1.1-5.1-2.9-7.1-.2-.2-.3-.5-.3-.9zm-.5 18.7c-.3 0-.5.1-.5.3 0 .3.4.7.5 1 .1-.3.5-.7.5-1 0-.2-.2-.3-.5-.3z" />
    </svg>
  );
}

function JsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M3 3h18v18H3V3zm10.2 14.2c0 2-1.2 2.9-2.9 2.9-1.5 0-2.5-.8-3-1.7l1.6-1c.3.5.6.9 1.3.9.7 0 1.1-.3 1.1-1.3v-5.7h1.9v5.9zm4.6 2.9c-1.8 0-3-.9-3.5-2.1l1.6-1c.3.6.8 1.1 1.7 1.1.7 0 1.2-.4 1.2-.9 0-.6-.5-.9-1.4-1.3l-.5-.2c-1.4-.6-2.3-1.4-2.3-3 0-1.5 1.1-2.6 2.9-2.6 1.3 0 2.2.4 2.9 1.6l-1.6 1c-.3-.5-.7-.7-1.3-.7-.6 0-.9.3-.9.7 0 .5.3.7 1.2 1.1l.5.2c1.6.7 2.5 1.5 2.5 3.2 0 1.8-1.4 2.9-3.3 2.9z" />
    </svg>
  );
}

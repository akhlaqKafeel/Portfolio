"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Download,
  Mail,
  Rocket,
  Trophy,
} from "lucide-react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/data/portfolio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import {
  JsLogo,
  MongoLogo,
  NextLogo,
  NodeLogo,
  ReactLogo,
} from "@/components/ui/TechLogos";

const GOLD = "#D4AF37";

const heroDescription =
  "I build scalable production-grade web applications with React, Next.js, Node.js and MongoDB.";

const techIcons = [
  { name: "React", icon: ReactLogo },
  { name: "Next.js", icon: NextLogo },
  { name: "Node.js", icon: NodeLogo },
  { name: "MongoDB", icon: MongoLogo },
  { name: "JavaScript", icon: JsLogo },
] as const;

const stats = [
  { icon: Rocket, value: "2+", label: "Years Experience" },
  { icon: Code2, value: "15+", label: "Projects Delivered" },
  { icon: Trophy, value: "100%", label: "Client Satisfaction" },
] as const;

const stars = [
  { top: "12%", left: "8%", size: 1.5, delay: 0 },
  { top: "22%", left: "38%", size: 1, delay: 1.2 },
  { top: "18%", left: "72%", size: 1.5, delay: 0.4 },
  { top: "48%", left: "6%", size: 1, delay: 2.1 },
  { top: "58%", left: "28%", size: 1.5, delay: 0.8 },
  { top: "70%", left: "55%", size: 1, delay: 1.6 },
  { top: "35%", left: "92%", size: 1.5, delay: 0.2 },
  { top: "78%", left: "88%", size: 1, delay: 2.4 },
  { top: "85%", left: "18%", size: 1.5, delay: 1.1 },
  { top: "42%", left: "48%", size: 1, delay: 1.9 },
] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.08 + i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Hero() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const rx = useSpring(rotX, { stiffness: 120, damping: 20 });
  const ry = useSpring(rotY, { stiffness: 120, damping: 20 });

  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const px = useSpring(parallaxX, { stiffness: 40, damping: 18 });
  const py = useSpring(parallaxY, { stiffness: 40, damping: 18 });
  const pxNeg = useTransform(px, (v) => -v);
  const pySoft = useTransform(py, (v) => v * 0.55);
  const pyNeg = useTransform(py, (v) => -v * 0.55);

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    rotX.set(ny * -2);
    rotY.set(nx * 2);
    parallaxX.set(nx * 12);
    parallaxY.set(ny * 10);
  };

  const onLeave = () => {
    rotX.set(0);
    rotY.set(0);
    parallaxX.set(0);
    parallaxY.set(0);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-12 lg:pb-16"
    >
      {/* Atmosphere — left gold glow ~10% */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 55% 50% at 22% 42%, rgba(212,175,55,0.10), transparent 60%),
            radial-gradient(ellipse 40% 45% at 78% 50%, rgba(212,175,55,0.06), transparent 55%),
            radial-gradient(circle at 50% 110%, rgba(212,175,55,0.05), transparent 40%)
          `,
        }}
      />

      {/* Faint grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* Tiny stars */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        {stars.map((s, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#D4AF37]"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              boxShadow: `0 0 ${s.size * 3}px ${GOLD}`,
            }}
            animate={
              reduce
                ? undefined
                : { opacity: [0.15, 0.85, 0.15], scale: [1, 1.4, 1] }
            }
            transition={{
              duration: 3.5 + (i % 3),
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Soft pulse glow behind left copy */}
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute left-[8%] top-[28%] -z-10 h-[42vmin] w-[42vmin] rounded-full blur-3xl"
          style={{ background: "rgba(212,175,55,0.10)" }}
          animate={{ opacity: [0.55, 1, 0.55], scale: [0.92, 1.05, 0.92] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
      )}

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-12 px-6 lg:grid-cols-[0.45fr_0.55fr] lg:gap-10 lg:px-10 xl:gap-14">
        {/* ── LEFT 45% ── */}
        <div className="relative max-w-[540px] lg:max-w-none">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-soft px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-55" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
              Portfolio 2026
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="relative"
          >
            <h1 className="font-display text-[clamp(3.25rem,8.5vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
              <span className="block text-heading">Akhlaq</span>
              <span className="text-gradient block">Kafel</span>
            </h1>

            <div className="mt-4 sm:absolute sm:top-[52%] sm:right-0 sm:mt-0 sm:translate-y-[-20%] lg:right-2 xl:right-8">
              <p className="font-script text-[1.75rem] italic leading-none text-champagne md:text-[2rem]">
                Code. Build. Scale.
              </p>
              <svg
                className="mt-1 h-3.5 w-[11rem] text-accent md:w-[13rem]"
                viewBox="0 0 180 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 9c32-7 62-9 92-5 28 4 54 7 84 1"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="mt-8 text-xl font-bold text-heading sm:mt-10 sm:text-[1.35rem]"
          >
            Full-Stack Software Developer
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="mt-4 max-w-[500px] text-base leading-relaxed text-muted sm:text-lg"
          >
            {heroDescription}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="mt-10 flex flex-wrap gap-3.5"
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <MagneticButton
                as="a"
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/projects", { scroll: false });
                }}
                className="btn-gold font-semibold"
              >
                View Projects
                <ArrowUpRight size={16} strokeWidth={2.25} />
              </MagneticButton>
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <MagneticButton
                as="a"
                href={siteConfig.resumeUrl}
                download="Akhlaq_Kafel_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border-subtle bg-elevated text-foreground backdrop-blur-md hover:border-accent/50 hover:bg-accent/10 hover:shadow-[0_0_24px_-8px_rgba(212,175,55,0.35)]"
              >
                <Download size={16} />
                Download Resume
              </MagneticButton>
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <MagneticButton
                as="a"
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/contact", { scroll: false });
                }}
                className="border border-border-subtle bg-transparent text-foreground hover:border-accent/50 hover:text-heading hover:shadow-[0_0_24px_-8px_rgba(212,175,55,0.3)]"
              >
                <Mail size={16} />
                Contact Me
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Tech stack glass card */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial={reduce ? false : "hidden"}
            animate="show"
            className="mt-12"
          >
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
              Tech Stack
            </p>
            <div className="inline-flex max-w-full items-stretch gap-2 overflow-x-auto rounded-[1.25rem] border border-border bg-soft p-3 backdrop-blur-xl sm:gap-2.5 sm:p-3.5">
              {techIcons.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex min-w-[4.5rem] flex-col items-center gap-2 rounded-xl border border-border-subtle bg-elevated px-3 py-3 sm:min-w-[5rem]"
                >
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  <span className="text-[10px] font-medium text-muted sm:text-[11px]">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT 55% ── */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.05,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[520px] lg:max-w-none lg:pl-4"
        >
          {/* Portrait glow pulse */}
          {!reduce && (
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{ background: "rgba(212,175,55,0.12)" }}
              animate={{ opacity: [0.45, 0.85, 0.45] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
          )}

          <div
            ref={frameRef}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="relative"
            style={{ perspective: 1200 }}
          >
            <motion.div
              style={{
                rotateX: rx,
                rotateY: ry,
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              {/* Portrait card — 30px radius, gold stroke */}
              <div className="animated-border relative overflow-hidden rounded-[30px] p-px shadow-[0_30px_80px_-28px_rgba(0,0,0,0.85),0_0_50px_-18px_rgba(212,175,55,0.35)]">
                <div className="relative overflow-hidden rounded-[29px] border border-[rgba(212,175,55,0.22)] bg-[#0a0a0a]/0.65] p-1.5 backdrop-blur-sm sm:p-2">
                  <div className="relative aspect-[6/7] overflow-hidden rounded-[24px]">
                    <Image
                      src="/portrait.png"
                      alt={`${siteConfig.name} — professional portrait`}
                      fill
                      priority
                      quality={92}
                      sizes="(max-width: 1024px) 90vw, 560px"
                      className="object-cover object-[center_16%]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(8,8,8,0.72) 0%, transparent 38%)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* FOCUS badge — top left */}
              <motion.div
                className="absolute -left-1 top-[10%] z-20 sm:-left-3 sm:top-[12%]"
                animate={reduce ? undefined : { y: [0, -7, 0] }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  style={{ x: px, y: pySoft }}
                  className="rounded-2xl border border-[rgba(212,175,55,0.22)] bg-black/55 px-3.5 py-2.5 backdrop-blur-xl"
                >
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Focus
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">
                    Full-Stack
                  </p>
                </motion.div>
              </motion.div>

              {/* VS Code snippet — middle left */}
              <motion.div
                className="absolute -left-2 top-[36%] z-20 hidden sm:block"
                animate={reduce ? undefined : { y: [0, 6, 0] }}
                transition={{
                  duration: 6.2,
                  delay: 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  style={{ x: pxNeg, y: pyNeg }}
                  className="w-[13.5rem] overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.2)] bg-[#0c0c0c]/90 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl md:w-[15rem]"
                >
                  <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
                    <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
                    <span className="ml-2 text-[9px] text-white/30">
                      developer.js
                    </span>
                  </div>
                  <pre className="overflow-x-auto p-3 font-mono text-[10px] leading-[1.65] md:text-[11px]">
                    <code>
                      <span style={{ color: GOLD }}>const</span>
                      <span className="text-white"> developer </span>
                      <span className="text-white/40">=</span>
                      <span className="text-white"> {"{"}</span>
                      {"\n"}
                      <span className="text-white/50">{"  "}</span>
                      <span style={{ color: GOLD }}>name</span>
                      <span className="text-white/40">:</span>
                      <span className="text-white">
                        {" "}
                        &quot;Akhlaq Kafel&quot;
                      </span>
                      <span className="text-white/40">,</span>
                      {"\n"}
                      <span className="text-white/50">{"  "}</span>
                      <span style={{ color: GOLD }}>role</span>
                      <span className="text-white/40">:</span>
                      <span className="text-white">
                        {" "}
                        &quot;Full-Stack Developer&quot;
                      </span>
                      <span className="text-white/40">,</span>
                      {"\n"}
                      <span className="text-white/50">{"  "}</span>
                      <span style={{ color: GOLD }}>passion</span>
                      <span className="text-white/40">:</span>
                      <span className="text-white">
                        {" "}
                        &quot;Building products&quot;
                      </span>
                      <span className="text-white/40">,</span>
                      {"\n"}
                      <span className="text-white/50">{"  "}</span>
                      <span style={{ color: GOLD }}>tech</span>
                      <span className="text-white/40">:</span>
                      <span className="text-white"> [</span>
                      <span className="text-white/80">&quot;React&quot;</span>
                      <span className="text-white/40">,</span>
                      {"\n"}
                      <span className="text-white/50">{"        "}</span>
                      <span className="text-white/80">&quot;Next.js&quot;</span>
                      <span className="text-white/40">,</span>
                      {"\n"}
                      <span className="text-white/50">{"        "}</span>
                      <span className="text-white/80">&quot;Node&quot;</span>
                      <span className="text-white/40">,</span>
                      {"\n"}
                      <span className="text-white/50">{"        "}</span>
                      <span className="text-white/80">&quot;MongoDB&quot;</span>
                      <span className="text-white">]</span>
                      {"\n"}
                      <span className="text-white">{"}"}</span>
                    </code>
                  </pre>
                </motion.div>
              </motion.div>

              {/* STATUS badge — mid right */}
              <motion.div
                className="absolute -right-1 top-[40%] z-20 sm:-right-3 sm:top-[42%]"
                animate={reduce ? undefined : { y: [0, 7, 0] }}
                transition={{
                  duration: 5.6,
                  delay: 0.45,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  style={{ x: pxNeg, y: pySoft }}
                  className="flex items-center gap-2.5 rounded-2xl border border-[rgba(212,175,55,0.2)] bg-black/55 px-3.5 py-2.5 backdrop-blur-xl"
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                      Status
                    </p>
                    <p className="text-sm font-semibold text-emerald-400">
                      Open to work
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Stats card — overlapping bottom */}
              <motion.div
                className="absolute inset-x-2 bottom-3 z-20 sm:inset-x-4 sm:bottom-4"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.65,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="relative overflow-hidden rounded-[24px] border border-[rgba(212,175,55,0.22)] bg-black/60 backdrop-blur-xl"
                  style={{
                    boxShadow: `0 -1px 0 0 rgba(212,175,55,0.45), 0 0 28px -10px rgba(212,175,55,0.28)`,
                  }}
                >
                  {/* Gold top glow */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                      boxShadow: `0 0 18px 2px rgba(212,175,55,0.35)`,
                    }}
                    aria-hidden
                  />
                  <div className="grid grid-cols-3 divide-x divide-white/[0.08]">
                    {stats.map(({ icon: Icon, value, label }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center gap-1 px-2 py-3.5 text-center sm:gap-1.5 sm:px-3 sm:py-4"
                      >
                        <Icon
                          className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                          style={{ color: GOLD }}
                          strokeWidth={1.75}
                        />
                        <p
                          className="font-display text-base font-bold leading-none sm:text-lg"
                          style={{ color: GOLD }}
                        >
                          {value}
                        </p>
                        <p className="text-[8px] leading-tight text-white/50 sm:text-[10px]">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

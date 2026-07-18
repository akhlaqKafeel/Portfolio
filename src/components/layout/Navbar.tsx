"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { getActiveSectionId } from "@/lib/scroll";
import { sectionIdToPath } from "@/lib/routes";
import { useSectionNav } from "@/lib/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const MotionLink = motion.create(Link);

function NavLink({
  label,
  href,
  active,
  onNavigate,
}: {
  label: string;
  href: string;
  active: boolean;
  onNavigate: (href: string) => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);
  const x = useSpring(0, { stiffness: 320, damping: 24, mass: 0.35 });
  const y = useSpring(0, { stiffness: 320, damping: 24, mass: 0.35 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) * 0.18;
    const dy = (e.clientY - rect.top - rect.height / 2) * 0.18;
    x.set(Math.max(-3.5, Math.min(3.5, dx)));
    y.set(Math.max(-2.5, Math.min(2.5, dy)) - 2.5);
  };

  return (
    <MotionLink
      ref={ref}
      href={href}
      scroll={false}
      prefetch={false}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(href);
      }}
      onMouseMove={onMove}
      onMouseEnter={() => {
        setHovered(true);
        y.set(-2.5);
      }}
      onMouseLeave={() => {
        setHovered(false);
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-full px-3.5 py-2 text-sm transition-[color] duration-[350ms] ease-in-out",
        active || hovered
          ? "font-medium text-champagne"
          : "font-normal text-muted"
      )}
      aria-current={active ? "page" : undefined}
    >
      <span
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full border backdrop-blur-md transition-all duration-[350ms] ease-in-out",
          hovered && !active
            ? "border-accent/25 bg-elevated/55 opacity-100 shadow-[0_0_18px_-6px_var(--glow)]"
            : "border-transparent bg-transparent opacity-0"
        )}
        aria-hidden
      />

      {active && (
        <motion.span
          layoutId="nav-active-pill"
          className="pointer-events-none absolute inset-0 rounded-full border border-accent/30 bg-accent/[0.08] shadow-[0_0_22px_-6px_var(--glow)] backdrop-blur-md"
          transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.6 }}
          aria-hidden
        />
      )}

      <span
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full transition-opacity duration-[350ms] ease-in-out",
          hovered || active ? "opacity-100" : "opacity-0"
        )}
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, var(--glow), transparent 70%)",
        }}
        aria-hidden
      />

      <span className="relative z-[1]">{label}</span>

      <span
        className="pointer-events-none absolute bottom-1 left-1/2 z-[1] h-[2px] -translate-x-1/2 rounded-full bg-accent transition-[width,box-shadow,opacity] duration-[350ms] ease-in-out"
        style={{
          width: hovered || active ? "58%" : "0%",
          opacity: hovered || active ? 1 : 0,
          boxShadow:
            hovered || active
              ? "0 0 10px 1px var(--glow), 0 0 18px var(--glow)"
              : "none",
        }}
        aria-hidden
      />
    </MotionLink>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const goToSection = useSectionNav();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(pathname);
  const [glowVisible, setGlowVisible] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowOpacity = useSpring(0, { stiffness: 200, damping: 28 });
  const navGlow = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, var(--glow), transparent 42%)`;

  const goTo = useCallback(
    (href: string) => {
      goToSection(href);
      setActive(href);
    },
    [goToSection]
  );

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // Highlight nav from scroll position only — does NOT change the URL
      setActive(sectionIdToPath(getActiveSectionId()));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onNavMove = (e: React.MouseEvent) => {
    const el = navRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    if (!glowVisible) {
      setGlowVisible(true);
      glowOpacity.set(1);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav
        ref={navRef}
        onMouseMove={onNavMove}
        onMouseLeave={() => {
          setGlowVisible(false);
          glowOpacity.set(0);
        }}
        className={cn(
          "relative mx-auto flex h-14 max-w-[1440px] items-center justify-between overflow-hidden rounded-2xl px-5 transition-all duration-500 md:h-16",
          scrolled || open
            ? "border border-border-subtle bg-elevated/80 shadow-[0_20px_50px_-30px_var(--shadow-color)] backdrop-blur-2xl"
            : "border border-transparent bg-transparent"
        )}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ background: navGlow, opacity: glowOpacity }}
          aria-hidden
        />

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden"
          aria-hidden
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-40" />
          <motion.div
            className="absolute top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-champagne/50 to-transparent"
            animate={{ left: ["-35%", "110%"] }}
            transition={{
              duration: 5.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 3.2,
            }}
          />
        </div>

        <Link
          href="/"
          scroll={false}
          prefetch={false}
          onClick={(e) => {
            e.preventDefault();
            goTo("/");
          }}
          className="relative z-[1] font-display text-lg font-bold tracking-tight text-foreground"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <ul className="relative z-[1] hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                label={link.label}
                href={link.href}
                active={active === link.href}
                onNavigate={goTo}
              />
            </li>
          ))}
        </ul>

        <div className="relative z-[1] hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <MagneticButton
            as="a"
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              goTo("/contact");
            }}
            className="border border-accent/30 bg-accent/10 px-5 py-2.5 text-champagne hover:bg-accent/15"
          >
            Let&apos;s talk
          </MagneticButton>
        </div>

        <div className="relative z-[1] flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-2 max-w-[1440px] rounded-2xl border border-border-subtle bg-elevated/95 p-6 backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll={false}
                    prefetch={false}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      goTo(link.href);
                    }}
                    className={cn(
                      "font-display text-2xl font-semibold transition-colors duration-300",
                      active === link.href ? "text-champagne" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

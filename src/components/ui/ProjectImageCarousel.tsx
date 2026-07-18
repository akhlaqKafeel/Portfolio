"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectImageCarouselProps = {
  images: readonly string[];
  alt: string;
  className?: string;
};

const AUTO_MS = 3000;
const SWIPE_OFFSET = 60;
const SWIPE_VELOCITY = 400;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "28%" : "-28%",
    opacity: 0,
    scale: 1.02,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "22%" : "-22%",
    opacity: 0,
    scale: 0.985,
  }),
};

export function ProjectImageCarousel({
  images,
  alt,
  className,
}: ProjectImageCarouselProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const count = images.length;
  const safeIndex = ((index % count) + count) % count;

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  const next = useCallback(() => {
    goTo(safeIndex + 1, 1);
  }, [goTo, safeIndex]);

  const prev = useCallback(() => {
    goTo(safeIndex - 1, -1);
  }, [goTo, safeIndex]);

  useEffect(() => {
    if (paused || reduce || count <= 1) return;
    const id = window.setInterval(next, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, reduce, count, next]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    dragging.current = false;
    const { offset, velocity } = info;
    if (offset.x < -SWIPE_OFFSET || velocity.x < -SWIPE_VELOCITY) {
      next();
    } else if (offset.x > SWIPE_OFFSET || velocity.x > SWIPE_VELOCITY) {
      prev();
    }
    // Resume autoplay on touch when pointer is not hovering
    const hovering = containerRef.current?.matches(":hover");
    if (!hovering) setPaused(false);
  };

  const stopTiltBleed = (e: ReactPointerEvent) => {
    e.stopPropagation();
  };

  if (count === 0) return null;

  return (
    <div
      ref={containerRef}
      className={cn("group/carousel relative h-full w-full select-none", className)}
      onPointerEnter={() => {
        setPaused(true);
        setHovered(true);
      }}
      onPointerLeave={() => {
        setPaused(false);
        setHovered(false);
      }}
      onPointerDown={stopTiltBleed}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${alt} screenshots`}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={safeIndex}
          custom={direction}
          variants={reduce ? undefined : slideVariants}
          initial={reduce ? false : "enter"}
          animate="center"
          exit={reduce ? undefined : "exit"}
          transition={{
            x: { type: "spring", stiffness: 280, damping: 32, mass: 0.7 },
            opacity: { duration: 0.35 },
            scale: { duration: 0.45 },
          }}
          drag={count > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragStart={() => {
            dragging.current = true;
            setPaused(true);
          }}
          onDragEnd={onDragEnd}
          className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
        >
          <motion.div
            className="relative h-full w-full"
            animate={{ scale: hovered && !dragging.current ? 1.03 : 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={images[safeIndex]}
              alt={`${alt} — screenshot ${safeIndex + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="pointer-events-none object-cover object-top"
              priority={safeIndex === 0}
              loading={safeIndex === 0 ? "eager" : "lazy"}
              quality={90}
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Soft vignette for depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10"
        aria-hidden
      />

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute top-1/2 left-2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/90 opacity-0 backdrop-blur-md transition-[opacity,border-color,background-color,color] duration-300 hover:border-accent/40 hover:bg-black/60 hover:text-[#7A91A7] group-hover/carousel:opacity-100 focus-visible:opacity-100 sm:left-3 sm:h-10 sm:w-10"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute top-1/2 right-2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/90 opacity-0 backdrop-blur-md transition-[opacity,border-color,background-color,color] duration-300 hover:border-accent/40 hover:bg-black/60 hover:text-[#7A91A7] group-hover/carousel:opacity-100 focus-visible:opacity-100 sm:right-3 sm:h-10 sm:w-10"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute inset-x-0 bottom-3 z-20 flex items-center justify-center gap-2">
            {images.map((_, i) => {
              const active = i === safeIndex;
              return (
                <button
                  key={images[i]}
                  type="button"
                  aria-label={`Go to screenshot ${i + 1}`}
                  aria-current={active}
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(i, i > safeIndex ? 1 : -1);
                  }}
                  className="group/dot relative flex h-4 w-4 items-center justify-center"
                >
                  <motion.span
                    className={cn(
                      "block rounded-full transition-colors",
                      active
                        ? "bg-accent shadow-[0_0_10px_var(--glow)]"
                        : "bg-muted/40 group-hover/dot:bg-muted/70"
                    )}
                    animate={{
                      width: active ? 18 : 7,
                      height: 7,
                    }}
                    transition={{ type: "spring", stiffness: 360, damping: 24 }}
                  />
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* Preload neighbors quietly */}
      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden>
        {images.map((src, i) =>
          i === 0 || i === safeIndex ? null : (
            <Image key={src} src={src} alt="" width={16} height={10} loading="lazy" />
          )
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};

export function SceneAtmosphere() {
  const reduce = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (reduce) return;
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.8 + 0.6,
        duration: Math.random() * 8 + 12,
        delay: Math.random() * 6,
      }))
    );
  }, [reduce]);

  const blobs = useMemo(
    () => [
      {
        className: "left-[-10%] top-[8%] h-[420px] w-[420px]",
        color: "rgba(201,162,39,0.07)",
        delay: "0s",
      },
      {
        className: "right-[-5%] top-[35%] h-[520px] w-[520px]",
        color: "rgba(140,115,74,0.08)",
        delay: "2s",
      },
      {
        className: "bottom-[5%] left-[30%] h-[380px] w-[380px]",
        color: "rgba(232,213,163,0.04)",
        delay: "4s",
      },
    ],
    []
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="atmosphere-base absolute inset-0" />

      {!reduce &&
        blobs.map((blob, i) => (
          <div
            key={i}
            className={`absolute rounded-full blur-3xl animate-drift ${blob.className}`}
            style={{
              background: blob.color,
              animationDelay: blob.delay,
            }}
          />
        ))}

      <div className="grid-overlay absolute inset-0 opacity-40" />

      {!reduce &&
        particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute atmosphere-particle rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: "rgba(232,213,163,0.85)",
              boxShadow: `0 0 ${p.size * 3}px rgba(201,162,39,0.4)`,
            }}
            animate={{
              opacity: [0.08, 0.45, 0.08],
              y: [0, -20, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
    </div>
  );
}

export function SectionSpotlight({
  side = "center",
}: {
  side?: "left" | "right" | "center";
}) {
  const position =
    side === "left"
      ? "20% 30%"
      : side === "right"
        ? "80% 40%"
        : "50% 0%";

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      aria-hidden
      style={{
        background: `radial-gradient(ellipse 55% 45% at ${position}, rgba(201,162,39,0.06), transparent 70%)`,
      }}
    />
  );
}

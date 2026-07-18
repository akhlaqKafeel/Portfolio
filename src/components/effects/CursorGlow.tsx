"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 120, damping: 28 });
  const springY = useSpring(y, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[40] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        x: springX,
        y: springY,
        opacity: visible ? 1 : 0,
        background:
          "radial-gradient(circle, rgba(201,162,39,0.1) 0%, transparent 68%)",
      }}
    />
  );
}

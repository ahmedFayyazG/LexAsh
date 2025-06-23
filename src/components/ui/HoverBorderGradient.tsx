"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState, useCallback } from "react";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<{
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
}> &
  React.HTMLAttributes<HTMLElement>) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = useCallback(
    (current: Direction): Direction => {
      const all: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
      const i = all.indexOf(current);
      return clockwise
        ? all[(i - 1 + all.length) % all.length]
        : all[(i + 1) % all.length];
    },
    [clockwise]
  );

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #f5e3aa 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #f5e3aa 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, #f5e3aa 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, #f5e3aa 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181% at 50% 50%, #ffecb3 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, rotateDirection, duration]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border border-[#d4af37] content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center justify-center overflow-visible p-px w-fit",
        containerClassName
      )}
      {...props}
    >
      {/* Text Layer with Gold Gradient */}
      <div
        className={cn(
          "px-6 py-2 font-semibold rounded-[inherit] z-10 text-transparent bg-clip-text",
          "bg-gradient-to-b from-[#cfc09f] via-[#ffecb3] to-[#3a2c0f]",
          className
        )}
      >
        {children}
      </div>

      {/* Animated Gold Aura */}
      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit]"
        style={{
          filter: "blur(3px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration }}
      />

      {/* Inner Shadow Layer */}
      <div className="bg-black absolute inset-[2px] rounded-[inherit] z-[-1]" />
    </Tag>
  );
}

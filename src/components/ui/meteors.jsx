"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const Meteors = ({ number = 20, className }) => {
  const meteors = Array.from({ length: number });

  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((_, idx) => {
        const leftPercent = ((idx + 0.5) / number) * 100;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 5;
        const startTop = -(20 + Math.random() * 200); // start above container

        return (
          <span
            key={`meteor-${idx}`}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] rotate-[45deg] transform -translate-x-1/2 bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: `${startTop}px`,
              left: `${leftPercent}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </motion.div>
  );
};
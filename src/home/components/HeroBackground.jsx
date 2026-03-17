import React from "react";
import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 dark:bg-primary/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px]"
      />

      {/* Modern Tech Shapes (SVGs) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.07]"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Decorative Circles */}
        <motion.circle
          animate={{ strokeDashoffset: [0, -100] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          cx="400"
          cy="400"
          r="300"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="10 20"
        />
        <motion.circle
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          cx="400"
          cy="400"
          r="200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5 15"
          style={{ originX: "400px", originY: "400px" }}
        />
      </svg>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg dark:to-slate-950 opacity-40" />
    </div>
  );
};

export default HeroBackground;

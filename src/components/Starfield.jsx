// src/components/Starfield.jsx

import { motion } from "framer-motion";
import { useMemo } from "react";

// Helper function to create a star object
const createStar = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  scale: Math.random() * 0.5 + 0.5, // 0.5 to 1.0
  duration: Math.random() * 2 + 1, // 1s to 3s
  delay: Math.random() * 2, // 0s to 2s
});

export default function Starfield() {
  // useMemo ensures the stars are only generated once
  const stars = useMemo(() => Array.from({ length: 50 }, createStar), []);

  return (
    <div className="fixed inset-0 -z-40" aria-hidden="true">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full star"
          style={{
            top: star.top,
            left: star.left,
            width: "2px",
            height: "2px",
          }}
          initial={{ opacity: 0, scale: star.scale }}
          animate={{ opacity: [0, 1, 0] }} // Twinkle effect
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

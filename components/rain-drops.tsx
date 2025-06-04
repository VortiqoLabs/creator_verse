"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Drop {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

export default function RainDrops() {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    const generateDrops = () => {
      const newDrops: Drop[] = [];
      for (let i = 0; i < 20; i++) {
        newDrops.push({
          id: i,
          x: Math.random() * 100, // Random x position (0-100%)
          delay: Math.random() * 5, // Random delay (0-5s)
          duration: 0.8 + Math.random() * 0.6, // Random duration (0.8-1.4s)
          size: 1 + Math.random() * 3, // Random size (1-4px)
        });
      }
      setDrops(newDrops);
    };

    generateDrops();
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute bottom-0 rounded-full bg-red-600"
          style={{
            left: `${drop.x}%`,
            width: `${drop.size}px`,
            height: `${drop.size}px`,
            opacity: 0.7,
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: [0, 0.7, 0],
            scale: [0.2, 1, 2.5, 0],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3 + Math.random() * 2,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      ))}

      {/* Splash effects */}
      {drops.map((drop) => (
        <motion.div
          key={`splash-${drop.id}`}
          className="absolute bottom-0 bg-red-500"
          style={{
            left: `${drop.x}%`,
            width: 1,
            height: 1,
            borderRadius: "50%",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 3, 0],
            opacity: [0, 0.5, 0],
            x: [0, (Math.random() > 0.5 ? 1 : -1) * (5 + Math.random() * 10)],
          }}
          transition={{
            duration: 0.5,
            delay: drop.delay + drop.duration - 0.1,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3 + Math.random() * 2,
          }}
        />
      ))}

      {/* Additional splash particles */}
      {drops.slice(0, 10).map((drop) => (
        <motion.div
          key={`splash2-${drop.id}`}
          className="absolute bottom-0 bg-red-400"
          style={{
            left: `${drop.x}%`,
            width: 1,
            height: 1,
            borderRadius: "50%",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 0.4, 0],
            x: [0, (Math.random() > 0.5 ? 1 : -1) * (3 + Math.random() * 8)],
            y: [0, -1 * (2 + Math.random() * 5), 0],
          }}
          transition={{
            duration: 0.5,
            delay: drop.delay + drop.duration - 0.1,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3 + Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

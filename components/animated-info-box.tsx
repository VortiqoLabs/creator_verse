"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface AnimatedInfoBoxProps {
  icon: React.ReactNode;
  text: string;
}

export default function AnimatedInfoBox({ icon, text }: AnimatedInfoBoxProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const initialParticles: Particle[] = [];
    for (let i = 0; i < 12; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: 1 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.4,
      });
    }
    setParticles(initialParticles);

    let animationFrameId: number;

    const animate = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;
          let newVx = particle.vx;
          let newVy = particle.vy;

          if (newX <= 0 || newX >= 100) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(100, newY));
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            opacity: 0.2 + Math.sin(Date.now() * 0.001 + particle.id) * 0.3,
          };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  // Calculate connections between nearby particles
  const connections = [];
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 25) {
        connections.push({
          x1: particles[i].x,
          y1: particles[i].y,
          x2: particles[j].x,
          y2: particles[j].y,
          opacity: Math.max(0, 0.3 - distance / 25),
        });
      }
    }
  }

  return (
    <div
      className="relative bg-white  border-gray-200 rounded-xl px-6 py-4 overflow-hidden shadow-lg cursor-pointer"
      onMouseMove={handleMouseMove}
    >
      {/* Particles Background */}
      <div className="absolute inset-0">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {connections.map((connection, index) => (
            <line
              key={index}
              x1={`${connection.x1}%`}
              y1={`${connection.y1}%`}
              x2={`${connection.x2}%`}
              y2={`${connection.y2}%`}
              stroke="#000000"
              strokeWidth="1"
              opacity={connection.opacity}
            />
          ))}
        </svg>

        {/* Particles */}
        {particles.map((particle) => {
          // Calculate repulsion from mouse
          const dx = particle.x - mousePos.x;
          const dy = particle.y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repulseDistance = 15;

          let offsetX = 0;
          let offsetY = 0;
          if (distance < repulseDistance && distance > 0) {
            const force = (repulseDistance - distance) / repulseDistance;
            offsetX = (dx / distance) * force * 3;
            offsetY = (dy / distance) * force * 3;
          }

          return (
            <motion.div
              key={particle.id}
              className="absolute bg-black rounded-full"
              style={{
                left: `${particle.x + offsetX}%`,
                top: `${particle.y + offsetY}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center space-x-3">
        <div className="text-black flex-shrink-0">{icon}</div>
        <span className="text-black font-semibold text-lg">{text}</span>
      </div>
    </div>
  );
}

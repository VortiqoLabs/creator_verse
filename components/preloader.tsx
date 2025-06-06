"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/public/images/logo.svg";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide preloader after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          {/* Decorative rotating circles */}
          <motion.div
            className="absolute w-64 h-64 rounded-full border-2 border-white/10"
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute w-80 h-80 rounded-full border-2 border-red-500/20"
            animate={{ rotate: -360 }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full border-2 border-white/5"
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Logo container */}
          <motion.div
            ref={logoRef}
            className="relative z-10 w-40 h-40 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1, 1.05, 1],
              opacity: [0, 1, 1, 1],
            }}
            transition={{
              duration: 2,
              times: [0, 0.3, 0.7, 1],
              ease: "easeOut",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src={Logo || "/placeholder.svg"}
                alt="Creator Verse Logo"
                width={150}
                height={150}
                priority
              />
            </motion.div>
          </motion.div>

          {/* Loading text */}
          <motion.div
            className="absolute bottom-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.p
              className="text-white text-lg font-medium tracking-wider"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              CREATORVERSE
            </motion.p>
            <motion.div
              className="mt-4 flex justify-center space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-red-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

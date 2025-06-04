"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#hero", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#agenda", label: "AGENDA" },
    { href: "#team", label: "TEAM" },
    { href: "#gallery", label: "GALLERY" },
    { href: "#faq", label: "FAQ" },
  ];

  const socialLinks = [
    { name: "INSTAGRAM", href: "#" },
    { name: "LINKEDIN", href: "#" },
    { name: "FACEBOOK", href: "#" },
    { name: "TWITTER", href: "#" },
  ];

  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      y: "0%",
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 50,
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  return (
    <>
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-white/10 z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="w-6 h-6 flex flex-col justify-center items-center"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6 },
            }}
            className="w-6 h-0.5 bg-white block transform origin-center transition-all duration-300"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="w-6 h-0.5 bg-white block mt-1.5 transition-all duration-300"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -6 },
            }}
            className="w-6 h-0.5 bg-white block mt-1.5 transform origin-center transition-all duration-300"
          />
        </motion.div>
      </Button>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-gradient-to-br from-black via-red-900/30 to-black z-40"
          >
            {/* Header */}

            {/* Main Content */}
            <div className="flex flex-col justify-between h-full pb-8">
              {/* Navigation Items */}
              <div className="flex-1 flex items-center">
                <div className="pl-8">
                  <nav className="space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        variants={itemVariants}
                        custom={index + 2}
                        initial="closed"
                        animate="open"
                      >
                        <a
                          href={item.href}
                          className="block text-white text-4xl md:text-6xl lg:text-8xl font-bold hover:text-red-400 transition-colors duration-300 leading-tight"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </a>
                      </motion.div>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

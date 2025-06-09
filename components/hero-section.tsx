"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  MapPin,
  Calendar,
  Clock,
  ChevronDown,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedInfoBox from "@/components/animated-info-box";
import logo from "@/public/images/logo.svg";
import heroImage from "@/public/images/hero.jpg";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu if clicked outside or escape key pressed
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Animation variants
  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const socialVariants = {
    closed: { y: 50, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30, delay: 0.3 },
    },
  };

  const overlayVariants = {
    closed: { opacity: 0, transition: { delay: 0.2 } },
    open: { opacity: 1 },
  };

  const socialIcons = [
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage || "/placeholder.svg"}
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50" />
      </div>

      {/* Header with centered logo */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="flex justify-between items-center max-w-full relative">
          {/* Empty div to balance the flex layout */}
          <div className="w-12"></div>

          {/* Centered Logo with animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-2"
          >
            <Image
              src={logo || "/placeholder.svg"}
              alt="Logo"
              width={100}
              height={100}
            />
          </motion.div>

          {/* Menu Button - Always visible on right */}
          <motion.button
            onClick={() => setIsMenuOpen(true)}
            className="text-white z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </header>

      {/* Slide-in Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              ref={menuRef}
              className="fixed top-0 right-0 w-4/5 sm:w-1/2 md:w-2/5 lg:w-1/3 bg-black h-full p-8 z-50 shadow-2xl border-l border-gray-700"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close Menu"
                variants={menuItemVariants}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Menu Content Container */}
              <div className="flex flex-col justify-between h-full pt-20 pb-8">
                {/* Menu Items */}
                <nav className="space-y-4">
                  {[
                    "ABOUT",
                    "AGENDA",
                    "SPEAKERS",
                    "GALLERY",
                    "FAQ",
                    "CONTACT",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      variants={menuItemVariants}
                      custom={index}
                    >
                      <motion.a
                        href={`#${item.toLowerCase()}`}
                        className="relative block text-2xl lg:text-7xl font-bold px-4 py-3 group text-white overflow-hidden"
                        whileHover={{ x: 10 }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {/* Background hover effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-lg"
                          initial={{ scaleX: 0, originX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Text with gradient effect */}
                        <span className="relative z-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-red-400 group-hover:to-red-600 transition-all duration-300">
                          {item}
                        </span>

                        {/* Underline effect */}
                        <motion.div
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-red-500 to-red-600"
                          initial={{ scaleX: 0, originX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    </motion.div>
                  ))}
                </nav>

                {/* Social Icons Section */}
                <motion.div variants={socialVariants} className="space-y-6">
                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />

                  {/* Social Icons */}
                  <div className="flex justify-center space-x-6">
                    {socialIcons.map(({ Icon, href, label }, index) => (
                      <motion.a
                        key={label}
                        href={href}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-red-600 hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        aria-label={label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <motion.div
                    className="text-center text-gray-400 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <p>Vortiqo Labs</p>
                    <p className="mt-1">074 123 4567</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="absolute bottom-0 left-0 right-0 pb-16 px-6">
        <div className="text-center text-white max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Buy Tickets
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatedInfoBox
              icon={<MapPin className="w-5 h-5 sm:w-6 sm:h-6" />}
              text="Colombo, Sri Lanka"
            />
            <AnimatedInfoBox
              icon={<Calendar className="w-5 h-5 sm:w-6 sm:h-6" />}
              text="June 01 - 02, 2025"
            />
            <AnimatedInfoBox
              icon={<Clock className="w-5 h-5 sm:w-6 sm:h-6" />}
              text="9:00 AM - 6:00 PM"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <ChevronDown className="w-8 h-8 mx-auto mt-8 animate-bounce text-white/80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gallery1 from "@/public/images/creators1.jpeg";
import gallery2 from "@/public/images/creators2.jpg";
import gallery3 from "@/public/images/creators3.jpeg";
import gallery4 from "@/public/images/food.jpg";

// Expanded gallery images array with more images
const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
];

export default function GallerySection() {
  // Track current image for each box separately
  const [currentImages, setCurrentImages] = useState([0, 1, 2, 3]);

  useEffect(() => {
    // Rotate images in each box at different intervals
    const intervals = [
      setInterval(() => {
        setCurrentImages((prev) => {
          const newImages = [...prev];
          newImages[0] = (newImages[0] + 4) % galleryImages.length;
          return newImages;
        });
      }, 5000),

      setInterval(() => {
        setCurrentImages((prev) => {
          const newImages = [...prev];
          newImages[1] = (newImages[1] + 4) % galleryImages.length;
          return newImages;
        });
      }, 6000),

      setInterval(() => {
        setCurrentImages((prev) => {
          const newImages = [...prev];
          newImages[2] = (newImages[2] + 4) % galleryImages.length;
          return newImages;
        });
      }, 7000),

      setInterval(() => {
        setCurrentImages((prev) => {
          const newImages = [...prev];
          newImages[3] = (newImages[3] + 4) % galleryImages.length;
          return newImages;
        });
      }, 8000),
    ];

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section id="gallery" className="bg-black py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-gray-400 mb-4 flex items-center">
              <div className="w-8 h-px bg-white mr-3"></div>
              Our Gallery
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Moments That Define{" "}
              <span className="text-gray-400">CreatorVerse</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Experience the energy, creativity, and connections that make
              CreatorVerse an unforgettable journey. From inspiring keynotes to
              collaborative workshops, every moment is designed to fuel your
              creative passion.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[0, 1, 2, 3].map((boxIndex) => (
              <div
                key={boxIndex}
                className="relative overflow-hidden rounded-lg aspect-square"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImages[boxIndex]}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={
                        galleryImages[currentImages[boxIndex]] ||
                        "/placeholder.svg"
                      }
                      alt={`Gallery image ${boxIndex + 1}`}
                      fill
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Subtle pulse animation to indicate interactivity */}
                <motion.div
                  className="absolute inset-0 border-2 border-white/0 rounded-lg"
                  animate={{
                    borderColor: [
                      "rgba(255,255,255,0)",
                      "rgba(255,255,255,0.3)",
                      "rgba(255,255,255,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

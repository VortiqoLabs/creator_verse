"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import gallery1 from "@/public/images/creators1.jpeg";
import gallery2 from "@/public/images/creators2.jpg";
import gallery3 from "@/public/images/creators3.jpeg";
import gallery4 from "@/public/images/food.jpg";

const galleryImages = [gallery1, gallery2, gallery3, gallery4];

export default function GallerySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
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
            {galleryImages.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg transition-all duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-70"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

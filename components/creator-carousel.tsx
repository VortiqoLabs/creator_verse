"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import kotImage from "@/public/images/kota.jpeg";
import maniya from "@/public/images/maniya.jpg";
import dilshan from "@/public/images/dilshan.png";
import lochi from "@/public/images/lochi.jpg";
import kaali from "@/public/images/kaali.jpeg";

const creators = [
  { id: 1, name: "Kota", image: kotImage },
  { id: 2, name: "Maniya", image: maniya },
  { id: 3, name: "Dilshan", image: dilshan },
  { id: 4, name: "Lochi", image: lochi },
  { id: 5, name: "Kaali", image: kaali },
];

export default function CreatorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % creators.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleCreators = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + creators.length) % creators.length;
      visible.push({
        ...creators[index],
        position: i,
        isCenter: i === 0,
      });
    }
    return visible;
  };

  return (
    <div className="flex items-center justify-center space-x-6 mt-12 px-4">
      {getVisibleCreators().map((creator, index) => {
        const { position, isCenter } = creator;

        // Calculate scale and opacity based on position
        let scale = 1;
        let opacity = 0.4;
        let zIndex = 1;

        if (isCenter) {
          scale = 1.4;
          opacity = 1;
          zIndex = 10;
        } else if (Math.abs(position) === 1) {
          scale = 1.1;
          opacity = 0.8;
          zIndex = 5;
        } else {
          scale = 0.9;
          opacity = 0.5;
          zIndex = 1;
        }

        return (
          <div
            key={`${creator.id}-${currentIndex}`}
            className="flex flex-col items-center transition-all duration-700 ease-in-out transform"
            style={{
              transform: `scale(${scale})`,
              opacity,
              zIndex,
            }}
          >
            <div className="relative group">
              <div className="relative overflow-hidden rounded-full border-4 border-red-500 shadow-2xl">
                <Image
                  src={creator.image || "/placeholder.svg"}
                  alt={creator.name}
                  width={140}
                  height={140}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Glow effect for center image */}
              {isCenter && (
                <div className="absolute inset-0 rounded-full border-4 border-red-500 shadow-red-500/50 shadow-2xl animate-pulse" />
              )}
            </div>

            <div
              className={`mt-4 text-center transition-all duration-700 ${
                isCenter ? "transform translate-y-0" : "transform translate-y-2"
              }`}
            >
              <p
                className={`font-semibold transition-all duration-700 ${
                  isCenter ? "text-white text-lg" : "text-gray-300 text-base"
                }`}
              >
                {creator.name}
              </p>
              {isCenter && (
                <div className="w-8 h-0.5 bg-red-500 mx-auto mt-2 transition-all duration-700" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

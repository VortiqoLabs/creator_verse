"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import kotImage from "@/public/images/kota.jpeg";
import maniya from "@/public/images/maniya.jpg";
import dilshan from "@/public/images/dilshan.png";

const creators = [
  { id: 1, name: "Kota", image: kotImage },
  { id: 2, name: "Maniya", image: maniya },
  { id: 3, name: "Dilshan", image: dilshan },
  { id: 4, name: "Kota", image: kotImage },
  { id: 5, name: "Maniya", image: maniya },
];

export default function CreatorCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % creators.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
      {creators.map((creator, index) => {
        const isCenter = index === currentIndex;
        const isVisible =
          index === currentIndex ||
          index === (currentIndex - 1 + creators.length) % creators.length ||
          index === (currentIndex + 1) % creators.length;

        if (!isVisible) return null;

        return (
          <div
            key={creator.id}
            className={`transition-all duration-500 ${
              isCenter ? "scale-125 opacity-100 z-10" : "scale-90 opacity-60"
            }`}
          >
            <div className="text-center">
              <div className="relative">
                <Image
                  src={creator.image || "/placeholder.svg"}
                  alt={creator.name}
                  width={isCenter ? 120 : 80}
                  height={isCenter ? 120 : 80}
                  className="rounded-full mx-auto border-4 border-red-500"
                />
              </div>
              <p className="text-white mt-2 font-medium">{creator.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

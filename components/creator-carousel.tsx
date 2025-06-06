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
  const [currentImages, setCurrentImages] = useState(creators);
  const [mobileCurrentIndex, setMobileCurrentIndex] = useState(0);

  // Function to shuffle array
  const shuffleArray = (array: typeof creators) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    // Desktop: Randomly shuffle all images
    const desktopInterval = setInterval(() => {
      setCurrentImages(shuffleArray(creators));
    }, 3000);

    // Mobile: Change single image randomly
    const mobileInterval = setInterval(() => {
      setMobileCurrentIndex(Math.floor(Math.random() * creators.length));
    }, 2500);

    return () => {
      clearInterval(desktopInterval);
      clearInterval(mobileInterval);
    };
  }, []);

  return (
    <div className="mt-16">
      {/* Desktop Layout - 5 boxes with random image swapping */}
      <div className="hidden md:flex items-end justify-center space-x-6 lg:space-x-8">
        {currentImages.map((creator, index) => {
          // Alternating height pattern: normal, higher, normal, higher, normal
          const isHigher = index % 2 === 1;

          return (
            <div
              key={`desktop-${index}`}
              className={`transition-all duration-700 ease-in-out ${
                isHigher ? "transform -translate-y-8" : ""
              }`}
            >
              <div className="group cursor-pointer">
                {/* Card Container */}
                <div className="relative overflow-hidden bg-gray-800 rounded-lg shadow-xl">
                  {/* Image */}
                  <div className="relative w-40 h-40">
                    <Image
                      src={creator.image || "/placeholder.svg"}
                      alt={creator.name}
                      fill
                      className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Name only - no title */}
                <div className="mt-4 text-center">
                  <h3 className="text-white text-lg font-bold">
                    {creator.name}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Layout - Single box with random image changes */}
      <div className="md:hidden flex flex-col items-center">
        <div className="group cursor-pointer">
          {/* Card Container */}
          <div className="relative overflow-hidden bg-gray-800 rounded-lg shadow-xl">
            {/* Image */}
            <div className="relative w-64 h-80">
              <Image
                src={creators[mobileCurrentIndex].image || "/placeholder.svg"}
                alt={creators[mobileCurrentIndex].name}
                fill
                className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Name only - no title */}
          <div className="mt-4 text-center">
            <h3 className="text-white text-xl font-bold">
              {creators[mobileCurrentIndex].name}
            </h3>
          </div>
        </div>
      </div>

      {/* Mobile Indicator Dots */}
      <div className="md:hidden flex justify-center mt-6 space-x-2">
        {creators.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === mobileCurrentIndex
                ? "bg-red-500 scale-125"
                : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

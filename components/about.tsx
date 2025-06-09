import React from "react";
import { SlideInFromLeft } from "./scroll-animations";

export default function About() {
  return (
    <div>
      <section id="about" className="relative bg-black py-10 z-10">
        <div className="container mx-auto px-6 lg:px-20">
          <SlideInFromLeft>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What is CreatorVerse?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
                CreatorVerse is the ultimate gathering for digital creators,
                innovators, and visionaries. Join us for two days of inspiring
                talks, hands-on workshops, and networking opportunities that
                will transform your creative journey. Connect with industry
                leaders, discover cutting-edge tools, and be part of the
                community that's shaping the future of digital creativity.
              </p>
            </div>
          </SlideInFromLeft>
        </div>
      </section>
    </div>
  );
}

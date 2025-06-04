"use client";

import { useState } from "react";

const features = [
  {
    id: "inspiration",
    title: "Inspiration",
    description:
      "Discover new ideas and creative approaches that will spark your imagination and drive your next breakthrough project.",
  },
  {
    id: "connection",
    title: "Connection",
    description:
      "Build meaningful relationships with fellow creators, industry leaders, and potential collaborators from around the world.",
  },
  {
    id: "opportunity",
    title: "Opportunity",
    description:
      "Unlock new career paths, business ventures, and creative partnerships that will elevate your professional journey.",
  },
  {
    id: "creation",
    title: "Creation",
    description:
      "Learn cutting-edge techniques, tools, and methodologies to bring your creative visions to life with greater impact.",
  },
];

export default function SubAboutSection() {
  const [selectedFeature, setSelectedFeature] = useState("inspiration");

  return (
    <section id="sub-about" className="bg-black py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="mb-12">
          <p className="text-xl text-gray-400">The Evolution of Creativity</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setSelectedFeature(feature.id)}
              className={`p-6 text-center transition-all duration-300 ${
                selectedFeature === feature.id
                  ? "bg-red-600 rounded-full scale-110"
                  : "bg-gray-800 rounded-lg hover:bg-gray-700"
              }`}
            >
              <h3 className="text-white font-semibold text-md lg:text-lg">
                {feature.title}
              </h3>
            </button>
          ))}
        </div>

        <div className="bg-gray-900 rounded-lg p-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            {features.find((f) => f.id === selectedFeature)?.description}
          </p>
        </div>
      </div>
    </section>
  );
}

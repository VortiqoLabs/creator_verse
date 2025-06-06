"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import AgendaStepper from "./agenda-stepper";
import kotImage from "@/public/images/kota.jpeg";
import maniya from "@/public/images/maniya.jpg";
import dilshan from "@/public/images/dilshan.png";
import lochi from "@/public/images/lochi.jpg";
import kaali from "@/public/images/kaali.jpeg";
import wildcook from "@/public/images/wildcookbook.jpeg";
import { FadeInWhenVisible, SlideInFromLeft } from "./scroll-animations";

interface AgendaItem {
  time: string;
  title: string;
  description: string;
  speaker?: {
    name: string;
    title: string;
    image: string;
  };
  panelists?: Array<{
    name: string;
    title: string;
    image: string;
  }>;
}

export default function AgendaSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const agendaItems: AgendaItem[] = [
    {
      time: "09:30-10:30 AM",
      title: "Opening Remarks",
      description:
        "Welcome to CreatorVerse. Kick off the day with an introduction from the event organizers and a sneak peek of what's in store.",
    },
    {
      time: "10:30-11:30 AM",
      title: "Keynote Address: Revolutionizing the Future with AI",
      description:
        "By Dr. Emma Parker, Chief AI Scientist at InnovateX Labs. Explore the transformative impact of artificial intelligence on creative industries.",
      speaker: {
        name: "Dr. Emma Parker",
        title: "Chief AI Scientist, InnovateX Labs",
        image: kotImage,
      },
    },
    {
      time: "12:30-01:30 PM",
      title: "Panel Discussion: AI in Action: Real-World Applications",
      description:
        "A lively discussion on how AI is being implemented in sectors like healthcare, finance, and logistics, with industry experts.",
      panelists: [
        {
          name: "Sara Williams",
          title: "AI Strategist, InnovateTech",
          image: maniya,
        },
        {
          name: "Ravi Singh",
          title: "Lead AI Engineer, MedTech Solutions",
          image: dilshan,
        },
        {
          name: "James Turner",
          title: "Senior Data Scientist, Quantum Analytics",
          image: wildcook,
        },
        {
          name: "Emily Roberts",
          title: "Director, AI Applications",
          image: kaali,
        },
      ],
    },
    {
      time: "02:00-03:00 PM",
      title: "Workshop: Building Your Creative Brand",
      description:
        "Hands-on session covering personal branding, content strategy, and audience engagement techniques.",
      speaker: {
        name: "Michael Chen",
        title: "Brand Strategist, Creative Labs",
        image: lochi,
      },
    },
  ];

  //   const handleScroll = () => {
  //     if (!sectionRef.current) return;

  //     const section = sectionRef.current;
  //     const sectionRect = section.getBoundingClientRect();
  //     const sectionTop = sectionRect.top;
  //     const sectionHeight = sectionRect.height;
  //     const windowHeight = window.innerHeight;

  //     // Calculate overall progress through the section
  //     const progress = Math.max(
  //       0,
  //       Math.min(
  //         1,
  //         (windowHeight - sectionTop) / (sectionHeight + windowHeight)
  //       )
  //     );
  //     setScrollProgress(progress);

  //     // Find which item is currently most visible
  //     let mostVisibleIndex = 0;
  //     let maxVisibility = 0;

  //     itemRefs.current.forEach((ref, index) => {
  //       if (!ref) return;

  //       const rect = ref.getBoundingClientRect();
  //       const itemTop = rect.top;
  //       const itemBottom = rect.bottom;
  //       const itemHeight = rect.height;

  //       // Calculate how much of the item is visible
  //       const visibleTop = Math.max(
  //         0,
  //         Math.min(itemHeight, windowHeight - itemTop)
  //       );
  //       const visibleBottom = Math.max(0, Math.min(itemHeight, itemBottom));
  //       const visibility = Math.min(visibleTop, visibleBottom) / itemHeight;

  //       if (visibility > maxVisibility) {
  //         maxVisibility = visibility;
  //         mostVisibleIndex = index;
  //       }
  //     });

  //     setActiveStep(mostVisibleIndex);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Initial call

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <section
      id="agenda"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-black via-red-600 to-black py-20"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <SlideInFromLeft>
          <div className="mb-12">
            <div className="text-sm text-gray-400 mb-4 flex items-center">
              <div className="w-8 h-px bg-white mr-3"></div>
              Event agenda
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Discover the Full CreatorVerse
            </h2>
            <h3 className="text-3xl md:text-4xl text-gray-400">
              Summit Event Agenda
            </h3>
          </div>
        </SlideInFromLeft>

        <FadeInWhenVisible>
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold lg:w-48">
              Kickoff
            </div>
            <div className="bg-gray-800 text-white px-6 py-3 rounded-lg flex-1">
              <h4 className="text-xl font-semibold">Day 1: Main Conference</h4>
            </div>
          </div>
        </FadeInWhenVisible>

        <div className="flex">
          {/* Stepper - Fixed height spanning the entire agenda content */}
          <div className="hidden lg:block w-16 relative">
            <div className="absolute top-0 bottom-0 left-0 right-0">
              <AgendaStepper
                steps={agendaItems.length}
                activeStep={activeStep}
                progress={scrollProgress}
              />
            </div>
          </div>

          {/* Agenda Items */}
          <div className="flex-1 space-y-8">
            {agendaItems.map((item, index) => (
              <FadeInWhenVisible key={index} delay={0.1 * index}>
                <div
                  ref={(el) => (itemRefs.current[index] = el)}
                  className="grid lg:grid-cols-4 gap-6 items-start min-h-[200px]"
                >
                  <div className="text-white font-medium text-lg">
                    {item.time}
                  </div>
                  <div className="lg:col-span-3 bg-gray-900 rounded-lg p-6">
                    <h4 className="text-white text-xl font-semibold mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.speaker && (
                      <div className="flex items-center space-x-4">
                        <Image
                          src={item.speaker.image || "/placeholder.svg"}
                          alt={item.speaker.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-white font-medium">
                            {item.speaker.name}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {item.speaker.title}
                          </p>
                        </div>
                      </div>
                    )}

                    {item.panelists && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                        {item.panelists.map((panelist, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3"
                          >
                            <Image
                              src={panelist.image || "/placeholder.svg"}
                              alt={panelist.name}
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                            <div>
                              <p className="text-white font-medium text-sm">
                                {panelist.name}
                              </p>
                              <p className="text-gray-400 text-xs">
                                {panelist.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

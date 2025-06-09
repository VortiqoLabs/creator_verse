import React from "react";
import { ScaleIn, SlideInFromLeft } from "./scroll-animations";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import team1 from "@/public/images/team1.jpg";
import team2 from "@/public/images/team2.jpg";
import team3 from "@/public/images/team3.jpg";
import team4 from "@/public/images/team4.jpeg";
import team5 from "@/public/images/team5.jpg";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Lochana Jaykodi",
      title: "Youtuber",
      image: team1,
    },
    {
      name: "Shanudrie Priyasad",
      title: "TikToker",
      image: team2,
    },
    {
      name: "WildCookBook",
      title: "Businessman",
      image: team3,
    },
    {
      name: "Kaali",
      title: "Youtuber",
      image: team4,
    },
    {
      name: "Maniya",
      title: "Streamer",
      image: team5,
    },
  ];

  return (
    <section id="team" className="relative bg-black py-20 z-10">
      <div className="container mx-auto px-6 lg:px-20">
        <SlideInFromLeft>
          <div className="mb-16">
            <div className="text-sm text-gray-400 mb-4 flex items-center">
              <div className="w-8 h-px bg-white mr-3"></div>
              Our Speakers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Esteemed Speakers
            </h2>
            <h3 className="text-2xl md:text-3xl text-gray-400">
              and Industry Thought Leaders
            </h3>
          </div>
        </SlideInFromLeft>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <ScaleIn key={index} delay={0.1 * index}>
              <div className="group">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Instagram className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Linkedin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <h4 className="text-white text-xl font-semibold mb-2">
                  {member.name}
                </h4>
                <p className="text-gray-400">{member.title}</p>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin,
  Calendar,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronDown,
} from "lucide-react";
import MobileMenu from "@/components/mobile-menu";
import CreatorCarousel from "@/components/creator-carousel";
import SubAboutSection from "@/components/sub-about-section";
import GallerySection from "@/components/gallery-section";
import {
  FadeInWhenVisible,
  SlideInFromLeft,
  SlideInFromRight,
  ScaleIn,
} from "@/components/scroll-animations";
import { motion } from "framer-motion";
import logo from "@/public/images/logo.svg";
import heroImage from "@/public/images/hero.jpg";
import team1 from "@/public/images/team1.jpg";
import team2 from "@/public/images/team2.jpg";
import team3 from "@/public/images/team3.jpg";
import team4 from "@/public/images/team4.jpeg";
import team5 from "@/public/images/team5.jpg";
import RainDrops from "@/components/rain-drops";
import AnimatedInfoBox from "@/components/animated-info-box";
import AgendaSection from "@/components/agenda-section";
import Preloader from "@/components/preloader";

export default function CreatorsMeetup() {
  const [showContent, setShowContent] = useState(false);

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

  const faqItems = [
    {
      question: "How can I register for CreatorVerse?",
      answer:
        "To register, simply visit our event website and complete the registration form. Once submitted, you'll receive a confirmation email with your ticket and event details. Early registration is recommended to secure your spot.",
    },
    {
      question: "Will the summit be available online for remote attendees?",
      answer:
        "Yes, we offer hybrid attendance options. Remote participants can join live streams of keynote sessions and selected workshops. Virtual networking opportunities are also available.",
    },
    {
      question: "What is the dress code for the event?",
      answer:
        "Business casual to smart casual attire is recommended. Comfortable shoes are suggested as there will be networking sessions and interactive workshops throughout the day.",
    },
    {
      question: "Can I submit my project or research for the summit?",
      answer:
        "We welcome project submissions and research presentations. Please submit your proposal through our website by the specified deadline for review by our selection committee.",
    },
    {
      question: "How can I become a sponsor or exhibitor at the event?",
      answer:
        "We offer various sponsorship packages and exhibition opportunities. Contact our partnerships team through the website for detailed information about available packages and benefits.",
    },
    {
      question: "Will there be opportunities for networking at the summit?",
      answer:
        "Yes, networking is a key component of CreatorVerse. We have dedicated networking sessions, interactive workshops, and social events designed to facilitate meaningful connections among attendees.",
    },
  ];

  useEffect(() => {
    // Show content after preloader
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3500);

    // Smooth scroll setup
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Preloader />
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen overflow-x-hidden"
        >
          <div className="min-h-screen">
            {/* Fixed Hero Section */}
            <section
              id="hero"
              className="fixed top-0 left-0 w-full h-screen z-0 overflow-x-hidden"
            >
              <div className="absolute inset-0">
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

              {/* Header */}
              <header className="absolute top-0 left-0 right-0 z-20 p-6">
                <div className="flex justify-between items-center relative max-w-full">
                  <div className="mt-10 absolute left-1/2 transform -translate-x-1/2">
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt="Logo"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="w-[100px]"></div>

                  <MobileMenu />
                </div>
              </header>

              {/* Hero Content - Moved to Bottom */}
              <div className="absolute bottom-0 left-0 right-0 pb-16 px-6">
                <div className="text-center text-white max-w-4xl mx-auto">
                  {/* Buy Tickets Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-8"
                  >
                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
                    >
                      Buy Tickets
                    </Button>
                  </motion.div>

                  {/* Info Boxes */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 text-sm sm:text-base lg:text-lg mb-8"
                  >
                    <AnimatedInfoBox
                      icon={<MapPin className="w-5 h-5 sm:w-6 sm:h-6" />}
                      text="San Francisco, CA"
                    />
                    <AnimatedInfoBox
                      icon={<Calendar className="w-5 h-5 sm:w-6 sm:h-6" />}
                      text="March 15-16, 2024"
                    />
                    <AnimatedInfoBox
                      icon={<Clock className="w-5 h-5 sm:w-6 sm:h-6" />}
                      text="9:00 AM - 6:00 PM"
                    />
                  </motion.div>

                  {/* Animated Scroll Down Arrow */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex justify-center"
                  >
                    <motion.button
                      onClick={scrollToAbout}
                      className="text-white hover:text-red-400 transition-colors cursor-pointer"
                      animate={{
                        y: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <ChevronDown className="w-8 h-8" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Content Container - This will scroll over the fixed hero */}
            <div className="relative">
              {/* Spacer to push content down past the hero */}
              <div className="h-screen"></div>

              {/* About Section - First section that overlays the hero */}
              <section id="about" className="relative bg-black py-10 z-10">
                <div className="container mx-auto px-6 lg:px-20">
                  <SlideInFromLeft>
                    <div className="mb-12">
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        What is CreatorVerse?
                      </h2>
                      <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
                        CreatorVerse is the ultimate gathering for digital
                        creators, innovators, and visionaries. Join us for two
                        days of inspiring talks, hands-on workshops, and
                        networking opportunities that will transform your
                        creative journey. Connect with industry leaders,
                        discover cutting-edge tools, and be part of the
                        community that's shaping the future of digital
                        creativity.
                      </p>
                    </div>
                  </SlideInFromLeft>
                </div>
              </section>

              {/* Sub About Section */}
              <section id="sub-about" className="relative bg-black z-10">
                <FadeInWhenVisible>
                  <SubAboutSection />
                </FadeInWhenVisible>

                <FadeInWhenVisible>
                  <CreatorCarousel />
                </FadeInWhenVisible>
              </section>

              {/* Agenda Section */}

              <AgendaSection />

              {/* Team Section */}
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

              {/* Gallery Section */}
              <section id="gallery" className="relative bg-black py-20 z-10">
                <FadeInWhenVisible>
                  <GallerySection />
                </FadeInWhenVisible>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="relative bg-black py-20 z-10">
                <div className="container mx-auto px-6 lg:px-20">
                  <div className="grid lg:grid-cols-2 gap-12">
                    <SlideInFromLeft>
                      <div>
                        <div className="text-sm text-gray-400 mb-4 flex items-center">
                          <div className="w-8 h-px bg-white mr-3"></div>
                          Questions
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                          All the Important Details
                        </h2>
                        <h3 className="text-3xl md:text-4xl text-gray-400">
                          Before Attending{" "}
                          <span className="text-white">CreatorVerse</span>
                        </h3>
                      </div>
                    </SlideInFromLeft>

                    <SlideInFromRight>
                      <div>
                        <Accordion
                          type="single"
                          collapsible
                          className="space-y-4"
                        >
                          {faqItems.map((item, index) => (
                            <AccordionItem
                              key={index}
                              value={`item-${index}`}
                              className="bg-gray-900 rounded-lg px-6 border-none"
                            >
                              <AccordionTrigger className="text-white hover:no-underline py-6">
                                {item.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-gray-300 pb-6">
                                {item.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </SlideInFromRight>
                  </div>
                </div>
                <RainDrops />
              </section>

              {/* Footer */}
              <footer className="relative bg-black z-10 border-t border-gray-800">
                <div className="container mx-auto px-6 lg:px-20 py-12">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <FadeInWhenVisible>
                      <div>
                        <h4 className="text-white text-lg mb-4">Social</h4>
                        <div className="flex space-x-4">
                          <div className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors">
                            <Facebook className="w-5 h-5 text-white" />
                          </div>
                          <div className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors">
                            <Instagram className="w-5 h-5 text-white" />
                          </div>
                          <div className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors">
                            <Linkedin className="w-5 h-5 text-white" />
                          </div>
                          <div className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors">
                            <Twitter className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </FadeInWhenVisible>

                    <FadeInWhenVisible delay={0.2}>
                      <div className="flex flex-wrap gap-4 my-8 md:my-0">
                        <Button
                          variant="outline"
                          className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
                        >
                          Speakers
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
                        >
                          Agenda
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
                        >
                          Venue
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
                        >
                          Contact
                        </Button>
                      </div>
                    </FadeInWhenVisible>
                  </div>

                  <FadeInWhenVisible delay={0.3}>
                    <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
                      <p>All copyrights @creatorverse</p>
                      <p>Terms and Conditions</p>
                      <p>Designed By CreatorVerse Team @creatorverse.com</p>
                    </div>
                  </FadeInWhenVisible>
                </div>
              </footer>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

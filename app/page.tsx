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
} from "lucide-react";
import MobileMenu from "@/components/mobile-menu";
import CreatorCarousel from "@/components/creator-carousel";
import SubAboutSection from "@/components/sub-about-section";
import GallerySection from "@/components/gallery-section";
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

  return (
    <>
      <Preloader />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-screen flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 z-10" />
          <Image
            src={heroImage}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />

          {/* Header */}
          <header className="absolute top-0 left-0 right-0 z-20 p-6">
            <div className="flex justify-between items-center relative">
              <div className="mt-10 absolute left-1/2 transform -translate-x-1/2">
                <Image src={logo} alt="Logo" width={100} height={100} />
              </div>

              <div className="w-[100px]"></div>

              <MobileMenu />
            </div>
          </header>

          {/* Hero Content */}
          <div className="relative z-20 text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              CreatorVerse 2025
            </h1>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg mb-8"
            >
              Buy Tickets
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <AnimatedInfoBox
                icon={<MapPin className="w-6 h-6" />}
                text="San Francisco, CA"
              />
              <AnimatedInfoBox
                icon={<Calendar className="w-6 h-6" />}
                text="March 15-16, 2024"
              />
              <AnimatedInfoBox
                icon={<Clock className="w-6 h-6" />}
                text="9:00 AM - 6:00 PM"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-black py-20">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="mb-12">
              <div className="text-sm text-gray-400 mb-4 flex items-center">
                <div className="w-8 h-px bg-white mr-3"></div>
                About CreatorVerse
              </div>
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

            <CreatorCarousel />
          </div>
        </section>

        {/* Sub About Section */}
        <SubAboutSection />

        {/* Agenda Section */}
        <AgendaSection />

        {/* Team Section */}
        <section id="team" className="bg-black py-20">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="mb-16">
              <div className="text-sm text-gray-400 mb-4 flex items-center ">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
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
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <GallerySection />

        {/* FAQ Section */}
        <section id="faq" className="relative bg-black py-20 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12">
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

              <div>
                <Accordion type="single" collapsible className="space-y-4">
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
            </div>
          </div>
          <RainDrops />
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800 ">
          <div className="container mx-auto px-6 lg:px-20 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
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

              <div className="flex flex-wrap gap-4 my-8 md:my-0">
                <Button
                  variant="outline"
                  className="bg-gray-800  text-white hover:bg-white/20 transition-colors"
                >
                  Speakers
                </Button>
                <Button
                  variant="outline"
                  className="bg-gray-800  text-white hover:bg-white/20 transition-colors"
                >
                  Agenda
                </Button>
                <Button
                  variant="outline"
                  className="bg-gray-800  text-white hover:bg-white/20 transition-colors"
                >
                  Venue
                </Button>
                <Button
                  variant="outline"
                  className="bg-gray-800  text-white hover:bg-white/20 transition-colors"
                >
                  Contact
                </Button>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
              <p>All copyrights @Vortiqo Labs</p>
              <p>Terms and Conditions</p>
              <p>Designed By Vortiqo Labs</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
``;

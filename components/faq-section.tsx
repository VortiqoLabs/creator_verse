import React from "react";
import { SlideInFromLeft, SlideInFromRight } from "./scroll-animations";
import { Accordion } from "@radix-ui/react-accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import RainDrops from "./rain-drops";

export default function FaqSection() {
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
          </SlideInFromRight>
        </div>
      </div>
      <RainDrops />
    </section>
  );
}

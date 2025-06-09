"use client";

import CreatorCarousel from "@/components/creator-carousel";
import SubAboutSection from "@/components/sub-about-section";
import GallerySection from "@/components/gallery-section";
import { FadeInWhenVisible } from "@/components/scroll-animations";
import AgendaSection from "@/components/agenda-section";
import About from "@/components/about";
import TeamSection from "@/components/team-section";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import { useState } from "react";
import Preloader from "@/components/preloader";
import HeroSection from "@/components/hero-section";

export default function CreatorsMeetup() {
  return (
    <>
      <Preloader />

      <div className="overflow-hidden">
        {/* <HeroSection /> */}
        <HeroSection />
        {/*About Section*/}
        <About />

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
        <TeamSection />

        {/* Gallery Section */}
        <section id="gallery" className="relative bg-black py-20 z-10">
          <FadeInWhenVisible>
            <GallerySection />
          </FadeInWhenVisible>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

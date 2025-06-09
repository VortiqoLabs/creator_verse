import React from "react";
import { FadeInWhenVisible } from "./scroll-animations";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
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
  );
}

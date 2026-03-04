import React from "react";
import starLogo from "../../../assets/images/star_logo_2-removebg-preview 1.png";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col-reverse items-center justify-center gap-10 md:flex-row md:gap-20">
      <ScrollAnimation variant="fade-right" delay={50}>
        <div className="flex flex-col items-center justify-center flex-1 gap-8 text-center">
          <h2 className="text-[#EFD830] font-bold text-3xl md:text-4xl lg:text-5xl">
            Reach The Stars
          </h2>
          <p className="text-lg font-bold text-white md:text-xl lg:text-xl max-w-lg leading-relaxed tracking-wider">
            Unlock your potential. Build your future. Lead with confidence.
          </p>

          <Button className="bg-primary hover:bg-[#683ce3] text-white text-lg px-8 py-7 rounded">
            Join Us
          </Button>
        </div>
      </ScrollAnimation>

      <ScrollAnimation variant="fade-left" delay={50}>
        <div className="flex justify-center md:justify-end items-center flex-1 w-full">
          <img
            src={starLogo}
            alt="Star Logo"
            className="object-contain  w-full"
          />
        </div>
      </ScrollAnimation>
    </div>
  );
}

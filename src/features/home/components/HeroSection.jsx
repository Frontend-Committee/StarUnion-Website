import React from "react";
import starLogo from "../../../assets/images/star_logo_2-removebg-preview 1.png";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse items-center justify-center h-auto gap-10 md:flex-row md:gap-20">
      <ScrollAnimation variant="fade-right" delay={50}>
        <div className="flex flex-col items-center justify-center flex-1 gap-8 text-center">
          <h2 className="text-[#EFD830] font-bold text-3xl md:text-4xl lg:text-5xl">
            Reach The Stars
          </h2>
          <p className="max-w-lg text-lg font-bold leading-relaxed tracking-wider text-white md:text-xl lg:text-xl">
            Unlock your potential. Build your future. Lead with confidence.
          </p>

          <Button className="bg-primary hover:bg-[#683ce3] text-white text-lg px-8 py-7 rounded mb-10 md:mb-0">
            Join Us
          </Button>
        </div>
      </ScrollAnimation>

      <ScrollAnimation variant="fade-left" delay={50}>
        <div className="flex items-center justify-center flex-1 w-full md:justify-end">
          <img
            src={starLogo}
            alt="Star Logo"
            className="object-contain w-full"
          />
        </div>
      </ScrollAnimation>
    </div>
  );
}

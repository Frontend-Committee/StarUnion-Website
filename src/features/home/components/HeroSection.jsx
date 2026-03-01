import React from "react";
import starLogo from "../../../assets/images/star_logo_2-removebg-preview 1.png";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col-reverse items-center justify-center gap-10 px-6 py-10 md:flex-row md:gap-60 md:px-20">
      <ScrollAnimation variant="fade-right">
        <div className="flex flex-col items-center justify-center flex-1 gap-5 text-center">
          <h2 className="text-[#EFD830] font-bold text-3xl md:text-4xl lg:text-6xl">
            Reach The Stars
          </h2>
          <p className="text-lg text-gray-300 md:text-xl lg:text-2xl max-w-lg leading-relaxed">
            Unlock your potential. Build your future. Lead with confidence.
          </p>

          <Button className="bg-primary hover:bg-[#683ce3] text-white text-xl px-8 py-7 rounded">
            Join Us
          </Button>
        </div>
      </ScrollAnimation>

      <ScrollAnimation variant="fade-left">
        <div className="flex justify-center md:justify-end items-center flex-1 p-4 md:p-8 w-full">
          <img src={starLogo} alt="Star Logo" className="object-contain  w-72" />
        </div>
      </ScrollAnimation>
    </div>
  );
}

import React from "react";
import starLogo from "../../../assets/images/star_logo_2-removebg-preview 1.png";
import { Button } from "@/components/ui/button";
import { motion as Motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-120px)] w-full py-10 md:py-0">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-[1200px] mx-auto gap-10 md:gap-20 lg:gap-24 px-6 md:px-8">
        
        {/* Left: Centered Text Content */}
        <ScrollAnimation variant="fade-right" delay={50} className="flex-1">
          <div className="flex flex-col items-center text-center gap-6 md:gap-8">
            <h1 className="text-[#FCDD00] font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
              Reach The Stars
            </h1>
            <p className="max-w-md text-lg md:text-xl lg:text-2xl font-medium leading-[1.4] text-white">
              Unlock your potential. Build your future. Lead with confidence.
            </p>

            <Button className="bg-[#7441ff] hover:bg-[#6335e3] text-white text-lg px-12 py-7 rounded-xl shadow-lg transition-all duration-300">
              Join Us
            </Button>
          </div>
        </ScrollAnimation>

        {/* Right: Large Floating Logo aligned right */}
        <ScrollAnimation variant="fade-left" delay={50} className="flex-1 w-full">
          <Motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center md:justify-end w-full"
          >
            <div className="relative group flex justify-center md:justify-end w-full">
              <img
                src={starLogo}
                alt="Star Union"
                className="relative object-contain w-[90%] md:w-full max-w-[550px] md:max-w-[650px] drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              />
            </div>
          </Motion.div>
        </ScrollAnimation>

      </div>
    </div>
  );
}

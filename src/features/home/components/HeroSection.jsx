import React from "react";
import starLogo from "../../../assets/images/star_logo_2-removebg-preview 1.png";
import { Button } from "@/components/ui/button";
import { motion as Motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="flex items-center  justify-center  md:min-h-[calc(100vh-140px)] w-full py-5 md:py-0 mb-24 md:mb-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-[1200px] mx-auto gap-10 md:gap-20 lg:gap-24 px-6 md:px-8">
        {/* Left: Centered Text Content */}
        <ScrollAnimation variant="fade-right" delay={50} className="flex-1">
          <div className="relative z-10 flex flex-col items-center gap-6 text-center md:gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#FCDD00] font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight drop-shadow-[0_0_20px_rgba(252,221,0,0.4)]"
            >
              Reach The Stars
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-md text-lg md:text-xl lg:text-2xl font-medium leading-[1.4] text-white"
            >
              Unlock your potential. Build your future. Lead with confidence.
            </motion.p>

            <Button className="bg-[#7441ff] hidden hover:bg-[#6335e3] text-white text-lg px-12 py-7 rounded-xl shadow-[0_0_25px_rgba(116,65,255,0.4)] hover:shadow-[0_0_15px_rgba(116,65,255,0.7)] hover:-translate-y-1 transition-all duration-300">
              Join Us
            </Button>
          </div>
        </ScrollAnimation>

        {/* Right: Large Floating Logo aligned right */}
        <ScrollAnimation
          variant="fade-left"
          delay={50}
          className="flex-1 w-full"
        >
          <Motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center w-full md:justify-end"
          >
            <div className="relative flex justify-center w-full group md:justify-end ">
              <img
                src={starLogo}
                alt="Star Union"
                className="relative object-contain w-[90%] md:w-full max-w-[550px] md:max-w-[650px] drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] "
              />
            </div>
          </Motion.div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

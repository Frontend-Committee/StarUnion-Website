import React from "react";
import starLogo from "../../../assets/images/star_logo_2-removebg-preview 1.png";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-20 py-10 px-6 md:px-20">
      
      <div className="flex flex-col justify-center items-center text-center md:text-left gap-5 flex-1">
        <h2 className="text-[#EFD830] font-bold text-4xl md:text-5xl">Reach The Stars</h2>
        <p className="text-lg md:text-xl text-gray-300">
          Unlock your potential. Build your future. Lead with confidence.
        </p>
        
        <Button className="bg-[#7A4BFF] hover:bg-[#683ce3] text-lg px-8 py-6 rounded">
          Join Us
        </Button>
      </div>

      <div className="p-4 md:p-8 flex-1 flex justify-center ">
        <img src={starLogo} alt="Star Logo" className="object-contain w-48 md:w-64" />
      </div>
    </div>
  );
}
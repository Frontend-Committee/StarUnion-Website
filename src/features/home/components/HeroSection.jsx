import React from "react";
import starLogo from "../../../assets/images/star_logo_2-removebg-preview 1.png";
import { Button } from "@/components/ui/button";
export default function HeroSection() {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-20">
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="text-[#EFD830] font-bold text-3xl">Reach The Stars</h2>
          <p className="text-lg">
            Unlock your potential. Build your future. Lead with confidence.
          </p>
          <Button className="bg-[#7A4BFF] text-lg p-5">Join Us</Button>
        </div>
        <div>
          <img src={starLogo} alt="Star Logo" />
        </div>
      </div>
      <div className="flex flex-col items-center about bg-[#7A4BFF] rounded-lg   p-8 mx-20">
        <h2 className="text-[#EFD830] font-bold text-3xl mb-5">About Us</h2>
        <p className="w-2/3 text-white text-xl">
          S.T.A.R Union is a student activity founded on September 9, 2023, with
          a specific focus on helping students in the field of technology,
          particularly computer science. Its primary goals include spreading
          awareness and encouragement regarding micro-business development and
          the concept of startups among students and will achieve these goals
          through various activities, such as workshops and events.
        </p>
      </div>
    </>
  );
}

import React from "react";
import { Button } from "@/components/ui/button";

export default function MediaCard({ image, title, buttonText, date }) {
  return (
    <div className="relative shrink-0 snap-start w-[218px] h-[229px] rounded-2xl overflow-hidden group cursor-pointer border-2 border-transparent hover:border-[#3b82f6] transition-all duration-300 shadow-lg">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1b0a42]/90 via-[#1b0a42]/20 to-black/40"></div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-white text-base drop-shadow-md mt-1 max-w-[130px] leading-tight">
            {title}
          </h3>

          {date && (
            <div className="bg-white text-black rounded-xl flex flex-col items-center justify-center w-10 h-10 shrink-0 shadow-sm leading-none">
              <span className="font-bold text-sm">{date.day}</span>
              <span className="text-[10px] font-semibold text-gray-600">
                {date.month}
              </span>
            </div>
          )}
        </div>

        <Button className="w-full bg-white text-[#7A4BFF] hover:bg-gray-100 font-bold rounded-xl py-5 transition-transform group-hover:scale-[1.02]">
          {buttonText || "Apply Now"}
        </Button>
      </div>
    </div>
  );
}

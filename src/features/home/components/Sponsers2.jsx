import React from "react";
import cortex from "@/assets/images/Homepage/Sponsers/cortex.png";
import sia from "@/assets/images/Homepage/Sponsers/sia space.png";
import dotpy from "@/assets/images/Homepage/Sponsers/dotpy.png";
import youth from "@/assets/images/Homepage/Sponsers/youth scope.png";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const sponsorsData = [
  { id: 1, title: "Cortex", img: cortex },
  { id: 2, title: "SIA Space", img: sia },
  { id: 3, title: "Dotpy", img: dotpy },
  { id: 4, title: "Youth Scope", img: youth },
];

export default function Sponsors() {
  const repeatCount = [1, 2, 3, 4];

  return (
    <div className="flex flex-col justify-center items-center w-full mb-10 overflow-hidden">
      <ScrollAnimation>
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFE738] mb-8 md:mb-12 text-center">
          Our Sponsors & Partners
        </h2>
      </ScrollAnimation>

      <div className="flex w-full overflow-hidden group">
        {repeatCount.map((blockIndex) => (
          <div
            key={blockIndex}
            aria-hidden={blockIndex !== 1}
            className="flex w-max shrink-0 animate-marquee gap-6 pr-6 group-hover:[animation-play-state:paused]"
          >
            {sponsorsData.map((s) => (
              <div
                key={`sponsor-${blockIndex}-${s.id}`}
                className="bg-[#7441FF] flex justify-center items-center w-[160px] h-[100px] md:w-[180px] md:h-[130px] rounded-xl p-4 shadow-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

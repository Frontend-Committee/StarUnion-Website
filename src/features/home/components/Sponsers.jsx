import React from "react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useSponser } from "../hooks/useSponser";
import LoadingSpinner from "@/components/ui/LoadingSpinneer";

export default function Sponsors() {
  const { data: sponsorsData = [], isLoading } = useSponser();
  if (isLoading) return <LoadingSpinner fullScreen={true} />;

  return (
    <div className="flex flex-col justify-center items-center w-full mb-10">
      <ScrollAnimation>
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFE738] mb-8 md:mb-12 text-center">
          Our Sponsors & Partners
        </h2>
      </ScrollAnimation>

      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
        {sponsorsData?.map((s, index) => (
          <ScrollAnimation mode="popLayout" delay={(index % 4) * 150}>
            <div
              key={s.id}
              className="bg-[#7441FF] flex justify-center items-center w-full h-full rounded-xl p-4 shadow-sm hover:scale-105 transition-transform duration-300"
            >
              <img src={s.photo} alt={s.name} className="object-contain" />
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}

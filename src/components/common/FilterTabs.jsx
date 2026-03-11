import React from "react";

export default function FilterTabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex gap-3 pb-2 mb-10 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 whitespace-nowrap ${
            activeTab === tab
              ? "bg-[#7A4BFF] text-white shadow-md"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

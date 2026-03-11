import React from "react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { AnimatePresence, motion as Motion } from "framer-motion";
import ContentCard from "./ContentCard";

export default function ContentGrid({
  items,
  basePath,
  emptyMessage = "No items found.",
}) {
  return (
    <>
      <Motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4 max-md:px-10"
      >
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => (
            <Motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ContentCard
                key={item.id}
                item={item}
                delay={(index % 4) * 150}
                basePath={basePath}
              />
            </Motion.div>
          ))}
        </AnimatePresence>
      </Motion.div>

      {/* Empty state */}
      {items.length === 0 && (
        <ScrollAnimation variant="fade-up">
          <div className="py-20 text-center">
            <p className="text-gray-400 text-h4">{emptyMessage}</p>
            <p className="mt-2 font-normal text-gray-500 text-body">
              Try adjusting your search or filter
            </p>
          </div>
        </ScrollAnimation>
      )}
    </>
  );
}

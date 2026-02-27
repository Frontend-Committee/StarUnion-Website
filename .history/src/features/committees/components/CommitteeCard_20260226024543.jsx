import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollAnimation from "../../../components/ui/ScrollAnimation";
import { ACCENT_COLORS } from "../../../utils/constants";
import CommitteeBadge from "./CommitteeBadge";

export default function CommitteeCard({ committee, delay = 0 }) {
  const color = ACCENT_COLORS[committee.accent] || ACCENT_COLORS.teal;

  return (
    <ScrollAnimation variant="fade-up" delay={delay} className="h-full">
      <Link to={`/committees/${committee.slug}`} className="block group h-full">
        <Motion.div
          whileHover={{ scale: 1.04, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative rounded-[16px] overflow-hidden border border-primary/40 bg-[#160d2e] cursor-pointer h-full flex flex-col"
          style={{
            boxShadow: `0 0 20px ${color}10, inset 0 1px 0 ${color}15`,
          }}
        >
          {/* Badge illustration area */}
          <div className="flex-1 p-3 pb-2">
            <div
              className="w-full aspect-[4/5] rounded-xl overflow-hidden flex items-center justify-center relative"
              style={{
                background: `linear-gradient(180deg, ${color}12 0%, ${color}06 100%)`,
                border: `1px solid ${color}25`,
              }}
            >
              <CommitteeBadge
                name={committee.name}
                icon={committee.icon}
                color={color}
              />
            </div>
          </div>

          {/* View Details button */}
          <div className="px-3 pb-4 pt-1">
            <span className="inline-block px-4 py-[6px] text-[13px] text-white border border-white/70 rounded-md font-medium group-hover:bg-white/10 transition-colors duration-200">
              View Details
            </span>
          </div>

          {/* Hover glow effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[16px]"
            style={{
              boxShadow: `0 0 40px ${color}20, 0 0 80px ${color}10`,
            }
          />
        </Motion.div>
      </Link>
    </ScrollAnimation>
  );
}

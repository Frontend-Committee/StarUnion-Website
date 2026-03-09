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
          className="relative rounded-[16px] overflow-hidden border border-transparent bg-[#141418] cursor-pointer h-full flex flex-col primary-card-hover"
          style={{
            background:
              "linear-gradient(to top, #7A4BFF 0%, #6A3EF2 25%, #3A2B6F 55%, #1E1A2B 78%, #141418 100%)",
            boxShadow: `0 0 20px ${color}10, inset 0 1px 0 ${color}15`,
          }}
        >
          <div className="flex-1 p-3 pb-2">
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden flex items-center justify-center relative">
              <CommitteeBadge
                name={committee.name}
                icon={committee.icon}
                color={color}
              />
            </div>
          </div>

          {/* View Details button */}
          <div className="px-3 pb-4 pt-1 mx-auto">
            <span className="inline-block px-4 py-[6px] text-[13px] bg-white text-primary border border-primary rounded-md font-medium hover:bg-white/70 hover:text-primary transition duration-200">
              View Details
            </span>
          </div>

          {/* Hover glow effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[16px]"
            style={{
              boxShadow: `0 0 40px ${color}20, 0 0 80px ${color}10`,
            }}
          />
        </Motion.div>
      </Link>
    </ScrollAnimation>
  );
}

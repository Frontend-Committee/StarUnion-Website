import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceCard({
  service,
  delay = 0,
  basePath = "/services",
}) {
  const title = service.title || service.name;
  const detailsPath = `${basePath}/${service.id}`;

  return (
    <ScrollAnimation variant="fade-up" delay={delay} className="flex-shrink-0">
      <Link to={detailsPath} className="block group">
        <Motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-[260px] rounded-[24px] overflow-hidden border border-white/10 flex flex-col relative bg-[#1A0B2E] transition-shadow hover:shadow-2xl hover:shadow-primary/20"
          style={{
            boxShadow: "0 12px 30px -10px rgba(0,0,0,0.5)",
          }}
        >
          <div className="relative w-full aspect-[4/5] overflow-hidden">
            <img
              src={service.image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-black/40" />
            <div className="absolute top-4 right-4 text-white/30">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <div className="absolute top-6 left-0 right-0 px-4 text-center">
              {/* <h4 className="text-white font-black text-xl uppercase tracking-wider drop-shadow-md">
                {title}
              </h4> */}
            </div>
          </div>
          <div className="px-3 py-[10px] flex flex-col items-center gap-2 bg-[#0d0820] relative z-10">
            <div className="px-3 pt-1 pb-4 mx-auto">
              <span className="inline-block px-4 py-[6px] text-[13px] bg-white text-primary border border-primary rounded-md font-medium hover:bg-white/70 hover:text-primary transition duration-200">
                View Details
              </span>
            </div>
          </div>
        </Motion.div>
      </Link>
    </ScrollAnimation>
  );
}

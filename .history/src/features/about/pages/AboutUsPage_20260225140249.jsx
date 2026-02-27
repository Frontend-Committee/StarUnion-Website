import { useState } from "react";
import AboutHero from "../../../assets/images/AboutHero.jpg";
import MissonImage from "../../../assets/images/Misson.jpg";
import CommunityImage from "../../../assets/images/Community.jpg";
import StartupImage from "../../../assets/images/StartupBusiness.jpg";
import WorkshopsImage from "../../../assets/images/Workshops.jpg";
import EventsImage from "../../../assets/images/Events.jpg";

// ─── Placeholder images (Unsplash – swap with real assets later) ─────────────



// ─── Inline SVGs ──────────────────────────────────────────────────────────────
function IconChevronDown({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ease-in-out ${
        open ? "rotate-180" : "rotate-0"
      }`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// ─── 4-pointed star logo ──────────────────────────────────────────────────────
function StarLogo() {
  return (
    <svg
      width="110"
      height="110"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_22px_rgba(255,255,255,0.55)]"
    >
      <path
        d="M60 4 L67 53 L116 60 L67 67 L60 116 L53 67 L4 60 L53 53 Z"
        fill="white"
      />
    </svg>
  );
}

// ─── Committee Dropdown ───────────────────────────────────────────────────────
function CommitteeDropdown({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-5 py-2.5 border border-white/55 rounded-full bg-white/6 text-white text-sm font-medium cursor-pointer hover:bg-white/14 transition-colors duration-200"
      >
        {label}
        <IconChevronDown open={open} />
      </button>

      {open && (
        <div className="absolute top-[calc(100%+8px)] left-0 min-w-[220px] bg-[rgba(36,19,82,0.97)] border border-white/18 rounded-xl shadow-lg overflow-hidden z-50">
          {items.map((item) => (
            <button
              key={item}
              className="block w-full text-left px-4 py-2.5 text-xs text-white/78 bg-transparent border-none cursor-pointer hover:bg-white/9 transition-colors duration-150"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Activity Card ────────────────────────────────────────────────────────────
function ActivityCard({ image, title }) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "14px",
        aspectRatio: "1 / 0.75",
        cursor: "pointer",
      }}
      className="group"
    >
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="activity-card-img"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.5s ease",
        }}
      />

      {/* Dark overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.22) 55%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 12px",
        }}
      >
        <h3
          style={{
         className="relative overflow-hidden rounded-[14px] aspect-[4/3] cursor-pointer group">
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/22 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-between p-4">
        <h3 className="mt-2 text-white font-bold text-lg text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          {title}
        </h3>

        <button className="px-5 py-1.5 mb-1.5 text-xs font-semibold text-white bg-white/18 border border-white/40 rounded-full backdrop-blur-sm hover:bg-white/32 transition-colors duration-200"  minHeight: "340px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

        
        }}
      >
        {/* Green glow orb — top right */}
        {/* <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "280px",
            height: "280px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(17,237,164,0.45) 0%, transparent 70%)",
            transform: "translate(35%, -35%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        /> */}

        {/* Purple glow orb — bottom left */}
        {/* <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "200px",
            height: "200px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(116,65,255,0.45) 0%, transparent 70%)",
            transform: "translate(-35%, 35%)",
            filter: "blur(36px)",
            pointerEvents: "none",
          }}
        /> */}

        {/* Star + heading */}
        {/* <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            padding: "64px 24px",
            textAlign: "center",
          }}
          
        >
          
        </div> */}
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. WHO WE ARE
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "64px 0",
        }}
      >
        <div
          className="container"
          //  style={{ maxWidth: "760px" }}
        >
          <h2
          className="text-tertiary"
            style={{
              fontSize: "28px",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            Who We Are
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: "15px",
              lineHeight: "1.75",
              marginBottom: "12px",
            }}
          >
            S.T.A.R Union is a student activity founded on September 8, 2023,
            with a strong belief that every student has the potential to build,
            innovate, and grow.
          </p>
         className="w-full overflow-x-hidden bg-[radial-gradient(circle_at_center,_#4D3398_0%,_#241352_40%,_#1E1A2B_100%)]">
      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO — Background 3 gradient
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full min-h-[340px] flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${AboutHero})` <div
          className="container"
          style={{
            // maxWidth: "900px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <div style={{ flex: "1 1 300px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "600",
                color: "#EFD830",
                marginBottom: "16px",
              }}
            >
              Our Mission
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.82)",
                fontSize: "15px",
                lineHeight: "1.75",
              }}
            >
              To equip students with technical and non-technical skills through
              workshops, events, and practical experiences, while spreading
              awareness about startups, micro-businesses, and entrepreneurship.
            </p>
          </div>

          {/* Image */}
          <div style={{ flex: "0 0 auto" }}>
            <img
              src={MissonImage}
              alt="Our Mission"
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "16px",
                objectFit: "cover",
                aspectRatio: "4/4.2",
                boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. OUR COMMITTEES — Background 3 gradient
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          width: "100%",
          padding: "64px 0",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top, #241352 0%, #4D3398 45%, #1E1A2B 100%)",
        }}
      >
        <div
          className="container"
          //  style={{ maxWidth: "900px" }}
        >
          {/* Header row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "32px",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "800",
                color: "white",
                margin: 0,
              }}
            >
              Our Committees
            </h2>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.06)",
                color: "white",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.14)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.06)")
              }
              aria-label="Browse committees"
            >
              <IconChevronRight />
            </button>
          </div>

          {/* Dropdown buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <CommitteeDropdown
              label="Technical Committees"
              items={technicalCommittees}
            />
            <CommitteeDropdown
              label="Non-Technical Committees"
              items={nonTechnicalCommittees}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. WHAT WE DO — dark + 2×2 grid
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          width: "100%",
          padding: "64px 0",
          background: "#1E1A2B",
        }}
      >
        <div
          className="container"
          //  style={{ maxWidth: "900px" }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "800",
              color: "white",
              marginBottom: "32px",
            }}
          >
            What We Do
          </h2>

          {/* 2×2 Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}
          >
            {activities.map((act) => (
              <ActivityCard
                key={act.title}
                image={act.image}
                title={act.title}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

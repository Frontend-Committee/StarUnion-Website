import { useState } from "react";

// ─── Placeholder images (Unsplash – swap with real assets later) ─────────────
const IMG_MISSION =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80";
const IMG_WORKSHOPS =
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80";
const IMG_EVENTS =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80";
const IMG_STARTUP =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80";
const IMG_COMMUNITY =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80";

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
      style={{
        transition: "transform 0.3s ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
      }}
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
      style={{ filter: "drop-shadow(0 0 22px rgba(255,255,255,0.55))" }}
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
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 20px",
          border: "1px solid rgba(255,255,255,0.55)",
          borderRadius: "9999px",
          background: "rgba(255,255,255,0.06)",
          color: "white",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "background 0.2s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.14)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.06)")
        }
      >
        {label}
        <IconChevronDown open={open} />
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            minWidth: "220px",
            background: "rgba(36,19,82,0.97)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            overflow: "hidden",
            zIndex: 50,
          }}
        >
          {items.map((item) => (
            <button
              key={item}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 16px",
                fontSize: "13px",
                color: "rgba(255,255,255,0.78)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.09)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
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
        aspectRatio: "1 / 1",
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
            marginTop: "8px",
            color: "white",
            fontWeight: "700",
            fontSize: "18px",
            textAlign: "center",
            textShadow: "0 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          {title}
        </h3>

        <button
          style={{
            padding: "6px 20px",
            marginBottom: "6px",
            fontSize: "12px",
            fontWeight: "600",
            color: "white",
            background: "rgba(255,255,255,0.18)",
            border: "1px solid rgba(255,255,255,0.4)",
            borderRadius: "9999px",
            backdropFilter: "blur(6px)",
            cursor: "pointer",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.32)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.18)")
          }
        >
          View Details
        </button>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
//  ABOUT US PAGE
// ════════════════════════════════════════════════════════════════════════════════
export default function AboutUsPage() {
  const technicalCommittees = [
    "Frontend Committee",
    "Backend Committee",
    "AI & Data Committee",
    "Cybersecurity Committee",
    "Mobile Development",
  ];

  const nonTechnicalCommittees = [
    "Media & Design Committee",
    "Marketing Committee",
    "HR Committee",
    "Finance Committee",
    "PR & Communications",
  ];

  const activities = [
    { image: IMG_WORKSHOPS, title: "Workshops" },
    { image: IMG_EVENTS, title: "Events" },
    { image: IMG_STARTUP, title: "Startup Business" },
    { image: IMG_COMMUNITY, title: "Community Building" },
  ];

  return (
    <div
      className="bg-[radial-gradient(circle_at_center,_#4D3398_0%,_#241352_40%,_#1E1A2B_100%)]"
      style={{ width: "100%", overflowX: "hidden" }}
    >
      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO — Background 3 gradient
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "340px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top, #241352 0%, #4D3398 45%, #1E1A2B 100%)",
        }}
      >
        {/* Green glow orb — top right */}
        <div
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
        />

        {/* Purple glow orb — bottom left */}
        <div
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
        />

        {/* Star + heading */}
        <div
          // style={{
          //   position: "relative",
          //   zIndex: 10,
          //   display: "flex",
          //   flexDirection: "column",
          //   alignItems: "center",
          //   gap: "20px",
          //   padding: "64px 24px",
          //   textAlign: "center",
          // }}
          
        >
          <img src="../../../assets/images/AboutHero.jpg" className="object-cover w-full" alt="" srcset="" />
          {/* <StarLogo /> */}
          
        </div>
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
            style={{
              fontSize: "28px",
              fontWeight: "800",
              color: "#EFD830",
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
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: "15px",
              lineHeight: "1.75",
            }}
          >
            We focus on empowering students—especially in technology and
            computer science—by providing hands-on experiences, real-world
            exposure, and a supportive environment that bridges the gap between
            learning and practice.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. OUR MISSION — image right
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "48px 0 64px",
          // borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="container"
          style={{
            // maxWidth: "900px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "48px",
          }}
        >
          {/* Text */}
          <div style={{ flex: "1 1 300px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "800",
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
              src={IMG_MISSION}
              alt="Our Mission"
              style={{
                width: "100%",
                maxWidth: "320px",
                borderRadius: "16px",
                objectFit: "cover",
                aspectRatio: "4/3",
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

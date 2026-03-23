import Zeina from "../assets/images/Zeina.jpg";

// ─── High Board Data ───────────────────────────────────────────────────────
export const HIGH_BOARD_FEATURED = [
  {
    id: "hb-1",
    name: "Moamen Soliman",
    role: "President",
    description:
      "The President leads the student activity, sets the overall vision, and ensures alignment between all committees to achieve the activity's goals.",
    photo: Zeina,
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
  {
    id: "hb-2",
    name: "Abdelrahman Yasser",
    role: "General Manager",
    description:
      "The General Manager manages daily operations, coordinates between committees, and ensures that plans are executed smoothly and efficiently.",
    photo: Zeina,
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
];

const mkMember = (id, name, role, desc) => ({
  id,
  name,
  role,
  description: desc,
  photo: Zeina,
  socials: { facebook: "#", linkedin: "#", instagram: "#" },
});

export const HIGH_BOARD_SECTIONS = [
  {
    label: "Managers",
    members: [
      mkMember(
        "m1",
        "Kiro Adel",
        "Technical Manager",
        "Manager of Technical Committees",
      ),
      mkMember(
        "m2",
        "Kiro Adel",
        "Technical Manager",
        "Manager of Technical Committees",
      ),
      mkMember(
        "m3",
        "Kiro Adel",
        "Technical Manager",
        "Manager of Technical Committees",
      ),
      mkMember(
        "m4",
        "Kiro Adel",
        "Technical Manager",
        "Manager of Technical Committees",
      ),
    
    ],
  },
  {
    label: "Heads",
    members: [
      mkMember("h1", "Zeina Elkhouly", "Head", "Head of UI/UX Committees"),
      mkMember("h2", "Kiro Adel", "Head", "Head of UI/UX Committees"),
      mkMember("h3", "Kiro Adel", "Head", "Head of UI/UX Committees"),
      mkMember("h4", "Kiro Adel", "Head", "Head of UI/UX Committees"),
      mkMember("h5", "Kiro Adel", "Head", "Head of UI/UX Committees"),
    ],
  },
  {
    label: "Vice Heads",
    members: [
      mkMember(
        "v1",
        "Mohamed Basyouny",
        "Vice Head",
        "Vice Head of OC Committees",
      ),
      mkMember("v2", "Kiro Adel", "Vice Head", "Vice Head of OC Committees"),
      mkMember("v3", "Kiro Adel", "Vice Head", "Vice Head of OC Committees"),
      mkMember("v4", "Kiro Adel", "Vice Head", "Vice Head of OC Committees"),
      mkMember("v5", "Kiro Adel", "Vice Head", "Vice Head of OC Committees"),
    ],
  },
];

// Committee filter categories
export const COMMITTEE_CATEGORIES = {
  ALL: "all",
  TECHNICAL: "technical",
  NON_TECHNICAL: "non-technical",
};

// All 13 committees from Figma design
export const COMMITTEES_DATA = [
  {
    id: 1,
    name: "Video Editing",
    slug: "video-editing",
    type: "technical",
    accent: "teal",
    icon: "video",
  },
  {
    id: 2,
    name: "UI / UX",
    slug: "ui-ux",
    type: "technical",
    accent: "teal",
    icon: "uiux",
  },
  {
    id: 3,
    name: "Back-End",
    slug: "back-end",
    type: "technical",
    accent: "teal",
    icon: "backend",
  },
  {
    id: 4,
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
    type: "technical",
    accent: "teal",
    icon: "ai",
  },
  {
    id: 5,
    name: "Front-End",
    slug: "front-end",
    type: "technical",
    accent: "teal",
    icon: "frontend",
  },
  {
    id: 6,
    name: "Mobile App",
    slug: "mobile-app",
    type: "technical",
    accent: "teal",
    icon: "mobile",
  },
  {
    id: 7,
    name: "Public Relations",
    slug: "public-relations",
    type: "non-technical",
    accent: "teal",
    icon: "pr",
  },
  {
    id: 8,
    name: "HR & Quality Control",
    slug: "hr-quality-control",
    type: "non-technical",
    accent: "teal",
    icon: "hr",
  },
  {
    id: 9,
    name: "Data Analysis",
    slug: "data-analysis",
    type: "technical",
    accent: "yellow",
    icon: "data",
  },
  {
    id: 10,
    name: "Graphic Design",
    slug: "graphic-design",
    type: "technical",
    accent: "yellow",
    icon: "graphic",
  },
  {
    id: 11,
    name: "Organizing",
    slug: "organizing",
    type: "non-technical",
    accent: "yellow",
    icon: "organize",
  },
  {
    id: 12,
    name: "Digital Marketing",
    slug: "digital-marketing",
    type: "non-technical",
    accent: "yellow",
    icon: "marketing",
  },
  {
    id: 13,
    name: "Photography",
    slug: "photography",
    type: "non-technical",
    accent: "purple",
    icon: "photo",
  },
];

// Accent color mapping
export const ACCENT_COLORS = {
  teal: "#11EDA4",
  yellow: "#EFD830",
  purple: "#7441FF",
};

// Mock team members for committee details
export const MOCK_TEAM_MEMBERS = [
  {
    id: 1,
    name: "Zeina Elkhouly",
    role: "Head",
    description: "Head of UI/UX Committees",
    photo: Zeina,
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
  {
    id: 2,
    name: "Mohamed Amr",
    role: "Vice Head",
    description: "Vice Head of UI/UX Committees",
    photo: Zeina,
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
  {
    id: 3,
    name: "Mohamed Amr",
    role: "Vice Head",
    description: "Vice Head of UI/UX Committees",
    photo: Zeina,
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
  {
    id: 4,
    name: "Mohamed Amr",
    role: "Vice Head",
    description: "Vice Head of UI/UX Committees",
    photo: Zeina,
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
];

// Mock recent projects for committee details
export const MOCK_PROJECTS = [
  {
    id: 1,
    title: "gnAPP Desi",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0WN0vxZ4L-lAkokyxX3xXvOS7ene7gmZWnfXjier00IaMIwb_lu-qL95_ngkvZh8oJe9x90DdRDsrF8GbrwU5tnXlfSsvkFlqeFMqwIeIjfR652-dyG3KsGJFcfKb6tM5vWJmY_ckUWh3/s16000-rw/Nightcrawler+Movie+Poster.png",
  },
  {
    id: 2,
    title: "APP Design",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0WN0vxZ4L-lAkokyxX3xXvOS7ene7gmZWnfXjier00IaMIwb_lu-qL95_ngkvZh8oJe9x90DdRDsrF8GbrwU5tnXlfSsvkFlqeFMqwIeIjfR652-dyG3KsGJFcfKb6tM5vWJmY_ckUWh3/s16000-rw/Nightcrawler+Movie+Poster.png",
  },
  {
    id: 3,
    title: "APP Design",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0WN0vxZ4L-lAkokyxX3xXvOS7ene7gmZWnfXjier00IaMIwb_lu-qL95_ngkvZh8oJe9x90DdRDsrF8GbrwU5tnXlfSsvkFlqeFMqwIeIjfR652-dyG3KsGJFcfKb6tM5vWJmY_ckUWh3/s16000-rw/Nightcrawler+Movie+Poster.png",
  },
  {
    id: 4,
    title: "APP Design",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0WN0vxZ4L-lAkokyxX3xXvOS7ene7gmZWnfXjier00IaMIwb_lu-qL95_ngkvZh8oJe9x90DdRDsrF8GbrwU5tnXlfSsvkFlqeFMqwIeIjfR652-dyG3KsGJFcfKb6tM5vWJmY_ckUWh3/s16000-rw/Nightcrawler+Movie+Poster.png",
  },
];

// ─── Service Categories ────────────────────────────────────────────────────
export const SERVICE_CATEGORIES = {
  ALL: "all",
  TECHNICAL: "technical",
  NON_TECHNICAL: "non-technical",
};

// ─── Services Data ──────────────────────────────────────────────────────────
export const SERVICES_DATA = [
  {
    id: "svc-1",
    title: "UI UX",
    slug: "ui-ux",
    category: "technical",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    description: "Crafting intuitive and visually stunning user experiences that delight and convert.",
  },
  {
    id: "svc-2",
    title: "Front-End",
    slug: "front-end",
    category: "technical",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    description: "Building fast, responsive, and accessible web interfaces with modern frameworks.",
  },
  {
    id: "svc-3",
    title: "Back-End",
    slug: "back-end",
    category: "technical",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&q=80",
    description: "Designing robust server-side architectures, APIs, and database solutions.",
  },
  {
    id: "svc-4",
    title: "Mobile App",
    slug: "mobile-app",
    category: "technical",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
    description: "Developing cross-platform mobile apps for iOS and Android with seamless UX.",
  },
  {
    id: "svc-5",
    title: "Database",
    slug: "database",
    category: "technical",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    description: "Architecting and optimizing databases for performance, scalability, and security.",
  },
  {
    id: "svc-6",
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    category: "technical",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    description: "Integrating machine learning models and AI-driven automation into real products.",
  },
  {
    id: "svc-7",
    title: "Organizing Committee",
    slug: "organizing-committee",
    category: "non-technical",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    description: "Planning and executing events, sessions, and activities flawlessly.",
  },
  {
    id: "svc-8",
    title: "Graphic Design",
    slug: "graphic-design",
    category: "non-technical",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
    description: "Creating compelling visual identities, marketing materials, and brand assets.",
  },
];

// ─── Ecosystem Data ──────────────────────────────────────────────────────────
export const ECOSYSTEM_DATA = [
  {
    id: "eco-1",
    title: "Attendance app",
    slug: "attendance-app",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    description: "Track member participation and session attendance in real-time.",
  },
  {
    id: "eco-2",
    title: "Mentorship site",
    slug: "mentorship-site",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    description: "A platform connecting mentors and mentees to accelerate growth.",
  },
  {
    id: "eco-3",
    title: "Mentorship Programs",
    slug: "mentorship-programs",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&q=80",
    description: "Structured programs designed to guide and develop junior members.",
  },
  {
    id: "eco-4",
    title: "Tech Talks",
    slug: "tech-talks",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
    description: "Regular knowledge-sharing sessions led by industry experts.",
  },
  {
    id: "eco-5",
    title: "Photography",
    slug: "photography",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80",
    description: "Capturing memorable moments across all union events and activities.",
  },
  {
    id: "eco-6",
    title: "Organizing",
    slug: "organizing",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
    description: "Coordinating logistics and operations for seamless event execution.",
  },
  {
    id: "eco-7",
    title: "Social Media Content",
    slug: "social-media-content",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
    description: "Producing engaging content to grow our digital presence and community.",
  },
  {
    id: "eco-8",
    title: "Branding",
    slug: "branding",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
    description: "Defining and evolving the Star Union visual identity and voice.",
  },
];

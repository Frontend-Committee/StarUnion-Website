import { image, img } from "framer-motion/client";
import Zeina from '../assets/images/Zeina.jpg';
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
    photo: ,
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
  {
    id: 2,
    name: "Mohamed Amr",
    role: "Vice Head",
    description: "Vice Head of UI/UX Committees",
    photo: null,
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
  {
    id: 3,
    name: "Mohamed Amr",
    role: "Vice Head",
    description: "Vice Head of UI/UX Committees",
    photo: null,
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
  {
    id: 4,
    name: "Mohamed Amr",
    role: "Vice Head",
    description: "Vice Head of UI/UX Committees",
    photo: null,
    socials: { facebook: "#", linkedin: "#", instagram: "#" },
  },
];

// Mock recent projects for committee details
export const MOCK_PROJECTS = [
  {
    id: 1,
    title: "gnAPP Desi",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0WN0vxZ4L-lAkokyxX3xXvOS7ene7gmZWnfXjier00IaMIwb_lu-qL95_ngkvZh8oJe9x90DdRDsrF8GbrwU5tnXlfSsvkFlqeFMqwIeIjfR652-dyG3KsGJFcfKb6tM5vWJmY_ckUWh3/s16000-rw/Nightcrawler+Movie+Poster.png",
  },
  {
    id: 2,
    title: "APP Design",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0WN0vxZ4L-lAkokyxX3xXvOS7ene7gmZWnfXjier00IaMIwb_lu-qL95_ngkvZh8oJe9x90DdRDsrF8GbrwU5tnXlfSsvkFlqeFMqwIeIjfR652-dyG3KsGJFcfKb6tM5vWJmY_ckUWh3/s16000-rw/Nightcrawler+Movie+Poster.png",
  },
  {
    id: 3,
    title: "APP Design",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0WN0vxZ4L-lAkokyxX3xXvOS7ene7gmZWnfXjier00IaMIwb_lu-qL95_ngkvZh8oJe9x90DdRDsrF8GbrwU5tnXlfSsvkFlqeFMqwIeIjfR652-dyG3KsGJFcfKb6tM5vWJmY_ckUWh3/s16000-rw/Nightcrawler+Movie+Poster.png",
  },
  {
    id: 4,
    title: "APP Design",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0WN0vxZ4L-lAkokyxX3xXvOS7ene7gmZWnfXjier00IaMIwb_lu-qL95_ngkvZh8oJe9x90DdRDsrF8GbrwU5tnXlfSsvkFlqeFMqwIeIjfR652-dyG3KsGJFcfKb6tM5vWJmY_ckUWh3/s16000-rw/Nightcrawler+Movie+Poster.png",
  },
];

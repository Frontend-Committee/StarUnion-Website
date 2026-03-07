/* Badge/emblem SVG component matching the Figma shield-style badges */
import commiteeImage from "../../../assets/images/committee.png";
const ICONS = {
  video: (c) => (
    <g>
      <rect
        x="55"
        y="145"
        width="90"
        height="60"
        rx="6"
        stroke={c}
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="80" cy="165" r="8" stroke={c} strokeWidth="2" fill="none" />
      <circle cx="80" cy="185" r="8" stroke={c} strokeWidth="2" fill="none" />
      <path
        d="M120 155l18-8v36l-18-8z"
        stroke={c}
        strokeWidth="2"
        fill={c}
        fillOpacity="0.2"
      />
      <path d="M65 175h25" stroke={c} strokeWidth="1.5" />
    </g>
  ),
  uiux: (c) => (
    <g>
      <rect
        x="55"
        y="140"
        width="90"
        height="70"
        rx="6"
        stroke={c}
        strokeWidth="2.5"
        fill="none"
      />
      <line x1="55" y1="158" x2="145" y2="158" stroke={c} strokeWidth="1.5" />
      <rect
        x="62"
        y="164"
        width="25"
        height="18"
        rx="2"
        stroke={c}
        strokeWidth="1.5"
        fill={c}
        fillOpacity="0.15"
      />
      <rect
        x="92"
        y="164"
        width="46"
        height="8"
        rx="2"
        stroke={c}
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="92"
        y="176"
        width="30"
        height="8"
        rx="2"
        stroke={c}
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="68" cy="150" r="3" fill={c} />
      <circle cx="78" cy="150" r="3" fill={c} fillOpacity="0.5" />
      <path d="M130 190l8 8M138 190l-8 8" stroke={c} strokeWidth="2" />
    </g>
  ),
  backend: (c) => (
    <g>
      <rect
        x="60"
        y="140"
        width="80"
        height="22"
        rx="4"
        stroke={c}
        strokeWidth="2.5"
        fill="none"
      />
      <rect
        x="60"
        y="168"
        width="80"
        height="22"
        rx="4"
        stroke={c}
        strokeWidth="2.5"
        fill="none"
      />
      <rect
        x="60"
        y="196"
        width="80"
        height="22"
        rx="4"
        stroke={c}
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="75" cy="151" r="3" fill={c} />
      <circle cx="75" cy="179" r="3" fill={c} />
      <circle cx="75" cy="207" r="3" fill={c} />
      <line x1="85" y1="151" x2="130" y2="151" stroke={c} strokeWidth="1.5" />
      <line x1="85" y1="179" x2="120" y2="179" stroke={c} strokeWidth="1.5" />
      <line x1="85" y1="207" x2="125" y2="207" stroke={c} strokeWidth="1.5" />
    </g>
  ),
  ai: (c) => (
    <g>
      <circle
        cx="100"
        cy="170"
        r="28"
        stroke={c}
        strokeWidth="2.5"
        fill="none"
      />
      <circle
        cx="100"
        cy="170"
        r="14"
        stroke={c}
        strokeWidth="1.5"
        fill={c}
        fillOpacity="0.1"
      />
      <circle cx="100" cy="170" r="4" fill={c} />
      <line x1="100" y1="142" x2="100" y2="130" stroke={c} strokeWidth="2" />
      <line x1="100" y1="198" x2="100" y2="210" stroke={c} strokeWidth="2" />
      <line x1="72" y1="170" x2="60" y2="170" stroke={c} strokeWidth="2" />
      <line x1="128" y1="170" x2="140" y2="170" stroke={c} strokeWidth="2" />
      <line x1="80" y1="150" x2="72" y2="142" stroke={c} strokeWidth="2" />
      <line x1="120" y1="150" x2="128" y2="142" stroke={c} strokeWidth="2" />
      <line x1="80" y1="190" x2="72" y2="198" stroke={c} strokeWidth="2" />
      <line x1="120" y1="190" x2="128" y2="198" stroke={c} strokeWidth="2" />
      <circle cx="100" cy="130" r="3" fill={c} />
      <circle cx="100" cy="210" r="3" fill={c} />
      <circle cx="60" cy="170" r="3" fill={c} />
      <circle cx="140" cy="170" r="3" fill={c} />
    </g>
  ),
  frontend: (c) => (
    <g>
      <rect
        x="55"
        y="140"
        width="90"
        height="70"
        rx="6"
        stroke={c}
        strokeWidth="2.5"
        fill="none"
      />
      <line x1="55" y1="158" x2="145" y2="158" stroke={c} strokeWidth="1.5" />
      <circle cx="63" cy="150" r="2.5" fill={c} />
      <circle cx="71" cy="150" r="2.5" fill={c} fillOpacity="0.5" />
      <circle cx="79" cy="150" r="2.5" fill={c} fillOpacity="0.3" />
      <text
        x="75"
        y="182"
        fontSize="20"
        fontFamily="monospace"
        fill={c}
        fillOpacity="0.9"
      >
        &lt;/&gt;
      </text>
      <rect
        x="108"
        y="165"
        width="28"
        height="14"
        rx="3"
        stroke={c}
        strokeWidth="1.5"
        fill={c}
        fillOpacity="0.15"
      />
      <rect
        x="108"
        y="185"
        width="20"
        height="14"
        rx="3"
        stroke={c}
        strokeWidth="1.5"
        fill="none"
      />
    </g>
  ),
  mobile: (c) => (
    <g>
      <rect
        x="75"
        y="135"
        width="50"
        height="85"
        rx="8"
        stroke={c}
        strokeWidth="2.5"
        fill="none"
      />
      <line x1="75" y1="152" x2="125" y2="152" stroke={c} strokeWidth="1.5" />
      <line x1="75" y1="203" x2="125" y2="203" stroke={c} strokeWidth="1.5" />
      <circle
        cx="100"
        cy="212"
        r="4"
        stroke={c}
        strokeWidth="1.5"
        fill="none"
      />
      <text
        x="85"
        y="180"
        fontSize="16"
        fontFamily="monospace"
        fill={c}
        fillOpacity="0.9"
      >
        &lt;/&gt;
      </text>
      <rect
        x="82"
        y="185"
        width="36"
        height="10"
        rx="2"
        stroke={c}
        strokeWidth="1"
        fill={c}
        fillOpacity="0.1"
      />
    </g>
  ),
  pr: (c) => (
    <g>
      <rect
        x="60"
        y="145"
        width="55"
        height="70"
        rx="4"
        stroke={c}
        strokeWidth="2.5"
        fill="none"
      />
      <line x1="68" y1="160" x2="108" y2="160" stroke={c} strokeWidth="1.5" />
      <line x1="68" y1="170" x2="100" y2="170" stroke={c} strokeWidth="1.5" />
      <line x1="68" y1="180" x2="105" y2="180" stroke={c} strokeWidth="1.5" />
      <line x1="68" y1="190" x2="95" y2="190" stroke={c} strokeWidth="1.5" />
      <line x1="68" y1="200" x2="100" y2="200" stroke={c} strokeWidth="1.5" />
      <circle
        cx="130"
        cy="170"
        r="18"
        stroke={c}
        strokeWidth="2"
        fill={c}
        fillOpacity="0.1"
      />
      <path d="M125 165v10h10" stroke={c} strokeWidth="2" fill="none" />
      <circle cx="130" cy="170" r="5" fill={c} fillOpacity="0.3" />
    </g>
  ),
  hr: (c) => (
    <g>
      <circle cx="85" cy="155" r="12" stroke={c} strokeWidth="2" fill="none" />
      <circle cx="115" cy="155" r="12" stroke={c} strokeWidth="2" fill="none" />
      <path
        d="M70 195c0-15 10-22 15-25"
        stroke={c}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M100 195c0-15-10-22-15-25"
        stroke={c}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M100 195c0-15 10-22 15-25"
        stroke={c}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M130 195c0-15-10-22-15-25"
        stroke={c}
        strokeWidth="2"
        fill="none"
      />
      <path d="M120 202l8 8 16-16" stroke={c} strokeWidth="2.5" fill="none" />
    </g>
  ),
  data: (c) => (
    <g>
      <rect
        x="65"
        y="190"
        width="14"
        height="25"
        rx="2"
        fill={c}
        fillOpacity="0.4"
        stroke={c}
        strokeWidth="1.5"
      />
      <rect
        x="83"
        y="175"
        width="14"
        height="40"
        rx="2"
        fill={c}
        fillOpacity="0.5"
        stroke={c}
        strokeWidth="1.5"
      />
      <rect
        x="101"
        y="160"
        width="14"
        height="55"
        rx="2"
        fill={c}
        fillOpacity="0.6"
        stroke={c}
        strokeWidth="1.5"
      />
      <rect
        x="119"
        y="145"
        width="14"
        height="70"
        rx="2"
        fill={c}
        fillOpacity="0.8"
        stroke={c}
        strokeWidth="1.5"
      />
      <circle cx="85" cy="155" r="16" stroke={c} strokeWidth="2" fill="none" />
      <line x1="96" y1="166" x2="108" y2="178" stroke={c} strokeWidth="2.5" />
    </g>
  ),
  graphic: (c) => (
    <g>
      <circle
        cx="90"
        cy="175"
        r="10"
        stroke={c}
        strokeWidth="2"
        fill={c}
        fillOpacity="0.2"
      />
      <circle
        cx="110"
        cy="175"
        r="10"
        stroke={c}
        strokeWidth="2"
        fill={c}
        fillOpacity="0.15"
      />
      <circle
        cx="100"
        cy="160"
        r="10"
        stroke={c}
        strokeWidth="2"
        fill={c}
        fillOpacity="0.1"
      />
      <path
        d="M65 200l12-40 8 20 6-10 8 15 6-8 10 23z"
        stroke={c}
        strokeWidth="2"
        fill={c}
        fillOpacity="0.15"
      />
      <path
        d="M125 145l4 4-30 30-8-8 30-30 4 4"
        stroke={c}
        strokeWidth="2"
        fill={c}
        fillOpacity="0.3"
      />
    </g>
  ),
  organize: (c) => (
    <g>
      <circle
        cx="100"
        cy="155"
        r="10"
        stroke={c}
        strokeWidth="2"
        fill={c}
        fillOpacity="0.2"
      />
      <circle
        cx="78"
        cy="185"
        r="8"
        stroke={c}
        strokeWidth="2"
        fill={c}
        fillOpacity="0.15"
      />
      <circle
        cx="122"
        cy="185"
        r="8"
        stroke={c}
        strokeWidth="2"
        fill={c}
        fillOpacity="0.15"
      />
      <circle cx="72" cy="210" r="6" stroke={c} strokeWidth="1.5" fill="none" />
      <circle
        cx="100"
        cy="210"
        r="6"
        stroke={c}
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="128"
        cy="210"
        r="6"
        stroke={c}
        strokeWidth="1.5"
        fill="none"
      />
      <line x1="100" y1="165" x2="78" y2="177" stroke={c} strokeWidth="2" />
      <line x1="100" y1="165" x2="122" y2="177" stroke={c} strokeWidth="2" />
      <line x1="78" y1="193" x2="72" y2="204" stroke={c} strokeWidth="1.5" />
      <line x1="78" y1="193" x2="100" y2="204" stroke={c} strokeWidth="1.5" />
      <line x1="122" y1="193" x2="128" y2="204" stroke={c} strokeWidth="1.5" />
      <path d="M90 150l10-8 10 8" stroke={c} strokeWidth="2" fill="none" />
    </g>
  ),
  marketing: (c) => (
    <g>
      <path
        d="M70 170l35-20v55l-35-20z"
        stroke={c}
        strokeWidth="2.5"
        fill={c}
        fillOpacity="0.2"
      />
      <rect
        x="60"
        y="165"
        width="12"
        height="25"
        rx="3"
        stroke={c}
        strokeWidth="2"
        fill={c}
        fillOpacity="0.15"
      />
      <line x1="105" y1="155" x2="140" y2="140" stroke={c} strokeWidth="2" />
      <line x1="105" y1="170" x2="140" y2="170" stroke={c} strokeWidth="2" />
      <line x1="105" y1="185" x2="140" y2="200" stroke={c} strokeWidth="2" />
      <circle cx="140" cy="140" r="4" fill={c} />
      <circle cx="140" cy="170" r="4" fill={c} />
      <circle cx="140" cy="200" r="4" fill={c} />
    </g>
  ),
  photo: (c) => (
    <g>
      <rect
        x="62"
        y="155"
        width="76"
        height="55"
        rx="8"
        stroke={c}
        strokeWidth="2.5"
        fill="none"
      />
      <circle
        cx="100"
        cy="182"
        r="16"
        stroke={c}
        strokeWidth="2.5"
        fill="none"
      />
      <circle
        cx="100"
        cy="182"
        r="8"
        stroke={c}
        strokeWidth="1.5"
        fill={c}
        fillOpacity="0.2"
      />
      <circle cx="100" cy="182" r="3" fill={c} />
      <path d="M82 155l5-12h26l5 12" stroke={c} strokeWidth="2" fill="none" />
      <circle cx="125" cy="162" r="3" fill={c} fillOpacity="0.5" />
    </g>
  ),
};

export default function CommitteeBadge({ name, icon, color }) {
  const renderIcon = ICONS[icon] || ICONS.frontend;

  return (
  <img src={commiteeImage} alt=""  />
  );
}

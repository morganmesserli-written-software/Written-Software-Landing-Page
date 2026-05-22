// Reusable SVG ornaments. Kept simple — geometric primitives, no figurative art.

const Sparkle = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M12 2 L13.6 10.4 L22 12 L13.6 13.6 L12 22 L10.4 13.6 L2 12 L10.4 10.4 Z"
          fill={color} />
  </svg>
);

const StarPoint = ({ size = 10, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z" fill={color} />
  </svg>
);

const Crescent = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M16 4 A 8 8 0 1 0 16 20 A 6 6 0 1 1 16 4 Z" fill={color} />
  </svg>
);

const Diamond = ({ size = 8, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path d="M6 0 L12 6 L6 12 L0 6 Z" fill={color} />
  </svg>
);

const Constellation = ({ className }) => (
  <svg className={className} viewBox="0 0 1240 720" preserveAspectRatio="xMidYMid slice">
    {/* Soft scattered stars + a few connecting constellation lines */}
    <defs>
      <radialGradient id="starGlow">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Constellation 1 — left */}
    <g stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5">
      <line x1="120" y1="120" x2="220" y2="180" />
      <line x1="220" y1="180" x2="310" y2="140" />
      <line x1="310" y1="140" x2="380" y2="240" />
      <line x1="220" y1="180" x2="260" y2="280" />
    </g>
    {[
      [120,120,2.2],[220,180,1.8],[310,140,2.4],[380,240,2.0],[260,280,1.6],
      [80,260,1.4],[180,340,2.0],[420,90,1.6],[510,180,1.2],
      [880,150,2.2],[960,210,1.8],[1060,160,2.6],[1140,240,2.0],[1000,300,1.5],[820,260,1.7],
      [780,420,1.9],[920,480,2.3],[1080,440,1.6],
      [320,520,1.8],[460,580,2.0],[600,540,1.4],[180,560,1.6],
      [640,120,1.5],[700,200,1.2],[560,80,1.7],[1180,80,1.4],
    ].map(([x,y,r], i) => (
      <circle key={i} cx={x} cy={y} r={r} fill="currentColor" />
    ))}
    {/* Constellation 2 — right (Lyra-ish) */}
    <g stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.5">
      <line x1="880" y1="150" x2="960" y2="210" />
      <line x1="960" y1="210" x2="1060" y2="160" />
      <line x1="960" y1="210" x2="1000" y2="300" />
      <line x1="1060" y1="160" x2="1140" y2="240" />
    </g>
  </svg>
);

const CornerFlourish = ({ className }) => (
  <svg className={className} viewBox="0 0 220 220" fill="none">
    {/* Art-nouveau corner flourish: a curve + dots + diamond */}
    <path d="M10 10 Q 10 80, 60 100 T 140 130 T 200 200"
          stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7" />
    <path d="M10 10 Q 60 30, 90 80"
          stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
    <circle cx="10" cy="10" r="3" fill="currentColor" />
    <circle cx="60" cy="100" r="2" fill="currentColor" opacity="0.7" />
    <circle cx="140" cy="130" r="2" fill="currentColor" opacity="0.6" />
    <path d="M30 50 L 36 56 L 30 62 L 24 56 Z" fill="currentColor" opacity="0.6" />
    <path d="M100 70 L 108 78 L 100 86 L 92 78 Z" fill="currentColor" opacity="0.5" />
    {/* Small star */}
    <path d="M70 30 L72 36 L78 38 L72 40 L70 46 L68 40 L62 38 L68 36 Z"
          fill="currentColor" opacity="0.7" />
  </svg>
);

const WaxSeal = ({ className, monogram = "W" }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none">
    <defs>
      <radialGradient id="seal-grad" cx="35%" cy="30%">
        <stop offset="0%" stopColor="#d05b32" />
        <stop offset="60%" stopColor="#99280f" />
        <stop offset="100%" stopColor="#5e1808" />
      </radialGradient>
      <filter id="seal-drop" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="0" dy="2" result="off" />
        <feMerge>
          <feMergeNode in="off" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Drips around the edge — irregular */}
    <path d="M60 6
             C 80 6, 96 14, 106 28
             C 116 38, 118 52, 116 66
             C 114 86, 102 102, 86 110
             C 70 116, 52 114, 38 106
             C 22 96, 12 80, 10 62
             C 8 44, 14 28, 28 16
             C 38 9, 48 6, 60 6 Z"
          fill="url(#seal-grad)" filter="url(#seal-drop)" />
    {/* Inner ring */}
    <circle cx="60" cy="60" r="44" fill="none"
            stroke="rgba(0,0,0,0.35)" strokeWidth="0.6" strokeDasharray="2 3" />
    {/* Monogram */}
    <text x="60" y="76" textAnchor="middle"
          fontFamily="Cormorant Garamond, serif" fontStyle="italic"
          fontSize="48" fontWeight="500"
          fill="rgba(255, 220, 195, 0.92)">{monogram}</text>
    {/* Tiny stars around monogram */}
    <path d="M30 38 L31 41 L34 42 L31 43 L30 46 L29 43 L26 42 L29 41 Z" fill="rgba(255,220,195,0.55)" />
    <path d="M92 82 L93 85 L96 86 L93 87 L92 90 L91 87 L88 86 L91 85 Z" fill="rgba(255,220,195,0.55)" />
  </svg>
);

const DividerOrnament = ({ color = "currentColor" }) => (
  <svg width="80" height="14" viewBox="0 0 80 14" fill="none">
    <line x1="0" y1="7" x2="30" y2="7" stroke={color} strokeWidth="0.8" opacity="0.6" />
    <path d="M40 0 L46 7 L40 14 L34 7 Z" fill={color} opacity="0.7" />
    <circle cx="40" cy="7" r="1.4" fill="#efdfcd" />
    <line x1="50" y1="7" x2="80" y2="7" stroke={color} strokeWidth="0.8" opacity="0.6" />
  </svg>
);

const Check = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8.5 L 6.5 12 L 13 4" stroke={color} strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// Feature ornaments — distinct geometric glyphs per feature
const IconPlot = ({ size = 48, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Weaving threads */}
    <path d="M6 14 Q 16 6, 24 14 T 42 14" stroke={color} strokeWidth="1.2" fill="none" />
    <path d="M6 24 Q 16 16, 24 24 T 42 24" stroke={color} strokeWidth="1.2" fill="none" opacity="0.6" />
    <path d="M6 34 Q 16 26, 24 34 T 42 34" stroke={color} strokeWidth="1.2" fill="none" opacity="0.4" />
    <circle cx="24" cy="14" r="2" fill={color} />
    <circle cx="6" cy="14" r="1.4" fill={color} />
    <circle cx="42" cy="14" r="1.4" fill={color} />
  </svg>
);

const IconWorld = ({ size = 48, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Old map / compass */}
    <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="1.2" fill="none" />
    <circle cx="24" cy="24" r="12" stroke={color} strokeWidth="0.6" strokeDasharray="2 3" fill="none" />
    <path d="M24 6 L26 24 L24 42 L22 24 Z" fill={color} opacity="0.6" />
    <path d="M6 24 L24 22 L42 24 L24 26 Z" fill={color} opacity="0.4" />
    <circle cx="24" cy="24" r="2" fill={color} />
  </svg>
);

const IconCharacter = ({ size = 48, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Constellation portrait — abstract */}
    <circle cx="24" cy="14" r="3" fill={color} />
    <circle cx="14" cy="26" r="2" fill={color} opacity="0.7" />
    <circle cx="34" cy="26" r="2" fill={color} opacity="0.7" />
    <circle cx="24" cy="38" r="2.4" fill={color} />
    <circle cx="18" cy="34" r="1.4" fill={color} opacity="0.5" />
    <circle cx="30" cy="34" r="1.4" fill={color} opacity="0.5" />
    <line x1="24" y1="14" x2="14" y2="26" stroke={color} strokeWidth="0.7" opacity="0.5" />
    <line x1="24" y1="14" x2="34" y2="26" stroke={color} strokeWidth="0.7" opacity="0.5" />
    <line x1="14" y1="26" x2="24" y2="38" stroke={color} strokeWidth="0.7" opacity="0.5" />
    <line x1="34" y1="26" x2="24" y2="38" stroke={color} strokeWidth="0.7" opacity="0.5" />
  </svg>
);

const IconRomance = ({ size = 48, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Two arcs intertwining */}
    <path d="M10 38 Q 10 14, 24 14 T 38 38" stroke={color} strokeWidth="1.2" fill="none" />
    <path d="M10 10 Q 10 34, 24 34 T 38 10" stroke={color} strokeWidth="1.2" fill="none" opacity="0.55" />
    <circle cx="24" cy="14" r="2" fill={color} />
    <circle cx="24" cy="34" r="2" fill={color} opacity="0.7" />
    {/* Small spark in middle */}
    <path d="M24 24 L25 22 L27 22 L25.5 23.5 L26 26 L24 25 L22 26 L22.5 23.5 L21 22 L23 22 Z"
          fill={color} opacity="0.6" />
  </svg>
);

const IconChapter = ({ size = 48, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Open book / quill */}
    <path d="M8 12 L 24 16 L 40 12 L 40 38 L 24 42 L 8 38 Z"
          stroke={color} strokeWidth="1.2" fill="none" />
    <line x1="24" y1="16" x2="24" y2="42" stroke={color} strokeWidth="1" />
    <line x1="12" y1="20" x2="20" y2="22" stroke={color} strokeWidth="0.6" opacity="0.6" />
    <line x1="12" y1="26" x2="20" y2="28" stroke={color} strokeWidth="0.6" opacity="0.6" />
    <line x1="28" y1="22" x2="36" y2="20" stroke={color} strokeWidth="0.6" opacity="0.6" />
    <line x1="28" y1="28" x2="36" y2="26" stroke={color} strokeWidth="0.6" opacity="0.6" />
  </svg>
);

const IconStats = ({ size = 48, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* Rising line with stars */}
    <polyline points="6,38 14,30 22,32 30,22 38,14"
              stroke={color} strokeWidth="1.2" fill="none" />
    <circle cx="6" cy="38" r="1.6" fill={color} />
    <circle cx="14" cy="30" r="1.6" fill={color} />
    <circle cx="22" cy="32" r="1.6" fill={color} />
    <circle cx="30" cy="22" r="1.6" fill={color} />
    <circle cx="38" cy="14" r="1.6" fill={color} />
    <path d="M40 10 L 41 13 L 44 14 L 41 15 L 40 18 L 39 15 L 36 14 L 39 13 Z"
          fill={color} opacity="0.7" />
  </svg>
);

const LogoMark = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none"
       style={{ display: "block", overflow: "visible" }} aria-label="Written Software">
    {/* Crescent moon — upper-left accent */}
    <path d="M 6 9 A 3.2 3.2 0 1 0 6 15.4 A 2.1 2.1 0 1 1 6 9 Z"
          fill="var(--gold)" opacity="0.9" />

    {/* Feather body — leaf-shape rising from the inkwell */}
    <path d="M 22 26 Q 13 17, 22 3 Q 31 17, 22 26 Z"
          fill="var(--accent)" />

    {/* Rachis (central spine) */}
    <path d="M 22 26 L 22 3"
          stroke="var(--ink)" strokeWidth="0.9" strokeLinecap="round" />

    {/* Barbs — angled upward toward the tip */}
    <g stroke="var(--ink)" strokeWidth="0.5" strokeLinecap="round" opacity="0.6" fill="none">
      <path d="M 22 23 L 19 20" />
      <path d="M 22 20 L 18.5 16.5" />
      <path d="M 22 17 L 18.5 13.5" />
      <path d="M 22 14 L 19 10.5" />
      <path d="M 22 11 L 20 8" />
      <path d="M 22 23 L 25 20" />
      <path d="M 22 20 L 25.5 16.5" />
      <path d="M 22 17 L 25.5 13.5" />
      <path d="M 22 14 L 25 10.5" />
      <path d="M 22 11 L 24 8" />
    </g>

    {/* Sparkle just above the feather tip */}
    <path d="M 22 -0.4 L 22.5 1.5 L 24.4 2 L 22.5 2.5 L 22 4.4 L 21.5 2.5 L 19.6 2 L 21.5 1.5 Z"
          fill="var(--gold)" />

    {/* Inkwell body — squat rounded bottle */}
    <path d="M 10 28 L 10 36 Q 10 39, 13 39 L 31 39 Q 34 39, 34 36 L 34 28 Z"
          fill="var(--ink)" />

    {/* Inkwell rim / opening */}
    <ellipse cx="22" cy="27.4" rx="9" ry="2.2" fill="var(--accent)" />

    {/* Ink shimmer inside the well */}
    <ellipse cx="19" cy="27.2" rx="2.5" ry="0.5" fill="var(--paper)" opacity="0.32" />
  </svg>
);

Object.assign(window, {
  Sparkle, StarPoint, Crescent, Diamond, Constellation, CornerFlourish,
  WaxSeal, DividerOrnament, Check,
  IconPlot, IconWorld, IconCharacter, IconRomance, IconChapter, IconStats,
  LogoMark,
});

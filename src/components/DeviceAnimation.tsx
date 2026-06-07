export default function DeviceAnimation() {
  return (
    <div className="hero-device-scene" id="hero-scene" aria-label="Phone and desktop syncing wirelessly">
      <svg
        className="hero-svg"
        viewBox="0 0 860 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Glows */}
          <filter id="glow-xl" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-md" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-sm" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Orb gradient */}
          <radialGradient id="orb-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          {/* Stream gradients */}
          <linearGradient id="stream-a" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="#444" />
            <stop offset="60%" stopColor="#666" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="stream-b" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="#444" />
            <stop offset="60%" stopColor="#555" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          {/* Device screen gradient */}
          <linearGradient id="screen-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#111111" />
            <stop offset="100%" stopColor="#080808" />
          </linearGradient>
          {/* Chip gradients */}
          <linearGradient id="chip-green" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1a2a1a" />
            <stop offset="100%" stopColor="#0f1f0f" />
          </linearGradient>
          <linearGradient id="chip-blue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1a1a2e" />
            <stop offset="100%" stopColor="#0f0f1f" />
          </linearGradient>
        </defs>

        {/* ═══ CENTRAL SYNC ORB ═══ */}
        {/* Outer ambient glow */}
        <circle cx="430" cy="160" r="90" fill="url(#orb-grad)">
          <animate attributeName="r" values="80;100;80" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
        </circle>
        {/* Ring 1 */}
        <circle cx="430" cy="160" r="62" fill="none" stroke="#2a2a2a" strokeWidth="1">
          <animateTransform attributeName="transform" type="rotate" from="0 430 160" to="360 430 160" dur="20s" repeatCount="indefinite" />
        </circle>
        {/* Ring 2 */}
        <circle cx="430" cy="160" r="50" fill="none" stroke="#333" strokeWidth="0.5" strokeDasharray="3 5">
          <animateTransform attributeName="transform" type="rotate" from="360 430 160" to="0 430 160" dur="14s" repeatCount="indefinite" />
        </circle>
        {/* Core */}
        <circle cx="430" cy="160" r="36" fill="#0a0a0a" stroke="#333" strokeWidth="1.5">
          <animate attributeName="stroke" values="#222;#444;#222" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Core glow pulse */}
        <circle cx="430" cy="160" r="36" fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.08">
          <animate attributeName="r" values="36;46;36" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.08;0.0;0.08" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Sync icon: two arcs */}
        <path d="M421 153 A12 12 0 0 1 439 153" stroke="#888" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M439 167 A12 12 0 0 1 421 167" stroke="#888" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <polyline points="439,150 439,155 444,153" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <polyline points="421,170 421,165 416,167" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* ═══ DATA STREAMS ═══ */}
        {/* Phone -> Orb (top arc) */}
        <path id="s-pt" d="M 168 148 C 240 80, 360 120, 394 150" stroke="url(#stream-a)" strokeWidth="1.2" strokeDasharray="6 6" opacity="0.7" />
        {/* Phone -> Orb (bottom arc) */}
        <path id="s-pb" d="M 168 172 C 240 240, 360 200, 394 170" stroke="url(#stream-a)" strokeWidth="1.2" strokeDasharray="6 6" opacity="0.5" />
        {/* Orb -> Desktop (top arc) */}
        <path id="s-dt" d="M 466 150 C 500 120, 620 80, 692 148" stroke="url(#stream-b)" strokeWidth="1.2" strokeDasharray="6 6" opacity="0.7" />
        {/* Orb -> Desktop (bottom arc) */}
        <path id="s-db" d="M 466 170 C 500 200, 620 240, 692 172" stroke="url(#stream-b)" strokeWidth="1.2" strokeDasharray="6 6" opacity="0.5" />

        {/* ═══ ANIMATED PARTICLES ═══ */}
        {/* Phone → Orb */}
        <circle r="3.5" fill="#ffffff" filter="url(#glow-md)">
          <animateMotion dur="2s" repeatCount="indefinite" calcMode="linear"><mpath href="#s-pt" /></animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle r="2" fill="#aaaaaa" filter="url(#glow-sm)">
          <animateMotion dur="2s" begin="-0.5s" repeatCount="indefinite" calcMode="linear"><mpath href="#s-pb" /></animateMotion>
          <animate attributeName="opacity" values="0;0.8;0.8;0" keyTimes="0;0.15;0.85;1" dur="2s" begin="-0.5s" repeatCount="indefinite" />
        </circle>
        {/* Orb → Desktop */}
        <circle r="3.5" fill="#ffffff" filter="url(#glow-md)">
          <animateMotion dur="2s" begin="-0.3s" repeatCount="indefinite" calcMode="linear"><mpath href="#s-dt" /></animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="2s" begin="-0.3s" repeatCount="indefinite" />
        </circle>
        <circle r="2" fill="#aaaaaa" filter="url(#glow-sm)">
          <animateMotion dur="2s" begin="-0.8s" repeatCount="indefinite" calcMode="linear"><mpath href="#s-db" /></animateMotion>
          <animate attributeName="opacity" values="0;0.8;0.8;0" keyTimes="0;0.15;0.85;1" dur="2s" begin="-0.8s" repeatCount="indefinite" />
        </circle>
        {/* Extra fast particle */}
        <circle r="1.5" fill="#fff" filter="url(#glow-sm)">
          <animateMotion dur="1.4s" begin="-1s" repeatCount="indefinite" calcMode="linear"><mpath href="#s-pt" /></animateMotion>
          <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="1.4s" begin="-1s" repeatCount="indefinite" />
        </circle>
        <circle r="1.5" fill="#fff" filter="url(#glow-sm)">
          <animateMotion dur="1.4s" begin="-0.2s" repeatCount="indefinite" calcMode="linear"><mpath href="#s-dt" /></animateMotion>
          <animate attributeName="opacity" values="0;1;0" keyTimes="0;0.5;1" dur="1.4s" begin="-0.2s" repeatCount="indefinite" />
        </circle>

        {/* ═══ PHONE (left) ═══ */}
        <g>
          {/* Shadow */}
          <ellipse cx="120" cy="298" rx="46" ry="6" fill="#000" opacity="0.5" />
          {/* Body */}
          <rect x="72" y="50" width="96" height="200" rx="18" fill="#0c0c0c" stroke="#2a2a2a" strokeWidth="1.5" />
          {/* Inner screen border */}
          <rect x="80" y="68" width="80" height="164" rx="10" fill="url(#screen-grad)" stroke="#181818" strokeWidth="1" />
          {/* Dynamic island */}
          <rect x="99" y="62" width="42" height="8" rx="4" fill="#0a0a0a" />
          {/* Home indicator */}
          <rect x="104" y="244" width="32" height="3" rx="1.5" fill="#1e1e1e" />
          {/* Side buttons */}
          <rect x="70" y="100" width="3" height="22" rx="1.5" fill="#1a1a1a" />
          <rect x="70" y="128" width="3" height="22" rx="1.5" fill="#1a1a1a" />
          <rect x="165" y="108" width="3" height="30" rx="1.5" fill="#1a1a1a" />

          {/* Screen content — app UI mockup */}
          {/* Status bar */}
          <rect x="85" y="75" width="20" height="3" rx="1" fill="#2a2a2a" />
          <rect x="143" y="75" width="12" height="3" rx="1" fill="#2a2a2a" />
          {/* App header */}
          <rect x="85" y="86" width="70" height="16" rx="4" fill="#141414" />
          <circle cx="97" cy="94" r="5" fill="#1e1e1e" />
          <rect x="106" y="91" width="30" height="3" rx="1" fill="#222" />
          <rect x="106" y="97" width="20" height="2" rx="1" fill="#1a1a1a" />
          {/* Transfer item 1 */}
          <rect x="85" y="108" width="70" height="22" rx="5" fill="#111" stroke="#1e1e1e" />
          <rect x="90" y="113" width="22" height="12" rx="3" fill="#1a1a1a" />
          <rect x="117" y="114" width="28" height="3" rx="1" fill="#222" />
          <rect x="117" y="120" width="18" height="2" rx="1" fill="#1a1a1a" />
          {/* Progress bar */}
          <rect x="85" y="134" width="70" height="3" rx="1" fill="#0f0f0f" />
          <rect x="85" y="134" width="46" height="3" rx="1" fill="#3a3a3a">
            <animate attributeName="width" values="20;46;46;20" keyTimes="0;0.6;0.9;1" dur="3s" repeatCount="indefinite" />
          </rect>
          {/* Transfer item 2 */}
          <rect x="85" y="143" width="70" height="22" rx="5" fill="#111" stroke="#1e1e1e" />
          <rect x="90" y="148" width="22" height="12" rx="3" fill="#1a1a1a" />
          <rect x="117" y="149" width="24" height="3" rx="1" fill="#222" />
          <rect x="117" y="155" width="32" height="2" rx="1" fill="#1a1a1a" />
          {/* Done check */}
          <circle cx="149" cy="154" r="5" fill="#1a2a1a" stroke="#2a4a2a" />
          <polyline points="146,154 148,156 152,151" stroke="#4a8a4a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Bottom nav */}
          <rect x="85" y="220" width="70" height="1" fill="#161616" />
          <circle cx="105" cy="230" r="5" fill="#1e1e1e" />
          <circle cx="120" cy="230" r="5" fill="#252525" />
          <circle cx="135" cy="230" r="5" fill="#1e1e1e" />

          {/* Wifi signal indicator on phone */}
          <g filter="url(#glow-sm)">
            <path d="M 120 175 m-8 5 q8-10 16 0" stroke="#3a3a3a" strokeWidth="1.2" fill="none" strokeLinecap="round">
              <animate attributeName="stroke" values="#2a2a2a;#555;#2a2a2a" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M 120 175 m-4 3 q4-5 8 0" stroke="#4a4a4a" strokeWidth="1.2" fill="none" strokeLinecap="round">
              <animate attributeName="stroke" values="#333;#777;#333" dur="2s" begin="-0.3s" repeatCount="indefinite" />
            </path>
            <circle cx="120" cy="178" r="1.5" fill="#888">
              <animate attributeName="fill" values="#555;#aaa;#555" dur="2s" begin="-0.6s" repeatCount="indefinite" />
            </circle>
          </g>
        </g>

        {/* ═══ DESKTOP MONITOR (right) ═══ */}
        <g>
          {/* Shadow */}
          <ellipse cx="740" cy="298" rx="70" ry="6" fill="#000" opacity="0.5" />
          {/* Monitor bezel */}
          <rect x="648" y="50" width="184" height="130" rx="12" fill="#0c0c0c" stroke="#2a2a2a" strokeWidth="1.5" />
          {/* Screen */}
          <rect x="658" y="60" width="164" height="110" rx="6" fill="url(#screen-grad)" stroke="#181818" strokeWidth="1" />
          {/* Thin bezel bottom */}
          <rect x="648" y="175" width="184" height="8" rx="0" fill="#0e0e0e" stroke="#222" strokeWidth="0.5" />
          {/* Neck */}
          <rect x="728" y="183" width="24" height="24" rx="4" fill="#0c0c0c" stroke="#222" strokeWidth="1" />
          {/* Base */}
          <rect x="696" y="205" width="88" height="7" rx="3.5" fill="#0c0c0c" stroke="#222" strokeWidth="1" />

          {/* Monitor camera dot */}
          <circle cx="740" cy="57" r="2" fill="#1a1a1a" />

          {/* Screen: App content */}
          {/* Window chrome */}
          <rect x="660" y="62" width="160" height="12" rx="4" fill="#0e0e0e" />
          <circle cx="668" cy="68" r="2.5" fill="#1e1e1e" />
          <circle cx="677" cy="68" r="2.5" fill="#1e1e1e" />
          <circle cx="686" cy="68" r="2.5" fill="#1e1e1e" />
          <rect x="696" y="65" width="60" height="6" rx="3" fill="#141414" />
          {/* Sidebar */}
          <rect x="660" y="76" width="30" height="90" rx="0" fill="#0d0d0d" stroke="#181818" />
          <rect x="665" y="82" width="20" height="5" rx="2" fill="#1e1e1e" />
          <rect x="665" y="92" width="20" height="5" rx="2" fill="#1a1a1a" />
          <rect x="665" y="102" width="20" height="5" rx="2" fill="#1a1a1a" />
          <rect x="665" y="112" width="20" height="5" rx="2" fill="#222">
            <animate attributeName="fill" values="#1a2a1a;#2a3a2a;#1a2a1a" dur="2s" repeatCount="indefinite" />
          </rect>
          {/* Main content */}
          <rect x="692" y="78" width="124" height="16" rx="4" fill="#111" stroke="#1e1e1e" />
          <rect x="697" y="83" width="50" height="4" rx="2" fill="#222" />
          {/* Transfer row 1 */}
          <rect x="692" y="98" width="124" height="20" rx="4" fill="#0f0f0f" stroke="#1a1a1a" />
          <rect x="697" y="103" width="14" height="10" rx="2" fill="#1a1a1a" />
          <rect x="715" y="104" width="45" height="3" rx="1" fill="#222" />
          <rect x="715" y="110" width="30" height="2" rx="1" fill="#1a1a1a" />
          {/* Progress bar */}
          <rect x="697" y="120" width="114" height="3" rx="1" fill="#0f0f0f" />
          <rect x="697" y="120" width="80" height="3" rx="1" fill="#2e2e2e">
            <animate attributeName="width" values="20;80;114;80" keyTimes="0;0.5;0.9;1" dur="3s" repeatCount="indefinite" />
          </rect>
          {/* Transfer row 2 */}
          <rect x="692" y="127" width="124" height="20" rx="4" fill="#0f0f0f" stroke="#1a1a1a" />
          <rect x="697" y="132" width="14" height="10" rx="2" fill="#1a1a1a" />
          <rect x="715" y="133" width="35" height="3" rx="1" fill="#222" />
          <rect x="715" y="139" width="55" height="2" rx="1" fill="#1a1a1a" />
          {/* Done badge */}
          <rect x="790" y="132" width="22" height="10" rx="5" fill="url(#chip-green)" stroke="#2a4a2a" />
          <rect x="793" y="135" width="16" height="4" rx="1" fill="#3a6a3a" opacity="0.8" />
          {/* Status row */}
          <rect x="692" y="152" width="60" height="3" rx="1" fill="#1a1a1a" />
          <rect x="756" y="152" width="40" height="3" rx="1" fill="#141414" />
        </g>

        {/* ═══ FLOATING CHIP LABELS ═══ */}
        {/* "photo.jpg" chip floating near phone */}
        <g opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.1;0.2;0.85;1" dur="5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,-8;0,-8;0,0" keyTimes="0;0.2;0.5;0.85;1" dur="5s" repeatCount="indefinite" />
          <rect x="42" y="22" width="82" height="22" rx="11" fill="#0f0f0f" stroke="#2a2a2a" strokeWidth="1" />
          <circle cx="56" cy="33" r="5" fill="#1a1a1a" />
          <text x="56" y="36" textAnchor="middle" fill="#555" fontSize="6" fontFamily="monospace">📄</text>
          <rect x="65" y="29" width="36" height="3" rx="1" fill="#2a2a2a" />
          <rect x="65" y="35" width="24" height="2" rx="1" fill="#1e1e1e" />
        </g>
        {/* "Done ✓" chip floating near desktop */}
        <g opacity="0">
          <animate attributeName="opacity" values="0;0;0;1;1;0" keyTimes="0;0.2;0.3;0.4;0.85;1" dur="5s" repeatCount="indefinite" />
          <animateTransform attributeName="transform" type="translate" values="0,0;0,0;0,0;0,-10;0,-10;0,0" keyTimes="0;0.3;0.4;0.5;0.85;1" dur="5s" repeatCount="indefinite" />
          <rect x="760" y="22" width="74" height="22" rx="11" fill="#0a1a0a" stroke="#2a4a2a" strokeWidth="1" />
          <rect x="768" y="29" width="58" height="3" rx="1" fill="#2a4a2a" />
          <rect x="768" y="35" width="36" height="2" rx="1" fill="#1a3a1a" />
        </g>

      </svg>
    </div>
  );
}

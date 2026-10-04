import { ArrowRight, CheckCircle2, Download } from "lucide-react";

const stars = [
  [250, 120], [330, 96], [370, 160], [560, 76], [640, 130], [720, 70],
  [790, 118], [1010, 88], [1080, 140], [1100, 70], [610, 190], [440, 110],
];

export default function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="hero-inner container">
        <p className="section-eyebrow">Android to Ubuntu &amp; Windows</p>
        <h1 className="hero-title">
          Make your devices
          <br />
          <span>work as one.</span>
        </h1>
        <p className="hero-lead">
          Pzync is a free, open-source app that connects your Android phone to
          Ubuntu or Windows over your local network. Send files, sync the
          clipboard, stream audio, and use your phone as a webcam.
        </p>
        <div className="hero-actions">
          <a href="#downloads" className="btn btn-primary hero-btn">
            <Download size={16} /> Download Pzync
          </a>
          <a href="#features" className="btn btn-outline hero-btn">
            Explore features <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="hero-scene container">
        <div
          className="hero-canvas"
          role="img"
          aria-label="One photo continuing across an Android phone and a computer screen, showing a file sent directly between them"
        >
          <svg viewBox="170 20 990 450" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="hs-sky" x1="0" y1="30" x2="0" y2="330" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#141414" />
                <stop offset="1" stopColor="#a3a3a3" />
              </linearGradient>
              <radialGradient id="hs-sun" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
              <clipPath id="hs-phone-screen">
                <rect x="198" y="78" width="184" height="364" rx="27" />
              </clipPath>
              <clipPath id="hs-laptop-screen">
                <rect x="490" y="40" width="640" height="390" rx="10" />
              </clipPath>
              <g id="hs-photo">
                <rect x="190" y="30" width="960" height="430" fill="url(#hs-sky)" />
                {stars.map(([x, y]) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" fill="#fff" opacity="0.7" />
                ))}
                <circle cx="770" cy="185" r="110" fill="url(#hs-sun)" />
                <circle cx="770" cy="185" r="36" fill="#fff" />
                <path d="M190 290 L260 262 L330 285 L420 240 L520 280 L640 225 L760 275 L880 215 L1000 270 L1150 235 V460 H190Z" fill="#6e6e6e" />
                <path d="M190 335 L300 300 L400 338 L520 292 L640 338 L780 288 L920 342 L1040 302 L1150 332 V460 H190Z" fill="#454545" />
                <path d="M190 385 L320 352 L450 388 L580 352 L720 392 L860 357 L1000 397 L1150 367 V460 H190Z" fill="#1f1f1f" />
              </g>
            </defs>

            {/* laptop */}
            <rect x="480" y="30" width="660" height="410" rx="18" fill="#000" stroke="#3a3a3a" strokeWidth="2" />
            <g clipPath="url(#hs-laptop-screen)"><use href="#hs-photo" /></g>
            <rect x="440" y="440" width="740" height="16" rx="8" fill="#161616" stroke="#333" strokeWidth="1.5" />

            {/* phone */}
            <rect x="190" y="70" width="200" height="380" rx="34" fill="#000" stroke="#4a4a4a" strokeWidth="2" />
            <g clipPath="url(#hs-phone-screen)"><use href="#hs-photo" /></g>
            <rect x="262" y="88" width="56" height="14" rx="7" fill="#000" />
            <rect x="214" y="408" width="152" height="4" rx="2" fill="#000" opacity="0.55" />
            <rect x="214" y="408" width="152" height="4" rx="2" fill="#fff" />

            {/* link */}
            <path d="M390 250 H480" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" strokeDasharray="3 7" strokeLinecap="round" />
          </svg>

          <div className="hero-link-chip">
            <span className="live-dot-static" /> Local network
          </div>
          <div className="hero-toast">
            <strong>trip-photos.jpg</strong>
            <span>
              <CheckCircle2 size={13} /> Received · verified
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Download } from 'lucide-react';
import DeviceAnimation from './DeviceAnimation';

interface HeroProps {
  displayVersion: string;
}

export default function Hero({ displayVersion }: HeroProps) {
  return (
    <header className="hero" id="hero">
      {/* Ambient glow orbs */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-glow hero-glow-3" />

      <div className="hero-inner">
        <div className="hero-badge-row">
          <span className="badge">
            <div className="badge-dot" /> {displayVersion} — Available now
          </span>
        </div>

        <h1 className="hero-headline">
          Sync, instantly.
        </h1>

        <DeviceAnimation />

        <p className="hero-sub">
          Local file transfers &amp; clipboard sharing.<br />No cloud. No accounts.
        </p>

        <div className="hero-ctas">
          <a href="#downloads" className="btn btn-primary hero-btn-primary">
            <Download size={16} /> Download Free
          </a>
        </div>
      </div>
    </header>
  );
}

import { Download } from 'lucide-react';
import DeviceAnimation from './DeviceAnimation';
import { BsGithub } from 'react-icons/bs';

const GITHUB_URL = 'https://github.com/pzynk';

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
          Keep Sync'd.
        </h1>

        <DeviceAnimation />

        <p className="hero-sub">
          Local file transfers, clipboard sharing, media controls, and volume sync.<br />
          No cloud. No accounts.
        </p>

        <div className="hero-ctas">
          <a href="#downloads" className="btn btn-primary hero-btn-primary" id="hero-btn-downloads">
            <Download size={16} /> Downloads
          </a>
          <a
            href={GITHUB_URL}
            className="btn btn-outline hero-btn-outline"
            id="hero-btn-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={16} /> View on GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

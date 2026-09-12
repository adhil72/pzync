import { Monitor, Smartphone, TerminalSquare, Download } from 'lucide-react';
import { SiGoogleplay } from 'react-icons/si';

interface DownloadsProps {
  debUrl: string;
  exeUrl: string;
  playStoreUrl?: string;
}

const DEFAULT_PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=sols.sync&hl=en_IN';

export default function Downloads({ debUrl, exeUrl, playStoreUrl = DEFAULT_PLAY_STORE_URL }: DownloadsProps) {
  return (
    <section id="downloads" className="downloads-section" aria-labelledby="downloads-title">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Available Now</p>
          <h2 className="section-title" id="downloads-title">Download Pzync for Windows, Ubuntu, and Android</h2>
        </div>
        <div className="download-grid">
          <div className="download-card" id="download-card-windows">
            <div className="dc-header">
              <div className="platform-icon"><Monitor size={20} /></div>
              <span className="dc-badge">Win</span>
            </div>
            <h3>Windows</h3>
            <p>Windows 10 or later · x64</p>
            <a href={exeUrl} className="btn btn-outline dc-btn" id="download-btn-windows" download aria-label="Download Pzync for Windows">
              <Download size={14} /> .exe
            </a>
          </div>
          <div className="download-card" id="download-card-ubuntu">
            <div className="dc-header">
              <div className="platform-icon"><TerminalSquare size={20} /></div>
            </div>
            <h3>Ubuntu / Debian</h3>
            <p>Debian-based Linux · amd64</p>
            <a href={debUrl} className="btn btn-outline dc-btn" id="download-btn-ubuntu" download aria-label="Download Pzync for Ubuntu">
              <Download size={14} /> .deb
            </a>
          </div>
          <div className="download-card" id="download-card-android">
            <div className="dc-header">
              <div className="platform-icon"><Smartphone size={20} /></div>
              <span className="dc-badge">Play Store</span>
            </div>
            <h3>Android</h3>
            <p>Android 7.0 or later · Google Play</p>
            <a
              href={playStoreUrl}
              className="btn btn-outline dc-btn"
              id="download-btn-android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Pzync on Google Play"
            >
              <SiGoogleplay size={14} /> Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

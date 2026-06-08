import { Monitor, Smartphone, TerminalSquare, Download, Mail } from 'lucide-react';

interface DownloadsProps {
  debUrl: string;
  exeUrl: string;
}

const EARLY_ACCESS_EMAIL = 'adhil.mhdk28@gmail.com';

export default function Downloads({ debUrl, exeUrl }: DownloadsProps) {
  return (
    <section id="downloads" className="downloads-section" aria-labelledby="downloads-title">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Available Now</p>
          <h2 className="section-title" id="downloads-title">Get Pzync</h2>
        </div>
        <div className="download-grid">
          <div className="download-card" id="download-card-windows">
            <div className="dc-header">
              <div className="platform-icon"><Monitor size={20} /></div>
              <span className="dc-badge">Win</span>
            </div>
            <h3>Windows</h3>
            <p>Windows 10 or later · x64</p>
            <a href={exeUrl} className="btn btn-outline dc-btn" id="download-btn-windows" download>
              <Download size={14} /> .exe
            </a>
          </div>
          <div className="download-card" id="download-card-ubuntu">
            <div className="dc-header">
              <div className="platform-icon"><TerminalSquare size={20} /></div>
            </div>
            <h3>Ubuntu / Debian</h3>
            <p>Debian-based Linux · amd64</p>
            <a href={debUrl} className="btn btn-outline dc-btn" id="download-btn-ubuntu" download>
              <Download size={14} /> .deb
            </a>
          </div>
          <div className="download-card" id="download-card-android">
            <div className="dc-header">
              <div className="platform-icon"><Smartphone size={20} /></div>
            </div>
            <h3>Android</h3>
            <p>Android 10+ · Direct install</p>
            <a
              href={`mailto:${EARLY_ACCESS_EMAIL}?subject=Pzync%20Android%20Early%20Access`}
              className="btn btn-outline dc-btn"
              id="download-btn-android"
            >
              <Mail size={14} /> Get Early Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

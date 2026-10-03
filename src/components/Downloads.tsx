import { Monitor, Smartphone, TerminalSquare, Download, Wifi, Gift, UserX } from 'lucide-react';
import { BsGithub } from 'react-icons/bs';
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
        <div className="section-header downloads-header">
          <div>
            <p className="section-eyebrow">Download for Android, Windows &amp; Ubuntu</p>
            <h2 className="section-title" id="downloads-title">
              Install on both.<br />Pair in seconds.
            </h2>
          </div>
          <p className="downloads-lead">
            Put the Android app on your phone and the desktop app on your computer, join the same Wi-Fi, and they find each other.
          </p>
        </div>

        <div className="download-grid">
          <div className="download-card dc-featured" id="download-card-android">
            <div className="dc-header">
              <div className="platform-icon"><Smartphone size={20} /></div>
              <span className="dc-badge">Start here</span>
            </div>
            <h3>Android</h3>
            <p>The phone side. Needed for every feature.</p>
            <dl className="dc-specs">
              <div><dt>Requires</dt><dd>Android 7.0+</dd></div>
              <div><dt>Source</dt><dd>Google Play</dd></div>
            </dl>
            <a
              href={playStoreUrl}
              className="btn btn-primary dc-btn"
              id="download-btn-android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Pzync on Google Play"
            >
              <SiGoogleplay size={14} /> Get it on Google Play
            </a>
          </div>

          <div className="download-card" id="download-card-windows">
            <div className="dc-header">
              <div className="platform-icon"><Monitor size={20} /></div>
              <span className="dc-badge">Desktop</span>
            </div>
            <h3>Windows</h3>
            <p>Installer for Windows 10 and later.</p>
            <dl className="dc-specs">
              <div><dt>Requires</dt><dd>Windows 10+</dd></div>
              <div><dt>Format</dt><dd>.exe · x64</dd></div>
            </dl>
            <a href={exeUrl} className="btn btn-outline dc-btn" id="download-btn-windows" download aria-label="Download Pzync for Windows">
              <Download size={14} /> Download .exe
            </a>
          </div>

          <div className="download-card" id="download-card-ubuntu">
            <div className="dc-header">
              <div className="platform-icon"><TerminalSquare size={20} /></div>
              <span className="dc-badge">Desktop</span>
            </div>
            <h3>Ubuntu / Debian</h3>
            <p>Package for Debian-based Linux.</p>
            <dl className="dc-specs">
              <div><dt>Requires</dt><dd>Debian-based</dd></div>
              <div><dt>Format</dt><dd>.deb · amd64</dd></div>
            </dl>
            <a href={debUrl} className="btn btn-outline dc-btn" id="download-btn-ubuntu" download aria-label="Download Pzync for Ubuntu">
              <Download size={14} /> Download .deb
            </a>
          </div>
        </div>

        <ul className="download-notes">
          <li><Wifi size={15} /> Works over your local network</li>
          <li><UserX size={15} /> No account needed</li>
          <li><Gift size={15} /> Free to use</li>
          <li>
            <BsGithub size={15} />
            <a href="https://github.com/pzynk" target="_blank" rel="noopener noreferrer">Open source on GitHub</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

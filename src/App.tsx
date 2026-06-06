import {
  Monitor, Smartphone, TerminalSquare, ArrowRight,
  Share2, Copy, CheckCircle, Zap, Shield, Download, Wifi,
} from 'lucide-react';
import './index.css';

function App() {
  const DEB_URL = 'https://github.com/pzynk/desktop/releases/download/v0.1.9/Pzync_0.1.9_amd64.deb';
  const EXE_URL = 'https://github.com/pzynk/desktop/releases/download/v0.1.9/Pzync_0.1.9_x64-setup.exe';
  const APK_URL = `${import.meta.env.BASE_URL}downloads/app.apk`;

  return (
    <>
      {/* ── NAV ─────────────────────────────────────── */}
      <nav className="nav" aria-label="Main Navigation">
        <div className="logo-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={`${import.meta.env.BASE_URL}logo2.svg`} alt="Pzync Logo" />
          <span>Pzync</span>
        </div>
        <div className="nav-links">
          <a href="#features" id="nav-link-features">Features</a>
          <a href="#downloads" id="nav-link-downloads">Downloads</a>
        </div>
        <a href="#downloads" className="btn btn-primary nav-cta" id="nav-cta-download">
          Download
        </a>
      </nav>

      {/* ── HERO ─────────────────────────────────────── */}
      <header className="hero">
        <div className="hero-inner">
          {/* Left — text */}
          <div className="hero-content">
            <div className="badge" id="hero-beta-badge">
              Beta 1.0 — Live
            </div>
            <h1 className="hero-headline">
              Devices<br />
              in Sync
            </h1>
            <p className="hero-sub">
              Clipboard sharing, high-speed file transfer, and media controls — 
              bridging Android and desktop privately, zero cloud.
            </p>
            <div className="hero-ctas">
              <a href="#downloads" className="btn btn-primary" id="hero-cta-download">
                <Download size={16} /> Download
              </a>
              <a href="#features" className="btn btn-outline" id="hero-cta-features">
                Features <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right — phone */}
          <div className="hero-visual" id="hero-visual-phone">
            <div className="stat-chip chip-1" id="stat-chip-connected">
              <span className="chip-icon"><CheckCircle size={13} /></span>
              Connected
            </div>
            <div className="stat-chip chip-2" id="stat-chip-speed">
              <span className="chip-icon"><Zap size={13} /></span>
              118 MB/s
            </div>
            <div className="stat-chip chip-3" id="stat-chip-clipboard">
              <span className="chip-icon"><Copy size={13} /></span>
              Synced
            </div>

            <div className="phone-shell">
              <div className="phone-notch">
                <div className="notch-speaker" />
                <div className="notch-camera" />
              </div>
              <div className="phone-screen">
                <img src={`${import.meta.env.BASE_URL}screenshot.png`} alt="Pzync Android Interface Mockup" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── FEATURES BENTO ─────────────────────────── */}
      <section id="features" className="features-section" aria-labelledby="features-title">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Core Features</p>
            <h2 className="section-title" id="features-title">
              Built for speed.<br />Designed for privacy.
            </h2>
          </div>

          <div className="bento-grid">
            {/* ── Large: File Transfer ── */}
            <div className="bento-card bento-large ft-card" id="feature-file-transfer">
              <div className="bento-content">
                <div className="bento-icon">
                  <Share2 size={20} />
                </div>
                <h3>Local File Transfer</h3>
                <p>
                  Peer-to-peer over your LAN — no cloud hops, no size limits,
                  no waiting. Drag, drop, done.
                </p>
              </div>
              <div className="bento-visual ft-visual">
                <div className="transfer-widget" id="tw-1">
                  <div className="tw-header">
                    <span className="tw-name">presentation.pdf</span>
                    <span className="tw-meta">88%</span>
                  </div>
                  <div className="tb-track"><div className="tb-fill" style={{ width: '88%' }} /></div>
                </div>
                <div className="transfer-widget tw-done" id="tw-2">
                  <div className="tw-header">
                    <span className="tw-name">vacation_photo.jpg</span>
                    <span className="tw-meta">Done ✓</span>
                  </div>
                  <div className="tb-track"><div className="tb-fill tb-done" style={{ width: '100%' }} /></div>
                </div>
              </div>
            </div>

            {/* ── Small: Clipboard ── */}
            <div className="bento-card bento-small cb-card" id="feature-clipboard">
              <div className="bento-icon">
                <Copy size={18} />
              </div>
              <h3>Universal Clipboard</h3>
              <p>Copy on Android, paste on desktop. Instantly.</p>
              <div className="clipboard-demo" id="clipboard-demo-widget">
                <div className="cb-device">
                  <Smartphone size={18} />
                  <span>Android</span>
                </div>
                <div className="cb-connector">
                  <div className="cb-line" />
                </div>
                <div className="cb-device cb-device-active">
                  <Monitor size={18} />
                  <span>Desktop</span>
                </div>
              </div>
            </div>

            {/* ── Full: Privacy ── */}
            <div className="bento-card bento-full priv-card" id="feature-privacy">
              <div className="bento-content">
                <div className="bento-icon">
                  <Shield size={20} />
                </div>
                <h3>100% Local & Private</h3>
                <p>
                  Everything stays on your own network. No accounts, no servers,
                  no telemetry. Your data stays yours.
                </p>
                <div className="priv-badges">
                  <span className="priv-badge"><Wifi size={12} /> LAN Only</span>
                  <span className="priv-badge"><Shield size={12} /> No Cloud</span>
                </div>
              </div>
              <div className="bento-visual priv-visual" id="privacy-visual-widget">
                <div className="priv-node node-phone"><Smartphone size={20} /></div>
                <div className="priv-connection">
                  <div className="conn-line" />
                  <div className="conn-lock">
                    <Shield size={12} />
                  </div>
                </div>
                <div className="priv-node node-desktop"><Monitor size={20} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOWNLOADS ─────────────────────────────── */}
      <section id="downloads" className="downloads-section" aria-labelledby="downloads-title">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Available Now</p>
            <h2 className="section-title" id="downloads-title">Get Pzync</h2>
          </div>
          <div className="download-grid">
            <div className="download-card dc-featured" id="download-card-windows">
              <div className="dc-header">
                <div className="platform-icon"><Monitor size={20} /></div>
                <span className="dc-badge">Win</span>
              </div>
              <h3>Windows</h3>
              <p>Windows 10 or later · x64</p>
              <a href={EXE_URL} className="btn btn-primary dc-btn" id="download-btn-windows" download>
                <Download size={14} /> .exe
              </a>
            </div>
            <div className="download-card" id="download-card-ubuntu">
              <div className="dc-header">
                <div className="platform-icon"><TerminalSquare size={20} /></div>
              </div>
              <h3>Ubuntu / Debian</h3>
              <p>Debian-based Linux · amd64</p>
              <a href={DEB_URL} className="btn btn-outline dc-btn" id="download-btn-ubuntu" download>
                <Download size={14} /> .deb
              </a>
            </div>
            <div className="download-card" id="download-card-android">
              <div className="dc-header">
                <div className="platform-icon"><Smartphone size={20} /></div>
              </div>
              <h3>Android</h3>
              <p>Android 10+ · Direct install</p>
              <a href={APK_URL} className="btn btn-outline dc-btn" id="download-btn-android" download>
                <Download size={14} /> .apk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer>
        <div className="footer-inner">
          <div className="footer-logo">
            <img src={`${import.meta.env.BASE_URL}logo2.svg`} alt="Pzync Logo" />
            <span>Pzync</span>
          </div>
          <p>© 2026 Pzync</p>
        </div>
      </footer>
    </>
  );
}

export default App;

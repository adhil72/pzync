import {
  Monitor, Smartphone, Share2, Copy, Shield, Camera, Video,
  SkipBack, Play, SkipForward, Volume2
} from 'lucide-react';

export default function Features() {
  return (
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

          {/* ── Half: Media Controls ── */}
          <div className="bento-card bento-half media-card" id="feature-media-controls">
            <div className="bento-icon">
              <Play size={18} />
            </div>
            <h3>Media Controls</h3>
            <p>View and control what&apos;s playing on your PC — play, pause, skip — right from your phone.</p>
            <div className="media-controls-demo" id="media-controls-demo-widget">
              <span className="media-track">Now playing on Desktop</span>
              <div className="media-buttons">
                <button type="button" className="media-btn" aria-label="Previous track" tabIndex={-1}>
                  <SkipBack size={14} />
                </button>
                <button type="button" className="media-btn media-btn-active" aria-label="Play or pause" tabIndex={-1}>
                  <Play size={14} />
                </button>
                <button type="button" className="media-btn" aria-label="Next track" tabIndex={-1}>
                  <SkipForward size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* ── Half: Volume Sync ── */}
          <div className="bento-card bento-half volume-card" id="feature-volume-sync">
            <div className="bento-icon">
              <Volume2 size={18} />
            </div>
            <h3>Volume Sync</h3>
            <p>Keep your PC&apos;s master volume in sync with your phone — adjust from either device.</p>
            <div className="volume-demo" id="volume-demo-widget">
              <div className="volume-row">
                <Smartphone size={16} />
                <div className="volume-track">
                  <div className="volume-fill" style={{ width: '72%' }} />
                </div>
                <span className="volume-level">72%</span>
              </div>
              <div className="volume-row volume-row-muted">
                <Monitor size={16} />
                <div className="volume-track">
                  <div className="volume-fill" style={{ width: '72%' }} />
                </div>
                <span className="volume-level">72%</span>
              </div>
            </div>
          </div>

          {/* ── Full: Mobile Camera ── */}
          <div className="bento-card bento-full cam-card" id="feature-camera">
            <div className="bento-content">
              <div className="bento-icon">
                <Camera size={20} />
              </div>
              <h3>Mobile Camera as Webcam</h3>
              <p>
                Use your phone&apos;s camera as a wireless webcam on desktop —
                for video calls, streaming, and recording. No extra hardware.
              </p>
            </div>
            <div className="bento-visual priv-visual" id="camera-visual-widget">
              <div className="priv-node node-phone cam-node-active"><Camera size={20} /></div>
              <div className="priv-connection">
                <div className="conn-line" />
                <div className="conn-lock">
                  <Video size={12} />
                </div>
              </div>
              <div className="priv-node node-desktop"><Monitor size={20} /></div>
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
  );
}

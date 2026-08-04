import {
  Monitor, Smartphone, Share2, Copy, Shield, Camera, Video,
  SkipBack, Play, SkipForward, Volume2, Radio, CheckCircle2,
  Sun, Moon, Zap, ShieldCheck, Cpu
} from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="features-section" aria-labelledby="features-title">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Core Features</p>
          <h2 className="section-title" id="features-title">
            Built for speed.<br />Designed for cross-platform privacy.
          </h2>
        </div>

        <div className="bento-grid">
          {/* ── Large: PC Audio Streaming (NEW) ── */}
          <div className="bento-card bento-large audio-card" id="feature-audio-streaming">
            <div className="bento-content">
              <div className="bento-icon">
                <Radio size={20} />
              </div>
              <h3>PC System Audio Streaming</h3>
              <p>
                Stream desktop system audio wirelessly to your mobile device with ultra-low latency.
                Listen to PC music, video calls, or gaming sound on phone speakers or headphones anywhere on your LAN.
              </p>
            </div>
            <div className="bento-visual audio-visual" id="audio-visual-widget">
              <div className="audio-stream-card">
                <div className="audio-header">
                  <div className="audio-badge">
                    <span className="live-dot" /> LIVE STREAM
                  </div>
                  <span className="audio-quality">48 kHz PCM</span>
                </div>
                <div className="eq-bars">
                  <div className="eq-bar bar-1" />
                  <div className="eq-bar bar-2" />
                  <div className="eq-bar bar-3" />
                  <div className="eq-bar bar-4" />
                  <div className="eq-bar bar-5" />
                  <div className="eq-bar bar-6" />
                  <div className="eq-bar bar-7" />
                  <div className="eq-bar bar-8" />
                </div>
                <div className="audio-footer">
                  <Monitor size={14} className="text-muted" />
                  <span className="audio-source">Desktop Audio Output</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Small: Universal Clipboard ── */}
          <div className="bento-card bento-small cb-card" id="feature-clipboard">
            <div className="bento-icon">
              <Copy size={18} />
            </div>
            <h3>Universal Clipboard</h3>
            <p>Copy on Android, paste on desktop — and vice versa. Real-time bi-directional clipboard sync.</p>
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

          {/* ── Large: File Transfer with SHA-256 & Real-time Speed ── */}
          <div className="bento-card bento-large ft-card" id="feature-file-transfer">
            <div className="bento-content">
              <div className="bento-icon">
                <Share2 size={20} />
              </div>
              <h3>Streaming File Transfer & Integrity</h3>
              <p>
                High-speed local peer-to-peer file transfers with live MB/s throughput,
                estimated remaining time, pause/resume, and SHA-256 cryptographic hash validation.
              </p>
            </div>
            <div className="bento-visual ft-visual">
              <div className="transfer-widget" id="tw-1">
                <div className="tw-header">
                  <span className="tw-name">video_project_4k.mp4</span>
                  <span className="tw-speed">48.2 MB/s · ETA 00:03</span>
                </div>
                <div className="tb-track"><div className="tb-fill" style={{ width: '74%' }} /></div>
                <div className="tw-submeta">
                  <span className="tw-meta">74% (1.4 GB / 1.9 GB)</span>
                  <span className="sha-badge"><CheckCircle2 size={11} /> SHA-256 Validated</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Half: Media Controls ── */}
          <div className="bento-card bento-half media-card" id="feature-media-controls">
            <div className="bento-icon">
              <Play size={18} />
            </div>
            <h3>Media Controls</h3>
            <p>View now-playing metadata and control desktop media — play, pause, skip tracks — directly from your phone.</p>
            <div className="media-controls-demo" id="media-controls-demo-widget">
              <span className="media-track">Now playing on PC</span>
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
            <h3>Master Volume Sync</h3>
            <p>Keep your desktop master system volume in sync with your mobile phone — adjust volume from either device.</p>
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

          {/* ── Half: Mobile Camera ── */}
          <div className="bento-card bento-half cam-card" id="feature-camera">
            <div className="bento-content">
              <div className="bento-icon">
                <Camera size={20} />
              </div>
              <h3>Mobile Camera as Wireless HD Webcam</h3>
              <p>
                Use your phone&apos;s camera as a wireless webcam on Windows (virtual camera) and Ubuntu (v4l2loopback), complete with resolution and FPS controls.
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

          {/* ── Half: Light & Dark Theme UI ── */}
          <div className="bento-card bento-half theme-card" id="feature-themes">
            <div className="bento-content">
              <div className="bento-icon">
                <Sun size={20} />
              </div>
              <h3>Sleek Dark & Light Themes</h3>
              <p>
                Crafted with modern glassmorphism aesthetic supporting both Light Mode and Dark Mode across desktop and mobile.
              </p>
            </div>
            <div className="theme-demo-widget" id="theme-demo-widget">
              <div className="theme-preview dark-prev">
                <Moon size={14} />
                <span>Dark Theme</span>
              </div>
              <div className="theme-preview light-prev">
                <Sun size={14} />
                <span>Light Theme</span>
              </div>
            </div>
          </div>

          {/* ── Full: Privacy & Auto-Discovery ── */}
          <div className="bento-card bento-full priv-card" id="feature-privacy">
            <div className="bento-content">
              <div className="bento-icon">
                <Shield size={20} />
              </div>
              <h3>100% Local, Encrypted & Zero Telemetry</h3>
              <p>
                UDP local network discovery and peer-to-peer TCP encrypted pairing. Everything stays on your local network. No accounts, no cloud servers, no telemetry.
              </p>
            </div>
            <div className="bento-visual priv-visual" id="privacy-visual-widget">
              <div className="priv-node node-phone"><Smartphone size={20} /></div>
              <div className="priv-connection">
                <div className="conn-line" />
                <div className="conn-lock">
                  <ShieldCheck size={14} />
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

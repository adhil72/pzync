import {
  Monitor, Smartphone, Share2, Copy, Shield, Camera, Video,
  SkipBack, Play, SkipForward, Volume2, Radio, CheckCircle2,
  Sun, Moon, ShieldCheck, Image as ImageIcon, Mic, SquareTerminal,
  Share, Power, RefreshCw, PanelBottom, ArrowRight, ArrowLeftRight
} from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="features-section" aria-labelledby="features-title">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Core Features</p>
          <h2 className="section-title" id="features-title">
            One link.<br />Everything crosses it.
          </h2>
        </div>

        <div className="feature-group">
          <div className="group-head">
            <div className="dir" aria-hidden="true">
              <span className="dir-node"><Smartphone size={20} /></span>
              <span className="dir-arrow"><ArrowRight size={18} /></span>
              <span className="dir-node"><Monitor size={20} /></span>
            </div>
            <div>
              <h3 className="group-title">Phone to computer</h3>
              <p className="group-blurb">Your phone&apos;s camera, microphone and screenshots, plus remote control of the desktop.</p>
            </div>
          </div>
          <div className="bento-grid">
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
          {/* ── Half: Phone as Microphone ── */}
          <div className="bento-card bento-half mic-card" id="feature-microphone">
            <div className="bento-content">
              <div className="bento-icon">
                <Mic size={20} />
              </div>
              <h3>Phone as Wireless Microphone</h3>
              <p>
                Stream your phone&apos;s microphone to your computer, where it shows up as a virtual input device. Mute and adjust the level from the app.
              </p>
            </div>
            <div className="bento-visual priv-visual" id="mic-visual-widget">
              <div className="priv-node node-phone cam-node-active"><Mic size={20} /></div>
              <div className="priv-connection">
                <div className="conn-line" />
                <div className="conn-lock">
                  <Radio size={12} />
                </div>
              </div>
              <div className="priv-node node-desktop"><Monitor size={20} /></div>
            </div>
          </div>
          {/* ── Small: Screenshot Sync ── */}
          <div className="bento-card bento-small ss-card" id="feature-screenshot-sync">
            <div className="bento-icon">
              <ImageIcon size={18} />
            </div>
            <h3>Screenshot Sync</h3>
            <p>Take a screenshot on your phone and it lands on your desktop clipboard, ready to paste. Opt-in, one toggle.</p>
            <div className="ss-demo" id="screenshot-demo-widget">
              <div className="ss-thumb" aria-hidden="true" />
              <div className="ss-text">
                <span className="tw-name">Screenshot_1042.png</span>
                <span className="tw-meta">Copied to desktop clipboard</span>
              </div>
            </div>
          </div>
          {/* ── Large: Remote Terminal ── */}
          <div className="bento-card bento-large term-card" id="feature-terminal">
            <div className="bento-content">
              <div className="bento-icon">
                <SquareTerminal size={20} />
              </div>
              <h3>Remote Terminal &amp; Screen Capture</h3>
              <p>
                Run commands on your desktop from your phone and capture what is on its screen. Only devices you have paired can connect.
              </p>
            </div>
            <div className="bento-visual" id="terminal-visual-widget">
              <div className="term-demo">
                <span className="term-line"><b>$</b> ls ~/Downloads</span>
                <span className="term-line term-out">trip-photos.zip  report.pdf</span>
                <span className="term-line"><b>$</b> screenshot</span>
                <span className="term-line term-ok">✓ Screen captured</span>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="feature-group">
          <div className="group-head">
            <div className="dir" aria-hidden="true">
              <span className="dir-node"><Monitor size={20} /></span>
              <span className="dir-arrow"><ArrowRight size={18} /></span>
              <span className="dir-node"><Smartphone size={20} /></span>
            </div>
            <div>
              <h3 className="group-title">Computer to phone</h3>
              <p className="group-blurb">Hear, control and adjust what is playing on your PC from wherever you are.</p>
            </div>
          </div>
          <div className="bento-grid">
          {/* ── Large: PC Audio Streaming (NEW) ── */}
          <div className="bento-card bento-full audio-card" id="feature-audio-streaming">
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
          </div>
        </div>

        <div className="feature-group">
          <div className="group-head">
            <div className="dir" aria-hidden="true">
              <span className="dir-node"><Smartphone size={20} /></span>
              <span className="dir-arrow"><ArrowLeftRight size={18} /></span>
              <span className="dir-node"><Monitor size={20} /></span>
            </div>
            <div>
              <h3 className="group-title">Both ways</h3>
              <p className="group-blurb">Anything you copy or send moves in either direction.</p>
            </div>
          </div>
          <div className="bento-grid">
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
          <div className="bento-card bento-full share-card" id="feature-share-tile">
            <div className="bento-content">
              <div className="bento-icon">
                <Share size={18} />
              </div>
              <h3>Share Sheet &amp; Quick Tile</h3>
              <p>Send anything from Android&apos;s Share menu, or sync your clipboard in one tap from the Quick Settings tile.</p>
            </div>
            <div className="chip-row">
              <span className="priv-badge"><Share size={11} /> Share to Pzync</span>
              <span className="priv-badge"><Copy size={11} /> Clipboard tile</span>
            </div>
          </div>
          </div>
        </div>

        <div className="feature-group">
          <div className="group-head">
            <div className="dir" aria-hidden="true">
              <span className="dir-node"><ShieldCheck size={20} /></span>
              <span className="dir-arrow"><ArrowRight size={18} /></span>
              <span className="dir-node"><Monitor size={20} /></span>
            </div>
            <div>
              <h3 className="group-title">Around it all</h3>
              <p className="group-blurb">Private by design, quiet in the background, comfortable in any theme.</p>
            </div>
          </div>
          <div className="bento-grid">
          {/* ── Full: Privacy & Auto-Discovery ── */}
          <div className="bento-card bento-full priv-card" id="feature-privacy">
            <div className="bento-content">
              <div className="bento-icon">
                <Shield size={20} />
              </div>
              <h3>100% Local &amp; Encrypted</h3>
              <p>
                UDP local network discovery and peer-to-peer TCP encrypted pairing. Everything stays on your local network. No accounts and no cloud servers. The Android app collects only anonymous usage analytics, as described in the privacy policy.
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
          {/* ── Half: Background Desktop App ── */}
          <div className="bento-card bento-half bg-card" id="feature-background">
            <div className="bento-icon">
              <PanelBottom size={18} />
            </div>
            <h3>Quietly Always There</h3>
            <p>Pzync lives in your system tray, can start with your computer, and keeps itself up to date.</p>
            <ul className="bg-list">
              <li><PanelBottom size={14} /> System tray with transfer progress</li>
              <li><Power size={14} /> Launch at startup, minimized</li>
              <li><RefreshCw size={14} /> Automatic updates</li>
            </ul>
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
          </div>
        </div>
      </div>
    </section>
  );
}

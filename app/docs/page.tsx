import type { Metadata } from "next";
import JsonLd from "../../src/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "../../src/lib/seo";
import PageLayout from "../../src/components/PageLayout";
import { absoluteUrl } from "../../src/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Setup Guide: Connect Android to Windows or Ubuntu",
  description:
    "Install Pzync, pair your Android phone with a Windows or Ubuntu PC, open the right firewall ports, and set up the webcam, microphone and screenshot sync.",
  path: "/docs",
});

const pairingSteps = [
  "Connect your phone and computer to the same Wi-Fi or local network.",
  "Open Pzync on your Windows or Ubuntu computer. It starts announcing itself on the network.",
  "Open Pzync on your Android phone. Your computer appears in the device list.",
  "Tap your computer and request to pair.",
  "Check that the matching code shown on both screens is the same, then accept on the computer.",
];

const docsJsonLd = [
  breadcrumbJsonLd([{ name: "Docs", path: "/docs" }]),
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to connect an Android phone to Windows or Ubuntu with Pzync",
    description:
      "Install Pzync on your phone and computer and pair them over your local network.",
    totalTime: "PT5M",
    tool: [{ "@type": "HowToTool", name: "Pzync for Android" }, { "@type": "HowToTool", name: "Pzync for Windows or Ubuntu" }],
    step: pairingSteps.map((text, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: text.split(".")[0],
      text,
      url: absoluteUrl("/docs#pair"),
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Get started with Pzync",
    about: "Connecting Android to Windows and Ubuntu",
    url: absoluteUrl("/docs"),
    inLanguage: "en",
    publisher: { "@id": absoluteUrl("/#organization") },
  },
];

const toc = [
  ["install", "Install"],
  ["pair", "Pair your devices"],
  ["network", "Network and firewall"],
  ["camera", "Phone as webcam"],
  ["microphone", "Phone as microphone"],
  ["screenshots", "Screenshot sync"],
  ["terminal", "Remote terminal"],
  ["background", "Running in the background"],
];

export default function DocsPage() {
  return (
    <PageLayout
      jsonLd={docsJsonLd}
      eyebrow="Documentation"
      title="Get started with Pzync"
      lead="From install to your first transfer in a few minutes. Then set up the features that need a little extra."
    >
      <div className="doc-layout">
        <nav className="doc-toc" aria-label="On this page">
          <p>On this page</p>
          {toc.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>

        <div className="prose">
          <h2 id="install">Install</h2>
          <p>You need Pzync on both devices:</p>
          <ul>
            <li><strong>Phone:</strong> install the Android app from Google Play. It needs Android 7.0 or later.</li>
            <li><strong>Computer:</strong> install the Windows <code>.exe</code> or the Ubuntu/Debian <code>.deb</code> from the <a href="/#downloads">downloads section</a>.</li>
          </ul>

          <h2 id="pair">Pair your devices</h2>
          <ol className="steps">
            <li>Connect your phone and computer to the <strong>same Wi-Fi or local network</strong>.</li>
            <li>Open Pzync on your computer. It starts announcing itself on the network.</li>
            <li>Open Pzync on your phone. Your computer appears in the device list.</li>
            <li>Tap your computer and request to pair.</li>
            <li>Check that the <strong>matching code</strong> shown on both screens is the same, then accept on the computer.</li>
          </ol>
          <p>
            Paired devices are remembered, so next time they connect on their own
            whenever they are on the same network.
          </p>

          <h2 id="network">Network and firewall</h2>
          <p>Pzync uses two ports on your local network:</p>
          <table>
            <tbody>
              <tr><th>Port</th><th>Protocol</th><th>Purpose</th></tr>
              <tr><td><code>8200</code></td><td>UDP</td><td>Discovery: the computer announces itself</td></tr>
              <tr><td><code>8080</code></td><td>TCP</td><td>Connection and data transfer</td></tr>
            </tbody>
          </table>
          <p>
            If your phone cannot find your computer, allow Pzync through your
            computer&apos;s firewall for private networks, and make sure your router
            does not isolate Wi-Fi clients from each other. Some guest networks
            and public Wi-Fi do this. See <a href="/support">Support</a> for more fixes.
          </p>

          <h2 id="camera">Phone as webcam</h2>
          <p>
            Open the camera feature on your phone and start the stream from the
            device screen. Pzync creates a virtual camera on your computer that
            apps like video-call software can select.
          </p>
          <h3>Ubuntu</h3>
          <p>
            Ubuntu uses the <code>v4l2loopback</code> kernel module to provide the
            virtual camera. If your camera does not appear, install it:
          </p>
          <pre><code>sudo apt install v4l2loopback-dkms</code></pre>
          <h3>Windows</h3>
          <p>
            Pzync includes a virtual camera component and registers it the first
            time you use the camera. Windows may ask for permission. If the camera
            does not show up in an app, restart that app after the first start.
          </p>

          <h2 id="microphone">Phone as microphone</h2>
          <p>
            Start the microphone feature on your phone. Your computer gets a
            virtual input device that you can choose in any app. You can mute and
            adjust the level from the app.
          </p>

          <h2 id="screenshots">Screenshot sync</h2>
          <p>
            In the Android app, open the clipboard settings and turn on{" "}
            <strong>Sync Screenshots to Desktop Clipboard</strong>. Android will
            ask for access to your photos. After that, each new screenshot you
            take on your phone is copied to your computer&apos;s clipboard, ready to
            paste. It is off by default.
          </p>

          <h2 id="terminal">Remote terminal</h2>
          <p>
            A paired phone can run commands on your computer and capture its
            screen. Only pair phones you own and trust, since anything paired can
            use this feature.
          </p>
          <p>On Linux, screen capture and window features rely on these tools:</p>
          <pre><code>sudo apt install scrot xdotool wmctrl gnome-screenshot</code></pre>

          <h2 id="background">Running in the background</h2>
          <p>
            The desktop app lives in your system tray and can start with your
            computer. On Android, Pzync keeps a small notification while it is
            connected. If your phone stops the connection when the screen is off,
            exclude Pzync from battery optimization in Android settings.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

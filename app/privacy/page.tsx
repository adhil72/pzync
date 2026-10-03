import type { Metadata } from "next";
import JsonLd from "../../src/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "../../src/lib/seo";
import PageLayout from "../../src/components/PageLayout";
import { DESKTOP_ISSUES } from "../../src/lib/links";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Pzync handles your data: files and clipboard stay on your local network, with no accounts and no cloud servers. Includes Android analytics details.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageLayout
      jsonLd={breadcrumbJsonLd([{ name: "Privacy Policy", path: "/privacy" }])}
      eyebrow="Legal"
      title="Privacy Policy"
      lead="Pzync moves your data between your own devices on your own network. This page explains exactly what is processed, what is stored, and the one thing that does leave your device."
      updated="October 3, 2026"
    >
      <div className="prose">
        <div className="callout">
          <p>
            <strong>In short:</strong> your files, clipboard, audio, camera and
            terminal data go directly between your paired devices over your local
            network. They are never sent to us or to any cloud server. The
            Android app sends anonymous usage analytics through Google Firebase.
          </p>
        </div>

        <h2>1. Data that moves between your devices</h2>
        <p>
          To provide syncing, the Android app and the desktop app exchange the
          following directly over your local Wi-Fi or Ethernet network. This data
          is never sent to or stored on a remote server run by us.
        </p>
        <ul>
          <li><strong>Files</strong> you choose to send. We do not inspect, cache or store their contents.</li>
          <li><strong>Clipboard content</strong>, including text and, if you turn on Screenshot Sync, new screenshots taken on your phone.</li>
          <li><strong>Audio and video streams</strong>: desktop audio sent to your phone, and your phone&apos;s camera and microphone sent to your computer when you start those features.</li>
          <li><strong>Media and volume status</strong>, such as the current track title and volume level, so you can control playback.</li>
          <li><strong>Terminal commands and results</strong>, and screen captures of your desktop, when you use the remote terminal from a paired phone.</li>
        </ul>

        <h2>2. Device information and pairing</h2>
        <p>
          Devices announce a device name, operating system type and a randomly
          generated device ID on your local network so they can find each other.
          Connections between paired devices are encrypted with TLS. When you pair
          two devices, both screens show a matching code for you to confirm, so
          you know you are connecting to the right device.
        </p>
        <p>
          Pairing authorization and trusted-device details are stored on each
          device. On Android they are kept using encrypted storage backed by the
          Android Keystore.
        </p>

        <h2>3. Analytics on Android</h2>
        <p>
          The Android app uses <strong>Google Firebase Analytics</strong> to
          understand stability and basic usage, such as app launches and which
          screens are used. This is anonymous diagnostic information, for example
          device model and OS version. It does not include your files, clipboard
          content or terminal activity. Google&apos;s handling of this data is described
          in <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.
        </p>
        <p>The desktop app does not include analytics or telemetry.</p>

        <h2>4. Network requests the apps make</h2>
        <ul>
          <li>The desktop app checks GitHub for new releases so it can update itself.</li>
          <li>This website loads the latest release information from GitHub to build the download links and changelog.</li>
        </ul>

        <h2>5. Permissions on Android</h2>
        <p>The Android app asks for permissions only for the features that need them:</p>
        <table>
          <tbody>
            <tr><th>Permission</th><th>Used for</th></tr>
            <tr><td>Camera</td><td>Using your phone as a wireless webcam</td></tr>
            <tr><td>Microphone</td><td>Using your phone as a wireless microphone</td></tr>
            <tr><td>Photos and media</td><td>Screenshot Sync, if you turn it on</td></tr>
            <tr><td>Notifications</td><td>Showing the connection status of the background service</td></tr>
            <tr><td>Network and Wi-Fi state</td><td>Finding and connecting to your desktop</td></tr>
          </tbody>
        </table>

        <h2>6. Security</h2>
        <p>
          Because data travels over your local network, keep that network
          protected with a strong Wi-Fi password and avoid using Pzync on public
          or untrusted networks. Only pair devices that you own or trust.
        </p>

        <h2>7. Children</h2>
        <p>
          Pzync is not directed at children under 13 and we do not knowingly
          collect personal information from them.
        </p>

        <h2>8. Changes to this policy</h2>
        <p>
          If this policy changes, the updated version will be published on this
          page with a new &quot;Last updated&quot; date.
        </p>

        <h2>9. Contact</h2>
        <p>
          Questions about privacy? Open an issue on{" "}
          <a href={DESKTOP_ISSUES} target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </div>
    </PageLayout>
  );
}

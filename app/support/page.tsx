import type { Metadata } from "next";
import JsonLd from "../../src/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "../../src/lib/seo";
import { BookOpen, Bug, MessageSquare } from "lucide-react";
import { faqJsonLd } from "../../src/lib/seo";
import { supportFaqs } from "../../src/lib/faqs";
import PageLayout from "../../src/components/PageLayout";
import { DESKTOP_ISSUES, GITHUB_URL } from "../../src/lib/links";

export const metadata: Metadata = pageMetadata({
  title: "Help & FAQ: Android to PC Connection Problems",
  description:
    "Fix common Pzync problems: phone cannot find the computer, dropped connections, pairing codes, webcam not showing up, and screenshot sync.",
  path: "/support",
});

const faqs = [
  {
    q: "My phone can't find my computer",
    a: (
      <>
        <p>Work through these in order:</p>
        <ul>
          <li>Both devices must be on the <strong>same Wi-Fi or local network</strong>. Mobile data does not work.</li>
          <li>Make sure Pzync is open on the computer.</li>
          <li>Allow Pzync through the computer&apos;s firewall for private networks. Pzync uses UDP port <code>8200</code> and TCP port <code>8080</code>.</li>
          <li>Some routers and guest networks block devices from seeing each other (often called client or AP isolation). Turn that off or use your main network.</li>
          <li>A VPN on either device can hide the local network. Turn it off to test.</li>
        </ul>
      </>
    ),
  },
  {
    q: "The connection drops when my phone screen is off",
    a: (
      <p>
        Android may stop background apps to save battery. In your phone&apos;s
        settings, set Pzync&apos;s battery usage to unrestricted (the name varies by
        brand), and keep its notification enabled. That notification is how
        Android knows Pzync is allowed to keep running.
      </p>
    ),
  },
  {
    q: "The pairing codes don't match",
    a: (
      <p>
        Do not accept the request. A mismatch means the two screens are not
        talking to each other directly. Cancel, check that you are on a network
        you trust, and try again.
      </p>
    ),
  },
  {
    q: "The webcam does not show up in my video-call app",
    a: (
      <ul>
        <li>Start the camera stream on the phone first, then open the app that uses it, or restart that app.</li>
        <li>On Ubuntu, install the virtual camera module: <code>sudo apt install v4l2loopback-dkms</code>.</li>
        <li>On Windows, the virtual camera is set up the first time you use it. Allow the permission prompt and restart the app.</li>
      </ul>
    ),
  },
  {
    q: "Screenshots are not reaching my computer",
    a: (
      <ul>
        <li>Turn on <strong>Sync Screenshots to Desktop Clipboard</strong> in the Android clipboard settings. It is off by default.</li>
        <li>Allow Pzync to access photos when Android asks.</li>
        <li>Pzync syncs screenshots taken right now, not ones from earlier.</li>
      </ul>
    ),
  },
  {
    q: "Does Pzync send my files to the cloud?",
    a: (
      <p>
        No. Files, clipboard, audio and camera go directly between your paired
        devices over your local network. The Android app does send anonymous
        usage analytics. Read the details in the{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>
    ),
  },
  {
    q: "Which platforms are supported?",
    a: (
      <p>
        Android 7.0 or later on the phone, and Windows 10 or later (x64) or
        Debian-based Linux such as Ubuntu (amd64) on the computer. There is no
        iPhone or macOS version.
      </p>
    ),
  },
  {
    q: "How do I update Pzync?",
    a: (
      <p>
        The desktop app checks for new releases and can update itself. The
        Android app updates through Google Play. See what changed on the{" "}
        <a href="/changelog">changelog</a>.
      </p>
    ),
  },
];

export default function SupportPage() {
  return (
    <PageLayout
      jsonLd={[breadcrumbJsonLd([{ name: "Support", path: "/support" }]), faqJsonLd(supportFaqs)]}
      eyebrow="Support"
      title="Help and answers"
      lead="Most problems come down to the network. Start with the questions below, and if you are still stuck, tell us on GitHub."
    >
      <div className="prose" style={{ maxWidth: 820 }}>
        <div className="faq">
          {faqs.map(({ q, a }) => (
            <details key={q}>
              <summary>{q}</summary>
              <div className="faq-answer">{a}</div>
            </details>
          ))}
        </div>
      </div>

      <div className="doc-cards">
        <a className="doc-card" href="/docs">
          <BookOpen size={22} />
          <strong>Read the docs</strong>
          <span>Setup steps for pairing, the webcam, microphone and screenshots.</span>
        </a>
        <a className="doc-card" href={DESKTOP_ISSUES} target="_blank" rel="noopener noreferrer">
          <Bug size={22} />
          <strong>Report a bug</strong>
          <span>Open an issue with your device, OS version and what you expected.</span>
        </a>
        <a className="doc-card" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <MessageSquare size={22} />
          <strong>Ask the community</strong>
          <span>Find the Pzync projects and discussions on GitHub.</span>
        </a>
      </div>
    </PageLayout>
  );
}

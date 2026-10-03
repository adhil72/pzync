// Set NEXT_PUBLIC_SITE_URL to the production origin (no trailing slash) when deploying.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pzync.example.com"
).replace(/\/$/, "");

export const SITE_NAME = "Pzync";

export const SITE_TAGLINE =
  "Connect Android to Windows & Ubuntu, free and open source";

export const SITE_DESCRIPTION =
  "Free, open-source app to connect Android to Ubuntu or Windows over Wi-Fi. Send files, sync the clipboard, stream audio and use your phone as a webcam.";

export const SITE_KEYWORDS = [
  "connect Android to Ubuntu",
  "Ubuntu Android connection software",
  "connect Android phone to Ubuntu",
  "Android Ubuntu file transfer",
  "sync Android with Ubuntu",
  "Android webcam Ubuntu",
  "connect Android to Windows",
  "Android to PC file transfer",
  "Android Windows connection app",
  "Android Ubuntu connection app",
  "sync clipboard Android to PC",
  "use Android phone as webcam",
  "Android as wireless microphone PC",
  "stream PC audio to Android",
  "Phone Link alternative for Ubuntu",
  "open source phone to PC sync",
  "local network file sharing Android",
  "Pzync",
];

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** Date the site content was last meaningfully changed (used for sitemap lastmod). Update when content changes. */
export const CONTENT_UPDATED = "2026-10-03";

/** Facts shared by llms.txt and llms-full.txt so they never drift apart. */
export const SITE_FACTS = [
  "Platforms: Android 7.0 or later, Ubuntu / Debian-based Linux (amd64, .deb), Windows 10 or later (x64, .exe)",
  "License: MIT, free and open source",
  "Connection: direct over the local Wi-Fi (UDP 8200 for discovery, TCP 8080 for data), encrypted with TLS",
  "Pairing: confirm a matching code shown on both screens",
  "No account, no cloud server in file, clipboard, audio or camera transfers",
  "Privacy: the Android app sends anonymous usage analytics (Google Firebase); the desktop app has no telemetry",
  "Source: https://github.com/pzynk",
];

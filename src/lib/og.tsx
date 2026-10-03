import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000",
          color: "#fff",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 120 120" fill="none">
            <path d="M7 86a53 53 0 0 1 106 0M33 86a27 27 0 0 1 54 0" stroke="#fff" strokeWidth="10" strokeLinecap="round" />
            <circle cx="60" cy="86" r="6" fill="#fff" />
          </svg>
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>Pzync</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3 }}>
            Connect Android to
          </div>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3, color: "#888" }}>
            Ubuntu &amp; Windows.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#888" }}>
          Files · Clipboard · Audio · Webcam · Free and open source
        </div>
      </div>
    ),
    ogSize,
  );
}

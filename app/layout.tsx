import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pzync - Connect Android, Windows, and Ubuntu Seamlessly",
  description: "Pzync is the ultimate tool for seamless connectivity and synchronization between Android, Windows, and Ubuntu devices. Experience effortless cross-platform sharing.",
  keywords: "Android, Windows, Ubuntu, connecting, synchronization, cross-platform, Pzync",
  alternates: {
    canonical: "https://pzync.example.com",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Pzync",
    "operatingSystem": "Android, Windows, Ubuntu",
    "applicationCategory": "UtilitiesApplication",
    "description": "Seamless connectivity and synchronization between Android, Windows, and Ubuntu devices.",
    "url": "https://pzync.example.com",
    "installUrl": "https://play.google.com/store/apps/details?id=sols.sync&hl=en_IN",
    "sameAs": [
      "https://play.google.com/store/apps/details?id=sols.sync&hl=en_IN",
      "https://github.com/pzynk"
    ]
  };

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

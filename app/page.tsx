import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Features from "../src/components/Features";
import Downloads from "../src/components/Downloads";
import Footer from "../src/components/Footer";
import HomeFaq from "../src/components/HomeFaq";
import HomeGuides from "../src/components/HomeGuides";
import JsonLd from "../src/components/JsonLd";
import { homeFaqs } from "../src/lib/faqs";
import { faqJsonLd } from "../src/lib/seo";
import { SITE_DESCRIPTION, SITE_URL, absoluteUrl } from "../src/lib/site";

async function getLatestVersion() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/pzynk/desktop/releases/latest",
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    if (data && data.tag_name) {
      let rawVersion = data.tag_name;
      if (rawVersion.startsWith("v")) {
        rawVersion = rawVersion.substring(1);
      }
      return rawVersion;
    }
  } catch (error) {
    console.error("Failed to fetch latest version from GitHub:", error);
  }
  return "0.2.1"; // fallback version
}

export default async function Page() {
  const version = await getLatestVersion();
  const releaseTag = `v${version}`;
  const DEB_URL = `https://github.com/pzynk/desktop/releases/download/${releaseTag}/Pzync_${version}_amd64.deb`;
  const EXE_URL = `https://github.com/pzynk/desktop/releases/download/${releaseTag}/Pzync_${version}_x64-setup.exe`;
  const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=sols.sync&hl=en_IN";

  const featureList = [
    "Send files between Android and Windows or Ubuntu over local Wi-Fi",
    "Sync the clipboard in both directions",
    "Sync Android screenshots to the desktop clipboard",
    "Stream PC audio to your phone",
    "Use your Android phone as a wireless webcam",
    "Use your Android phone as a wireless microphone",
    "Control desktop media playback and volume from your phone",
    "Run commands and capture the screen of your computer from your phone",
  ];
  const free = { "@type": "Offer", price: "0", priceCurrency: "USD" };
  const appsJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "@id": absoluteUrl("/#android-app"),
      name: "Pzync for Android",
      operatingSystem: "Android 7.0 or later",
      applicationCategory: "UtilitiesApplication",
      description: SITE_DESCRIPTION,
      downloadUrl: PLAY_STORE_URL,
      installUrl: PLAY_STORE_URL,
      screenshot: absoluteUrl("/screenshot.png"),
      image: absoluteUrl("/android-chrome-512x512.png"),
      url: SITE_URL,
      offers: free,
      isAccessibleForFree: true,
      license: "https://opensource.org/license/mit",
      featureList,
      publisher: { "@id": absoluteUrl("/#organization") },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": absoluteUrl("/#desktop-app"),
      name: "Pzync for Windows and Ubuntu",
      operatingSystem: "Windows 10 or later, Ubuntu, Debian",
      applicationCategory: "UtilitiesApplication",
      description: SITE_DESCRIPTION,
      softwareVersion: version,
      screenshot: absoluteUrl("/screenshot.png"),
      image: absoluteUrl("/android-chrome-512x512.png"),
      downloadUrl: [EXE_URL, DEB_URL],
      url: SITE_URL,
      offers: free,
      isAccessibleForFree: true,
      license: "https://opensource.org/license/mit",
      featureList,
      publisher: { "@id": absoluteUrl("/#organization") },
    },
  ];

  return (
    <>
      <JsonLd data={[...appsJsonLd, faqJsonLd(homeFaqs)]} />
      <Navbar />
      <main id="main">
      <Hero />
      <Features />
      <Downloads
        debUrl={DEB_URL}
        exeUrl={EXE_URL}
        playStoreUrl={PLAY_STORE_URL}
      />
      <HomeGuides />
      <HomeFaq />
      </main>
      <Footer />
    </>
  );
}

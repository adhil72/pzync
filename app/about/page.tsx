import type { Metadata } from "next";
import JsonLd from "../../src/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "../../src/lib/seo";
import {
  ArrowRight,
  Camera,
  Clipboard,
  Headphones,
  LockKeyhole,
  Monitor,
  Send,
  Smartphone,
  Wifi,
} from "lucide-react";
import { BsGithub } from "react-icons/bs";
import Navbar from "../../src/components/Navbar";
import { absoluteUrl } from "../../src/lib/site";
import Footer from "../../src/components/Footer";

export const metadata: Metadata = pageMetadata({
  title: "About the Android to Windows & Ubuntu Connection App",
  description:
    "Why Pzync exists: a free, open-source app that connects your Android phone to Windows or Ubuntu over your local network, with no account and no cloud.",
  path: "/about",
});

const capabilities = [
  {
    icon: Send,
    title: "Move files freely",
    description:
      "Send files directly between your phone and computer over your local network.",
  },
  {
    icon: Clipboard,
    title: "Keep your clipboard close",
    description:
      "Copy on one device and pick up where you left off on the other.",
  },
  {
    icon: Headphones,
    title: "Take your audio with you",
    description:
      "Stream your computer’s audio to your phone and control media from your hand.",
  },
  {
    icon: Camera,
    title: "Put your camera to work",
    description:
      "Use your Android phone as a wireless webcam for your computer.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "About", path: "/about" }]),
          { "@context": "https://schema.org", "@type": "AboutPage", name: "About Pzync", url: absoluteUrl("/about"), about: { "@id": absoluteUrl("/#organization") } },
        ]}
      />
      <Navbar />
      <main id="main" className="about-page">
        <section className="about-hero container">
          <p className="section-eyebrow">
            About Pzync
          </p>
          <h1>
            Made for the space
            <br />
            <span>between your devices.</span>
          </h1>
          <p>
            We move between phone and computer all day. Pzync makes that handoff
            feel natural, keeping the things you need within reach on both
            screens.
          </p>
          <a className="btn btn-primary" href="/#downloads">
            Get Pzync <ArrowRight size={17} />
          </a>
          <div
            className="about-diagram"
            role="img"
            aria-label="Android phone and desktop connected on a local network"
          >
            <div>
              <span className="dir-node"><Smartphone size={22} /></span>
              <small>Android</small>
            </div>
            <span className="about-diagram-line">
              <i />
              <Wifi size={20} />
              <i />
            </span>
            <div>
              <span className="dir-node"><Monitor size={22} /></span>
              <small>Windows &amp; Ubuntu</small>
            </div>
          </div>
        </section>
        <section className="about-story container">
          <p className="section-eyebrow">The idea</p>
          <div>
            <h2>
              Good tools should get
              <br />
              out of the way.
            </h2>
            <p>
              Pzync connects Android with Windows and Ubuntu so sharing a file,
              copying text, or listening to your computer from your phone feels
              like one continuous workflow. Pair your devices on the same local
              network and get back to what you were doing.
            </p>
          </div>
        </section>
        <section className="about-capabilities container">
          <p className="section-eyebrow">What it does</p>
          <div>
            <h2>A more connected everyday.</h2>
            <div className="bento-grid about-capability-grid">
              {capabilities.map(({ icon: Icon, title, description }) => (
                <article key={title} className="bento-card about-cap">
                  <Icon size={23} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="about-principles">
          <div className="container about-principles-inner">
            <p className="section-eyebrow">How it works</p>
            <div>
              <h2>
                Your network.
                <br />
                Your workflow.
              </h2>
              <p>
                Pzync uses local discovery and direct device pairing. There is
                no account to create and no cloud service in the middle of your
                everyday transfers.
              </p>
              <div className="about-principle-pills">
                <span className="priv-badge">
                  <Wifi size={13} /> Local network
                </span>
                <span className="priv-badge">
                  <LockKeyhole size={13} /> Direct pairing
                </span>
                <span className="priv-badge">
                  <BsGithub size={13} /> Open source
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="about-cta container">
          <p className="section-eyebrow">Ready when you are</p>
          <h2>
            Let your devices
            <br />
            work better together.
          </h2>
          <div>
            <a className="btn btn-primary" href="/#downloads">
              Download Pzync <ArrowRight size={17} />
            </a>
            <a
              className="btn btn-outline"
              href="https://github.com/pzynk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={17} /> Explore on GitHub
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

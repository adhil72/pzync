import { BsGithub } from "react-icons/bs";
import { SiGoogleplay } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=sols.sync&hl=en_IN";
const GITHUB_URL = "https://github.com/pzynk";
const RELEASES_URL = "https://github.com/pzynk/desktop/releases";

const columns = [
  {
    title: "Guides",
    links: [
      { label: "Android to Ubuntu", href: "/connect-android-to-ubuntu" },
      { label: "Android to Windows", href: "/connect-android-to-windows" },
      { label: "Phone as webcam", href: "/android-phone-as-webcam" },
      { label: "Transfer files", href: "/transfer-files-android-to-pc" },
      { label: "Sync clipboard", href: "/sync-clipboard-android-to-pc" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Downloads", href: "/#downloads" },
      { label: "Docs", href: "/docs" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "About", href: "/about" },
      { label: "GitHub", href: GITHUB_URL, external: true },
      { label: "Contribute", href: "/contribute" },
      { label: "License", href: "/license" },
    ],
  },
  {
    title: "Help & legal",
    links: [
      { label: "Support", href: "/support" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Releases", href: RELEASES_URL, external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="footer-logo" aria-label="Pzync home">
              <img src="/app-mark.svg" alt="" width={28} height={28} />
              <span>Pzync</span>
            </a>
            <p>Your phone and computer, working as one. Directly on your local network.</p>
            <div className="footer-cta">
              <a href="/#downloads" className="btn btn-primary">Download Pzync</a>
              <a
                href={PLAY_STORE_URL}
                className="btn btn-outline"
                id="footer-link-playstore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGoogleplay size={14} /> Google Play
              </a>
            </div>
          </div>

          <nav className="footer-cols" aria-label="Footer">
            {columns.map((col) => (
              <div key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(l.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {l.label}
                        {l.external && <ArrowUpRight size={13} />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Pzync. Open source, no accounts, no cloud.</p>
          <a
            href={GITHUB_URL}
            id="footer-link-contribute"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={15} /> pzynk
          </a>
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">Pzync</div>
    </footer>
  );
}

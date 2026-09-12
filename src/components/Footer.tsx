import { BsGithub } from "react-icons/bs";
import { SiGoogleplay } from "react-icons/si";

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=sols.sync&hl=en_IN';
const GITHUB_CONTRIBUTE_URL = 'https://github.com/pzynk';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          <img src="/logo2.png" alt="Pzync - Connect Android, Windows, Ubuntu Logo" />
          <span>Pzync</span>
        </div>
        <div className="footer-links">
          <a
            href={PLAY_STORE_URL}
            className="footer-link"
            id="footer-link-playstore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGoogleplay size={14} /> Google Play
          </a>
          <a
            href={GITHUB_CONTRIBUTE_URL}
            className="footer-link"
            id="footer-link-contribute"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={14} /> Contribute on GitHub
          </a>
        </div>
        <p>© 2026 Pzync</p>
      </div>
    </footer>
  );
}

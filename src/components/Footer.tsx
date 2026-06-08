import { BsGithub } from "react-icons/bs";

const GITHUB_CONTRIBUTE_URL = 'https://github.com/pzynk';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          <img src={`${import.meta.env.BASE_URL}logo2.png`} alt="Pzync Logo" />
          <span>Pzync</span>
        </div>
        <div className="footer-links">
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

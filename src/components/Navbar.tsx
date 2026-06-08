export default function Navbar() {
  return (
    <nav className="nav" aria-label="Main Navigation">
      <div className="nav-inner">
        <div className="logo-container" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={`${import.meta.env.BASE_URL}logo2.png`} alt="Pzync Logo" />
          <span>Pzync</span>
        </div>
        <div className="nav-links">
          <a href="#features" id="nav-link-features">Features</a>
          <a href="#downloads" id="nav-link-downloads">Downloads</a>
          <a
            href="https://github.com/pzynk"
            id="nav-link-contribute"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute
          </a>
        </div>
        <a href="#downloads" className="btn btn-primary nav-cta" id="nav-cta-download">
          Download
        </a>
      </div>
    </nav>
  );
}

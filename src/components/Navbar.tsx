export default function Navbar() {
  return (
    <nav className="nav" aria-label="Main Navigation">
      <div className="nav-inner">
        <a className="logo-container" href="/" aria-label="Pzync home">
          <img src="/app-mark.svg" alt="" width={28} height={28} />
          <span>Pzync</span>
        </a>
        <div className="nav-links">
          <a href="/#features" id="nav-link-features">
            Features
          </a>
          <a href="/docs">Docs</a>
          <a href="/about">About</a>
          <a href="/#downloads" id="nav-link-downloads">
            Downloads
          </a>
          <a href="/contribute" id="nav-link-contribute">
            Contribute
          </a>
        </div>
        <a
          href="/#downloads"
          className="btn btn-primary nav-cta"
          id="nav-cta-download"
        >
          Download
        </a>
      </div>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          <img src={`${import.meta.env.BASE_URL}logo2.png`} alt="Pzync Logo" />
          <span>Pzync</span>
        </div>
        <p>© 2026 Pzync</p>
      </div>
    </footer>
  );
}

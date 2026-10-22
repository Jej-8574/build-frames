import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-name">Jejtoot</p>
      <p className="footer-contact-label">Contact</p>

      <div className="footer-links">
        <a href="https://github.com/Jej-8574" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="mailto:tonmail@email.com">Email</a>
        <a
          href="https://discord.com/users/tonid"
          target="_blank"
          rel="noreferrer"
        >
          Discord / jejetotito
        </a>
      </div>

      <small>
        © {new Date().getFullYear()} Build Frame — Fan site non officiel
        Warframe.
      </small>
    </footer>
  );
}

export default Footer;

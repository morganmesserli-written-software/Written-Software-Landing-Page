// Footer — minimal: brand + URL, navigation links, FAQ, Support

function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#top" className="nav-brand">
              <span className="nav-brand-mark"><LogoMark size={40} /></span>
              <span className="nav-brand-word">Written Software</span>
            </a>
            <p>
              A manuscript sanctuary built for the writers of romantasy.
            </p>
            <a href="https://writtensoftware.com"
               style={{
                 display: "inline-block",
                 marginTop: 12,
                 fontFamily: "var(--sans)",
                 fontSize: 12,
                 letterSpacing: "0.18em",
                 textTransform: "uppercase",
                 color: "var(--accent)",
                 textDecoration: "none",
                 borderBottom: "1px solid var(--accent)",
                 paddingBottom: 2,
               }}>
              writtensoftware.com
            </a>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#features">The Workshop</a></li>
              <li><a href="#craft">The Craft</a></li>
              <li><a href="#pricing">The Coin</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© Written Software · MMXXVI</span>
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Crescent size={12} color="var(--accent)" />
            Crafted under twin moons
          </span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;

// Top navigation

function Nav({ tweaks }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          <span className="nav-brand-mark">
            <LogoMark size={40} />
          </span>
          <span className="nav-brand-word">Written Software</span>
        </a>
        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#craft" className="nav-link">The Craft</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </div>
        <div className="nav-cta">
          <button className="btn-link">Sign Up</button>
          <a href="#continue" className="btn btn-primary" style={{ backgroundColor: "#99280f" }}>
            {tweaks.loginCopy}
            <Sparkle size={12} />
          </a>
        </div>
      </div>
    </nav>
  );
}

window.Nav = Nav;

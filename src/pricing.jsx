// Pricing — single product, two billing cadences

const PLAN_FEATURES = [
  "Unlimited realms & manuscripts",
  "Plot Weaver with subplot lanes",
  "World Forager with linked lore",
  "Character Builder & relationship maps",
  "Romance Arc Tracker with spice dial",
  "Chapter & Scene Editor, illuminated",
  "Manuscript Stats & pacing maps",
  "Revision history, forever",
  "Series Bible — link books across realms",
  "Export to .docx, .epub, and PDF",
];

const TIERS = [
  {
    name: "Monthly",
    price: "20",
    cadence: "per month",
    note: "Billed monthly · cancel anytime",
    desc: "For the writer testing the waters of a new draft.",
    cta: "Continue Your Story",
    featured: false,
  },
  {
    name: "Yearly",
    price: "150",
    cadence: "per year",
    note: "$12.50 / month · two months on the house",
    desc: "For the writer in it for the long, slow burn.",
    cta: "Continue Your Story",
    featured: true,
    badge: "Save $90",
  },
];

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="shell">
        <div className="pricing-header">
          <span className="eyebrow">The Coin</span>
          <h2 className="section-title">
            One key. One <em>tower.</em>
          </h2>
          <p className="subcopy" style={{ textAlign: "center" }}>
            Every Written subscription unlocks the full workshop — every instrument, every realm,
            every revision. And every plan keeps your manuscript yours, in perpetuity.
          </p>
          <DividerOrnament color="var(--gold)" />
        </div>

        <div className="tiers">
          {TIERS.map((t) => (
            <article key={t.name} className={`tier ${t.featured ? "featured" : ""}`}>
              {t.badge && <span className="tier-badge">{t.badge}</span>}
              <div>
                <h3 className="tier-name">{t.name}</h3>
                <div className="tier-price" style={{ marginTop: 12 }}>
                  <span style={{
                    fontFamily: "var(--serif)", fontSize: 28, opacity: 0.6,
                    alignSelf: "flex-start", lineHeight: 1, marginTop: 10,
                  }}>$</span>
                  <span className="tier-price-num">{t.price}</span>
                  <span className="tier-price-unit">{t.cadence}</span>
                </div>
                {t.note && (
                  <div style={{
                    marginTop: 8,
                    fontFamily: "var(--sans)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: t.featured ? "rgba(239, 223, 205, 0.7)" : "var(--ink-mute)",
                  }}>
                    {t.note}
                  </div>
                )}
              </div>
              <p className="tier-desc">{t.desc}</p>
              <div className="tier-rule" />
              <ul className="tier-feats">
                {PLAN_FEATURES.map((f) => (
                  <li key={f} className="tier-feat">
                    <Check size={14} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`btn ${t.featured ? "btn-primary" : "btn-ghost"}`}
                 style={{ marginTop: "auto", justifyContent: "center", width: "100%" }}>
                {t.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Pricing = Pricing;

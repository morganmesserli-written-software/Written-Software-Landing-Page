// Features section

const FEATURES = [
  {
    n: "i",
    icon: "IconPlot",
    title: "Plot Weaver",
    em: "Weaver",
    desc: "Drag scenes across a tapestry of acts, beats, and turning points. Save Beats lay your story open like an open palm — three acts, twelve beats, every promise paid.",
    meta: "Beats · Acts · Subplots",
  },
  {
    n: "ii",
    icon: "IconWorld",
    title: "World Forager",
    em: "Forager",
    desc: "Pin courts, kingdoms, magics, and the precise rules of your moon. Every detail you forage gets stitched to the page it belongs to — so canon never frays.",
    meta: "Lore · Maps · Magic Systems",
  },
  {
    n: "iii",
    icon: "IconCharacter",
    title: "Character Builder",
    em: "Character",
    desc: "Souls, not stat blocks. Voice samples, secrets, wounds, and the way they hold a teacup. Your cast remembers every glance they exchanged in chapter four.",
    meta: "Arcs · Voice · Relationships",
  },
  {
    n: "iv",
    icon: "IconRomance",
    title: "Romance Arc Tracker",
    em: "Romance",
    desc: "Map enemies-to-lovers across longing, tension, fracture, and devotion. A spice dial keeps the heat honest — slow burn or wildfire, you set the gauge.",
    meta: "Tropes · Tension · Heat",
  },
  {
    n: "v",
    icon: "IconChapter",
    title: "Chapter & Scene Editor",
    em: "Scene",
    desc: "A writing room dressed in candlelight. Distraction-free prose, illuminated drop-caps, side-rail annotations, and an autosave that whispers, never shouts.",
    meta: "Drafts · Revisions · Margins",
  },
  {
    n: "vi",
    icon: "IconStats",
    title: "Manuscript Stats",
    em: "Stats",
    desc: "Pacing maps, scene-length rhythms, POV balance, and the heart rate of every chapter. Numbers in service of the story — never against it.",
    meta: "Pacing · Word Counts · POV",
  },
];

function Features({ tweaks }) {
  const iconMap = {
    IconPlot: window.IconPlot, IconWorld: window.IconWorld,
    IconCharacter: window.IconCharacter, IconRomance: window.IconRomance,
    IconChapter: window.IconChapter, IconStats: window.IconStats,
  };
  return (
    <section className="features" id="features">
      <div className="shell">
        <div className="features-header">
          <span className="eyebrow">The Workshop</span>
          <h2 className="section-title">
            Every tool a romantasy writer <em>requires.</em>
          </h2>
          <p className="subcopy" style={{ textAlign: "center" }}>
            Six instruments, one inkwell. Each was carved for the way you actually write —
            in scraps, in fevered nights, in margins beside coffee rings.
          </p>
          <DividerOrnament color="var(--gold)" />
        </div>

        <div className="features-grid">
          {FEATURES.map((f) => {
            const Icon = iconMap[f.icon];
            return (
              <article key={f.title} className="feature-card">
                <span className="feature-number">{f.n.toUpperCase()} · 0{FEATURES.indexOf(f) + 1}</span>
                <span className="feature-ornament">
                  <Icon size={48} />
                </span>
                <h3 className="feature-title">
                  {(() => {
                    const [pre, post] = f.title.split(f.em);
                    return <>{pre}<em>{f.em}</em>{post}</>;
                  })()}
                </h3>
                <p className="feature-desc">{f.desc}</p>
                <div className="feature-meta">
                  <Diamond size={6} color="var(--accent)" />
                  <span>{f.meta}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.Features = Features;

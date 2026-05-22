// Hero section

function Hero({ tweaks }) {
  // Split tagline so we can italicize the highlighted word
  const { taglinePre, taglineEm, taglinePost } = tweaks;

  return (
    <section className="hero" id="top">
      <Constellation className="hero-constellation" />
      <CornerFlourish className="hero-corner-flourish tl" />
      <CornerFlourish className="hero-corner-flourish tr" />

      {tweaks.showSeal && <WaxSeal className="hero-seal" />}

      <div className="shell hero-inner">
        <div className="hero-eyebrow">
          <StarPoint size={9} />
          <span className="eyebrow">For Romantasy Writers</span>
          <StarPoint size={9} />
        </div>

        <h1 className="hero-tagline">
          {taglinePre}{" "}
          <em style={{ color: "rgb(177, 74, 38)" }}>{taglineEm}</em>
          {taglinePost ? <>{" "}{taglinePost}</> : null}
        </h1>

        <p className="hero-sub">
          A manuscript sanctuary for storytellers who write with both blade and rose.
          Weave your plot, forge your world, and chart every glance between fated rivals —
          all in one ink-stained desk.
        </p>

        <div className="hero-ctas">
          <a href="#continue" className="btn btn-primary" style={{ backgroundColor: "#99280f" }}>
            {tweaks.loginCopy}
            <Sparkle size={12} />
          </a>
          <a href="#features" className="btn btn-ghost">
            Tour the Workshop
          </a>
        </div>

        {tweaks.showPreview &&
        <div className="hero-manuscript">
            <ManuscriptPreview />
          </div>
        }
      </div>
    </section>);

}

// A small atmospheric mock of the editor — purely decorative
function ManuscriptPreview() {
  return (
    <div style={{
      position: "absolute",
      inset: 0,
      display: "grid",
      gridTemplateColumns: "220px 1fr 260px",
      fontFamily: "var(--body)"
    }}>
      {/* Sidebar — chapter list */}
      <div style={{
        borderRight: "1px solid var(--rule)",
        padding: "22px 18px",
        background: "color-mix(in srgb, var(--bg-deep) 70%, transparent)"
      }}>
        <div style={{
          fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.22em",
          textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 14
        }}>Embers of the Crowned Sky</div>
        {[
        ["I.", "The Vow at the Gate", true],
        ["II.", "Ink Like Smoke", false],
        ["III.", "A Letter, Half-Sealed", false],
        ["IV.", "The Cartographer's Bargain", false],
        ["V.", "Moon-Mad", false]].
        map(([num, title, active], i) =>
        <div key={i} style={{
          display: "flex", gap: 10, padding: "7px 8px",
          background: active ? "var(--paper)" : "transparent",
          borderLeft: active ? "2px solid var(--accent)" : "2px solid transparent",
          color: active ? "var(--ink)" : "var(--ink-soft)",
          fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 13,
          marginBottom: 2, borderRadius: 1
        }}>
            <span style={{ color: "var(--accent)", width: 24 }}>{num}</span>
            <span>{title}</span>
          </div>
        )}
      </div>

      {/* Center — manuscript */}
      <div style={{ padding: "32px 44px", overflow: "hidden", position: "relative" }}>
        <div style={{
          fontFamily: "var(--sans)", fontSize: 10, letterSpacing: "0.22em",
          textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 8
        }}>Chapter I</div>
        <div style={{
          fontFamily: "var(--serif)", fontSize: 28, fontStyle: "italic",
          lineHeight: 1.1, color: "var(--ink)", marginBottom: 18
        }}>The Vow at the Gate</div>
        <div style={{ fontSize: 12.5, lineHeight: 1.85, color: "var(--ink-soft)" }}>
          <p style={{ margin: "0 0 10px" }}>
            <span style={{
              fontFamily: "var(--serif)", fontSize: 38, fontStyle: "italic",
              float: "left", lineHeight: 0.9, paddingRight: 8, paddingTop: 4,
              color: "var(--accent)"
            }}>T</span>
            he gate of Aelra had not opened in three hundred years, and yet that night, as the
            twin moons climbed the throat of the sky, Isolde watched the iron seam split with a
            sigh — soft, almost embarrassed — like a confession.
          </p>
          <p style={{ margin: "0 0 10px" }}>
            She was not supposed to be there. Her grandmother had said the gate sang only for the
            doomed, and Isolde had been raised on the gospel of small, careful lives. But the
            <em style={{ color: "var(--accent)" }}> star-singer </em> had named her at dusk,
            and a star-singer's word was law older than queens.
          </p>
        </div>
      </div>

      {/* Right rail — beats / characters */}
      <div style={{
        borderLeft: "1px solid var(--rule)",
        padding: "22px 18px",
        background: "color-mix(in srgb, var(--bg-deep) 70%, transparent)",
        display: "flex", flexDirection: "column", gap: 18
      }}>
        <div>
          <div style={{
            fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 10
          }}>Beat · Yearning</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ flex: 1, height: 3, background: "var(--rule)", borderRadius: 99 }}>
              <div style={{ width: "62%", height: "100%", background: "var(--accent)", borderRadius: 99 }} />
            </div>
            <span style={{ fontFamily: "var(--sans)", fontSize: 10, color: "var(--ink-mute)" }}>62%</span>
          </div>
        </div>
        <div>
          <div style={{
            fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 10
          }}>Heat · ⚜ ⚜ ◇ ◇ ◇</div>
        </div>
        <div style={{ height: 1, background: "var(--rule)" }} />
        <div>
          <div style={{
            fontFamily: "var(--sans)", fontSize: 9, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 10
          }}>On Stage</div>
          {[
          ["Isolde Veyr", "Protagonist · House of Ash"],
          ["Cassian Drey", "Rival · The Star-Singer"],
          ["Nessa", "Grandmother · Keeper"]].
          map(([name, role]) =>
          <div key={name} style={{ marginBottom: 10 }}>
              <div style={{
              fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 14,
              color: "var(--ink)", lineHeight: 1.1
            }}>{name}</div>
              <div style={{
              fontFamily: "var(--sans)", fontSize: 10, color: "var(--ink-mute)",
              letterSpacing: "0.04em"
            }}>{role}</div>
            </div>
          )}
        </div>
      </div>
    </div>);

}

window.Hero = Hero;
window.ManuscriptPreview = ManuscriptPreview;
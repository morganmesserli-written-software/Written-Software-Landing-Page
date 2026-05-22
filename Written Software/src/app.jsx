// Main App — wires the page together with the Tweaks panel

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply mood + font swap to document
  React.useEffect(() => {
    document.documentElement.dataset.mood = t.mood;
  }, [t.mood]);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--serif", t.displayFont);
  }, [t.displayFont]);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--grain-opacity", String(t.grain));
  }, [t.grain]);

  // Custom palette override
  React.useEffect(() => {
    const root = document.documentElement;
    if (t.paletteOverride === "default") {
      root.style.removeProperty("--bg");
      root.style.removeProperty("--bg-deep");
      root.style.removeProperty("--paper");
      root.style.removeProperty("--accent");
      return;
    }
    const palettes = {
      "burgundy": ["#efdfcd", "#e6d3b8", "#f5e9d6", "#99280f"],
      "rose":     ["#f5e3df", "#ecd0c8", "#fbece8", "#a8324a"],
      "midnight": ["#231b2e", "#1a1424", "#2c2238", "#c44262"],
      "emerald":  ["#ede8d8", "#ddd5c0", "#f4efe0", "#2f5d3a"],
    };
    const [bg, bgDeep, paper, accent] = palettes[t.paletteOverride];
    root.style.setProperty("--bg", bg);
    root.style.setProperty("--bg-deep", bgDeep);
    root.style.setProperty("--paper", paper);
    root.style.setProperty("--accent", accent);
  }, [t.paletteOverride]);

  return (
    <>
      <Nav tweaks={t} />
      <Hero tweaks={t} />
      <Features tweaks={t} />
      <HowItWorks />
      <Pricing />
      <Footer />

      <TweaksPanel title="Written · Tweaks">
        <TweakSection label="Mood" />
        <TweakRadio
          label="Atmosphere"
          value={t.mood}
          options={[
            { value: "moonlit", label: "Moonlit" },
            { value: "lush",    label: "Lush" },
            { value: "golden",  label: "Golden" },
          ]}
          onChange={(v) => setTweak("mood", v)}
        />
        <TweakSelect
          label="Palette"
          value={t.paletteOverride}
          options={[
            { value: "default",  label: "Brand · Burgundy & Cream" },
            { value: "rose",     label: "Rose & Ash" },
            { value: "midnight", label: "Midnight Plum" },
            { value: "emerald",  label: "Emerald Court" },
          ]}
          onChange={(v) => setTweak("paletteOverride", v)}
        />
        <TweakSlider
          label="Parchment grain"
          value={t.grain}
          min={0} max={0.6} step={0.02}
          onChange={(v) => setTweak("grain", v)}
        />

        <TweakSection label="Typography" />
        <TweakSelect
          label="Display font"
          value={t.displayFont}
          options={[
            { value: '"Cormorant Garamond", serif', label: "Cormorant Garamond" },
            { value: '"Cinzel", serif',             label: "Cinzel (Roman)" },
            { value: '"Italiana", serif',           label: "Italiana (Editorial)" },
            { value: '"Playfair Display", serif',   label: "Playfair Display" },
            { value: '"Merriweather", serif',       label: "Merriweather (all)" },
          ]}
          onChange={(v) => setTweak("displayFont", v)}
        />

        <TweakSection label="Hero" />
        <TweakText
          label="Tagline · part 1"
          value={t.taglinePre}
          onChange={(v) => setTweak("taglinePre", v)}
        />
        <TweakText
          label="Tagline · italic"
          value={t.taglineEm}
          onChange={(v) => setTweak("taglineEm", v)}
        />
        <TweakText
          label="Tagline · part 2"
          value={t.taglinePost}
          onChange={(v) => setTweak("taglinePost", v)}
        />
        <TweakText
          label="Login button"
          value={t.loginCopy}
          onChange={(v) => setTweak("loginCopy", v)}
        />
        <TweakToggle
          label="Show manuscript preview"
          value={t.showPreview}
          onChange={(v) => setTweak("showPreview", v)}
        />
        <TweakToggle
          label="Show wax seal"
          value={t.showSeal}
          onChange={(v) => setTweak("showSeal", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

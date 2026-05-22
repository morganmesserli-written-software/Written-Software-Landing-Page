// How it works section

const STEPS = [
{
  n: "I",
  title: "Forage the World",
  em: "Forage",
  desc: "Begin where your story begins — with the world. Map the courts, name the gods, decide what the moon costs."
},
{
  n: "II",
  title: "Conjure the Cast",
  em: "Conjure",
  desc: "Sketch the souls who will burn through your pages. Wounds, oaths, the cadence of their lies."
},
{
  n: "III",
  title: "Weave the Plot",
  em: "Weave",
  desc: "Lay every beat across the tapestry. Watch the tension rise, the romance unspool, the third act click."
},
{
  n: "IV",
  title: "Write the Story",
  em: "Write",
  desc: "Now — and only now — open a blank page. Everything you need is one whisper away in the margins."
}];


function HowItWorks() {
  return (
    <section id="craft">
      <div className="shell">
        <div className="how-header">
          <div>
            <span className="eyebrow">The Craft</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Four rites, and you are <em>writing.</em>
            </h2>
          </div>
          <p className="subcopy" style={{ margin: 0, maxWidth: "44ch" }}>Written is built on the romantasy method – World first, hearts second, plot third, prose last. Each rite unlocks the next without ever locking you in.


          </p>
        </div>

        <div className="how-steps">
          {STEPS.map((s) =>
          <div key={s.n} className="how-step">
              <div className="how-step-marker">{s.n}</div>
              <h3 className="how-step-title">
                {(() => {
                const [pre, post] = s.title.split(s.em);
                return <>{pre}<em>{s.em}</em>{post}</>;
              })()}
              </h3>
              <p className="how-step-desc">{s.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

window.HowItWorks = HowItWorks;
import Reveal from '../reveal';
import SectionTag from '../section-tag';

function NowRow({ k, v, sub }) {
  return (
    <div className="now-row">
      <div className="k">{k}</div>
      <div className="v">
        {v}
        {sub && <small>{sub}</small>}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about">
      <SectionTag idx={1} label="About" />
      <div className="about-grid">
        <Reveal>
          <h2 className="about-headline">
            An electrical engineer who fell in love with <em>shipping software</em>—and never quite stopped.
          </h2>
          <div className="about-body">
            <p>
              I started out poking at IoT prototypes as a freelancer, then joined Rapido as an intern
              in 2019. Five years and a lot of pricing experiments later, I'm a senior engineer on the
              team that decides what every ride should cost.
            </p>
            <p>
              When I'm not at work I'm usually building something small in Go, writing on{' '}
              <a href="https://blog.jenishjain.in" target="_blank" rel="noopener noreferrer"
                 style={{ borderBottom: '1px solid var(--accent)' }}>blog.jenishjain.in</a>,
              or trying to teach an AI agent to do my standups for me.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="about-card">
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(20,17,13,0.65)' }}>
              /now
            </div>
            <NowRow k="Building"   v="An AI intern that picks up its own tickets"  sub="Go · LLM tool-use"           />
            <NowRow k="Shipping"   v="Pricing experiments at Rapido"               sub="Production, ~30M+ rides"      />
            <NowRow k="Reading"    v="Designing Data-Intensive Apps"               sub="Re-read, third time round"    />
            <NowRow k="Listening"  v="Lo-fi house, late-night refactor edition"                                       />
            <NowRow k="Tinkering"  v="A bean-counter for monthly expenses"         sub="Go + a stubbornly bad CLI"   />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

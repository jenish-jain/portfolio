import { useState, useEffect } from 'react';
import Reveal from '../reveal';
import useClock from '../../hooks/use-clock';

const ROLES = ['engineer', 'go gopher', 'tinkerer', 'writer', 'learner'];

function ImageSlot() {
  return (
    <div className="hero-polaroid">
      <img
        src="/portrait.jpg"
        alt="Jenish Jain"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const time = useClock();

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((v) => (v + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="hero">
      <ImageSlot />

      <div className="hero-top">
        <div className="col">
          <span>Surat, India</span>
          <span className="v">21.17°N · 72.83°E</span>
        </div>
        <div className="col" style={{ textAlign: 'center' }}>
          <span>Local time</span>
          <span className="v">{time}</span>
        </div>
        <div className="col" style={{ textAlign: 'right' }}>
          <span>Status</span>
          <span className="live"><span className="pulse" /> open to chat</span>
        </div>
      </div>

      <div>
        <Reveal>
          <h1 className="hero-name">
            Jenish<br />
            <span className="ital">Jain</span><span style={{ color: 'var(--accent)' }}>.</span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <div className="hero-bottom" style={{ marginTop: 32 }}>
            <p className="hero-blurb">
              Senior software engineer at <span className="role">Rapido</span>, building the backbone
              of India's bike-taxi network. Electrical engineer by training,{' '}
              <em>{ROLES[roleIdx]}</em> by choice. I like distributed systems, side-quests in Go,
              and the satisfying click of a problem becoming a service.
            </p>
            <div className="hero-ctas">
              <a className="btn primary" href="#work" data-hot>
                See the work <span className="arrow">↗</span>
              </a>
              <a className="btn" href="#contact" data-hot>
                Say hello <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

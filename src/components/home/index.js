import { useState, useEffect, useRef } from 'react';
import './style.css';

import useMagneticCursor from '../../hooks/use-magnetic-cursor';
import useActiveSection   from '../../hooks/use-active-section';

import Nav        from '../nav';
import Hero       from '../hero';
import Marquee    from '../marquee';
import About      from '../about';
import Experience from '../experience';
import Projects   from '../projects';
import Writings   from '../writings';
import Drawings   from '../sketches';
import Stack      from '../stack';
import Contact    from '../contact';
import Footer     from '../footer';
import Palette    from '../palette';

const SECTIONS = ['about', 'work', 'projects', 'writing', 'drawings', 'contact'];

export default function HomePage() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const cursorRef = useRef(null);
  const active = useActiveSection(SECTIONS);

  useMagneticCursor(cursorRef);

  useEffect(() => {
    document.documentElement.dataset.theme = 'paper';
    return () => { delete document.documentElement.dataset.theme; };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="portfolio-home">
      <div ref={cursorRef} className="cursor" />
      <div className="yellow-stripe" aria-hidden="true" />

      <Nav active={active} onOpenPalette={() => setPaletteOpen(true)} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Writings />
        <Drawings />
        <Stack />
        <Contact />
      </main>

      <Footer />
      <Palette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}

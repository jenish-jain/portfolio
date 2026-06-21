import { useState, useEffect } from 'react';
import { trackClick } from '../../utils/analytics';

const NAV_LINKS = [
  { id: 'about',    label: 'About'    },
  { id: 'work',     label: 'Work'     },
  { id: 'projects', label: 'Projects' },
  { id: 'writing',  label: 'Writing'  },
  { id: 'drawings', label: 'Drawings' },
  { id: 'contact',  label: 'Contact'  },
];

function scrollTo(id) {
  if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
}

export default function Nav({ active, onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '')}>
      <a href="/" onClick={(e) => { e.preventDefault(); scrollTo('top'); }} className="nav-mark" data-hot>
        <span className="dot" />
        <span>JJ / Portfolio</span>
      </a>
      <nav className="nav-links">
        {NAV_LINKS.map((l) => (
          <a key={l.id} href="/" onClick={(e) => { e.preventDefault(); trackClick('nav', l.label); scrollTo(l.id); }} className={active === l.id ? 'active' : ''} data-hot>
            {l.label}
          </a>
        ))}
      </nav>
      <button className="nav-cmd" onClick={onOpenPalette} data-hot>
        <span>Search</span>
        <kbd>/</kbd>
      </button>
    </header>
  );
}

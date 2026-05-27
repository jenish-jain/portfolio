import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'about',    label: 'About'    },
  { id: 'work',     label: 'Work'     },
  { id: 'projects', label: 'Projects' },
  { id: 'writing',  label: 'Writing'  },
  { id: 'drawings', label: 'Drawings' },
  { id: 'contact',  label: 'Contact'  },
];

export default function Nav({ active, onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '')}>
      <a href="#top" className="nav-mark" data-hot>
        <span className="dot" />
        <span>JJ / Portfolio</span>
      </a>
      <nav className="nav-links">
        {NAV_LINKS.map((l) => (
          <a key={l.id} href={'#' + l.id} className={active === l.id ? 'active' : ''} data-hot>
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

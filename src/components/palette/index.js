import { useState, useEffect, useRef, useMemo } from 'react';

function scrollToSection(id) {
  if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
}

const ALL_ITEMS = [
  { id: 'top',      label: 'Jump to top',                kind: 'Nav',    action: () => scrollToSection('top')      },
  { id: 'about',    label: 'About',                      kind: 'Nav',    action: () => scrollToSection('about')    },
  { id: 'work',     label: 'Experience',                  kind: 'Nav',    action: () => scrollToSection('work')     },
  { id: 'projects', label: 'Projects',                    kind: 'Nav',    action: () => scrollToSection('projects') },
  { id: 'writing',  label: 'Writing',                     kind: 'Nav',    action: () => scrollToSection('writing')  },
  { id: 'drawings', label: 'Drawings',                    kind: 'Nav',    action: () => scrollToSection('drawings') },
  { id: 'contact',  label: 'Contact',                     kind: 'Nav',    action: () => scrollToSection('contact')  },
  { id: 'gh',       label: 'Open GitHub',                 kind: 'Link',   action: () => window.open('https://github.com/jenish-jain', '_blank')           },
  { id: 'blog',     label: 'Open blog',                   kind: 'Link',   action: () => window.open('https://blog.jenishjain.in', '_blank')              },
  { id: 'art',      label: 'Open drawings',               kind: 'Link',   action: () => window.open('https://drawings.jenishjain.in', '_blank')          },
  { id: 'mail',     label: 'Email Jenish',                kind: 'Link',   action: () => { window.location.href = 'mailto:jenishjain6@gmail.com'; }        },
  { id: 'theme',    label: 'Toggle theme (paper ↔ ink)',  kind: 'Action', action: () => {
    const r = document.documentElement;
    r.dataset.theme = r.dataset.theme === 'ink' ? 'paper' : 'ink';
  }},
];

export default function CommandPalette({ open, onClose }) {
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef(null);

  const items = useMemo(() => {
    const v = q.trim().toLowerCase();
    return v ? ALL_ITEMS.filter((i) => i.label.toLowerCase().includes(v)) : ALL_ITEMS;
  }, [q]);

  useEffect(() => {
    if (open) { setQ(''); setSel(0); setTimeout(() => inputRef.current?.focus(), 20); }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(items.length - 1, s + 1)); }
      else if (e.key === 'ArrowUp')   { e.preventDefault(); setSel((s) => Math.max(0, s - 1)); }
      else if (e.key === 'Enter')     { const it = items[sel]; if (it) { it.action(); onClose(); } }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, items, sel, onClose]);

  if (!open) return null;
  return (
    <div className="palette-back" onClick={onClose}>
      <div className="palette" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Type a section, link or command…"
        />
        <ul>
          {items.map((it, i) => (
            <li
              key={it.id}
              className={i === sel ? 'sel' : ''}
              onMouseEnter={() => setSel(i)}
              onClick={() => { it.action(); onClose(); }}
            >
              <span>{it.label}</span>
              <span className="right">{it.kind}</span>
            </li>
          ))}
          {items.length === 0 && (
            <li style={{ opacity: 0.5 }}><span>No results</span><span className="right">—</span></li>
          )}
        </ul>
      </div>
    </div>
  );
}

import { useRef } from 'react';
import Reveal from '../reveal';
import SectionTag from '../section-tag';

const PROJECTS = [
  {
    id: 'intern',
    name: 'intern',
    tag: 'Featured · 2025',
    desc: "An AI intern that looks up tickets assigned to it and autonomously works on them. The kind of teammate that doesn't complain about Mondays.",
    stack: ['Go', 'LLM tool-use', 'GitHub API'],
    href: 'https://github.com/jenish-jain/intern',
    large: true,
  },
  {
    id: 'sidekick',
    name: 'sidekick',
    tag: '2024',
    desc: 'A tiny Go companion process that watches my shell, surfaces clipboard history, and answers "what was that command?".',
    stack: ['Go', 'CLI', 'FZF'],
    href: 'https://github.com/jenish-jain/sidekick',
  },
  {
    id: 'pdf2audiobook',
    name: 'pdf2audiobook',
    tag: '2023',
    desc: 'Turn any PDF into a free audiobook. Cloud Functions + Vision API + Text-to-Speech, glued together with a stubborn weekend.',
    stack: ['Python', 'GCP', 'Vision API'],
    href: 'https://github.com/jenish-jain/pdf2audiobook',
  },
  {
    id: 'bean_counter',
    name: 'bean_counter',
    tag: 'Ongoing',
    desc: 'A grumpy little expense tracker. Reads bank SMS, classifies on-device, refuses to send anything to the cloud.',
    stack: ['Go', 'SQLite', 'ML'],
    href: '#',
  },
  {
    id: 'blog',
    name: 'blog.jenishjain.in',
    tag: '2022 →',
    desc: 'Notes on Kafka, system design, Terraform, and the occasional rant about engineering culture.',
    stack: ['Preact', 'MDX'],
    href: 'https://blog.jenishjain.in',
  },
];

function ProjectCard({ p }) {
  const ref = useRef(null);
  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    ref.current.style.setProperty('--my', (e.clientY - r.top) + 'px');
  };
  return (
    <a
      ref={ref}
      onMouseMove={onMove}
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className={'project' + (p.large ? ' large' : '')}
      data-hot
    >
      <div className="project-head">
        <h3 className="project-name">{p.name}</h3>
        <span className="project-tag">{p.tag}</span>
      </div>
      <p className="project-desc">{p.desc}</p>
      <div className="project-foot">
        <div className="stack">
          {p.stack.map((s) => <span key={s}>{s}</span>)}
        </div>
        <span className="link">view <span className="arrow">↗</span></span>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <SectionTag idx={3} label="Selected work" />
      <Reveal as="div" className="project-grid">
        {PROJECTS.map((p) => <ProjectCard key={p.id} p={p} />)}
      </Reveal>
    </section>
  );
}

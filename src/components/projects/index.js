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
    desc: 'A tiny Go companion process that tells me dadjoke, helps with my 2fa and whatever i tame it for.',
    stack: ['Go', 'CLI'],
    href: 'https://github.com/jenish-jain/sidekick',
  },
  {
    id: 'pdf2audiobook',
    name: 'pdf2audiobook',
    tag: '2023',
    desc: 'Turn any PDF into a free audiobook. Cloud Functions + Natural Jenks + Text-to-Speech, glued together with a stubborn weekend.',
    stack: ['Python', 'Cloud Functions'],
    href: 'https://github.com/jenish-jain/pdf2audiobook',
  },
  {
    id: 'bean_counter',
    name: 'bean_counter',
    tag: 'Ongoing',
    desc: "I wrote some Go code to help my dad with his taxes so I wouldn't have to do them myself",
    stack: ['Go', 'Excel','Cloud Run'],
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

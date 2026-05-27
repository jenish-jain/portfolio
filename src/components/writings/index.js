import Reveal from '../reveal';
import SectionTag from '../section-tag';

const POSTS = [
  { yr: '2025', title: 'Build your own PDF → audiobook with GCP Vision & TTS',        tag: 'Cloud',       href: 'https://blog.jenishjain.in' },
  { yr: '2024', title: 'Exporting Google Cloud resources to Terraform',                tag: 'DevOps',      href: 'https://blog.jenishjain.in' },
  { yr: '2024', title: 'An automated tax-reporting tool in Go on Cloud Run',           tag: 'Engineering', href: 'https://medium.com/@jenishjain6/how-i-automated-tax-reporting-for-my-father-b4db1edbcbd2' },
  { yr: '2023', title: 'Juggling two GitHub profiles on one machine',                  tag: 'Productivity',href: 'https://blog.jenishjain.in' },
  { yr: '2023', title: 'Launch an engineering blog in ten minutes',                    tag: 'Meta',        href: 'https://blog.jenishjain.in' },
  { yr: '2022', title: 'Apache Kafka, explained without the jargon',                   tag: 'Systems',     href: 'https://medium.com/@jenishjain6/laymans-guide-to-kafka-203089f1dbd0' },
  { yr: '2022', title: 'System design fundamentals for the slightly anxious',          tag: 'Systems',     href: 'https://blog.jenishjain.in' },
  { yr: '2020', title: 'My internship experience at Rapido',                           tag: 'Career',      href: 'https://medium.com/rapido-labs/my-internship-experience-at-rapido-91a141116090' },
];

export default function Writings() {
  return (
    <section id="writing">
      <SectionTag idx={4} label="Writing" />
      <Reveal as="div" className="writing-list">
        {POSTS.map((p) => (
          <a key={p.title} className="write-row" href={p.href} target="_blank" rel="noopener noreferrer" data-hot>
            <div className="yr">{p.yr}</div>
            <div className="ttl">{p.title}</div>
            <div className="tag">{p.tag}</div>
            <div className="arrow">↗</div>
          </a>
        ))}
      </Reveal>
      <div style={{ marginTop: 24, fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>
        → all posts at{' '}
        <a href="https://blog.jenishjain.in" target="_blank" rel="noopener noreferrer"
           style={{ borderBottom: '1px solid var(--accent)' }}>blog.jenishjain.in</a>
      </div>
    </section>
  );
}

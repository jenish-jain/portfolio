import Reveal from '../reveal';
import SectionTag from '../section-tag';
import drawings from './data';

export default function Drawings() {
  return (
    <section id="drawings">
      <SectionTag idx={5} label="Drawings" />
      <Reveal as="div" className="drawing-list">
        {drawings.map((d) => (
          <a key={d.title} className="draw-row" href={d.url} target="_blank" rel="noopener noreferrer" data-hot>
            <img
              className="draw-thumb"
              src={`https://res.cloudinary.com/jenishjain/image/fetch/w_120,h_150,c_fill,g_face,q_auto,f_auto/${d.image}`}
              alt={d.title}
              loading="lazy"
              width={60}
              height={75}
            />
            <div className="draw-info">
              <div className="draw-title">{d.title}</div>
              {d.description && <div className="draw-desc">{d.description}</div>}
            </div>
            <div className="arrow">↗</div>
          </a>
        ))}
      </Reveal>
      <div style={{ marginTop: 24, fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)' }}>
        → all drawings at{' '}
        <a href="https://drawings.jenishjain.in/posts" target="_blank" rel="noopener noreferrer"
           style={{ borderBottom: '1px solid var(--accent)' }}>drawings.jenishjain.in</a>
      </div>
    </section>
  );
}

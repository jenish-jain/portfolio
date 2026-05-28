import Reveal from '../reveal';
import SectionTag from '../section-tag';

const ROLES = [
  { year: '2024 — now',  title: 'Senior Software Engineer',              sub: 'Pricing & marketplace systems, also moved to devops',          at: 'Rapido' },
  { year: '2022 — 2024', title: 'Software Engineer II',                  sub: 'Owning surge & marketplace pricing',      at: 'Rapido' },
  { year: '2020 — 2022', title: 'Software Engineer',                     sub: 'From APE to SE — pricing platform',       at: 'Rapido' },
  { year: '2019 — 2020', title: 'Associate Product Engineer · Intern',   sub: 'First job. First production push.',       at: 'Rapido' },
  { year: '2018 — 2019', title: 'Freelance IoT Developer',               sub: 'Hardware, firmware, hacking on weekends', at: 'Self'   },
];

export default function Experience() {
  return (
    <section id="work">
      <SectionTag idx={2} label="Experience" />
      <div className="timeline">
        <div className="timeline-side">
          <div>Years shipping</div>
          <div className="count">7</div>
        </div>
        <Reveal as="div" className="timeline-list">
          {ROLES.map((r) => (
            <div className="role-row" key={r.title} data-hot>
              <div className="yr">{r.year}</div>
              <div className="ttl">
                <em>{r.title}</em>
                <small>{r.sub}</small>
              </div>
              <div className="at"><span className="badge">@ {r.at}</span></div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

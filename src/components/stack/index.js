import Reveal from '../reveal';
import SectionTag from '../section-tag';

const STACK = [
  { nm: 'Go',         ds: 'Daily driver'     },
  { nm: 'Java',       ds: 'Production legacy' },
  { nm: 'Python',     ds: 'Glue & scripts'   },
  { nm: 'Kafka',      ds: 'Event backbone'   },
  { nm: 'Postgres',   ds: 'Source of truth'  },
  { nm: 'Redis',      ds: 'Hot path'         },
  { nm: 'GCP',        ds: 'Cloud of choice'  },
  { nm: 'Terraform',  ds: 'IaC'              },
  { nm: 'Docker',     ds: 'Boxes'            },
  { nm: 'gRPC',       ds: 'Service mesh'     },
  { nm: 'Cloud Run',  ds: 'Side projects'    },
  { nm: 'React',      ds: 'This page, etc.'  },
];

export default function Stack() {
  return (
    <section id="stack">
      <SectionTag idx={6} label="Stack" />
      <div className="stack-wrap">
        <Reveal className="stack-side">
          <h2>Tools I reach for, without thinking.</h2>
          <p>A short list. Languages move; the muscle of "small services, clear contracts, observable everything" doesn't.</p>
        </Reveal>
        <Reveal delay={120} as="div" className="stack-grid">
          {STACK.map((s) => (
            <div className="stack-cell" key={s.nm}>
              <div className="nm">{s.nm}</div>
              <div className="ds">{s.ds}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

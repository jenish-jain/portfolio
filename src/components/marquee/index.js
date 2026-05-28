const ITEMS = [
  'Distributed systems', 'Backend engineering', 'Go · Java · Python',
  'Kafka & event streaming', 'Drawing sometimes',
  'Tinkering with AI agents', 'Pricing systems at scale',
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i}>{t} <span className="star">✺</span></span>
        ))}
      </div>
    </div>
  );
}

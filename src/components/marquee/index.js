const ITEMS = [
  'Distributed systems', 'Backend engineering', 'Go · Java · Python',
  'Kafka & event streaming', 'Cloud-native on GCP', 'Pricing systems at scale',
  'Tinkering with AI agents', 'Drawing sometimes',
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

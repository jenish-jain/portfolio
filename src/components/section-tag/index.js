export default function SectionTag({ idx, label }) {
  return (
    <div className="section-tag">
      <span>{String(idx).padStart(2, '0')}</span>
      <span>—</span>
      <span>{label}</span>
    </div>
  );
}

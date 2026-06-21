import Reveal from '../reveal';
import SectionTag from '../section-tag';
import { trackClick } from '../../utils/analytics';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <SectionTag idx={7} label="Contact" />
      <Reveal className="contact-card">
        <h2>Let's <em>build</em> something.</h2>
        <p style={{ maxWidth: 460, color: 'rgba(20,17,13,0.78)', fontSize: 17, lineHeight: 1.5, marginBottom: 32 }}>
          The inbox is open — for collaboration, a referral, a system-design rabbit hole,
          or to argue about why 90's cartoons were best.
        </p>
        <div className="contact-row">
          <a href="mailto:jenishjain6@gmail.com" onClick={() => trackClick('contact', 'email')} data-hot>↳ email</a>
          <a href="https://github.com/jenish-jain"        target="_blank" rel="noopener noreferrer" onClick={() => trackClick('contact', 'github', 'https://github.com/jenish-jain')} data-hot>↳ github</a>
          <a href="https://in.linkedin.com/in/jenish-jain" target="_blank" rel="noopener noreferrer" onClick={() => trackClick('contact', 'linkedin', 'https://in.linkedin.com/in/jenish-jain')} data-hot>↳ linkedin</a>
          <a href="https://twitter.com/jenishjain17"       target="_blank" rel="noopener noreferrer" onClick={() => trackClick('contact', 'twitter', 'https://twitter.com/jenishjain17')} data-hot>↳ twitter</a>
          <a href="https://blog.jenishjain.in"             target="_blank" rel="noopener noreferrer" onClick={() => trackClick('contact', 'blog', 'https://blog.jenishjain.in')} data-hot>↳ blog</a>
          <a href="https://drawings.jenishjain.in"         target="_blank" rel="noopener noreferrer" onClick={() => trackClick('contact', 'drawings', 'https://drawings.jenishjain.in')} data-hot>↳ drawings</a>
        </div>
      </Reveal>
    </section>
  );
}

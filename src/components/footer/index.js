import './style.css';

export function Footer() {
  // TODO: Replace this URL with your actual Calendly/Cal.com link
  const schedulingLink = 'https://calendly.com/your-username'; // Update this!

  const handleCTAClick = () => {
    window.open(schedulingLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Hire Me CTA */}
      <div className="hire-me-cta">
        <button
          onClick={handleCTAClick}
          className="hire-me-button"
          aria-label="Schedule a meeting"
        >
          Looking for a Senior Backend Engineer? Let's talk →
        </button>
      </div>

      {/* Original Footer */}
      <footer className="footer">
        <span>powered by free weekends</span>
        <nav className="footer-nav">
          <a href="/posts">posts</a>
          <a href="https://github.com/jenish-jain/portfolio">source code</a>
        </nav>
      </footer>
    </>
  );
}

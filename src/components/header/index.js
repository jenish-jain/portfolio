import { useState, useEffect } from 'react';
import './style.css';

export function Header() {
   // eslint-disable-next-line
  const [isHome, setIsHome] = useState(false);

  const schedulingLink = 'https://cal.com/jenish-jain-gzoo2b/15min';

  useEffect(() => {
    setIsHome(window.location.pathname === '/');
  }, []);

  const handleCTAClick = (e) => {
    e.preventDefault();
    window.open(schedulingLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="site-header">
      <a href="/" rel="home" className="home">
        Jenish Jain
      </a>
      <a href={schedulingLink} onClick={handleCTAClick} className="header-cta">
        Wanna connect?
      </a>
    </header>
  );
}

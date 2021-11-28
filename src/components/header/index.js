import { useState, useEffect } from 'react';
import './style.css';

export function Header() {
   // eslint-disable-next-line
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window.location.pathname === '/');
  }, []);

  return (
    <header className="site-header">
      <a href="/" rel="home" className="home">
        Jenish Jain
      </a>
    </header>
  );
}

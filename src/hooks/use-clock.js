import { useState, useEffect } from 'react';

export default function useClock() {
  const fmt = () => {
    try {
      return new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata',
      }) + ' IST';
    } catch {
      return new Date().toLocaleTimeString();
    }
  };

  const [t, setT] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setT(fmt()), 30000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return t;
}

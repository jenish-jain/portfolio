import { useEffect } from 'react';

export default function useMagneticCursor(cursorRef) {
  useEffect(() => {
    const dot = cursorRef.current;
    if (!dot) return;

    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let tx = x, ty = y;
    let raf;

    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    const over = (e) => { if (e.target.closest?.('[data-hot]')) dot.classList.add('hot'); };
    const out = (e) => { if (e.target.closest?.('[data-hot]')) dot.classList.remove('hot'); };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, [cursorRef]);
}

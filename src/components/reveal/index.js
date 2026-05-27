import { useRef, useEffect } from 'react';

export default function Reveal({ children, delay = 0, as: As = 'div', className = '', ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      setTimeout(() => el.classList.add('in'), delay);
    };
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) { fire(); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { fire(); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return <As ref={ref} className={'reveal intro ' + className} {...rest}>{children}</As>;
}

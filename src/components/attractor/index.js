import { useAttractor } from '../../hooks/use-attractor';

export function Attractor(props) {
  const { ref } = useAttractor();

  return (
    <canvas
      ref={ref}
      className={props.class}
      style={{
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
      }}
    />
  );
}

import { useSwingingSticks } from '../../hooks/use-swinging-sticks';

export function SwingingSticks(props) {
  const { swingingSticksRef } = useSwingingSticks();

  return (
    <canvas
      ref={swingingSticksRef}
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

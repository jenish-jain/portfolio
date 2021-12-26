import { useDominoes } from '../../hooks/use-domino';

export function RenderDominoes(props) {
  const { dominoRef } = useDominoes();

  return (
    <canvas
      ref={dominoRef}
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

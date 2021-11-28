import { useCool } from '../../hooks/use-cools';

export function CoolDrop(props) {
  const { coolRef } = useCool();

  return (
    <canvas
      ref={coolRef}
      class={props.class}
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

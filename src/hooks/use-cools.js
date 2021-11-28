import * as Matter from 'matter-js';
import { useEffect, useRef, useState } from 'react';

const { Engine, Render, Runner, World, Bodies } = Matter.default;

const engine = Engine.create();
const runner = Runner.create();

function createCool(url) {
  const cool = Bodies.circle(Math.round(Math.random() * window.innerWidth), -30, 35, {
    angle: Math.PI * (Math.random() * 2 - 1),
    friction: 0.001,
    frictionAir: 0.01,
    restitution: 0.75,
    render: {
      sprite: {
        texture: url,
        xScale: 1,
        yScale: 1,
      },
    },
  });

  World.add(engine.world, [cool]);
}

export function useCool() {
  const ref = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const canvas = ref.current;

    if (!canvas) {
      return;
    }

    const height = ref.current.clientHeight;
    const width = ref.current.clientWidth;

    const render = Render.create({
      element: 'div',
      canvas,
      engine: engine,
      options: {
        height,
        width,
        background: 'transparent',
        wireframes: false,
      },
    });

    const boundaries = {
      isStatic: true,
      render: {
        fillStyle: 'transparent',
        strokeStyle: 'transparent',
      },
    };
    const ground = Bodies.rectangle(width / 2, height, width + 20, 4, boundaries);
    const leftWall = Bodies.rectangle(0, height / 2, 4, height + 60, boundaries);
    const rightWall = Bodies.rectangle(width, height / 2, 4, height + 60, boundaries);

    World.add(engine.world, [ground, leftWall, rightWall]);

    Render.run(render);
    Runner.run(runner, engine);
  }, [ref]);

  const coolImage = process.env.PUBLIC_URL + 'images/cool_small.png';

  const addCool = () => {
    createCool(coolImage);
    setCount(count + 1);
  };

  return { coolRef: ref, addCool, count };
}

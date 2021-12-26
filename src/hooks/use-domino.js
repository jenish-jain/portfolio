import * as Matter from 'matter-js';
import { useEffect, useRef } from 'react';

const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint , Composites} = Matter.default;

const engine = Engine.create();
const runner = Runner.create();

function createDomino() {
  const dominoOptions = {
    frictionAir: 0.02,
    restitution: 0.39,
    density: 1,
    mass:1,
  };

const trail = Composites.stack(200, -600, 12, 1, 35, 0, function(x,y){
    return Bodies.rectangle(x, y+x, 20, 80, dominoOptions);
})

  const ballOption = {
    angularVelocity:20,
    frictionAir: 0.06,
    restitution: 0.9,
    density: 1.4,
    speed: 10,
    motion: 10,
    mass: 10,
};
var ball = Bodies.circle(100, 200, 20, ballOption);

  Composite.add(engine.world, [ trail, ball]);
}

export function useDominoes() {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;

    if (!canvas) {
      console.log('empty canvas');
      return;
    }

    const height = ref.current.clientHeight;
    const width = ref.current.clientWidth;

    console.log('init');

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

    // const boundaries = {
    //     isStatic: true,
    //     render: {
    //         fillStyle: 'transparent',
    //         strokeStyle: 'transparent',
    //     },
    // }

    const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    Composite.add(engine.world, [ground ]);
    Render.run(render);

    // run the engine
    Runner.run(runner, engine);

    const mouse = Mouse.create(render.canvas);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });


    Composite.add(engine.world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    Render.lookAt(render, {
        min: { x: -10, y: 0 },
        max: { x: 800, y: 600 }
    });

  }, [ref]);

  const addDominoes = () => {
    createDomino();
  };

  return { dominoRef: ref, addDominoes };
}

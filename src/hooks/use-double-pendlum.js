import * as Matter from 'matter-js';
import { useEffect, useRef } from 'react';
const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Composites, Vector, Events, Body, Constraint } = Matter.default;

const engine = Engine.create();
const runner = Runner.create();

export function useSwingingSticks() {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;

    if (!canvas) {
      console.log('empty canvas');
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

    Render.run(render);
    engine.gravity.scale = 0.002;

    Runner.run(runner, engine);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
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

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 700, y: 500 },
    });
  }, [ref]);

  const addSwingingSticks = () => {
    const group = Body.nextGroup(true),
      length = 200,
      width = 25;

    const pendlumOptions = {
      collisionFilter: { group: group },
      frictionAir: 0,
      chamfer: 5,
      render: {
        fillStyle: 'transparent',
        lineWidth: 2,
      },
    };

    const pendulum = Composites.stack(50, 160, 2, 1, -20, 0, function (x, y) {
      console.log('VALUE OF X: ', x);
      console.log('VALUE OF Y: ', y);
      return Bodies.rectangle(x, y, length, width, { ...pendlumOptions });
    });


    console.log("pendlum")
    console.log(pendulum)

    Composites.chain(pendulum, 0.45, 0, -0.035, 0, {
      stiffness: 0.9,
      length: 0,
      angularStiffness: 0.2,
      render: {
        strokeStyle: '#4a485b',
      },
    });

    Composite.add(
      pendulum,
      Constraint.create({
        bodyB: pendulum.bodies[0],
        pointB: { x: -length * 0.22, y: 0 },
        pointA: { x: pendulum.bodies[0].position.x - length * 0.32, y: pendulum.bodies[0].position.y },
        stiffness: 0.9,
        length: 0,
        render: {
          strokeStyle: '#4a485b',
        },
      })
    );

    var lowerArm = pendulum.bodies[1];

    Body.rotate(lowerArm, -Math.PI * 0.3, {
      x: lowerArm.position.x - 100,
      y: lowerArm.position.y,
    });

    Composite.add(engine.world, pendulum);
  };

  return { swingingSticksRef: ref, addSwingingSticks };
}

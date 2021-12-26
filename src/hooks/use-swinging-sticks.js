import * as Matter from 'matter-js';
import { useEffect, useRef } from 'react';
const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Body,Vector, Events, Constraint } = Matter.default;

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

    /*  MOUSE CONSTRAINT START */
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
    /*  MOUSE CONSTRAINT END */

    // fit the render viewport to the scene

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 700, y: 500 },
    });
  }, [ref]);

  /* SWINGING STICKS START */
  const addSwingingSticks = () => {
    const group = Body.nextGroup(true),
      longRodLength = 250,
      shortRodLength = 120,
      standLegLength = 150,
      width = 18;

    const pendlumOptions = {
      collisionFilter: { group: group },
      frictionAir: 0,
      chamfer: 5,
      render: {
        fillStyle: 'transparent',
        lineWidth: 2,
        strokeStyle: '#4a485b',
      },
    };


    // find better way to put all these values so that it is not static
    const standLegOne = Bodies.rectangle(635, 350, width, standLegLength, { ...pendlumOptions , isStatic: true});
    const standLegTwo = Bodies.rectangle(565, 350, width, standLegLength, { ...pendlumOptions , isStatic: true});
    const longRod = Bodies.rectangle(50, 160, width, longRodLength, { ...pendlumOptions });
    const shortRod = Bodies.rectangle(100, 200, width, shortRodLength, { ...pendlumOptions });

    const swingingSticks = Composite.create({
      bodies: [longRod, shortRod, standLegOne, standLegTwo],
    });

    Body.rotate(swingingSticks.bodies[2], -10)
    Body.rotate(swingingSticks.bodies[3], 10)

    Composite.add(engine.world, swingingSticks);
    console.log('swinging sticks');
    console.log(swingingSticks);

    const longRodConstraint = Constraint.create({
      bodyB: swingingSticks.bodies[0],
      pointA: { x: 600, y: 300 }, // position of pivot
      pointB: { x: 0, y: longRodLength * 0.25 },
      stiffness: 0.9,
      length: 0,
      render: {
        strokeStyle: '#4a485b',
      },
      // angularStiffness: 0.9,
    });

    const shortRodConstraint = Constraint.create({
      bodyA: swingingSticks.bodies[0],
      bodyB: swingingSticks.bodies[1],
      pointA: { x: 0, y: swingingSticks.bodies[1].position.y - longRodLength * 1.1 },
      pointB: { x: 0, y: shortRodLength*0.2 },
      stiffness: 0.9,
      length: 0,
      render: {
        strokeStyle: '#4a485b',
      },
      // angularStiffness: 0.9,
    });

    Composite.add(swingingSticks, longRodConstraint);
    Composite.add(swingingSticks, shortRodConstraint);

    var lowerArm = swingingSticks.bodies[0];

    Body.rotate(lowerArm, -Math.PI * 0.3, {
      x: lowerArm.position.x - 100,
      y: lowerArm.position.y,
    });

    var second = swingingSticks.bodies[1];
    Body.setAngularVelocity(second, 3)

  };

  return { swingingSticksRef: ref, addSwingingSticks };
}

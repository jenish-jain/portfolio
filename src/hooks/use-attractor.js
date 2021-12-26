import * as Matter from 'matter-js';
import * as MatterAttractors from 'matter-attractors';
import { useEffect, useRef } from 'react';
const { Engine, Render, Runner, World, Bodies, Mouse, Events, Common, Body } = Matter.default;

const engineOptions = {
  gravity: {
    y: 0,
    x: 0,
    scale: 0.1,
  },
};

const engine = Engine.create(engineOptions);
const runner = Runner.create();

Matter.use(MatterAttractors);

function createAttractorObjects() {
  let height = 745;
  let width = 1112;
  for (let i = 0; i < 150; i += 1) {
    const body = Bodies.polygon(
      Common.random(0, width), 
      Common.random(0, height), 
      Common.random(1, 5), 
      Common.random() > 0.9 ? Common.random(15, 25) : Common.random(5, 10)
      );

    World.add(engine.world, body);
  }
}

export function useAttractor() {
  const ref = useRef();

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
        showVelocity: false,
        width: width,
        height: height,
        wireframes: false,
        background: '#f0f0f0',
      },
    });

    Runner.run(runner, engine);
    Render.run(render);

    // create a body with an attractor
    const attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      //   Math.max(width / 4, height / 4) / 2,
      50,
      {
        render: {
          fillStyle: `#f0f0f0`,
          strokeStyle: `#f0f0f0`,
          lineWidth: 0,
        },
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 5e-6,
                y: (bodyA.position.y - bodyB.position.y) * 5e-6,
              };
            },
          ],
        },
      }
    );

    World.add(engine.world, attractiveBody);

    const mouse = Mouse.create(render.canvas);
    render.mouse = mouse;

    Events.on(engine, 'afterUpdate', function () {
      if (!mouse.position.x) return;
      // smoothly move the attractor body towards the mouse
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });


    return {
      engine: engine,
      runner: runner,
      render: render,
      canvas: render.canvas,
      stop: function () {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
      },
    };
  }, [ref]);

  const addAttractor = () => {
    createAttractorObjects();
  };

  return { ref: ref, addAttractor };
}

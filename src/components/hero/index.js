import React, { useEffect, useState } from 'react';
import { useCool } from '../../hooks/use-cools';
import { useSfx } from '../../hooks/use-sfx';
import { CoolDrop } from '../cool-drop';
import './style.css';

const MAXIMUM_COOLS = 20;
export const taglines = [
  {
    size: '4.2vw',
    'size-lg': '64px',
    text: `
      has a lot of ideas
    `,
  },
  {
    size: '3.5vw',
    'size-lg': '72px',
    text: `
      likes to draw cartoons
    `,
  },
  {
    rotation: '-7deg',
    scale: '1',
    size: '5.5vw',
    'size-lg': '64.5px',
    text: `
      <span class="love">love</span>'s pavbhaji
    `,
  },
  {
    rotation: '18deg',
    scale: 1.05,
    size: '2.97vw',
    'size-lg': '44px',
    text: `
      likes fixing circuits & codes
    `,
    top: '0.025em',
  },
];

const CycleTagline = ({ clickHandler }) => {
  const [active, setActive] = useState(false);

  const images = {
    off: 'https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/v1593806081/jason.af/rotate-off.png',
    on: 'https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/v1593806090/jason.af/rotate-on.png',
  };

  const handleClick = event => {
    event.preventDefault();

    setActive(true);
    setTimeout(() => setActive(false), 500);

    clickHandler();
  };

  return (
    <button onClick={handleClick} className={`hero-cycle ${active ? 'cycle-is-active' : ''}`}>
      <img src={images[active ? 'on' : 'off']} alt='drawing of two arrows pointing in a circle' />
      <span className='visually-hidden'>change tagline</span>
    </button>
  );
};

function Hero() {
  const { addCool, count } = useCool();
  const { playBoop, playAirhorn } = useSfx();
  const [taglineIndex, setTaglineIndex] = useState(0);
  const tagline = taglines[taglineIndex];

  useEffect(() => {
    addCool();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function cycleTagline() {
    addCool();
    if (count < MAXIMUM_COOLS) {
      playBoop();
    } else {
      playAirhorn();
    }

    const index = taglineIndex + 1;
    setTaglineIndex(index < taglines.length ? index : 0);
  }

  return [
    <CoolDrop className='cools' />,
    <div className='hero'>
      <span className='hero-first-line'>Jenish</span>
      <span className='hero-box'>Jain</span>
      <span
        className='hero-tagline'
        style={{
          '--top': tagline.top || '-7px',
          '--rotation': tagline['rotation'] || '0deg',
          '--scale': tagline.scale || 1.1,
          '--size': tagline.size || '3.42vw',
          '--size-lg': tagline['size-lg'] || '44px',
        }}
        dangerouslySetInnerHTML={{ __html: tagline.text }}
      />
    </div>,
    <CycleTagline clickHandler={cycleTagline} />,
  ];
}

export default Hero;

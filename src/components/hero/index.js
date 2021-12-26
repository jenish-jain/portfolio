import React, { useEffect } from 'react';
import { useAttractor } from '../../hooks/use-attractor';
import { Attractor } from '../attractor';
import './style.css';

function Hero() {
  const { addAttractor } = useAttractor();

  useEffect(() => {
    addAttractor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [
    <Attractor className='attractor' />,
    <div className='hero'>
      <span className='hero-first-line'>Jenish</span>
      <span className='hero-box'>Jain</span>
    </div>,
    
  ];
}

export default Hero;

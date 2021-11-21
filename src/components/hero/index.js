import React, { Component } from 'react';
import './style.css';

class Hero extends Component {
  state = {
    taglineIndex: 0
  };

  render() {
    return (
      <div className='hero'>
        <span className='hero-first-line'>Jenish</span>
        <span className='hero-box'>Jain</span>
        <span className='temp-tagline'>
              ...portfolio loading
          </span>
      </div>
    );
  }
}

export default Hero;

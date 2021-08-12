import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1 >Want  job ? #Achive you Dream's </h1>
      <p>Lets do it.</p>
      <div className='hero-btns'>
       
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >   LOG IN
        </Button>
       
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        > Take a Glance <i className='far fa-play-circle' />
        </Button> */}
      
      </div>
    </div>
  );
}

export default HeroSection;
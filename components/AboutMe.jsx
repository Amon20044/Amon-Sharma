'use client';
import React, { useEffect, useRef } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Removed GSAP animations
  }, []);

  return (
    <div ref={sectionRef} className="about-me-section">
      <div className="about-me-title">About Me</div>
      <div className="catchy-intro">Creator of Quality Designs and Thinker of Fresh Ideas</div>
      <div className="about-me-text">
        I’m an art director, graphic designer, and digital artist with over 9 years’ experience and a degree in Design of Industrial Products. I study experiences to create brand identities. I’m curious, passionate, and strive for continuous evolution. I’ve made creativity my lifestyle. Currently, I work as an independent Art Director, Graphic Designer & Illustrator. Ever since I was a kid, art has been what makes me tick. To this day, art is what moves me to explore and play around with new shapes and techniques to find solutions that are appealing and efficient.
      </div>
    </div>
  );
};

export default AboutMe;

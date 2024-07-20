"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import './Contact.css'; // Ensure your CSS file is imported correctly

export default function Contact() {
  const [hovered, setHovered] = useState(false);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setDeltaX(0);
    setDeltaY(0);
  };

  const handleMouseMove = (e) => {
    const bounds = e.target.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;

    const deltaX = (centerX - e.clientX) * 0.1;
    const deltaY = (centerY - e.clientY) * 0.1;

    setDeltaX(deltaX);
    setDeltaY(deltaY);
  };

  return (
    <div className='wrapper'>
      <Link href="https://www.linkedin.com/in/amon-sharma-ab8a15216/" target="_blank" passHref>
        <div className={`parallax-button ${hovered ? 'hovered' : ''}`}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             onMouseMove={handleMouseMove}
             style={{ transform: `translate3d(${deltaX}px, ${deltaY}px, 0)` }}>
          <button className="slide">&nbsp;</button>
        </div>
      </Link>
    </div>
  );
};

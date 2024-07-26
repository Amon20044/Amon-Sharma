'use client';
import React, { useState, useEffect } from 'react';
import './Project.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Project({ index, title, setModal, desc, url, src, color }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Link href={url} legacyBehavior>
      <a
        className="project"
        onMouseEnter={() => setModal({ active: true, index })}
        onMouseLeave={() => setModal({ active: false, index })}
        target="_blank"
        rel="noopener noreferrer"
      >
        {isMobile && (
          <div>
            <div className={`modal`} style={{ backgroundColor: color }} key={`modal_${index}`}>
              <Image 
                src={`/img/${src}`}
                width={300}
                height={0}
                alt="image"
              />
            </div>
          </div>
        )}
        <h2>{title}</h2>
        <p>{desc}</p>
      </a>
    </Link>
  );
}

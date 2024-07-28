// components/Loader.jsx
'use client';
// components/Loader.jsx
import { useEffect } from "react";
import gsap from "gsap";

export default function Loader({ onLoadComplete }) {
  useEffect(() => {
    const tl = gsap.timeline();

    // Rotate cube smoothly
    tl.to(".loader-cube", {
      rotationY: 360,
      rotationX: 360,
      duration: 2,
      repeat: -1, // Continue rotating until exit animation
      ease: "power2.inOut",
    });

    // Smooth zoom-out and fade out
    tl.to(".loader-container", {
      scale: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: onLoadComplete,
    }, "+=2"); // Start zoom-out after rotation

  }, [onLoadComplete]);

  return (
    <div className="loader-container">
      <div className="loader-cube"></div>
      <style jsx>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          overflow: hidden;
        }
        .loader-cube {
          width: 100px;
          height: 100px;
          background-color: var(--primaryColor);
          transform-style: preserve-3d;
          transform: rotateX(0) rotateY(0);
          position: relative;
        }
        .loader-cube::before,
        .loader-cube::after {
          content: '';
          position: absolute;
          width: 100px;
          height: 100px;
          background-color: var(--primaryColor);
        }
        .loader-cube::before {
          transform: rotateY(90deg);
        }
        .loader-cube::after {
          transform: rotateX(90deg);
        }
      `}</style>
    </div>
  );
}

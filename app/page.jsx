// app/page.jsx or the corresponding page file
'use client';
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';
import Loader from "@/components/Loader"; // Import the Loader component
import LandingPage from "@/components/LandingPage";
import AboutMe from '@/components/AboutMe';
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Services from "@/components/Services";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [winCheck, setWinCheck] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true); // New state for loader

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    lenis.on('scroll', (e) => {
      console.log(e);
    });

    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateWinCheck = () => {
        setWinCheck(window.innerWidth >= 850);
    };

    updateWinCheck();
    window.addEventListener('resize', updateWinCheck);

    return () => {
        window.removeEventListener('resize', updateWinCheck);
    };
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false); // Hide loader when animation is complete
  };

  return (
    <>
      {isLoading && <Loader onLoadComplete={handleLoaderComplete} />}
      <div className={`body font-proza ${!winCheck && 'cursor-none'}`} >
        <div><LandingPage winCheck={winCheck} cursorPosition={cursorPosition} className={'landingPage box-border'}/></div>
        <div><AboutMe className={'box-border aboutme'}/></div>
        <div><Skills className={'box-border skills'}/></div>
        <div><Services className={'box-border services'}/></div>
        <div><Project className={'box-border projectss'}/></div>
        { winCheck &&
          <div
            className="fixed w-12 h-12 bg-white rounded-full pointer-events-none"
            style={{
              top: cursorPosition.y,
              left: cursorPosition.x,
              transform: 'translate(-50%, -50%)',
              zIndex: 999,
              mixBlendMode: 'difference'
            }}
          />}
      </div>
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Photo from "@/assets/photo.svg";
import Image from "next/image";
import AboutMe from '@/components/AboutMe';
import Slider from '@/components/Slider';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';
import Skills from "@/components/Skills";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const [winCheck, setWinCheck] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

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

    const handleScroll = () => {
        const navHeight = document.querySelector('.navUp').offsetHeight;
        setShowHamburger(window.scrollY >= navHeight);
    };

    updateWinCheck();
    window.addEventListener('resize', updateWinCheck);
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('resize', updateWinCheck);
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <div className="body relative" >
      <div className={`landingpage`}>
        <div className="navbar">
          <Navbar/>
        </div>
      
        <div className={`image ${winCheck ? '' : '-translate-y-10'}`}>
          <Image
            src={Photo}
            alt="Amon Sharma"
            fill={true}
            objectFit={`cover`}
            objectPosition="right top"
          />
        </div>

        <div className="right">
          <div className="upperBlock">
            <div></div> {/* Animated circle */}
            <p >
              "<span className='first'>M</span>ake your <span className='first'>Output</span> <span className='first'>C</span>ommunicate <span className='first'>E</span>fficiently"
            </p>
          </div>
          <div className="downBlock overflow-hidden">
            <p className='name'>
              <span>A</span>mon <span>S.</span>
            </p>
            <div className='designation'>
              <Slider/>
            </div>
          </div>
        </div>
      </div>

      <div className="AboutPage overflow-x-hidden z-10">
        <AboutMe/>
      </div>

      <div className="-z-10">
        <Skills/>
      </div>

      <div
        className="fixed w-12 h-12 bg-white rounded-full pointer-events-none"
        style={{
          top: cursorPosition.y,
          left: cursorPosition.x,
          transform: 'translate(-50%, -50%)',
          zIndex: 999,
          mixBlendMode: 'difference'
        }}
      />
    </div>
  );
}

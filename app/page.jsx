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
import Contact from "@/components/Contact";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import ProjectSchemaMarkup from "@/components/ProjectSchemaMarkup";
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
      <PerformanceOptimizer />
      <ProjectSchemaMarkup projects={[
        {
          title: "Project Portfolio Website",
          description: "A modern, responsive portfolio website built with Next.js and advanced animations",
          dateCreated: "2024-01-01",
          keywords: ["Next.js", "React", "GSAP", "Tailwind CSS", "Portfolio"],
          technologies: ["JavaScript", "React", "Next.js", "CSS", "GSAP"],
          image: "/assets/photo.png"
        }
        // Add more projects here as needed
      ]} />
      {isLoading && <Loader onLoadComplete={handleLoaderComplete} />}
      <div className={`body font-proza ${!winCheck && 'cursor-none'}`} >
        <div className="home" id="home"><LandingPage winCheck={winCheck} cursorPosition={cursorPosition} /></div>
        <div className="about" id="about"><AboutMe /></div>
        <div className="skills" id="skills"><Skills /></div>
        <div className="services" id="services"><Services /></div>
        <div className="projects" id="projects"><Project /></div>
        <div className="contact" id="contact"><Contact /></div>
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

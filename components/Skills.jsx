'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import CustomEase from 'gsap/CustomEase';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Skills.css'; // Import the CSS file for styling
import Skillss from '@/assets/Skills.svg'
import Image from 'next/image';
gsap.registerPlugin(CustomEase);
// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Skill icons mapping
const skillIcons = {
  // 3D Tools
  unreal: 'unreal',
  unity: 'unity',
  blender: 'blender',

  // Graphic Design Tools
  illustrator: 'illustrator',
  photoshop: 'photoshop',
  figma: 'figma',

  // Programming Languages
  java: 'java',
  python: 'py',
  javascript: 'js',
  cpp: 'cpp',
  c: 'c',
  html: 'html',
  css: 'css',

  // Frameworks
  react: 'react',
  vue: 'vue',
  next: 'nextjs',
  angular: 'angular',
  django: 'django',

  // Development Tools
  git: 'git',
  docker: 'docker',

  // Cloud Platforms
  aws: 'aws',
  vercel: 'vercel',
  azure: 'azure',

  // Databases
  mysql: 'mysql',
  postgresql: 'postgres',
  mongodb: 'mongodb',

};

export default function Skills() {
  useEffect(() => {
    // Parallax effect for SkillImage
    const SkillAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: '.skills-container',
          start: 'top 0%',
          end: 'bottom 0%',
          scrub: true,
        },
      });
  
      SkillAnimation
        .fromTo(
          '.SkillImage',
          { opacity: 1, y: 0, duration:6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")},
          { opacity: 1, y: 1000, duration:6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")}
        
        )
        
    // Animation for skill sections
    gsap.fromTo('.skill-section',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.skills-container',
          start: 'top center+=100',
          end: 'bottom center',
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div className="skills-container flex align-middle items-center justify-center content-center h-[220vh] relative translate-y-[70vh] font">
      <div className='absolute z-0 w-[100vw] h-auto left-0 SkillImage top-20'>
        <Image
          src={Skillss}
          alt='skills'
          style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'right top' }}
        />
      </div>
      <div className="skill-sections mt-[10vw]">
        <div className='w-[80vw] h-[1px] bg-black opacity-50 mb-8'></div>
        <div className="skill-section">
          <h2>Graphic Design Tools</h2>
          <div className="skills-grid">
            {['illustrator', 'photoshop', 'figma'].map((tool) => (
              <a key={tool} href={`https://skillicons.dev`} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://skillicons.dev/icons?i=${skillIcons[tool]}`}
                  alt={tool}
                />
              </a>
            ))}
          </div>
        </div>
        <div className='w-[80vw] h-[1px] bg-black opacity-50 mb-8'></div>
        <div className="skill-section">
          <h2>3D Tools & Game Development</h2>
          <div className="skills-grid">
            {['unreal', 'unity', 'blender'].map((tool) => (
              <a key={tool} href={`https://skillicons.dev`} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://skillicons.dev/icons?i=${skillIcons[tool]}`}
                  alt={tool}
                />
              </a>
            ))}
          </div>
        </div>
        <div className='w-[80vw] h-[1px] bg-black opacity-50 mb-8'></div>
        <div className="skill-section">
          <h2>Programming Languages</h2>
          <div className="skills-grid">
            {['java', 'python', 'javascript', 'cpp', 'c', 'html', 'css'].map((skill) => (
              <a key={skill} href={`https://skillicons.dev`} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://skillicons.dev/icons?i=${skillIcons[skill]}`}
                  alt={skill}
                />
              </a>
            ))}
          </div>
        </div>
        <div className='w-[80vw] h-[1px] bg-black opacity-50 mb-8'></div>
        <div className="skill-section">
          <h2>Frameworks</h2>
          <div className="skills-grid">
            {['react', 'vue', 'next', 'angular', 'django'].map((skill) => (
              <a key={skill} href={`https://skillicons.dev`} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://skillicons.dev/icons?i=${skillIcons[skill]}`}
                  alt={skill}
                />
              </a>
            ))}
          </div>
        </div>
        <div className='w-[80vw] h-[1px] bg-black opacity-50 mb-8'></div>
        <div className="skill-section">
          <h2>Development Tools</h2>
          <div className="skills-grid">
            {['git', 'docker'].map((tool) => (
              <a key={tool} href={`https://skillicons.dev`} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://skillicons.dev/icons?i=${skillIcons[tool]}`}
                  alt={tool}
                />
              </a>
            ))}
          </div>
        </div>
        <div className='w-[80vw] h-[1px] bg-black opacity-50 mb-8'></div>
        <div className="skill-section">
          <h2>Cloud Platforms</h2>
          <div className="skills-grid">
            {['aws', 'vercel', 'azure'].map((platform) => (
              <a key={platform} href={`https://skillicons.dev`} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://skillicons.dev/icons?i=${skillIcons[platform]}`}
                  alt={platform}
                />
              </a>
            ))}
          </div>
        </div>
        <div className='w-[80vw] h-[1px] bg-black opacity-50 mb-8'></div>
        <div className="skill-section">
          <h2>Databases</h2>
          <div className="skills-grid">
            {['mysql', 'postgresql', 'mongodb'].map((db) => (
              <a key={db} href={`https://skillicons.dev`} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https://skillicons.dev/icons?i=${skillIcons[db]}`}
                  alt={db}
                />
              </a>
            ))}
          </div>
        </div>
        <div className='w-[80vw] h-[1px] bg-black opacity-50 mb-8'></div>
      </div>
    </div>
  );
};


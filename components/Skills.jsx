'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import CustomEase from 'gsap/CustomEase';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Skills.css';
import Skillss from '@/assets/Skills.svg'
import Image from 'next/image';
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  // {
  //   category: "Gen-AI/ML",
  //   skills: [
  //     { name: 'langchain', icon: 'langchain' },
  //     { name: 'gemini', icon: 'gemini' },
  //   ]
  // },
  {
    category: "Programming Languages",
    skills: [
      { name: 'javascript', icon: 'js' },
      { name: 'typescript', icon: 'ts' },
      { name: 'python', icon: 'py' },
      { name: 'cpp', icon: 'cpp' },
      { name: 'c', icon: 'c' },
      { name: 'go', icon: 'go' },
      { name: 'java', icon: 'java' }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: 'fastapi', icon: 'fastapi' },
      { name: 'express', icon: 'express' },
      { name: 'nodejs', icon: 'nodejs' },
      { name: 'go', icon: 'go' },
      {
        name: 'nextjs', icon: 'nextjs'
      }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: 'react', icon: 'react' },
      { name: 'nextjs', icon: 'nextjs' },
      { name: 'redux', icon: 'redux' },
      // { name: 'gsap', icon: 'gsap' },
      { name: 'threejs', icon: 'threejs' },
      { name: 'tailwind', icon: 'tailwind' },
      { name: 'html', icon: 'html' },
      { name: 'css', icon: 'css' },
      { name: 'sass', icon: 'sass' },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: 'postgresql', icon: 'postgres' },
      { name: 'supabase', icon: 'supabase' },
      { name: 'mongodb', icon: 'mongodb' },
      { name: 'mysql', icon: 'mysql' },

      { name: 'sqlite', icon: 'sqlite' },

    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: 'docker', icon: 'docker' },
      { name: 'nginx', icon: 'nginx' },
      { name: 'gcp', icon: 'gcp' },
      { name: 'vercel', icon: 'vercel' },
      { name: 'githubactions', icon: 'githubactions' },
      { name: 'kubernetes', icon: 'kubernetes' },
    ]
  },
  {
    category: "Design Tools",
    skills: [
      { name: 'figma', icon: 'figma' },
      { name: 'photoshop', icon: 'photoshop' },
      { name: 'illustrator', icon: 'illustrator' },
      {
        name: 'blender',
        icon: 'blender'
      }
    ]
  }
];

export default function Skills() {
  useEffect(() => {
    let divElement = document.querySelector(".skills-container");

    let elemHeight = divElement.offsetHeight;
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
        { opacity: 1, y: -300, duration: 6, ease: CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1") },
        { opacity: 0, y: elemHeight - 500, duration: 6, ease: CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1") }

      )

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
    <div className="skills-container flex block items-center py-2 justify-center content-center h-auto max-[850px]:h-auto font">
      <div className='absolute z-0 w-[100vw] h-[100%] left-0 SkillImage '>
        <Image
          src={Skillss}
          alt='skills'
          style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'right top' }}
        />
      </div>
      <div className="skill-sections my-[10vw]">
        {skillsData.map((section, index) => (
          <div key={index}>
            <div className='w-[80vw] h-[1px] bg-black opacity-50 mb-8'></div>
            <div className="skill-section">
              <h2>{section.category}</h2>
              <div className="skills-grid">
                {section.skills.map((skill) => (
                  <a key={skill.name} href={`https://skillicons.dev`} target="_blank" rel="noopener noreferrer">
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                    />
                  </a>
                ))}
              </div>
            </div>

          </div>
        ))}
        <div className='w-[80vw] h-[1px] bg-black opacity-50 mb-8'></div>
      </div>
    </div>
  );
};

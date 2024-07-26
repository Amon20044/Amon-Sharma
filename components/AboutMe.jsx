'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutMee from '@/assets/AboutMe.svg';
import './AboutMe.css';
import Image from 'next/image';
import about from '@/assets/about.svg';
import amon from '@/assets/amon.jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe  ()  {
  useEffect(() => {
    const startDesktop = 'top 105% center';
    const startMobile = 'top 130% center';

    // GSAP ScrollTrigger for parallax effect with an intermediate frame
    const blockcAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.blockc',
        start: window.innerWidth <= 850 ? startMobile : startDesktop,
        end: '+=500',
        scrub: true,
        onUpdate: (self) => console.log("progress:", self.progress),
      },
    });

    blockcAnimation
      .fromTo(
        '.blockc',
        { opacity: 0, y: 600 },
        { opacity: .7, y: 250, duration: 0.2 }
      )
      .to('.blockc', { opacity: 1, y: 0, duration: 0.6 });

    const designAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.design',
        start: window.innerWidth <= 850 ? startMobile : startDesktop,
        end: '+=200',
        scrub: true,
      },
    });

    designAnimation
      .fromTo(
        '.design',
        { opacity: 0.2, y: 400 },
        { opacity: 1, y: 200, duration: .4 }
      );

    // Cleanup ScrollTrigger instances on component unmount
    return () => {
      blockcAnimation.scrollTrigger.kill();
      blockcAnimation.kill();
      designAnimation.scrollTrigger.kill();
      designAnimation.kill();
    };
  }, []);

  return (
    <div className=' relative w-screen h-auto max-[850px]:h-auto overflow-hidden py-4 bg-black mg-20 flex flex-row max-[850px]:flex-col overflow-hidden '>
      <div className='w-[15vw] h-[140vh] top-5 flex items-center content-center max-[850px]:w-screen max-[850px]:h-[15vh]'>
        <Image
          src={AboutMee}
          alt={'aboutMe'}
          className=' max-[850px]:rotate-90 max-[850px]:scale-50 translate-x-[2vw] max-[850px]:translate-x-[40vw] max-[750px]:translate-x-[35vw] max-[400px]:translate-x-[30vw]'
        />
      </div>
      <div className='blockc w-[85vw] h-full max-[850px]:w-screen max-[850px]:h-[85%] color z-10 max-[850px]:ml-2 max-[850px]:mr-3'>
        <div className='flex flex-col justify-center items-center w-[100%] h-[100%] pr-[15vw] pl-[10vw] '>
          <div className='z-20 relative h-[50vh] w-[40vh] rounded-2xl my-5 '>
            <Image
              src={amon}
              alt='Amon'
              objectPosition='right top'
              className='rounded-2xl '
            />
          </div>
          <div className='h-[40%] w-full flex items-center justify-center flex-col my-5'>
            <p className='text-[4rem] leading-none max-[850px]:text-[3rem] font-extralight'>
              <span className='first font-semibold'>You</span> can call me Creative <i className='font-bold'>Sharma’ji or D-Zyner</i>.
            </p>
          </div>
          <div className='h-[60%] w-[100%] flex flex-col items-center justify-around my-5'>
          <div className='w-full h-[2px] bgcolor my-5'></div>
            <p className='text-[1.35rem] leading-snug  font-light max-[850px]:text-[1.1rem] my-5 font-extralight'>
              <span className='first'>I</span> am <span className='bg-[#D9FF50] text-[#2600AF] font-bold'>Amon Sharma</span> from Vadodara currently pursuing B.Tech CSE in <span className='bg-[#2600AF] text-[#D9FF50] font-bold'>IIIT Vadodara.</span> 
            </p>
            <div className='w-full h-[.1px] bgcolor my-5'></div>
            <div className='text-[1.35rem] leading-snug font-light max-[850px]:text-[1.1rem] my-5 font-extralight'>
              <span className='font-bold text-[2rem]'><span className='first'>Y</span>ou</span> can call me <span className='first font-bold'>Dzyno (or D-Zyner) </span>, not Dino because I am too old from my skills and young from my age and fitness. Jokes aside, I am a <span className='font-bold'><i>Techy</i></span>, <span className='font-bold'><i>Sleeky</i></span>, <span className='font-bold'><i>Visual</i></span>, <span className='font-bold'><i>Market</i></span>, <span className='font-bold'><i>Creation lover</i></span>. I love to create epic stories for your products, whether it's <span className='font-bold'><i>visually</i></span>, through <span className='font-bold'><i>video creation</i></span>, or as a <span className='font-bold'><i>content creator</i></span> for your next successful project. With expertise in <span className='font-bold'><i>Frontend Development</i></span>, <span className='font-bold'><i>UI/UX</i></span>, <span className='font-bold'><i>Graphics Design</i></span>, <span className='font-bold'><i>Marketing</i></span>, and <span className='font-bold'><i>Content Creation</i></span>, I can help bring your vision to life. <span className='bg-[#D9FF50] text-[#2600AF] font-bold'> Let's collaborate </span> and make your brand stand out in the <span className='font-black'>market!</span> 
            </div>
            <div className='w-full h-[2px] bgcolor my-5'></div>
            <div className='design h-[65vw] w-[44vw] absolute translate-y-[0vh] -z-10 max-[850px]:translate-y-[50vh] max-[850px]:h-[55vh] max-[850px]:w-[100vw] right-0 top-0'>
          <Image
            src={about}
            alt="Amon Sharma"
            fill={true}
            objectFit="contain"
            objectPosition="right"
            className='w-[50vw]'
          />
        </div>
          </div>

        </div>


      </div>

    </div>
  );
};


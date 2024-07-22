'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutMee from '@/assets/AboutMe.svg';
import './AboutMe.css';
import Image from "next/legacy/image";
import about from '@/assets/about.svg';
import amon from '@/assets/amon.jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe  ()  {
  useEffect(() => {
    const startDesktop = 'top 85% center';
    const startMobile = 'top 130% center';

    // GSAP ScrollTrigger for parallax effect with an intermediate frame
    const blockcAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.blockc',
        start: window.innerWidth <= 850 ? startMobile : startDesktop,
        end: '+=500',
        scrub: true,
      },
    });

    blockcAnimation
      .fromTo(
        '.blockc',
        { opacity: 0, y: 600 },
        { opacity: .7, y: 250, duration: 0.2 }
      )
      .to('.blockc', { opacity: 1, y: -50, duration: 0.6 });

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
    <div className='w-screen h-[200vh] overflow-hidden bg-black mg-20 flex flex-row max-[850px]:flex-col overflow-hidden '>
      <div className='w-[15vw] h-full top-5 flex flex-1 items-center content-center max-[850px]:w-screen max-[850px]:h-[15%]'>
        <Image
          src={AboutMee}
          alt={'aboutMe'}
          className=' max-[850px]:rotate-90 max-[850px]:scale-50 translate-x-[2vw] max-[850px]:translate-x-[40vw] max-[750px]:translate-x-[35vw] max-[400px]:translate-x-[30vw]'
        />
      </div>
      <div className='blockc w-[85vw] h-full max-[850px]:w-screen max-[850px]:h-[85%] color z-10 max-[850px]:ml-2 max-[850px]:mr-3'>
        <div className='flex flex-col justify-center w-[100%] h-[100%] pr-[15vw] pl-[10vw] max-[850px]:px-[3vw]'>
          <div className='z-20 relative h-[50vh] w-[40vh] rounded-2xl my-5'>
            <Image
              src={amon}
              alt='Amon'
              objectPosition='right top'
              className='rounded-2xl '
            />
          </div>
          <div className='h-[40%] w-full flex items-center justify-center flex-col my-5'>
            <p className='text-[4rem] leading-none max-[850px]:text-[3rem]'>
              <span className='first font-semibold'>You</span> can call me Creative <i className='font-bold'>Sharma’ji ka beta</i>.
            </p>
          </div>

          <div className='h-[60%] w-[100%] flex flex-col items-center justify-around my-5'>
            <div className='w-full h-[2px] bgcolor'></div>
            <p className='text-[1.5rem] leading-snug  font-light max-[850px]:text-[1.2rem] my-5'>
              Amon Sharma from Vadodara currently pursuing B.Tech CSE in IIIT Vadodara.
            </p>
            <div className='w-full h-[.1px] bgcolor'></div>
            <div className='text-[1.5rem] leading-snug font-light max-[850px]:text-[1.2rem] my-5'>
              <span className='font-bold'><span className='first'>Y</span>ou</span> can call me <span className='first font-bold'>Dzyno</span>, not Dino because I am too old from my skills and young from my fitness. Jokes aside, I am a <span className='font-bold'><i>Techy</i></span>, <span className='font-bold'><i>Sleeky</i></span>, <span className='font-bold'><i>Visual</i></span>, <span className='font-bold'><i>Market</i></span>, <span className='font-bold'><i>Creation lover</i></span>. I love to create epic stories for your products, whether it's <span className='font-bold'><i>visually</i></span>, through <span className='font-bold'><i>video creation</i></span>, or as a <span className='font-bold'><i>content creator</i></span> for your next successful project. With expertise in <span className='font-bold'><i>Frontend Development</i></span>, <span className='font-bold'><i>UI/UX</i></span>, <span className='font-bold'><i>Graphics Design</i></span>, <span className='font-bold'><i>Marketing</i></span>, and <span className='font-bold'><i>Content Creation</i></span>, I can help bring your vision to life. Let's collaborate and make your brand stand out in the market!
            </div>
            <div className='w-full h-[2px] bgcolor'></div>
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


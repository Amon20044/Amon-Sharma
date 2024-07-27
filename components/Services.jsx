import React, { useEffect } from 'react'
import fe from '@/assets/Services/FrontEnd.svg';
import uu from '@/assets/Services/UIUX.svg';
import gd from '@/assets/Services/GraphicDzyn.svg';
import ms from '@/assets/Services/MyServices.svg';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomEase from 'gsap/CustomEase';
import './Services.css'
gsap.registerPlugin(ScrollTrigger);
gsap.registerEase(CustomEase);

function Services() {
  
  useEffect(()=>{
    const yValue = window.innerWidth >= 850 ? -50 : 100;
    const gd = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: 'top 20%',
        end: 'bottom 80%',
        scrub: true,
      },
    });
    const uu = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: 'top 20%',
        end: 'bottom 80%',
        scrub: true,
      },
    });
    const fe = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: 'top 20%',
        end: 'bottom 80%',
        scrub: true,
      },
    });
    const simg = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: 'top 100%',
        end: 'bottom 0%',
        scrub: true,
      },
    });

    

    gd
    .fromTo(
      '.graphicDesign',
      { opacity: 0, y: 100, duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")},
      { opacity: 1, y: 0, duration:.3, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")}
    
    )
    fe
    .fromTo(
      '.Frontend',
      { opacity: 0, y: 150, duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")},
      { opacity: 1, y: 0, duration:.3, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")}
    
    )
    uu
    .fromTo(
      '.uiux',
      { opacity: 0, y: 200, duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")},
      { opacity: 1, y: 0, duration:.3, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")}
    
    )
    simg
    .fromTo(
      '.serviceimg',
      { opacity: 1, scale:1, y:-150, x:-600 , duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")},
      { opacity: 1, scale:1 ,y: yValue+100 ,x:600 , duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")}
    
    )
    return () => {
      gd.scrollTrigger.kill();
      gd.kill();
      uu.scrollTrigger.kill();
      uu.kill();
      fe.scrollTrigger.kill();
      fe.kill();
      simg.scrollTrigger.kill();
      simg.kill();
    };
  },[]);
  return (<>
    <div className='services w-screen overflow-x-hidden h-auto backgroundPattern pb-40  flex flex-col items-center justify-evenly'>
      <div className='my-20 w-[180vw] h-auto bg-black m-0 p-0 serviceimg'>
      <Image
          src={ms}
          alt={`my Service`}
          className='scale-[200%]'
          
        />
      </div>
      <div className='flex flex-row justify-between h-auto w-[80vw] max-[850px]:flex-col max-[850px]:items-center'>
        <div className='uiux mb-8 mx-8'>
        <Image
          src={uu}
          alt={`UI UX`}
        />
        </div>
        <div className='Frontend mb-8 mx-8'>
        <Image
          src={fe}
          alt={`FrontEnd`}
        />
        </div>
        <div className='graphicDesign mb-8 mx-8'>
        <Image
          src={gd}
          alt={`graphic design`}
        />
        </div>
      </div>
    </div>
  </>
  )
}

export default Services
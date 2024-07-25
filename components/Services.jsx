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

    const gd = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: 'top 0%',
        end: 'bottom 100%',
        scrub: true,
      },
    });
    const uu = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: 'top 40%',
        end: 'bottom 100%',
        scrub: true,
      },
    });
    const fe = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: 'top 0%',
        end: 'bottom 100%',
        scrub: true,
      },
    });
    const simg = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: 'top 40%',
        end: 'bottom 100%',
        scrub: true,
      },
    });

    

    gd
    .fromTo(
      '.graphicDesign',
      { opacity: 0,rotateZ:-20, x: 100, duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")},
      { opacity: 1,rotateZ:0, x: 0, duration:.3, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")}
    
    )
    fe
    .fromTo(
      '.Frontend',
      { opacity: 0, y: 100, duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")},
      { opacity: 1, y: 0, duration:.3, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")}
    
    )
    uu
    .fromTo(
      '.uiux',
      { opacity: 0, rotateZ:20, x: -100, duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")},
      { opacity: 1, rotateZ:0, x: 0, duration:.3, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")}
    
    )

    simg
    .fromTo(
      '.serviceimg',
      { opacity: 1, scale:0, y:-100, duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")},
      { opacity: 1, scale:1, y:50 , duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")}
    
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
    <div className='services w-screen h-auto backgroundPattern overflow-hidden translate-y-[70vh] pb-44 flex flex-col items-center justify-evenly'>
      <div className='my-20 serviceimg'>
      <Image
          src={ms}
          alt={`my Service`}
        />
      </div>
      <div className='flex flex-row justify-between h-auto w-[80vw] max-[850px]:flex-col max-[850px]:items-center'>
        <div className='uiux my-8'>
        <Image
          src={uu}
          alt={`UI UX`}
        />
        </div>
        <div className='Frontend mb-8'>
        <Image
          src={fe}
          alt={`FrontEnd`}
        />
        </div>
        <div className='graphicDesign mb-8'>
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
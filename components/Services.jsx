import React, { useEffect } from 'react'
import fe from '@/assets/Services/FrontEnd.png';
import uu from '@/assets/Services/UIUX.png';
import gd from '@/assets/Services/GraphicDzyn.png';
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
    const yValue = 100;
    const start = window.innerWidth <= 850 ? 'top 0%' : 'top 20%' ;
    const end = window.innerWidth <= 850 ? 'bottom 110%' : 'bottom 80%' ;
    const y = window.innerWidth <= 850 ? 150 : 0;
    const gd = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: start,
        end: end,
        scrub: true,
      },
    });
    const uu = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: start,
        end:  end,
        scrub: true,
      },
    });
    const fe = gsap.timeline({
      scrollTrigger: {
        trigger: '.services',
        start: start,
        end: end,
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
      { opacity: 0, y: y+100, duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")},
      { opacity: 1, y: y, duration:.3, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")}
    
    )
    fe
    .fromTo(
      '.Frontend',
      { opacity: 0, y: y+150, duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")},
      { opacity: 1, y: y, duration:.3, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")}
    
    )
    uu
    .fromTo(
      '.uiux',
      { opacity: 0, y: y+200, duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")},
      { opacity: 1,  y: y, duration:.3, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")}
    
    )
    simg
    .fromTo(
      '.serviceimg',
      { opacity: 1, scale:1, y:-150, x:-600 , duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")},
      { opacity: 1, scale:1 ,y: yValue+100 ,x:100 , duration:.6, ease:CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1")}
    
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
    <div className='services w-screen overflow-hidden h-auto backgroundPattern pb-40  flex flex-col items-center justify-evenly'>
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
          className='scale-[1.7] -translate-x-2'
        />
        </div>
        <div className='Frontend mb-8 mx-8'>
        <Image
          src={fe}
          alt={`FrontEnd`}
          className='scale-[1.7]'
        />
        </div>
        <div className='graphicDesign mb-8 mx-8'>
        <Image
          src={gd}
          alt={`graphic design`}
          className='scale-[1.7]'
        />
        </div>
      </div>
    </div>
  </>
  )
}

export default Services
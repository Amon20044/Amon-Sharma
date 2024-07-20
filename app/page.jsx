
import Navbar from "@/components/navbar";
import Photo from "@/assets/photo.svg";
import Image from "next/image";
import Slider from '@/components/slider';
import AboutMe from '@/components/AboutMe';

export default function Home() {

  return (
    <div className="body noise text-[18px]" >
      <div className="landingpage text-[1rem]">
        <div className="navbar">
          <Navbar/>
        </div>
      
        <div className="image">
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
            <p className="text-[2rem]">
            "<span className='first'>M</span>ake your <span className='first'>Product</span> <span className='first'>C</span>ommunicate <span className='first'>E</span>fficiently"
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

      <div className="AboutPage overflow-x-hidden">
        <AboutMe/>
         
      </div>
    </div>
  );
}

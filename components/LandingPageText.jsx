import Slider from '@/components/slider';

export default function LandingPageText({ winCheck }) {
  return (
    
    <div className="right">
      <div className="upperBlock animate">
        <div className=""></div> {/* Animated circle */}
        <p className="">
          "<span className="first">I</span> <span className='first'>M</span>ake your <span className='first underline'>Product</span> <span className='first'>C</span>ommunicate <span className='first'>E</span>fficiently"
        </p>
      </div>
      <div className="downBlock overflow-hidden">
        <p className='name'>
          <span>A</span>mon <span>S.</span>
        </p>
        <div className='designation'>
          <Slider />
        </div>
      </div>
    </div>
  );
}

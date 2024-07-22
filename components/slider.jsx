"use client";
import './slider.css';
import '@/app/globals.scss';
export default function Slider() {
    const sliderStyle = {
        '--width': '600px',
        '--quantity': '6',
    };

    return (
        <div className="slider" style={sliderStyle}>
            <div className='list'>
                <div className="item" style={{ '--position': 1 }}>
                    <p className='head'><span className='first'>F</span>ront <span className='first'>E</span>nd </p>
                </div>
                <div className="item" style={{ '--position': 2 }}>
                    <p className='head'><span className='first'>U</span>I <span className='first'>U</span>X </p>
                </div>
                <div className="item" style={{ '--position': 3 }}>
                    <p className='head'><span className='first'>W</span>eb <span className='first'>D</span>ev </p>
                </div>
                <div className="item" style={{ '--position': 4 }}>
                    <p className='head'><span className='first'>U</span>I <span className='first'>D</span>ev </p>
                </div>
                <div className="item" style={{ '--position': 5 }}>
                    <p className='head'><span className='first'>G</span>raphic <span className='first'>D</span>esigner </p>
                </div>
                <div className="item" style={{ '--position': 6 }}>
                    <p className='head'><span className='first'>V</span>ideo <span className='first'>E</span>ditor </p>
                </div>
            </div>
        </div>
    );
}

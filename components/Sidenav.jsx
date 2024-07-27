'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './navbar.css';

gsap.registerPlugin(ScrollToPlugin);

export default function SideNav({ isOpen, onClose }) {
    const sideNavRef = useRef(null);
    const circleRef = useRef(null);

    React.useEffect(() => {
        if (isOpen) {
            gsap.timeline()
                .to(circleRef.current, { width: '200%', height: '200%', duration: 0.2, ease: 'power1.inOut' })
                .to(sideNavRef.current, { x: 0, duration: 0.2, ease: 'power1.inOut' }, '-=0.25');
        } else {
            gsap.timeline()
                .to(sideNavRef.current, { x: '100%', duration: 0.2, ease: 'power1.inOut' })
                .to(circleRef.current, { width: 0, height: 0, duration: 0.2, ease: 'power1.inOut' }, '-=0.25');
        }
    }, [isOpen]);

    const handleNavItemClick = (e, target) => {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: target });
        onClose(); // Close the side nav on item click
    };

    return (
        <>
            <div ref={circleRef} className="circle"></div>
            <nav ref={sideNavRef} className="side-nav noise">
                <div className="p-4 flex justify-end">
                    <button onClick={onClose}>Close</button>
                </div>
                <ul className="p-4 mix-blend-difference sidenav ">
                    <li><a href="#" className="block py-2 px-3 text-white rounded hover:bg-slate-800 sidenav" onClick={(e) => handleNavItemClick(e, '.home')}>Home</a></li>
                    <li><a href="#" className="block py-2 px-3 text-white rounded hover:bg-slate-800 sidenav" onClick={(e) => handleNavItemClick(e, '.about')}>About</a></li>
                    <li><a href="#" className="block py-2 px-3 text-white rounded hover:bg-slate-800 sidenav" onClick={(e) => handleNavItemClick(e, '.services')}>Services</a></li>
                    <li><a href="#" className="block py-2 px-3 text-white rounded hover:bg-slate-800 sidenav" onClick={(e) => handleNavItemClick(e, '.projects')}>Projects</a></li>
                    <li><a href="#" className="block py-2 px-3 text-white rounded hover:bg-slate-800 sidenav" onClick={(e) => handleNavItemClick(e, '.contact')}>Contact</a></li>
                </ul>
            </nav>
            {isOpen && <div className="overlay fixed inset-0" onClick={onClose}></div>}
        </>
    );
}

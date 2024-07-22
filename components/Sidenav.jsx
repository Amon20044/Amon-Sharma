'use client';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import './navbar.css';

export function SideNav({ isOpen, onClose }) {
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

    return (
        <>
            <div ref={circleRef} className="circle"></div>
            <nav ref={sideNavRef} className="side-nav noise">
                <div className="p-4 flex justify-end">
                    <button onClick={onClose}>Close</button>
                </div>
                <ul className="p-4">
                    <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Home</a></li>
                    <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">About</a></li>
                    <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Services</a></li>
                    <li><a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Contact</a></li>
                </ul>
            </nav>
            {isOpen && <div className="overlay fixed inset-0" onClick={onClose}></div>}
        </>
    );
}

'use client';

import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Logo from '@/assets/logo.svg'; // Ensure the path is correct
import Image from 'next/image';
import SideNav from './Sidenav';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    const [winCheck, setWinCheck] = useState(false);
    const [toggleNav, setToggleNav] = useState(false);
    const [showHamburger, setShowHamburger] = useState(false);

    useEffect(() => {
        const updateWinCheck = () => {
            setWinCheck(window.innerWidth >= 850);
        };

        const handleScroll = () => {
            const navElement = document.querySelector('.navUp');
            if (navElement) {
                const navHeight = navElement.offsetHeight;
                setShowHamburger(window.scrollY >= navHeight);
            }
        };

        updateWinCheck();
        window.addEventListener('resize', updateWinCheck);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', updateWinCheck);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (showHamburger) {
            gsap.fromTo('.hamburger', { scale: 0 }, { scale: 1, duration: 0.5, ease: 'back.out(1.7)' });
        } else {
            gsap.fromTo('.hamburger', { scale: 1 }, { scale: 0, duration: 0.5, ease: 'back.in(1.7)' });
        }
    }, [showHamburger]);

    const handleBarClick = () => {
        setToggleNav(prevState => !prevState);
    };

    const handleNavItemClick = (e, target) => {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: target });
        setToggleNav(false); // Close the side nav on item click
    };

    return (
        <div className="navUp">
            <nav className="nav">
                <div className="sticky top-0 z-999 p-2">
                    <div className="logo-container top-[4vh] mix-blend-difference z-999">
                        <Image
                            src={Logo}
                            alt="Amon Sharma"
                            height={winCheck ? 50 : 35}
                        />
                    </div>
                </div>
                <div className={`${winCheck ? '' : 'toggle'}`}>
                    <div
                        className={`${winCheck ? '' : 'bars'} ${toggleNav ? 'click' : ''}`}
                        onClick={handleBarClick}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    {winCheck && (
                        <ul className={`nav-list space-x-[4vw] -translate-x-8 ${toggleNav ? 'click' : ''}`}>
                            <li className="nav-item hover:scale-105 transition-all " onClick={(e) => handleNavItemClick(e, '.home')}>Home</li>
                            <li className="nav-item hover:scale-105 transition-all " onClick={(e) => handleNavItemClick(e, '.about')}>About me</li>
                            <li className="nav-item hover:scale-105 transition-all " onClick={(e) => handleNavItemClick(e, '.services')}>Services</li>
                            <li className="nav-item hover:scale-105 transition-all " onClick={(e) => handleNavItemClick(e, '.projects')}>Projects</li>
                            <li className="nav-item hover:scale-105 transition-all " onClick={(e) => handleNavItemClick(e, '.contact')}>Contact Me</li>
                        </ul>
                    )}
                </div>
            </nav>
            <SideNav isOpen={toggleNav} onClose={() => setToggleNav(false)} />
            {showHamburger && (
                <div
                    className="hamburger fixed top-[4vh] right-8 bars flex-col right-[4vw] w-8 h-8 space-y-2 rounded-full mix-blend-difference flex items-center justify-center z-50"
                    onClick={handleBarClick}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

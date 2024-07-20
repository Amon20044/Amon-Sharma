'use client';
import React, { useState } from 'react';
import Logo from "@/assets/logo.svg"; // Adjust the import path as needed
import './navbar.css'; // Import the CSS file
import Image from 'next/image';
import { SideNav } from './SideNav';

export default function Navbar() {
    const [winCheck, setWinCheck] = useState(false);
    const [toggleNav, setToggleNav] = useState(false);

    React.useEffect(() => {
        const updateWinCheck = () => {
            setWinCheck(window.innerWidth >= 850);
        };

        updateWinCheck();
        window.addEventListener('resize', updateWinCheck);
        return () => {
            window.removeEventListener('resize', updateWinCheck);
        };
    }, []);

    function handleBarClick() {
        setToggleNav(!toggleNav);
    }

    return (
        <div className="navUp">
            <nav className="nav">
                <div className="logo-container">
                    <Image
                        src={Logo}
                        alt="Amon Sharma"
                        height={winCheck ? 50 : 35}
                    />
                </div>
                <div className={`${winCheck ? '' : 'toggle'}`}>
                    <div className={`${winCheck ? '' : 'bars'} ${toggleNav ? 'click' : ''}`} onClick={handleBarClick}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    {winCheck && (
                        <ul className={`nav-list ${toggleNav ? 'click' : ''}`}>
                            <li className="nav-item">Home</li>
                            <li className="nav-item">About me</li>
                            <li className="nav-item">Projects</li>
                            <li className="nav-item">Contact Me</li>
                        </ul>
                    )}
                </div>
            </nav>
            <SideNav isOpen={toggleNav} onClose={() => setToggleNav(false)} />
        </div>
    );
}

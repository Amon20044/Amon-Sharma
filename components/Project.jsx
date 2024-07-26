    'use client';
    import './Project.css'
    import { useState } from 'react';
    import Project from './comp/Project';
    import Modal from './comp/Modal';

    const projects = [
    {
        title: "LocAI.ly",
        src: "1.png",
        color: "#606060",
        desc : 'Design & Development',
        url : 'https://www.behance.net/gallery/203578741/LocAIly-Revolutionizing-AI-acclr8ed-Local-Exploration'
    },
    {
        title: "Kreiva X Alfaaz",
        src: "2.png",
        color: "#FFC474",
        desc : 'Design & Development',
        url: 'https://www.behance.net/gallery/202370827/Kreiva-Alfaaz-Retro-Bollywood-Theme-Fest-website'
    },
    {
        title: "Ekaiv Security",
        src: "3.jpg",
        color: "#B0B1C1",
        desc : 'Branding & Graphic Design',
        url: 'https://www.behance.net/gallery/203580147/Ekaiv-Elevating-Security-Services-Logo-and-Branding'
    },
    {
        title: "Cerebro",
        src: "4.jpg",
        color: "#ABD2B8",
        desc : 'Event Graphic Design',
        url: 'https://www.behance.net/gallery/203582175/Cerebro-Technical-Fest'
    },
    {
        title: "Kreiva X Alfaaz",
        src: "5.jpg",
        color: "#FFC474",
        desc : 'Event Graphic Design',
        url: 'https://www.behance.net/gallery/203582757/Kreiva-X-Alfaaz-Cultural-Fest'
    },
    {
        title: "Amon Sharma Mascot",
        src: "6.jpg",
        color: "#A1C6FF",
        desc : 'Masot Graphic Design',
        url: 'https://www.behance.net/gallery/203583521/Amon-Mascot'
    },
    {
        title: "Haramony Living",
        src: "7.jpg",
        color: "#FFEAC2",
        desc : 'Real Estate Graphic Design',
        url: 'https://www.behance.net/gallery/203584649/Harmony-Living-PG-Rental-Services'
    },
    {
        title: "MLH Winner Mascot",
        src: "8.jpg",
        color: "#FFAA5B",
        desc : 'Mascot Graphic Design',
        url: 'https://www.behance.net/gallery/203583829/MLH-Mascot-Winner-1'
    },
    ]

    export default function Home() {

    const [modal, setModal] = useState({active: false, index: 0})

    return (
    <main className={`main`}>
        
        <div className={`bodyy pb-28 `}>
        
        <p className=' pt-28 pb-7 projectf'>Projects</p> 
        {
            projects.map( (project, index) => {
            return <Project index={index} title={project.title} setModal={setModal} key={index} desc={project.desc} url={project.url} src={project.src} color={project.color}/>
            })
        }
        </div>
        <Modal modal={modal} projects={projects}/>
    </main>
    )
    }
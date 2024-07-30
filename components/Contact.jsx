"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './Footer';
import my from '../assets/Services/my.svg';
import './Contact.css'; // Ensure your CSS file is imported correctly
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [lineWidth, setLineWidth] = useState(0);
  const [mail, setMail] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    services: '',
    message: ''
  });

  const formFields = [
    { id: 'name', label: "What’s Your Name?", placeholder: 'John Doe', type: 'text' },
    { id: 'email', label: "What’s Your Email?", placeholder: 'John@Doe.com', type: 'email' },
    { id: 'organization', label: "What's the name of your organization?", placeholder: 'John Doe Company', type: 'text' },
    { id: 'services', label: "What services are you looking for?", placeholder: 'I need Design, Development...', type: 'text' },
    { id: 'message', label: "Your message", placeholder: 'I need Your Help with...', type: 'textarea' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailTemplate = `
      Dear Amon,

      I hope this message finds you well. Below are the details of my inquiry:

      Name: ${formData.name}
      Email: ${formData.email}
      Organization: ${formData.organization}
      Services Required: ${formData.services}

      Message:
      ${formData.message}

      Thank you for your attention to this matter. I look forward to your response.

      Best regards,
      ${formData.name}
    `;
    setMail(mailTemplate);
    console.log(mailTemplate);
  };

  useEffect(() => {
    let animationValue = { value: 0 };

    gsap.to(animationValue, {
      value: 120,
      scrollTrigger: {
        trigger: ".contact",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      onUpdate: () => {
        setLineWidth(animationValue.value);
      }
    });
  }, []);

  return (
    <div className='w-screen contact'>
      <div className='w-screen bg-black h-auto flex flex-row max-[850px]:flex-col max-[850px]:px-5 py-8'>
        <div className='w-full h-full bg-black text-white flex flex-col justify-center max-[850px]:px-0 pl-36 pr-12'>
          <div className='mb-20'>
            <Image
              src={my} // Replace with the actual path to your image
              alt="Profile"
            />
          </div>
          
          <div className='line h-1 mb-10' style={{ width: `${lineWidth}%` }}></div>
          <div className='space-y-8'>
            <Link href="mailto:amonsharma2000@gmail.com" legacyBehavior>
              <a className='block text-lg overflow-hidden bg-[var(--personaColor)] text-[var(--purpleColor)] font-normal border p-3 hover:bg-[var(--primaryColor)] hover:text-[black] transition-all'>amonsharma2000@gmail.com</a>
            </Link>
            <Link href="tel:+918200962735" legacyBehavior>
              <a className='block text-lg overflow-hidden bg-[var(--personaColor)] text-[var(--purpleColor)] font-normal border p-3 hover:bg-[var(--primaryColor)] hover:text-[black] transition-all'>+91 8200 9627 35</a>
            </Link>
          </div>
        </div>
        <div className='mt-0 max-[850px]:mt-20 w-full h-full bg-black text-[var(--primaryColor)] max-[850px]:px-0 pr-36 pl-12 flex flex-col justify-center'>
          <form onSubmit={handleSubmit} className='space-y-4 form'>
            {formFields.map((field, index) => (
              <div className='form-group space-x-4 items-start justify-start' key={index}>
                <div className='opacity-50'>{index+1}</div>
                <div>
                  <label htmlFor={field.id}>{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className='w-full p-2 input-field text-2xl'
                      placeholder={field.placeholder}
                      required
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className='w-full p-2 input-field'
                      placeholder={field.placeholder}
                      required
                    />
                  )}
                </div>
              </div>
            ))}
            <button type="submit" className='bg-[var(--personaColor)] text-[var(--purpleColor)] font-black p-2 max-[850px]:px-2 hover:bg-[var(--primaryColor)] hover:text-[black] hover:scale-110 transition-all'>Submit</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import service from '../assets/service.avif';

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
    );
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className='min-h-screen flex flex-col gap-4 md:flex-row px-6 md:px-20 py-16 bg-gray-900'
    >
      <div
        ref={textRef}
        className='w-full md:w-1/2 bg-gray-800 p-6 rounded-lg mb-6 md:mb-0'
      >
        <h2 className='text-red-500 text-2xl mb-4'>How It Started</h2>
        <h1 className='text-white text-3xl md:text-4xl font-bold mb-4'>
          Our Dream is <br /> Global Service <br /> Transformation
        </h1>
        <p className='text-gray-300 text-lg'>
          The on-demand platform idea is used to provide personalized home services that comprise a long list of tasks including home cleaning service, home repair services, lawn care, and tech troubleshooting among others. Because a manual procedure will take a lot of time as you have to call a plumber, for instance, and wait for one’s arrival and even after paying him for his visit, you are not sure whether the problem has been solved properly or not. On-demand home services are making its place in the market due to the broad spectrum of opportunities along with reliability it provides to both the companies and the users. ODTap offers a mobile app for home service business owner, service provider and your customers to easily manage operations on one platform.
        </p>
      </div>
      <div
        ref={statsRef}
        className='w-full md:w-1/2 bg-gray-800 p-6 rounded-lg'
      >
        <img src={service} alt="Service" className='rounded-xl w-full mb-6' />
        <div className='grid grid-cols-2 gap-6 text-white'>
          <div className='border-2 rounded-xl bg-slate-900 p-4 text-center'>
            <div className='text-4xl font-bold'>2.5</div>
            <div className='text-xl mt-2'>Years Experience</div>
          </div>
          <div className='border-2 rounded-xl bg-slate-900 p-4 text-center'>
            <div className='text-4xl font-bold'>50K</div>
            <div className='text-xl mt-2'>Service Delivered</div>
          </div>
          <div className='border-2 rounded-xl bg-slate-900 p-4 text-center'>
            <div className='text-4xl font-bold'>30K+</div>
            <div className='text-xl mt-2'>Positive Reviews</div>
          </div>
          <div className='border-2 rounded-xl bg-slate-900 p-4 text-center'>
            <div className='text-4xl font-bold'>4.8</div>
            <div className='text-xl mt-2'>Service Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

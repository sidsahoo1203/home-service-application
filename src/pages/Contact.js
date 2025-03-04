import React, { useEffect, useRef } from "react";
import contact from '../assets/contact.jpeg';
import service from '../assets/service.jpeg';
import gsap from 'gsap';

const Contact = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      imagesRef.current.children,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.3, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="h-screen flex items-center justify-center" ref={sectionRef}>
      <div className="flex flex-row gap-4 justify-center w-full max-w-5xl" ref={imagesRef}>
        <div className="flex flex-col items-center w-1/2">
          <img src={contact} className="w-[350px] h-60 rounded-lg" />
          <h1 className="text-richblack-100 text-center text-2xl mt-5">Need help with our service <br /> or order?</h1>
          <h2 className="text-richblack-100 text-center text-xl mt-5 mb-3">Find answers about our services,<br /> check your order status and more.</h2>
          <button className="text-white bg-red-600 p-3 px-[95px] font-medium rounded-lg mt-4">CHAT WITH SUPPORT</button>
          <div><br /></div>
          <button className="text-black bg-white p-3 px-[81px] font-medium rounded-lg">TALK TO OUR EXECUTIVE</button>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <img src={service} className="w-[350px] h-60 rounded-lg" />
          <h1 className="text-richblack-100 text-center text-2xl mt-5">Need help with our service <br /> or order?</h1>
          <h2 className="text-richblack-100 text-center text-xl mt-5 mb-3">Find answers about our services,<br /> check your order status and more.</h2>
          <button className="text-white bg-red-600 p-3 px-[95px] font-medium rounded-lg mt-4">CHAT WITH SUPPORT</button>
          <div><br /></div>
          <button className="text-black bg-white p-3 px-[81px] font-medium rounded-lg">TALK TO OUR EXECUTIVE</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

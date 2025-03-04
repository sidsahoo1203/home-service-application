import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import gsap from 'gsap';
import Footer from "./Footer";

const ProductCard = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const product = products.find((prod) => prod.id === parseInt(id));

  // Refs for GSAP animations
  const productCardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(productCardRef.current, 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    );
    gsap.fromTo(imageRef.current, 
      { x: -100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.3 }
    );
    gsap.fromTo(contentRef.current, 
      { x: 100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.6 }
    );
  }, []);

  const handleBookService = () => {
    setShowPopup(true);
    gsap.fromTo(popupRef.current,
      { opacity: 0, y: -50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" }
    );
    setTimeout(() => {
      gsap.to(popupRef.current, 
        { opacity: 0, y: -50, scale: 0.8, duration: 0.6, ease: "power2.in", onComplete: () => navigate('/dashboard') }
      );
    }, 2000); // Show the popup for 2 seconds
  };

  if (!product) {
    return <h1 className="text-white text-center text-3xl mt-10">Product not found</h1>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-richblack-900 via-gray-900 to-richblack-800 text-white flex flex-col items-center py-10 px-4">
      {showPopup && (
        <div ref={popupRef} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white text-black p-8 rounded-lg shadow-xl border border-gray-300 max-w-sm mx-4 relative">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Service Booked Successfully!</h2>
            <p>Your service has been booked. You will be redirected shortly.</p>
            <button
              onClick={() => setShowPopup(false)} 
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              aria-label="Close"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      )}
      <div ref={productCardRef} className="w-full max-w-5xl border-2 border-richblack-700 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 ease-in-out hover:shadow-2xl">
        <div className="flex flex-col md:flex-row items-center p-10">
          <img
            ref={imageRef}
            src={product.image}
            className="w-full md:w-1/2 h-[400px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
            alt={product.name}
          />
          <div ref={contentRef} className="md:ml-10 mt-6 md:mt-0 w-full md:w-1/2 text-left">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{product.name}</h1>
            <p className="text-lg mb-6 text-richblack-300">{product.description}</p>
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, index) => (
                <svg 
                  key={index} 
                  className={`w-6 h-6 ${product.rating > index ? 'text-yellow-400' : 'text-gray-400'}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  aria-hidden="true"
                >
                  <path d="M12 .587l3.668 7.431 8.19 1.188-5.924 5.778 1.396 8.14-7.43-3.896-7.43 3.896 1.396-8.14-5.924-5.778 8.19-1.188L12 .587z"/>
                </svg>
              ))}
            </div>
            <h3 className="text-xl text-green-400 mb-6">Price: ${product.price}</h3>
            <p className="text-md text-richblack-400 mb-6">
              {product.details || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            </p>
            <div className="flex justify-between gap-4 mb-6">
              <button 
                onClick={handleBookService} 
                className="bg-yellow-500 hover:bg-yellow-600 text-richblack-900 font-bold py-3 px-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Book Service
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105" onClick={() => navigate('/dashboard')}>
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
        <div className="p-10 bg-richblack-800 border-t-2 border-richblack-700">
          <h2 className="text-2xl font-bold mb-4 text-gradient">More about this product</h2>
          <p className="text-richblack-400 leading-relaxed">
            This {product.name.toLowerCase()} is designed to make your life easier and more secure. With top-notch features, this product is ideal for those looking for quality and reliability. Whether you're enhancing your home or upgrading your lifestyle, the {product.name.toLowerCase()} offers a blend of innovation and simplicity that fits perfectly in any environment.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCard;

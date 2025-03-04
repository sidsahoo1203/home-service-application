import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import Footer from '../components/Footer';
import { gsap } from 'gsap';

const Dashboard = () => {
  const { products } = useContext(ProductContext);

  const heroRef = useRef(null);
  const productRefs = useRef([]);

  useEffect(() => {
    // Hero section animation
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Product card animations
    gsap.fromTo(productRefs.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  const clickHandler = () => {
    console.log("Product clicked");
  };

  return (
    <div className='bg-richblack-900 min-h-screen flex flex-col'>
      {/* Hero Section */}
      <div 
        className='hero-section flex flex-col items-center py-16 text-center'
        ref={heroRef}
      >
        <h1 className='text-richblack-100 text-5xl font-semibold mb-8'>
          New and Noteworthy
        </h1>
        <p className='text-richblack-300 text-lg max-w-2xl'>
          Discover the latest and greatest services we have to offer. Handpicked for you to ensure top quality and perfect services.
        </p>
      </div>

      {/* Product Section */}
      <div className='flex-grow px-[135px] mb-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {products.map((product, index) => (
            <Link 
              to={`/productPage/${product.id}`} 
              key={product.id}
              ref={el => productRefs.current[index] = el}
            >
              <div 
                className='bg-richblack-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer'
                onClick={clickHandler}
              >
                <img
                  src={product.image}
                  className='w-full h-[230px] object-cover rounded-lg mb-4'
                  alt={product.name}
                />
                <h1 className='text-richblack-100 text-2xl font-medium mb-2'>
                  {product.name}
                </h1>
                <p className='text-richblack-400'>{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;

import React, { createContext, useState } from 'react';

import image1 from '../assets/image1.avif';
import nn1 from '../assets/n&n1.jpg';
import nn2 from '../assets/n&n2.jpeg';
import nn3 from '../assets/n&n3.jpeg';
import mbs1 from '../assets/mbs1.jpeg';
import mbs2 from '../assets/mbs2.jpeg';
import mbs3 from '../assets/mbs3.jpeg';
import mbs4 from '../assets/mbs4.jpeg';
import sw1 from '../assets/sw1.jpeg';
import sw3 from '../assets/sw3.jpeg';
import qhr1 from '../assets/qhr1.jpeg';
import qhr2 from '../assets/qhr2.jpeg';
import qhr3 from '../assets/qhr3.jpeg';
import qhr4 from '../assets/qhr4.jpeg';
import ar2 from '../assets/ar2.jpeg';
import ar3 from '../assets/ar3.jpeg';
import ar4 from '../assets/ar4.jpeg';
import mm1 from '../assets/mm1.jpeg';
import mm2 from '../assets/mm2.jpeg';
import g1 from '../assets/g1.jpeg';
import m2 from '../assets/m2.jpeg';
import m3 from '../assets/m3.jpeg';
import m4 from '../assets/m4.jpeg';

// Create the context
export const ProductContext = createContext();

// Create the provider component
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Smart Locks',
            image: image1,
            description: 'Advanced security and easy installation.',
            category: 'New and Noteworthy',
            price: 199.99,
            rating: 4.5,
            details: 'Secure your home with the latest smart locks. These locks offer enhanced security with smart technology, enabling remote access via your smartphone.'
        },
        {
            id: 2,
            name: 'Water Purifier',
            image: nn1,
            description: 'Removes impurities, maintains minerals.',
            category: 'New and Noteworthy',
            price: 89.99,
            rating: 4.0,
            details: 'Ensure clean drinking water with our water purifiers featuring advanced filtration technology.'
        },
        {
            id: 3,
            name: 'Home Painting',
            image: nn2,
            description: 'Flawless finish with vibrant colors.',
            category: 'New and Noteworthy',
            price: 299.99,
            rating: 4.8,
            details: 'Revamp your home with professional painting services. Choose from a variety of vibrant colors to match your style.'
        },
        {
            id: 4,
            name: 'Furniture Assembly',
            image: nn3,
            description: 'Quick, hassle-free professional assembly.',
            category: 'New and Noteworthy',
            price: 149.99,
            rating: 4.2,
            details: 'Get your furniture assembled by experts. No hassle, just a perfectly set up room.'
        },
        {
            id: 5,
            name: 'Bathroom Cleaning',
            image: mbs1,
            description: 'Thorough cleaning for spotless bathroom.',
            category: 'Most Booked Services',
            price: 59.99,
            rating: 4.7,
            details: 'Deep clean your bathroom for a fresh start. Perfect for ensuring spotless tiles, mirrors, and fixtures.'
        },
        {
            id: 6,
            name: 'Sofa Cleaning',
            image: mbs2,
            description: 'Safe, professional upholstery cleaning.',
            category: 'Most Booked Services',
            price: 79.99,
            rating: 4.6,
            details: 'Get your sofa cleaned and refreshed, removing dirt, stains, and odors.'
        },
        {
            id: 7,
            name: 'AC Service',
            image: mbs3,
            description: 'Complete maintenance and coolant refill.',
            category: 'Most Booked Services',
            price: 99.99,
            rating: 4.5,
            details: 'Ensure your AC is running efficiently with our complete service, including cleaning and coolant refilling.'
        },
        {
            id: 8,
            name: 'Pedicure',
            image: mbs4,
            description: 'Foot care with relaxing massage.',
            category: 'Most Booked Services',
            price: 29.99,
            rating: 4.3,
            details: 'Pamper your feet with our professional pedicure services.'
        },
        {
            id: 9,
            name: 'Waxing',
            image: sw1,
            description: 'Long-lasting, smooth waxing results.',
            category: 'Salon for Women',
            price: 39.99,
            rating: 4.4,
            details: 'Smooth and hair-free with our professional waxing services for both legs and arms.'
        },
        {
            id: 10,
            name: 'Facial & Cleanup',
            image: sw3,
            description: 'Hydration and deep cleansing treatment.',
            category: 'Salon for Women',
            price: 49.99,
            rating: 4.7,
            details: 'Rejuvenate your skin with our facial treatments designed to cleanse and hydrate.'
        },
        {
            id: 11,
            name: 'Tap Repair',
            image: qhr1,
            description: 'Leak-free taps, professional service.',
            category: 'Quick Home Repairs',
            price: 49.99,
            rating: 4.6,
            details: 'Fix leaky taps quickly with our expert repair service.'
        },
        {
            id: 12,
            name: 'Fan Repair',
            image: qhr2,
            description: 'Efficient fan repairs, all models.',
            category: 'Quick Home Repairs',
            price: 39.99,
            rating: 4.4,
            details: 'Get your ceiling or exhaust fans repaired and running smoothly.'
        },
        {
            id: 13,
            name: 'Switch/Socket Replacement',
            image: qhr3,
            description: 'Safe, modern electrical replacements.',
            category: 'Quick Home Repairs',
            price: 29.99,
            rating: 4.5,
            details: 'Replace old switches and sockets with new ones for improved safety.'
        },
        {
            id: 14,
            name: 'Drill & Hang',
            image: qhr4,
            description: 'Precise hanging for perfect alignment.',
            category: 'Quick Home Repairs',
            price: 59.99,
            rating: 4.3,
            details: 'Professional drilling and hanging services for shelves, frames, or curtains.'
        },
        {
            id: 15,
            name: 'AC Repair',
            image: mbs3,
            description: 'Comprehensive AC diagnostics and repair.',
            category: 'AC & Appliance Repair',
            price: 129.99,
            rating: 4.6,
            details: 'Efficient AC repair service to fix leaks, replace parts, and restore cooling.'
        },
        {
            id: 16,
            name: 'Washing Machine Repair',
            image: ar2,
            description: 'Quick fixes for washing machines.',
            category: 'AC & Appliance Repair',
            price: 99.99,
            rating: 4.4,
            details: 'Keep your washing machine in top shape with our professional repair services.'
        },
        {
            id: 17,
            name: 'Refrigerator Repair',
            image: ar3,
            description: 'Expert repairs for cooling issues.',
            category: 'AC & Appliance Repair',
            price: 149.99,
            rating: 4.5,
            details: 'Get your refrigerator repaired by experts and keep your food fresh.'
        },
        {
            id: 18,
            name: 'Microwave Repair',
            image: ar4,
            description: 'Fixes heating, controls, and more.',
            category: 'AC & Appliance Repair',
            price: 89.99,
            rating: 4.3,
            details: 'Fast and reliable microwave repair services for all brands.'
        },
        {
            id: 19,
            name: 'Pain Relief Massage',
            image: mm2,
            description: 'Deep tissue techniques for relief.',
            category: 'Massage for Men',
            price: 69.99,
            rating: 4.7,
            details: 'Relieve pain and stress with our therapeutic massage services.'
        },
        {
            id: 20,
            name: 'Stress Relief Massage',
            image: mm1,
            description: 'Calming techniques for total relaxation.',
            category: 'Massage for Men',
            price: 59.99,
            rating: 4.6,
            details: 'Get rid of stress with our relaxing full-body massage.'
        },
        {
            id: 21,
            name: 'Haircut Grooming',
            image: g1,
            description: 'Sharp haircuts from expert barbers.',
            category: 'Salon for Kids & Men',
            price: 24.99,
            rating: 4.4,
            details: 'Stylish and professional haircuts for men and kids.'
        },
        {
            id: 22,
            name: 'Facial & Cleanup',
            image: m2,
            description: 'Deep cleaning and hydrating facial.',
            category: 'Salon for Kids & Men',
            price: 34.99,
            rating: 4.5,
            details: 'Facial and cleanup services for men, designed to cleanse and hydrate your skin.'
        },
        {
            id: 23,
            name: 'Pedicure & Manicure',
            image: m3,
            description: 'Nail care with relaxing massage.',
            category: 'Salon for Kids & Men',
            price: 44.99,
            rating: 4.6,
            details: 'Manicure and pedicure services for men to keep your hands and feet looking their best.'
        },
        {
            id: 24,
            name: 'Hair Color & Hair Spa',
            image: m4,
            description: 'Vibrant color and nourishing spa.',
            category: 'Salon for Kids & Men',
            price: 69.99,
            rating: 4.7,
            details: 'Professional hair color and spa services to nourish and style your hair.'
        }
    ]);
    
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

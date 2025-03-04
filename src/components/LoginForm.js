import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { gsap } from 'gsap';

const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", 
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    // Refs for GSAP animations
    const formRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const forgotPasswordRef = useRef(null);
    const submitButtonRef = useRef(null);

    useEffect(() => {
        // GSAP animations
        gsap.fromTo(
            formRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
        );
        gsap.fromTo(
            emailRef.current,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: 'power2.out' }
        );
        gsap.fromTo(
            passwordRef.current,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 1, delay: 0.4, ease: 'power2.out' }
        );
        gsap.fromTo(
            forgotPasswordRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power2.out' }
        );
        gsap.fromTo(
            submitButtonRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 1, delay: 0.8, ease: 'power2.out' }
        );
    }, []);

    function changeHandler(event) {
        setFormData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Welcome");
        console.log("Printing the formData ");
        console.log(formData);
        navigate("/dashboard");
    }

    return (
        <form 
            onSubmit={submitHandler}
            ref={formRef}
            className="flex flex-col w-full gap-y-4 mt-6"
        >
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Email Address<sup className='text-pink-200'>*</sup>
                </p>
                <input 
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email address"
                    name="email"
                    ref={emailRef}
                    className='bg-richblack-800 rounded-[0.5rem] text-black w-full p-[12px]'
                />
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Password<sup className='text-pink-200'>*</sup>
                </p>
                <input 
                    required
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    name="password"
                    ref={passwordRef}
                    className='bg-richblack-800 rounded-[0.5rem] text-black w-full p-[12px]'
                />
                <span 
                    className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowPassword(prev => !prev)}
                >
                    {showPassword ? 
                        <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> 
                        : 
                        <AiOutlineEye fontSize={24} fill='#AFB2BF' />
                    }
                </span>

                <Link to="#" ref={forgotPasswordRef}>
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button 
                ref={submitButtonRef}
                className='bg-yellow-500 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'
            >
                Sign In
            </button>
        </form>
    );
}

export default LoginForm;

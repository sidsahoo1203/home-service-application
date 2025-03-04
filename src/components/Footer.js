import React from "react";
import { FiTwitter } from "react-icons/fi";
import logo from "../assets/logo-no-background.png"
import { TiSocialFacebookCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import d1 from "../assets/d1.webp"
import d2 from "../assets/d2.webp"


const Footer = () => {
    return(
        <footer className='bg-gray-900 w-full h-[480px]'>
        <div className='ml-[135px] pt-3'>
          <img src={logo} alt="Logo" width={170} height={15} loading="lazy" className='mt-10 hover:cursor-pointer' />
        </div>
        <div className='flex flex-row gap-[125px] text-richblack-100 pt-9 mr-[135px]'>
          <div className='ml-[135px]'>
            <h1 className='text-white text-xl'>Company</h1>
            <div className='mt-4 text-md leading-7'>
              <h2 className='hover:cursor-pointer'>About us</h2>
              <h2 className='hover:cursor-pointer'>Terms & Conditions</h2>
              <h2 className='hover:cursor-pointer'>Privacy Policy</h2>
              <h2 className='hover:cursor-pointer'>Anti-discrimination policy</h2>
              <h2 className='hover:cursor-pointer'>HS impact</h2>
              <h2 className='hover:cursor-pointer'>Careers</h2>
            </div>
          </div>

          <div className=''>
            <h1 className='text-white text-xl'>For customers</h1>
            <div className='mt-4 text-md leading-7'>
              <h2 className='hover:cursor-pointer'>HS reviews</h2>
              <h2 className='hover:cursor-pointer'>Categories near you</h2>
              <h2 className='hover:cursor-pointer'>Blog</h2>
              <h2 className='hover:cursor-pointer'>Contact us</h2>
            </div>
          </div>

          <div className=''>
            <h1 className='text-white text-xl'>For partners</h1>
            <div className='mt-4 text-mg leading-7'>
              <h2 className='hover:cursor-pointer'>Register as a professional</h2>
            </div>
          </div>

          <div>
            <h1 className='text-white text-xl'>Social links</h1>
            <div className='mt-4 flex flex-row'>
              <button>
                <FiTwitter className='w-9 h-9 m-1 border-solid hover:scale-105' />
              </button>
              <button>
                <TiSocialFacebookCircular className='w-10 h-10 m-1 hover:scale-105' />
              </button>
              <button>
                <IoLogoInstagram className='w-9 h-9 m-1 hover:scale-105' />
              </button>
              <button>
                <AiOutlineLinkedin className='w-9 h-9 m-1 hover:scale-105' />
              </button>
            </div>
            <div>
              {/* <img src={d1} className='w-[100px] h-[auto] mt-8 rounded-sm hover:scale-105 cursor-pointer' />
              <img src={d2} className='w-[100px] h-[auto] rounded-sm hover:scale-105 cursor-pointer mt-3' /> */}
            </div>
          </div>

        </div>

        <div className='ml-[135px] mr-[135px] text-richblack-100 mt-10'>
          ___________________________________________________________________________________________________________________________________________
        </div>
        <div>
          <h1 className='text-richblack-200 text-md mt-8 ml-[135px]' > © Copyright 2022 Home Service. All rights reserved.</h1>
        </div>
      </footer>
    )
}

export default Footer
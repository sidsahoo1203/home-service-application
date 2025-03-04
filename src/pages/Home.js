import React from 'react'
import cleaner from '../assets/cleaner.jpeg'
import painting from '../assets/painting.jpeg'
import repair from '../assets/repair.webp'
import salon from '../assets/salon.avif'
import electrician from '../assets/electricin.jpeg'
import salonm from '../assets/salonm.jpeg'
import { CiStar } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import massage from '../assets/massage.jpeg'
import cleaning2 from '../assets/cleaning2.jpeg'
import repair2 from '../assets/repair2.webp'
import salon2 from '../assets/salon2.jpeg'


const Home = ({ isLoggedIn }) => {
  return (
    <div className='flex flex-row overflow-hidden'>
      <div>
        <div>
          <h1 className='text-richblack-100 text-4xl h-full ml-[135px] mt-20 tracking-normal '>Home services  at  your  <br />doorstep</h1>
        </div>
        <div className='border-2 w-10/12 ml-[135px] mt-10 rounded-lg'>
          <h1 className='text-richblack-100 text-2xl m-8'>What are you looking for?</h1>
          <div className='grid grid-rows-2 grid-flow-col gap-3 m-8 '>
            <div className='cursor-pointer'>
              <img src={cleaner} width={120} height={60} className='cursor-pointer hover:opacity-70 hover:scale-105 rounded-md' />
              <h1 className='text-richblack-100 text-center mt-2'>Cleaning</h1>
            </div>
            <div className='cursor-pointer'>
              <img src={painting} width={120} height={60} className='cursor-pointer hover:opacity-70 hover:scale-105 rounded-md' />
              <h1 className='text-richblack-100 text-center mt-2'>Painting</h1>
            </div>
            <div>
              <img src={salon} width={120} height={60} className='cursor-pointer hover:opacity-70 hover:scale-105 rounded-md' />
              <h1 className='text-richblack-100 text-center mt-2'>Female Salon</h1>
            </div>
            <div className='cursor-pointer'>
              <img src={salonm} width={120} height={80} className='cursor-pointer hover:opacity-70 hover:scale-105 rounded-md' />
              <h1 className='text-richblack-100 text-center mt-2'>Male Salon</h1>
            </div>
            <div className='cursor-pointer'>
              <img src={repair} width={120} height={60} className='cursor-pointer hover:opacity-70 hover:scale-105 rounded-md' />
              <h1 className='text-richblack-100 text-center mt-2'>Repair</h1>
            </div>
            <div className='cursor-pointer'>
              <img src={electrician} width={120} height={60} className='cursor-pointer hover:opacity-70 hover:scale-105 rounded-md' />
              <h1 className='text-richblack-100 text-center mt-2'>Electrician</h1>
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-5 ml-[135px] mt-10 mb-10'>
          <div className='flex flex-row gap-3'>
            <div>
              <CiStar className='text-richblack-100 text-4xl' />
            </div>
            <div>
              <h1 className='text-richblack-100 text-2xl'>4.8</h1>
              <h2 className='text-richblack-100'>Service Rating</h2>
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <div>
              <IoPeopleOutline className='text-richblack-100 text-4xl' />
            </div>
            <div>
              <h1 className='text-richblack-100 text-2xl'>50K+</h1>
              <h2 className='text-richblack-100'>Customer Worldwide</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='ml-[200px] grid grid-rows-2 grid-flow-col mt-[100px] gap-3 mr-[135px] overflow-hidden'>
        <img src={salon2} width={300} height={700} className='w-50 h-80 rounded-md '/>
        <img src={massage} width={300} height={500} className='w-50 h-55 rounded-md mt-4' />
        <img src={repair2} width={300} height={500} className='w-50 h-65 rounded-md ' />
        <img src={cleaning2} width={300} height={700} className='w-50 h-80 rounded-md mt-[-120px]'/>



      </div>

    </div>
  )
}

export default Home

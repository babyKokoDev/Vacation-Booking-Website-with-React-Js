import React from 'react'
import ResortImg from '../assets/gallery_5.jpg'
import CruisesImg from '../assets/footer-image.jpg'
import ExcursionImg from '../assets/gallery_11.jpg'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
       <div className='relative p-4'>
       <h3 className='absolute z-10 top-[50%] left-[40%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
       <img src={ResortImg} alt="" className='w-full h-full object-cover border-4 border-white shadow-lg' />
       </div>
       <div className='relative p-4'>
       <h3 className='absolute z-10 top-[50%] left-[40%] translate-y-[-50%] text-white text-2xl font-bold'>Cruises</h3>
       <img src={CruisesImg} alt="" className='w-full h-full object-cover border-4 border-white shadow-lg' />
       </div>
       <div className='relative p-4'>
       <h3 className='absolute z-10 top-[50%] left-[35%] translate-y-[-50%] text-white text-2xl font-bold'>Excursions</h3>
       <img src={ExcursionImg} alt="" className='w-full h-full object-cover border-4 border-white shadow-lg' />
       </div>
         
    </div>
  )
}

export default Activities
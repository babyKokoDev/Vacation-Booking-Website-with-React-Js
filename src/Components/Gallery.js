import React from 'react'
import firstImg from '../assets/bg-image.jpg'
import secondImg from '../assets/card_2.jpg'
import thirdImg from '../assets/gallery_3.jpg'
import fourthImg from '../assets/card_3.jpg'
import fifthImg from '../assets/card_thialand.jpg'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4 text-3xl'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src={firstImg} alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={secondImg} alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={thirdImg} alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={fourthImg} alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src={fifthImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery
import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-800 font-bold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] rounded-lg' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6 leading-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>1027 Jaalle Siyaad <br /> WX_Xalane, Wadajir, Mogadisho</p>
          <p className='text-gray-500'>Tel: +(252) 4 459-166 <br /> Email: mohamed34@gmail.com</p>
          <p  className='font-semibold text-lg text-gray-600'>Careers at Priscrepto</p>
          <p className='text-gray-500'>Learn more about our team and job openning</p>
          <p className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer rounded-full'>Explore Job</p>
        </div>
      </div>
    </div>
  )
}

export default Contact

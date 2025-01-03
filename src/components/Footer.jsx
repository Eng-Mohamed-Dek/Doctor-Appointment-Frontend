import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* left section  */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-500 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                {/* center section  */}
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-500'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Privacy policy</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                {/* right section  */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-500'>
                        <li>+252 614459166</li>
                        <li>madaale@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* copyright  */}
            <p className='py-8 text-sm text-center text-gray-400 border-t border-gray-300'> &copy; {new Date().getFullYear()} All rights reserved by Madaale</p>
        </div>
    )
}

export default Footer
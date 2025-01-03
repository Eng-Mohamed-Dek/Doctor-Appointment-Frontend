import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className='flex justify-between text-sm py-4 mb-5 border-b border-b-gray-300'>
        <NavLink to="/"><img className='w-44 cursor-pointer' src={assets.logo} alt="" /></NavLink>
        <ul className='hidden md:flex items-start font-medium gap-5'>
            <NavLink to="/">
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 bg-blue-500 w-4/5 m-auto hidden'/>
            </NavLink>
            <NavLink to="/doctors">
                <li className='py-1'>Doctors</li>
                <hr className='border-none outline-none h-0.5 bg-blue-500 w-4/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/about">
                <li className='py-1'>About</li>
                <hr className='border-none outline-none h-0.5 bg-blue-500 w-4/5 m-auto hidden'/>
            </NavLink>
            <NavLink to="/contact">
                <li className='py-1'>Contact</li>
                <hr className='border-none outline-none h-0.5 bg-blue-500 w-4/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex item gap-4'>
            {/* user profile  */}
            {token ? 
            <div className='flex items-center group relative gap-2 cursor-pointer'>
                <img src={assets.profile_pic}  className='w-8 rounded-full'/>
                <img src={assets.dropdown_icon} className='w-2.5'/>
                <div className='absolute text-gray-500 top-0 right-0 pt-14 text-base font-light group-hover:block hidden z-20'>
                    <div className='min-w-44 rounded flex flex-col gap-4 p-4 bg-stone-200'>
                        <p className='hover:text-black' onClick={() => navigate('/my-profile')}>My Profile</p>
                        <p className='hover:text-black' onClick={() => navigate('/my-appointment')}>My Appointments</p>
                        <p className='hover:text-black' onClick={() => setToken(false)}>Logout</p>
                    </div>
                </div>
            </div>
            : 
            <button className='bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block' onClick={() => navigate('/login')}>Create account</button>
            }

            {/* menu icon */}
            <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

            {/* mobile menu */}
            {showMenu && <div className={`fixed w-full md:hidden right-0 top-0 bottom-0 bg-white overflow-hidden z-20 transition-all duration-500 p-5`}>
                <div>
                    <img src={assets.logo} alt="" />
                    <img onClick={() => setShowMenu(false)} className='w-9 md:hidden float-end -mt-9' src={assets.cross_icon} alt="" />
                </div>
                <ul className='mt-10 flex flex-col items-center gap-4 px-5 text-md font-medium'>
                    <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to="/">Home</NavLink>
                    <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to="/doctors">All Doctors</NavLink>
                    <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to="/about">About Us</NavLink>
                    <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to="/contact">Contact Us</NavLink>
                </ul>
                <p className='mt-56 text-sm text-center text-gray-400'> &copy; {new Date().getFullYear()} All rights reserved by Madaale</p>
            </div>
            }
        </div>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyAccount = () => {
  const [userData, setUserData] = useState({
    name: "Mohamed Dek",
    image: assets.profile_pic,
    email: 'mohamed34@gmail.com',
    phone: '+252 614 459 166',
    address: {
      line1: '1027, WX-XALANE',
      line2: 'JaalleSiyaad Road'
    },
    gender: 'Male',
    dob: '2000-05-01'
  })

  const [isEdit, setIsEdit] = useState(false)


  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <div className='flex gap-3'>
          <img src={userData.image} className='w-36 rounded' />
          <img src={assets.upload_area} className='w-36 rounded cursor-pointer' />
      </div>
      {
        isEdit
          ? <input className='bg-gray text-sm font-medium max-w-60 mt-2 p-1 px-2 border border-gray-400' type="text" value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-medium text-3xl text-neutral-800 mt-2'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none' />
      <p className='text-zinc-400 text-sm mt-3 underline'>CONTACT INFORMATION</p>
      <div className='grid grid-cols-[1fr_1fr] leading-7'>
        <p className='font-medium'>Email Id: </p>
        <p className='text-blue-500'>{userData.email}</p>
        <p className='font-medium'>Phone</p>
        {
          isEdit
            ? <input className='bg-gray text-sm font-medium max-w-60 mt-2 p-1 px-2 border border-gray-400' type="text" value={userData.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
            : <p className='text-blue-400'>{userData.phone}</p>
        }
        <p>address</p>
        {
          isEdit
            ?
            <p>
              <input className='bg-gray text-sm font-medium max-w-60 mt-2 p-1 px-2 border border-gray-400' type="text" value={userData.address.line1} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} />
              <br />
              <input className='bg-gray text-sm font-medium max-w-60 mt-2 p-1 px-2 border border-gray-400' type="text" value={userData.address.line2} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} />
            </p>
            : <p className='text-gray-500'>{userData.address.line1} <br /> {userData.address.line2}</p>
        }
      </div>

      <p className='text-zinc-400 text-sm mt-3 underline'>BASIC INFORMATION</p>
      <div className='grid grid-cols-[1fr_1fr] leading-7'>
        <p>Gender</p>
        {
          isEdit
            ? <select onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
              <option value="Male" >Male</option>
              <option value="Female">Female</option>
            </select>
            : <p>{userData.gender}</p>
        }
        <p>Birthday</p>
        {
          isEdit
            ? <input className='bg-gray text-sm font-medium max-w-60 mt-2 p-1 px-2 border border-gray-400' type="text" value={userData.dob} onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
            : <p>{userData.dob}</p>
        }
        {/* button to change states  */}
        {
          isEdit
            ? <button className='profile-btn' onClick={() => setIsEdit(false)}>Save information</button>
            : <button className='profile-btn' onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyAccount

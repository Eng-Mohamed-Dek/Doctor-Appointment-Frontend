import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Speciality = () => {
  const { specialityData } = useContext(DoctorContext)

  return (
    <div className='flex flex-col items-center gap-4 py-32 text-gray-800' id="speciality">
      <div className="text-3xl font-medium">Find by Speciality </div>
      <p className="flex sm:justify-center gap-4 pt-5 w-full items-center text-xs cursor-pointer">
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free
      </p>
      <div className="flex flex-wrap sm:justify-center gap-14 pt-5 w-full">
        {specialityData.map((item, index) => (
          <Link onClick={() => scrollTo(0, 0)} to={`/doctors/${item.speciality}`} key={index} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all durartion-500">
            <img className='w-16 sm:w-24 mb-2' src={item.image} />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Speciality
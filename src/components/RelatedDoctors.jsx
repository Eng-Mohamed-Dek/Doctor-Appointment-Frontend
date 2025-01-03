import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ speciality, id }) => {
    const { doctors } = useContext(DoctorContext)

    const navigate = useNavigate()

    const [relDocs, setRelDocs] = useState([])

    useEffect(() => {
      if(doctors.length > 0 && speciality) {
        const doctorData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== id)
        setRelDocs(doctorData)
      }
    }, [doctors, speciality, id])

    return (
        <div>
             <h1 className='font-semibold mt-28 mb-10 text-3xl text-center md:text-5xl'>Related Doctors</h1>
             <div className="w-[90%] md:w-[60%] mx-auto grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                {relDocs?.slice(0, 4).map((item, index) => (
                    <div onClick={() => { navigate(`/appointments/${item._id}`); scrollTo(0, 0) }} key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-700 mb-20">
                        <img className='bg-blue-50' src={item.image} />
                        <div className="p-4">
                            <p className="flex items-center gap-2 text-sm text-center text-green-500"><p className="w-2 h-2 bg-green-500 rounded-full"></p> Available</p>
                        </div>
                        <p className="m-3 text-gray-900 text-lg font-medium">{item.name}</p>
                        <p className="m-3 text-gray-600 text-[13px]">{item.speciality}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default RelatedDoctors
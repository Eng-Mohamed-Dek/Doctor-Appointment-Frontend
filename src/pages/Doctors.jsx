import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {
  const { doctors } = useContext(DoctorContext)

  const navigate = useNavigate()

  let { speciality } = useParams();

  // filter state 
  const [filterDoc, setFilterDoc] = useState([])
  const [filterShow, setFilterShow] = useState(true)

  // filtering function 
  const appFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  // use effects to call the func-s all the time 
  useEffect(() => {
    appFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-500'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`ml-3 py-2 px-5 border rounded-full text-sm sm:hidden hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer`} onClick={() => setFilterShow(prev => !prev)}>Filter by Category</button>
        {filterShow && <div className={`${filterShow && 'flex flex-row flex-wrap'} 'flex md:flex-col gap-4 text-sm text-gray-700`}>
          <p onClick={() => { speciality === 'General physician' ? navigate(`/doctors/`) : navigate('/doctors/General physician') }} className={`${speciality === 'General physician' ? 'bg-indigo-100 text-black' : ''}} 'w-[96vw] sm:w-auto pl-3 my-1.5 border border-gray-300 rounded p-2 transition-all cursor-pointer`}>General physician</p>
          <p onClick={() => { speciality === 'Gynecologist' ? navigate(`/doctors/`) : navigate('/doctors/Gynecologist') }} className={`${speciality === 'Gynecologist' ? 'bg-indigo-100 text-black' : ''}} 'w-[96vw] sm:w-auto pl-3 my-1.5 border border-gray-300 rounded p-2 transition-all cursor-pointer`}>Gynecologist</p>
          <p onClick={() => { speciality === 'Dermatologist' ? navigate(`/doctors/`) : navigate('/doctors/Dermatologist') }} className={`${speciality === 'Dermatologist' ? 'bg-indigo-100 text-black' : ''}} 'w-[96vw] sm:w-auto pl-3 my-1.5 border border-gray-300 rounded p-2 transition-all cursor-pointer`}>Dermatologist</p>
          <p onClick={() => { speciality === 'Pediatricians' ? navigate(`/doctors/`) : navigate('/doctors/Pediatricians') }} className={`${speciality === 'Pediatricians' ? 'bg-indigo-100 text-black' : ''}} 'w-[96vw] sm:w-auto pl-3 my-1.5 border border-gray-300 rounded p-2 transition-all cursor-pointer`}>Pediatricians</p>
          <p onClick={() => { speciality === 'Neurologist' ? navigate(`/doctors/`) : navigate('/doctors/Neurologist') }} className={`${speciality === 'Neurologist' ? 'bg-indigo-100 text-black' : ''}} 'w-[96vw] sm:w-auto pl-3 my-1.5 border border-gray-300 rounded p-2 transition-all cursor-pointer`}>Neurologist</p>
          <p onClick={() => { speciality === 'Gastroenterologist' ? navigate(`/doctors/`) : navigate('/doctors/Gastroenterologist') }} className={`${speciality === 'Gastroenterologist' ? 'bg-indigo-100 text-black' : ''}} 'w-[96vw] sm:w-auto pl-3 my-1.5 border border-gray-300 rounded p-2 transition-all cursor-pointer`}>Gastroenterologist</p>
        </div>
        }
        <div className="w-[90%] grid grid-cols-auto gap-9 gap-y-6 px-3 sm:px-0">
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointments/${item._id}`); scrollTo(0, 0) }} key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-700">
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
    </div>
  )
}

export default Doctors
import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext';
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { doctors, currency } = useContext(DoctorContext)

  let { docId } = useParams();
  let daysOfWeek = ['SUN', 'MON', 'TUES', 'WED', 'THU', 'FRI', 'SAT']

  // saving data state 
  const [doctorinfo, setDoctorInfo] = useState(null)
  // slots to appoint a doctor 
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  // get doctors data 
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDoctorInfo(docInfo);
  }

  // get doctors data 
  const getAvailbleSlots = async () => {
    // reset to Zero 
    setDocSlots([])

    // current data and time 
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting data with index 
      let currentData = new Date(today)
      currentData.setDate(today.getDate() + i)

      // setting end time of the data index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      // setting hours 
      if (today.getDate() === currentData.getDate()) {
        currentData.setHours(currentData.getHours() > 10 ? currentData.getHours() + 1 : 10)
        currentData.setMinutes(currentData.getMinutes() > 30 ? 30 : 0)
      } else {
        currentData.setHours(10)
        currentData.setMinutes(0)
      }


      let timeSlots = [];

      while (currentData < endTime) {
        let formattedTime = currentData.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // and lot Array 
        timeSlots.push({
          datetime: new Date(currentData),
          time: formattedTime
        })

        //increment current time by 30 minutes 
        currentData.setMinutes(currentData.getMinutes() + 30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  // use effects to call the func-s all the time 
  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailbleSlots()
  }, [doctorinfo])

  // use effects to get timeSlots everytime
  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])

  return (
    <div>
      {/* doctor details  */}
      <div className='flex flex-col sm:flex-row gap-4 mt-10'>
        <div className='bg-blue-500 w-full sm:max-w-72 rounded-lg'>
          <img src={doctorinfo?.image} />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt0[-80px] sm:mt-0'>
          {/* Docinfo name, degree , experience  */}
          <p className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            {doctorinfo?.name}
            <img className='w-5' src={assets?.verified_icon} />
          </p>
          <div className='flex items-center gap-2 text-sm mt-2 text-gray-600'>
            <p>{doctorinfo?.degree} - {doctorinfo?.speciality}</p>
            <button className="py-0.5 px-2 border text-xs rounded-full">{doctorinfo?.experience}</button>
          </div>

          {/* Docinfo about info  */}
          <div>
            <p className='flex items-center gap-2 text-xl mt-2 font-medium text-gray-900'>About <img src={assets.info_icon} /></p>
            <p className='text-sm text-gray-500 mt-2 max-w-[800px] font-light'>{doctorinfo?.about}</p>
          </div>
          <p className='mt-2 font-light text-sm'>
            Appointment Fee: <span className='font-bold'>{currency}{doctorinfo?.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots  */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full mt-4 overflow-x-scroll'>
          {
            docSlots?.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-blue-500 text-white' : 'border border-gray-300'}`}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>

        {/* timeSlots */}
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots[slotIndex].map((item, index) => (
              <p onClick={() => setSlotTime(item.time)} key={index} className={`text-sm font-light flex-shrink-0 px-5 py-2 m-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-blue-500 text-white' : 'border border-gray-300'}`}>
                {item.time.toLowerCase()}
              </p>
            ))
          }
        </div>
        <button className="bg-blue-500 text-white text-sm font-light px-14 py-3 rounded-full my-6">Get an Appointment </button>
      </div>

      {/* related Doctors  */}
      <RelatedDoctors id={docId} speciality={doctorinfo?.speciality}/>
    </div>
  )
}

export default Appointment
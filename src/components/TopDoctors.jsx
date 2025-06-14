import { useContext } from "react"
import { DoctorContext } from "../context/DoctorContext"
import { useNavigate } from 'react-router-dom'

const TopDoctors = () => {
    const { doctors } = useContext(DoctorContext)

    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
            <p className="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors.</p>
            <div className="w-[90%] grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                {doctors?.slice(0, 10).map((item, index) => (
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
            <button onClick={() => { navigate(`/doctors`); scrollTo(0, 0) }} className="bg-blue-50 tetx-gray-600 px-12 py-3 rounded-full mt-10">More Doctors</button>
        </div>

    )
}

export default TopDoctors
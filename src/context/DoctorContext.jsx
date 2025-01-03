import { createContext } from 'react'
import { doctors, specialityData } from '../assets/assets.js'

//1- create context 
export const DoctorContext = createContext(null)


//2- create function provider context value (menu_lists)
const DoctorContextProvider = ({ children }) => {

  const currency = '$'
    
  return (
    <DoctorContext.Provider value={{ currency, doctors, specialityData }}>
        { children }
    </DoctorContext.Provider>
  )
}

export default DoctorContextProvider
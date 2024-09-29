import React from 'react'
import Cont from './components/Cont'
import './App.css'
import Navbar from './components/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className='bebus bg-black display relative'>
     <div className='md:hidden flex flex-col relative'> 
      <Navbar/>
      </div>
      <div>
      <div className={` ${location.pathname === '/' ? 'hidden': 'flex'} md:top-5 md:left-[7vw] top-[13%] left-3 gap-3 items-center absolute z-[90]  px-3 text-white`}>
      <div 
      onClick={()=> navigate(-1)}
       className="text-3xl bg-black p-3 opacity-[.8] rounded-full">
        <GrFormPrevious />
      </div>
      <div 
      onClick={()=> navigate(+1)}
       className="text-3xl bg-black p-3 opacity-[.8] rounded-full">
        <GrFormNext />
      </div>
    </div>
      </div>
      <Cont/>
    </div>
  )
}

export default App
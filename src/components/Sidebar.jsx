import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className=' h-full gap-y-3 flex flex-col '>
     <div className='flex flex-col gap-y-5 p-5 items-center bg-[#242424] rounded-md'>
         <Link to='/' className='text-white items-center bebas font-semibold text-3xl gap-4 flex'>
         <GoHomeFill/>
         </Link>
         <Link to='/search' className='text-white bebas font-semibold text-3xl gap-4 flex'>
         <h1 className='text-4xl'><IoMdSearch /></h1>
         </Link>
     </div>
      <div className='w-full h-full flex flex-col gap-y-3 rounded-md p-2 bg-[#242424]'>
       <Link to='/trending' className='bg-white w-[4vw] h-[4vw] rounded-md overflow-hidden cursor-pointer'>
        <img className='w-full h-full flex object-cover' src="https://png.pngtree.com/png-clipart/20220921/ourmid/pngtree-fire-logo-png-image_6209600.png" alt="" />
        </Link>
       <Link to='/upcoming' className='bg-white w-[4vw] flex items-center justify-center h-[4vw] rounded-md overflow-hidden cursor-pointer'>
       <h1 className='text-5xl font-bold'>U</h1>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
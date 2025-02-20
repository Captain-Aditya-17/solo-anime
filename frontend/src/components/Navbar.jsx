import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import { useState } from 'react';


const Navbar = () => {
  const [menu, setmenu] = useState(false)
  return (
    <div className='w-full h-[12vh] bg-black items-center flex justify-between px-4 relative text-white'>
        <Link to='/' className='text-5xl text-white font-bold'><span className='text-[#E50014]'>Solo</span> Anime</Link>
        <div className='flex gap-5 items-center'>
        <Link to='/search' className='text-5xl text-white'><IoMdSearch /></Link>
        <h1
        onClick={()=> setmenu(true)} 
        className='text-3xl'>Menu</h1>
        </div>
        <div className={`w-full h-[80vh] bg-black absolute transition-all duration-[0.5s] ${menu ? 'top-0':'top-[-180vw]'} left-0 z-[99] p-4 flex flex-col`}>
         <div className='flex justify-between'>
         <Link to='/' onClick={()=> {
          setmenu(false)
         }} className='text-5xl'>Home</Link>
         <h1
         onClick={()=> setmenu(false)}
          className='text-3xl text-red-500'>close</h1>
         </div>
         <Link to='/trending' onClick={()=> {
          setmenu(false)
         }} className='text-5xl'>Trending</Link>
          <Link to='/upcoming' onClick={()=> {
          setmenu(false)
         }} className='text-5xl'>Upcoming</Link>
          <div className='w-full h-full rounded-xl overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://rukminim2.flixcart.com/image/850/1000/xif0q/book/g/9/b/solo-leveling-vol-5-original-imahy8wjfyye9fps.jpeg?q=90&crop=false" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Navbar
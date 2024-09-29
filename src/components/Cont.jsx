import React from 'react'
import Sidebar from './Sidebar'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Search from './Search'
import Trending from './Trending'
import Upcoming from './Upcoming'
import Catergory from './Catergory'
import AnimeDetail from './AnimeDetail'

const Cont = () => {
  return (
    <div className='w-full gap-4 display h-screen bg-black flex p-4 overflow-scroll'>
      <div className='hidden md:block'>
      <Sidebar/>
      </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/animedet/:id' element={<AnimeDetail/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/trending' element={<Trending/>}/>
          <Route path='/upcoming' element={<Upcoming/>}/>
          <Route path='/search/catergory/:id' element={<Catergory/>}/>
          
        </Routes>

    </div>
  )
}

export default Cont
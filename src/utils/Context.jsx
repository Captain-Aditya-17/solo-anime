import axios from './Axios'
import React, { createContext, useEffect, useState } from 'react'
import attack from '../assets/attack.jpg'
import deathnote from '../assets/deathnote.jpg'
import another from '../assets/another.jpg'
import tokyo from '../assets/tokyo.avif'
import bleach from '../assets/bleach.avif'
import dbs from '../assets/dbs.jpeg'
import silent from '../assets/silent.jpeg'
import isagi from '../assets/isagi.jpeg'

export const AnimeData = createContext()

const Context = (props) => {
  
    const [homePage, sethomePage] = useState(null)
    const [searchData, setsearchData] = useState(null)
    const [upcoming, setupcoming] = useState(null)
    const [value, setvalue] = useState('')
    const homeData = async ()=>{
      try {
        const {data} = await axios('top/anime');
        sethomePage(data.data)
        
      } catch (error) {
      }
    }
    const getUpcoming = async ()=>{
      try {
        const {data} = await axios('seasons/upcoming');
        setupcoming(data.data)
        
      } catch (error) {
      }
    }
    const getsearchdata = async ()=>{
      try {
        const {data} = await axios(`anime?q=${value}`);
        setsearchData(data.data)
        
      } catch (error) {
      }
    }
    const change = (e)=>{
      setvalue(e.target.value)
    }
    const allgeners = [
      {
        type: 'Action',
        image: attack,
        genre_number: 1
      },
      {
        type: 'Mystery',
        image: deathnote,
        genre_number: 7
      },
      {
        type: 'Horror',
        image: tokyo,
        genre_number: 14
      },
      {
        type: 'Rommance',
        image: silent,
        genre_number: 22
      },
      {
        type: 'Shonen',
        image: bleach,
        genre_number: 27
      },
      {
        type: 'Martial Arts',
        image: dbs,
        genre_number: 17
      },
      {
        type: 'sports ',
        image: isagi,
        genre_number: 30
      },
      {
        type: 'suspense',
        image: another,
        genre_number: 41
      },
      
    ]
    const AllValues = {
      homePage,sethomePage,
        value,setvalue,
        searchData, setsearchData,
        change,
        upcoming,
        allgeners
    }
    useEffect(()=>{
      homeData()
      getsearchdata()
      getUpcoming()
    },[value])
  return (
    <AnimeData.Provider value={AllValues}>
        {props.children}
    </AnimeData.Provider>
  )
}

export default Context
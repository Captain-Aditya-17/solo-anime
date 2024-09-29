import { useParams } from 'react-router-dom'
import axios from '../utils/Axios'
import React, { useEffect, useState } from 'react'
import { IoMdStar } from "react-icons/io";


const AnimeDetail = () => {
    const {id} = useParams()
    const [detail, setdetail] = useState(null)
    const [characters, setCharacters] = useState([]);
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime/${id}/characters`
        );
        setCharacters(response.data.data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    const getdetails = async ()=>{
        const {data} = await axios(`anime/${id}/full`)
        setdetail(data.data)
    }
    useEffect(()=>{
        getdetails()
        fetchCharacters()
    },[id])
    if (!detail) {
        return (
          <div className="w-full h-screen flex items-center justify-center text-white">
            Loading...
          </div>
        );
      }
  return (
    <div className="w-full h-full overflow-scroll display">
    <div className='"w-full text-white flex flex-col md:flex-row gap-y-5 items-center overflow-scroll h-[96vh] display relative rounded-xl'>
      <img
        className="w-full absolute h-full opacity-[.2] object-cover"
        src={detail.images.jpg.large_image_url}
        alt=""
      />
       <div className="md:w-[40%] w-full md:h-full z-[10] flex items-center justify-center">
        <div className="md:w-[22vw] md:h-[30vw] w-[60vw] h-[80vw] rounded-md overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={detail.images.jpg.large_image_url}
            alt=""
          />
        </div>
      </div>
      <div className="md:w-[60%] w-full px-[4vw] z-[10]">
        <h1 className="md:text-6xl text-3xl font-bold">{detail.title_english}</h1>
        <h1 className="text-white md:text-xl">
          {detail.synopsis && detail.synopsis.split(" ").length > 60
            ? detail.synopsis.split(" ").slice(0, 60).join(" ") + "..."
            : detail.synopsis || "No title available"}
        </h1>
        <div className="flex items-end">
          <h1 className="uppercase font-bold text-2xl">rating:</h1>
          <h3 className="text-3xl mt-3 text-yellow-500">
            <IoMdStar />{" "}
          </h3>
          <h3 className="text-2xl">{detail.score}</h3>
        </div>
        {detail.themes.length > 0 ? (
          <div className="flex items-end gap-3">
            <h1 className="uppercase font-bold text-2xl">theme:</h1>
            <h3 className="text-2xl">{detail.themes[0].name}</h3>
          </div>
        ) : null}
       <div className="flex">
       <a
          href={`https://www.youtube.com/watch?v=${detail.trailer.youtube_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="md:text-2xl text-xl font-semibold rounded-full mt-[2vw] py-2 md:px-[5vw] px-[2vw] bg-[#E50112]"
        >
          Watch Trailer
        </a>
        <button className="text-2xl font-semibold rounded-full mt-[2vw] py-2 px-[5vw] border-2 mx-3">
          Add to watch list
        </button>
       </div>
      </div>

    </div>
    <div className="w-full flex flex-wrap md:gap-[2vw] gap-[5vw] p-4 justify-center">
      {characters.length > 0 ? (
        characters.map((character) => (
          <div key={character.character.mal_id}>
            <div className="md:w-[12vw] md:h-[12vw] w-[20vw] h-[20vw] overflow-hidden rounded-full bg-gray-800">
              <img
                src={character.character.images.jpg.image_url}
                alt={character.character.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h1 className="md:text-2xl hidden md:block text-white">
              {character.character.name}
            </h1>
          </div>
        ))
      ) : (
        <p className="text-white">No characters found.</p>
      )}
    </div>
  </div>
  )
}

export default AnimeDetail
import React, { useContext } from 'react'
import { AnimeData } from '../utils/Context'
import { useNavigate } from 'react-router-dom'
import jjk from '../assets/jjk.webp'

const Trending = () => {
    const {homePage} = useContext(AnimeData)
    const navigate = useNavigate()
  return (
    <div className='w-full h-full overflow-scroll display text-white'>
       <div className="w-full h-[80vh] rounded-xl  overflow-hidden relative">
        <h1 className='absolute z-10 md:top-[70%] top-[80%] -translate-y-1/2 md:left-1/2 left-3 md:-translate-x-1/2 text-white text-8xl'>Most Trending Anime</h1>
        <img
          className="w-full h-full object-cover object-top opacity-50"
          src={jjk}
          alt=""
        />
      </div>
      <div className="w-full h-screen mt-5 flex flex-wrap gap-6 justify-center">
        {homePage ? (
          homePage.map((item, index) => {
            return (
              <div
              onClick={()=> navigate(`/animedet/${item.mal_id}`)}
                key={index}
                className="md:w-[16vw] w-[38vw] flex flex-col rounded-md overflow-hidden cursor-pointer mb-6 transition-all hover:opacity-50"
              >
                <img
                  className="w-full h-full object-cover"
                  src={item.images.jpg.image_url}
                  alt=""
                />
                <h1 className="text-white text-xl">
                  {item.title_english.split(" ").length > 3
                    ? item.title_english.split(" ").slice(0, 3).join(" ") +
                      "..."
                    : item.title_english}
                </h1>
              </div>
            );
          })
        ) : (
          <h1>loading..</h1>
        )}
      </div>
        </div>
  )
}

export default Trending
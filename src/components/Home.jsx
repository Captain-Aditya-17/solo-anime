import React, { useContext, useEffect } from "react";
import { AnimeData } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import bleach from '../assets/bleach.jpg'
import aot from '../assets/aot.jpg'
const Home = () => {
  const { homePage } = useContext(AnimeData);
  const navigate = useNavigate()
  return (
    <div className="w-full h-full bg-black display overflow-scroll">
      <div className="w-full h-[80vh] rounded-xl  overflow-hidden">
        <img
          className="w-full h-full object-cover object-top hidden md:block"
          src={bleach}
          alt=""
        />
        <img
          className="w-full h-full object-cover object-top block md:hidden"
          src={aot}
          alt=""
        />
      </div>
      <h1 className="text-4xl text-white mt-5 uppercase font-bold">
        Top Anime
      </h1>
      <div className="w-full h-screen mt-5 flex flex-wrap gap-6 justify-center">
        {homePage ? (
          homePage.map((item, index) => {
            return (
              <div
              onClick={()=> navigate(`/animedet/${item.mal_id}`)}
                key={index}
                className="md:w-[17vw] w-[38vw] flex flex-col rounded-xmd overflow-hidden cursor-pointer mb-6 transition-all hover:opacity-50"
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
  );
};

export default Home;

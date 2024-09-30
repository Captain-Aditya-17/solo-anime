import React, { useContext, useState } from "react";
import { AnimeData } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import axios from "../utils/Axios";

const Search = () => {
  const { value, change, searchData ,allgeners} = useContext(AnimeData);
  const navigate = useNavigate()
  return (
    <div className="w-full p-4 overflow-scroll display mt-[3rem] ">
      <input
        type="text"
        placeholder="Search"
        className="md:w-[40vw] w-[80vw] px-5 py-3 text-xl bg-zinc-700 rounded-full text-white outline-none"
        value={value}
        onChange={(e) => {
          change(e);
        }}
      />
      <div className="w-full p-0 mt-5 flex flex-wrap gap-6 justify-center">
        {value ? (
          searchData.map((item, index) => {
            return (
              <div
                key={index}
                onClick={()=> navigate(`/animedet/${item.mal_id}`)}
                className="md:w-[16vw] w-[36vw] flex flex-col rounded-md overflow-hidden cursor-pointer mb-6 transition-all hover:opacity-50"
              >
                <img
                  className="w-full h-full object-cover"
                  src={item.images.jpg.image_url}
                  alt=""
                />
                <h1 className="text-white text-xl">
                  {item.title_english &&
                  item.title_english.split(" ").length > 4
                    ? item.title_english.split(" ").slice(0, 4).join(" ") +
                      "..."
                    : item.title_english || "No title available"}
                </h1>
              </div>
            );
          })
        ) : (
          <div className="w-full p-2 flex gap-5 h-[60vh] flex-wrap">
            {
              allgeners ?
              allgeners.map((item,index)=>{
                return   <div key={index}
                onClick={()=> navigate(`catergory/${index}`)}
                 className="md:w-[20vw] md:h-[12vw] w-[37vw] h-[25vw] cursor-pointer rounded-md relative overflow-hidden">
                <h1 className="text-white md:text-4xl text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -trnaslate-y-1/2 z-[99]">{item.type}</h1>
                <img className="w-full h-full object-cover opacity-[.8]" src={item.image} alt="" />
              </div>
              })
              :
              <h1>loading</h1>
            }
          
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;

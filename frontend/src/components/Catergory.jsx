import { useNavigate, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import React, { useContext, useEffect, useState } from "react";
import { AnimeData } from "../utils/Context";
const Catergory = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const { allgeners } = useContext(AnimeData);
  const genre_id = allgeners.find((item) => item.genre_number === parseInt(id));
  const [genre, setgenre] = useState(null);
  const getgenereData = async () => {
    try {
      const { data } = await axios(`anime?genres=${allgeners[id].genre_number}`);
      setgenre(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getgenereData();
  }, []);
  return (
  <div className="text-white p-2 w-full h-full overflow-scroll display gap-4 justify-center flex flex-wrap">
    {genre ?
        genre.map((item,index)=>{
            return  <div
            key={index}
            onClick={()=> navigate(`/animedet/${item.mal_id}`)}
            className="md:w-[15vw] w-[36vw] flex flex-col rounded-xl overflow-hidden cursor-pointer mb-6 transition-all hover:opacity-50"
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
        })
        :
        <h1>loading</h1>
    }
  </div>
  );
};

export default Catergory;

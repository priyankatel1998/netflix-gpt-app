import { IMG_CDN_URL } from "../utills/constant";

 const MovieCard =({posterPath})=>{
     return(
    
         <div className="w-40 flex-shrink-0 p-2"> 
         <img className=" w-full rounded-lg cursor-pointer hover:scale-105" 
             alt="Movie card"
              src={IMG_CDN_URL + posterPath} 
              />
         </div>
     )
 }
 export default MovieCard; 
 
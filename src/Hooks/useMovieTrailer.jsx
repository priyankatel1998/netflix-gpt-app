import { useEffect } from "react";
import { Api_Option } from "../utills/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideos } from "../utills/MoviesSlice";
const useMovieTrailer =(movieId) =>{
     const dispatch = useDispatch();

 const GetmoviesVideos = async() => {
     if (!movieId) return;
    const Data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        Api_Option 
    )
    const json = await Data.json();
    console.log("Movie ID:", movieId);
console.log("API videos:", json.results);
    console.log(json);

    const filterTrailer = json.results.filter(
        //(video) =>video.type === "Trailer");
          (video) => video.type === "Trailer" && video.site === "YouTube");

   // const Trailer =filterTrailer.length ? 
    //filterTrailer[0]:json.results[0];
  const Trailer = filterTrailer[0] || json.results[0] || null;

    console.log(Trailer)
    dispatch(addTrailerVideos(Trailer))


}
    useEffect(()=>{
        GetmoviesVideos();
    },[movieId,dispatch])
};
   
export default useMovieTrailer;
 
 import { useEffect } from "react";
 import { Api_Option } from "../utills/constant";
 import { useDispatch } from "react-redux"; 
 import { addNowPlayingMovies}  from "../utills/MoviesSlice";

 const useNowPlayingMovies =()=>{
    const dispatch =useDispatch();
    const GetPlayingMovies = async()=>{
        const data =await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?&page=1",
        Api_Option
        );
         const json = await data.json();
         console.log(json);
         dispatch(addNowPlayingMovies(json.results))
    };
    useEffect (()=>{
        GetPlayingMovies();
 },[]);
 };
 export default useNowPlayingMovies;
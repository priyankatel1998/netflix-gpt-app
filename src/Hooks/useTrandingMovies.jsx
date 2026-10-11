
 import { useDispatch } from "react-redux";
import { Api_Option } from "../utills/constant";
import { useEffect } from "react";
import { addTrandingMovies } from "../utills/MoviesSlice";

const useTrandingMovies = ()=>{
 const dispatch =useDispatch();
    const GetTrandingMovies = async()=>{
        const data =await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?&page=1",
        Api_Option
        );
         const json = await data.json();
         console.log(json);
         dispatch(addTrandingMovies(json.results))
    };
    useEffect (()=>{
        GetTrandingMovies ();
 },[]);
 };
export default useTrandingMovies;
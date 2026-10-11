import { addPapulerMovies } from "../utills/MoviesSlice";
import { useEffect} from "react";
import { Api_Option } from "../utills/constant";
import { useDispatch } from "react-redux"
;
const usePopulerMovies =()=>{
        const dispatch =useDispatch();
    const GetPopulerMovies = async()=>{
        const data =await fetch(
        "https://api.themoviedb.org/3/movie/popular?&page=1",
        Api_Option
        );
         const json = await data.json();
         console.log(json);
         dispatch(addPapulerMovies(json.results))
    };
    useEffect (()=>{
        GetPopulerMovies();
 },[]);
 };
    // return (
    
export default usePopulerMovies;
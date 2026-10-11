import { useDispatch } from "react-redux";
import { Api_Option } from "../utills/constant";
import { useEffect } from "react";
import { addHorrorMovies } from "../utills/MoviesSlice";

const HorrorMovies = ()=>{
            const dispatch =useDispatch();
    const GetHorrorMovies = async()=>{
        const data =await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?&page=1",
        Api_Option
        );
         const json = await data.json();
         console.log(json);
         dispatch(addHorrorMovies(json.results))
    };
    useEffect (()=>{
        GetHorrorMovies ();
 },[]);
 };
//     return(
//         <div>

//         </div>
//     )
// }
export default HorrorMovies;
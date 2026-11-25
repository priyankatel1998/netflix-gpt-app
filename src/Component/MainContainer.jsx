import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import Videotitle from "./Videotitle";

const MainContainer =()=>{

 const movies = useSelector(
    (store) =>store.movies?.nowPlayingMovies);
const mainMovie = movies?.[0];
//find((movie) => movie.id === 1204680);
 if (!movies?.length) return null;
 
   //const mainMovie = movies?.[0];
    if (!mainMovie) return null;
  //console.log(mainMovie);
  // console.log(mainMovie?.original_title);
  
  const { original_title, overview,id } = mainMovie;

return(
<div>
<Videotitle  title ={original_title} overview ={overview}/>
<VideoBackground movieId = {id} />
</div>
    
)
};
export default MainContainer;
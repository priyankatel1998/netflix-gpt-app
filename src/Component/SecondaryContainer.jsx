 import { useSelector } from "react-redux";
 import MovieList from "./MovieList";

 const SecondaryContainer=()=>{
      const movies =useSelector((store) => store.movies);
      return(
        movies.nowPlayingMovies &&(
    <div className="-mt-6 relative z-40">
   <MovieList title ={"Now playing"} movies={movies.nowPlayingMovies} />
   <MovieList title ={"Tranding movies"} movies={movies.nowTrandingMovies} />
    <MovieList title ={"Populer movies"} movies={movies.nowPopulerMovies} />
     <MovieList title ={"Updating movies"} movies={movies.nowPlayingMovies} />
     <MovieList title ={"Horror movies"} movies={movies.nowHorrorMovies} />
      </div>
        )
     ) 
 };

{/* //  {/* MOVIElist =populer
//  MOVIElist =nowPlying
///  moviecard =n
  MOVIElist =horror */}
 
 export default SecondaryContainer;
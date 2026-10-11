 import MovieCard from "./MovieCard";

 const MovieList =({title,movies})=>{
 if (!Array.isArray(movies) || movies.length === 0) {
        return null;
    }
 // console.log("movies:", movies);
     return(
         <div className="bg-black p-6">
             <h1 className="text-xl font-bold text-white">{title}</h1>
             <div className="flex overflow-x-auto">
                {movies.map((movie)=>(
              <MovieCard key ={movie.id} posterPath={movie.poster_path} /> 
              ))};


             </div>
         </div>
     )
 }
 export default MovieList;
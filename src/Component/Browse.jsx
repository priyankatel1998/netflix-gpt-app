
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopulerMovies from "../Hooks/usePopulerMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useHorrorMovies from "../Hooks/useHorrorMovies";
import useTrandingMovies from "../Hooks/useTrandingMovies";
// import GptSearch from "./GptSearch";

const Browse = ()=>{
useNowPlayingMovies();
usePopulerMovies();
useHorrorMovies();
useTrandingMovies();

 return(
        <div>
        <Header/>
        {/* <GptSearch /> */}
        <MainContainer />
         <SecondaryContainer/>
        {/* main container 
        videoBackground
        videoTITLE
        secondary container
        MOVIElist *n 
        cards*n */}
         </div>
    )
}
export default Browse;
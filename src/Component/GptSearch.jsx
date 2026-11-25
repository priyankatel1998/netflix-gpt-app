import GptSearchbar from "./GptSearchbar";
import GptMoviesuggetion from "./GptMoviesuggetion";
import { background_User } from "../utills/constant";
const GptSearch = ()=>{
    return(
        <div>
               <div className="absolute -z-10">
                 <img src = {background_User}
                 alt ="logo"/>
                    </div>
           <GptSearchbar />
            <GptMoviesuggetion />
        </div>
    )

}
export default GptSearch;
import { useSelector } from "react-redux";
import laug from "../utills/lauguageconstants";
const GptSearchbar =()=>{
    const langkey = useSelector((store) => store.config.lang)
    const handleGptSearchClick = ()=>{

    };
    return(
        <div className="pt-[10%] flex justify-center">
<form className=" w-1/2 bg-black grid grid-cols-12 " onSubmit={(e)=>e.preventDefault()}>
    <input type="text"className="p-4 m-4 col-span-9"
     placeholder={laug[langkey].gptSearchplaceholder}
/>
<button onClick ={handleGptSearchClick}
className="px-4 py-2 m-4 col-span-3 bg-red-600 text-white rounded-lg"
    >
    {laug[langkey].search}
</button>
</form>
 </div>
    )
}
export default GptSearchbar;
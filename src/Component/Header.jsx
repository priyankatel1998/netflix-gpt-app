import { auth } from "../utills/firebase";
import { useSelector } from "react-redux";
 import { useNavigate} from "react-router-dom";
 import { useEffect } from "react";
 import { signOut,onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utills/userSlice";
import { useDispatch } from "react-redux";
import { Logo, Support_lauguage } from "../utills/constant";
import { toogleGptSearchView } from "../utills/gptSlice";
import { LanguageChange } from "../utills/configSlice";

 const Header = ()=>{
     const dispatch =useDispatch();
    const navigate = useNavigate();

      const showGptSearch = useSelector(store =>
         store.gpt.showGptSearch);

      const handleGptSearchClick = ()=>{
      dispatch(toogleGptSearchView());
    } 
    const handleLanguageChange = (e) =>{
      //console.log(e.target.value);
      dispatch(LanguageChange(e.target.value))
    } 
   const user =useSelector(store =>store.user);
    const handlesSignout=()=>{
    signOut(auth).then(() => {
       //navigate("/")
     }).catch((error) => {
       // navigate("/error")
     });
    }
         useEffect(()=>{
      const unsubscribe =onAuthStateChanged(auth, (user) => {
   if (user) {
    // const uid = user.uid;
    const {uid,email,displayName,photoURL} =user;
     dispatch(addUser({
         uid: uid,
          email:email,
           displayName: displayName,
           photoURL:photoURL
         }));
     navigate("/browse")
   } else {
     // User is signed out
   dispatch(removeUser());
  navigate("/")
  
   }
 });
 //unsubscribe when Component din not unmount
   
 return() => unsubscribe();
      },[dispatch,navigate])
    return(
        <div>
       <div className="font-bold px-10 py-5 w-full bg-gradient-to-b from-black flex justify-between">
        <img className="w-40"
     src ={Logo}
     alt ="logo"
     />
      {user && (  
        <div className="flex">
          {showGptSearch &&(
            <select className="m-2 p-2 text-white bg-slate-500" onChange={handleLanguageChange}>
            {Support_lauguage.map((lang)=>(
            <option key ={lang.indentifier}value={lang.indentifier}>{lang.name}
            </option>
            ))}
          </select>
          )}
           <button className=" px-4 py-2 m-2 bg-purple-400 text white rounded-xl"
          onClick={handleGptSearchClick} 
           >
            {showGptSearch? "GPT Search":"Homepage"}</button> 
     <img className="w-25 rounded-xl" 
     alt ="usericon"
     src ={user?.photoURL}
     width={50}
     height={50}

     />
     <button onClick={handlesSignout}>sign out</button>
     </div>
    )}
    
        </div>
         </div>
    )
}
//className=" font-bold px-10 py-5 bg-gradient-to-b-from-black">r=229"
export default Header;
import { auth } from "../utills/firebase";
import { useSelector } from "react-redux";
 import { useNavigate} from "react-router-dom";
 import { useEffect } from "react";
 import { signOut,onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utills/userSlice";
import { useDispatch } from "react-redux";
import { Logo } from "../utills/constant";
 const Header = ()=>{
     const dispatch =useDispatch();
    const navigate = useNavigate();
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
//  const handleGptSearchClick =()=>{

//  }
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
          {/* <button className=" px-4 py-2 m-2 bg-purple-400 text white rounded-xl"
          onClick={handleGptSearchClick} */}
          {/* >
            GPT Search</button> */}
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
import { useRef, useState } from "react";
 import {useNavigate} from "react-router-dom";
import Header from "./Header";
import { checkvalidData } from "../utills/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utills/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utills/userSlice";
import { background_User, User_Avatar } from "../utills/constant";
//import { current } from "@reduxjs/toolkit";

const Login =()=>{
    const [isSignInForm,setIsSignInForm] =useState(true);
    const [errorMessage,setErrormessage] =useState(null)
     const navigate = useNavigate();
     const dispatch = useDispatch();

  const name = useRef (null);
  const email = useRef (null);
  const password = useRef (null);

    const handleButtonClick =()=>{
    
    const message= checkvalidData(
      email.current.value,
      password.current.value)
    setErrormessage(message)
   if(message)return;

   if(!isSignInForm){
createUserWithEmailAndPassword(
  auth,
   email.current.value,
    password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
updateProfile(user, {
  displayName: name.current.value ,
  photoURL :User_Avatar,

}).then(() => {
   const {utd,email,displayName,photoURL} =auth.currentUser;
    dispatch(addUser({utd: utd, 
      email:email, 
      displayName: displayName,
      photoURL:photoURL,
    }))
      
  navigate("/browse")
}).catch((error) => {
  
    setErrormessage(error.message)
});

    console.log (user)
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode +"-"+ errorMessage)
  });

   } else{
signInWithEmailAndPassword(
  auth, 
   email.current.value,
    password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  //  navigate("/")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode + "-" +errorMessage)
  });
   }}
    const toggleSignInForm =()=>{
setIsSignInForm(!isSignInForm)
    };
    return(
        <div>
            <Header />
            <div className="">
     <img src = {background_User}
     alt ="logo"/>
        </div>

        <form 
        onSubmit={(e) =>e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 top-5 rounded-xl">
        <h1 className="font-bold text-3xl py-4">{ isSignInForm ?"Sign in":"Sign up"}</h1>
          {!isSignInForm && (
          <input  
           ref={name}
              type="text"
               autoComplete="name"
               placeholder="Full Name"
                className="p-4 h-11 my-4 w-full bg-gray-600"
                />
                 )}
            <input
                 ref={email} 
                 type="email" 
                autoComplete="email"
                 placeholder="Email or phone number" 
                 className="p-4 h-11 my-4 w-full bg-gray-600"/>

            <input 
            ref={password}
            type="password"
              autoComplete="password"
             placeholder="password" 
             className="p-4 h-11 my-4 w-full bg-gray-600"
             />
               
            <p className="text-red-400 font-2xl">{errorMessage}</p>
 
            {/* <button
            className= "bg-red-600 p-2 my-4 h-11 w-full rounded-xl" 
            onClick={handleButtonClick}>
                {isSignInForm ?"Sign in":"Sign up"}</button>  */}


                <button
             type="button"
              onClick={handleButtonClick}
              className="bg-red-600 p-2 my-4 h-11 w-full rounded-xl">
             {isSignInForm ? "Sign in":"Sign up"}
                       </button> 


            <p className="py-4 cursor-pointer"
             onClick ={toggleSignInForm}> 
             { isSignInForm ?"New to Netflix sign in now ":"it is already resiterfor sign up"}</p>
        </form>
      
        </div>
    )
}
export default Login;
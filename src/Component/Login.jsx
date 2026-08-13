import { useState } from "react";
import Header from "./Header";
const Login =()=>{
    const [isSignInForm,setIsSignInForm] =useState(true);
    const toggleSignInForm =()=>{
setIsSignInForm(!isSignInForm)
    }
    return(
        <div>
            <Header />
            <div className="">
     <img src = "https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/x2x1Gn4QgTuVowyvC5vjsETMDK0/AAAABZZtAvRk9LKZ-nexa2BSuj0alJtaCVlSAETqhCtjZxhK9oWcqWprJ00OHIoOJLzb67PwBye_3I2I794xlouXjbOPf0YbGySRM_ieoOTY_0HRSV3xBDsQPBGcfg.webp?r=5e7"
     alt ="logo"/>
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 top-5 rounded-xl">
        <h1 className="font-bold text-3xl py-4">{ isSignInForm ?"Sign in":"Sign up"}</h1>
          {!isSignInForm && (
          <input  type="Name" placeholder="Full Name" className="p-4 h-11 my-4 w-full bg-gray-600"/>
          )}
            <input type="text" placeholder="Email or phone number" className="p-4 h-11 my-4 w-full bg-gray-600"/>
            <input  type="Password" placeholder="Password" className="p-4 h-11 my-4 w-full bg-gray-600"/>
            <button className= "bg-red-600 p-2 my-4 h-11 w-full rounded-xl">{ isSignInForm ?"Sign in":"Sign up"}</button>
            <p  className=" py-4 cursor-pointer" onClick ={toggleSignInForm}> { isSignInForm ?"New to Netflix sign in now ":"it is already resiterfor sign up"}  </p>
        </form>
      
        </div>
    )
}
export default Login;
import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import moviesReducer from"./MoviesSlice";
import gptReducer from"./gptSlice";
import configReducder from "./configSlice";

 const appStore =configureStore(
    {
    reducer:{
      user:userReducer,
      movies:moviesReducer,
      gpt : gptReducer,
      config: configReducder,

    }
 }
)
 export default appStore;
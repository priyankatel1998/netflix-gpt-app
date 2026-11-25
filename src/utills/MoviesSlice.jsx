import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name:"movies",
    initialState:{
    nowPlayingMovies:null,
    nowPopulerMovies:null,
    nowHorrorMovies:null,
    nowTrandingMovies:null,
    TrailerVideos:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
   state.nowPlayingMovies = action.payload
        },
        addPapulerMovies:(state,action)=>{
   state.nowPopulerMovies = action.payload
        },
            addHorrorMovies:(state,action)=>{
   state.nowHorrorMovies = action.payload
        },
       addTrandingMovies:(state,action)=>{
   state.nowTrandingMovies = action.payload
        },
        addTrailerVideos:(state,action)=>{
            state.TrailerVideos = action.payload
        }
    }
});
export const {addNowPlayingMovies,addTrailerVideos,addPapulerMovies,addHorrorMovies,addTrandingMovies} =MoviesSlice.actions;

export default MoviesSlice.reducer;


import { createSlice } from "@reduxjs/toolkit"
const configSlice =createSlice({
name:"config",
initialState:{
lang:"en",
},
reducers:{
    LanguageChange:(state,action) =>{
    state.lang = action.payload;
    },
}, 
})
export const {LanguageChange} = configSlice.actions;
export default configSlice.reducer;
    

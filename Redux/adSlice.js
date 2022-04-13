 import { createSlice } from '@reduxjs/toolkit'; 
 const initialState={
     adEnabled:true  
 } 
    export const adSlice=createSlice({ 
    name:'ad', 
        initialState, 
        reducers:{    
 updateLastBannerAdTime:(state,{payload})=>{ 
}, 
     } 
    })
 export const {updateLastBannerAdTime} =adSlice.actions 
 export default adSlice.reducer 
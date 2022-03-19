import { createSlice } from "@reduxjs/toolkit";
const initialState = {

  collections:{
    personal:[
      {
        quote: "I will live a life of intention",
        author:'Aziz Booker'    
      }
    ]
  }
};




export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    AddQuote: (state, { payload }) => {
      
    },
    EditQuote: (state, { payload }) => {
      
    },
    DeleteQuote: (state, { payload }) => {
      
    },
    AddCollection: (state, { payload }) => {
      
    },
    EditCollection: (state, { payload }) => {
      
    },
    DeleteCollection: (state, { payload }) => {
      
    },
    
    
    
  },
});
export const { AddQuote,EditQuote,DeleteQuote,AddCollection,EditCollection,RemoveCollection } = rootSlice.actions;
export default rootSlice.reducer;

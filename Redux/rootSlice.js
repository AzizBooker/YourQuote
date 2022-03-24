import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  collections: [
    
    {
      name:'personal',
      uuid: "1010",
      quotes: [
        {
          uuid:'11141',
          quote: "I will live a life of intention",
          author: "Aziz Booker",
        },
      ],
    },
    {
      name:'space',
      uuid: "1010",
      quotes: [
       
      ],
    },
  {
      name:'philosophy',
      uuid: "1011",
      quotes: [
        {
          uuid:'114111',
          quote: "Philosophy Quote",
          author: "Random Philosopher",
        },
        
      ],
    },
  ],
};



export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    AddQuote: (state, { payload }) => {
      console.log(payload)
      //When adding Quote trim string of whitespace
    },
    EditQuote: (state, { payload }) => {},
    DeleteQuote: (state, { payload }) => {},
    AddCollection: (state, { payload }) => {
      console.log(payload)
    },
    EditCollection: (state, { payload }) => {},
    DeleteCollection: (state, { payload }) => {},
  },
});
export const {
  AddQuote,
  EditQuote,
  DeleteQuote,
  AddCollection,
  EditCollection,
  RemoveCollection,
} = rootSlice.actions;
export default rootSlice.reducer;

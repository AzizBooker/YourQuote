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
      name:'philosophy',
      uuid: "1011",
      quotes: [
        {
          uuid:'114111',
          quote: "Philosophy Quote",
          author: "Random Philosopher",
        },
        {
          uuid:'111412',
          quote: "Philosophy Quote #2",
          author: "Random Philosopher #2",
        },
        {
          uuid:'11131',
          quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus hendrerit posuere dolor, ut posuere magna rhoncus eget"
          ,
          author: "Random Philosopher #2",
        },
        {
          uuid:'11144',
          quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus hendrerit posuere dolor, ut posuere magna rhoncus eget"
          ,
          author: "Random Philosopher #3",
        },
        {
          uuid:'1314',
          quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus hendrerit posuere dolor, ut posuere magna rhoncus eget"
          ,
          author: "Random Philosopher #4",
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
      //When adding Quote trim string of whitespace
    },
    EditQuote: (state, { payload }) => {},
    DeleteQuote: (state, { payload }) => {},
    AddCollection: (state, { payload }) => {},
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

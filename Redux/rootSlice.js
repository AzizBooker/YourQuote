import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  collections: [
    
    {
      name:'personal',
      uuid: "1010",
      quotes: [
        {
          uuid:'1111',
          quote: "I will live a life of intention",
          author: "Aziz Booker",
        },
      ],
    },
  {
      name:'philosophy',
      uuid: "1010",
      quotes: [
        {
          uuid:'1111',
          quote: "Philosophy Quote",
          author: "Random Philosopher",
        },
        {
          uuid:'1112',
          quote: "Philosophy Quote #2",
          author: "Random Philosopher #2",
        },
        {
          uuid:'1113',
          quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus hendrerit posuere dolor, ut posuere magna rhoncus eget"
          ,
          author: "Random Philosopher #2",
        },
        {
          uuid:'1114',
          quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus hendrerit posuere dolor, ut posuere magna rhoncus eget"
          ,
          author: "Random Philosopher #3",
        },
        {
          uuid:'1115',
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

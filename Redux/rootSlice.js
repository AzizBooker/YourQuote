import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  collections: [
    
    {
      name:'Default',
      uuid: "1010",
      quotes: [
        {
          uuid:"1234",
          author:"random philisopher",
          quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem",
          favorite:false
        }
        
      ],
    },
    
  ],
};



export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    AddQuote: (state, { payload }) => {
      
     state.collections[0].name 
     
    state.collections.forEach((value,index)=>{
      console.log(`v:${value.name} i:${index} `)
      if(value.name==payload.collection){
        console.log(state.collections[index].quotes)
        state.collections[index].quotes.push({uuid:payload.uuid,author:payload.author,quote:payload.quote,description:payload.description})
        console.log(state.collections[index].quotes)
      }
    })

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


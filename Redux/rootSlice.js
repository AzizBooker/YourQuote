import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  collections: [
    
  
    {
      name:'Test #1',
      uuid:'12341',
      quotes:[
        {
          uuid:"124412412",
          author:"random science guy #2 ",
          quote:"sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.",
          description:"Lorem ipsum ",
          favorite:false,
          dateCreated:'04/22/2022',
          dateLastEdited:'04/25/2022',
          tags:[]
        },
        {
          uuid:"12441jnj2",
          author:"random science guy #2 ",
          quote:" sit amet, it amet, it amet,",
          description:"Lorem ipsum ",
          favorite:false,
          dateCreated:'04/22/2022',
          dateLastEdited:'04/25/2022',
          tags:[]
        },
      ]
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
        state.collections[index].quotes.push({uuid:payload.uuid,author:payload.author.trim(),quote:payload.quote.trim(),description:payload.description.trim()})
        console.log(state.collections[index].quotes)
      }
    })

      //When adding Quote trim string of whitespace
    },
    EditQuote: (state, { payload }) => {
      state.collections.forEach((collection,collectionIndex)=>{
       
        collection.quotes.forEach((quote,quoteIndex)=>{
            state.collections[collectionIndex].quotes[quoteIndex]={...payload}
        })
        
      })
    },
    DeleteQuote: (state, { payload }) => {
      
      state.collections.forEach((collection,index)=>{
        
        if(collection.name.toLowerCase()==payload.collectionName.toLowerCase()){
         const quoteIndex= state.collections[index].quotes.findIndex(quote=>quote.uuid=payload.uuid)
         state.collections[index].quotes.splice(quoteIndex,1)
        }
      })
    },

    ToggleQuoteFavorite: (state, { payload }) => {
      state.collections.forEach((collection, collectionIndex) => {
       
        collection.quotes.forEach((quote,quoteIndex) => {
          if(quote.uuid==payload.uuid){
            state.collections[collectionIndex].quotes[quoteIndex].favorite=!state.collections[collectionIndex].quotes[quoteIndex].favorite
          }
        });
      });
    },
    AddCollection: (state, { payload }) => {
      state.collections.push({name:payload.name,uuid:payload.uuid,quotes:[]})
    },
    EditCollection: (state, { payload }) => {
      const index= state.collections.findIndex(collection=>collection.uuid==payload.uuid)
      state.collections[index].name=payload.name
    },
    DeleteCollection: (state, { payload }) => {
     const index= state.collections.findIndex(collection=>collection.uuid==payload)
      state.collections.splice(index,1)
      
    },
  },
});
export const {
  AddQuote,
  EditQuote,
  DeleteQuote,
  ToggleQuoteFavorite,
  AddCollection,
  EditCollection,
  DeleteCollection,
} = rootSlice.actions;
export default rootSlice.reducer;


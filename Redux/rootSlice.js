import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  collections: [
    
    {
      name:'All',
      uuid:'1231',
      quotes:[

      ]
      },
    {
      name:'Test',
      uuid: "1010",
      quotes: [
        {
          uuid:"121241234",
          author:"random philisopher",
          quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem",
          favorite:false,
          dateCreated:'04/22/2022',
          dateLastEdited:'04/25/2022',
          tags:[]
        },
        {
          uuid:"1241424",
          author:"random science guy #1 ",
          quote:"Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.",
          description:"Lorem ipsum ",
          favorite:false,
          dateCreated:'04/22/2022',
          dateLastEdited:'04/25/2022',
          tags:[]
        },
        {
          uuid:"12312416",
          author:"random philisopher #2",
          quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          description:"sit ametr",
          favorite:false,
          dateCreated:'04/22/2022',
          dateLastEdited:'04/25/2022',
          tags:[]
        }
        
      ],
    },
    {
      name:'Test #2',
      uuid:'12341',
      quotes:[
        {
          uuid:"124412412",
          author:"random science guy #2 ",
          quote:" sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.",
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
        state.collections[index].quotes.push({uuid:payload.uuid,author:payload.author,quote:payload.quote,description:payload.description})
        console.log(state.collections[index].quotes)
      }
    })

      //When adding Quote trim string of whitespace
    },
    EditQuote: (state, { payload }) => {},
    DeleteQuote: (state, { payload }) => {},
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
  AddCollection,
  EditCollection,
  DeleteCollection,
} = rootSlice.actions;
export default rootSlice.reducer;


  import { configureStore } from '@reduxjs/toolkit' ; 
    import rootSlice from './rootSlice'; 
    import settingsSlice from './settingsSlice';
    import adSlice from './adSlice';
    const store=configureStore({         
    reducer:{                            
      root:rootSlice,
      settings:settingsSlice ,
      adSlice:adSlice                  
    }                                    
    })                                  
 
    export default store;                
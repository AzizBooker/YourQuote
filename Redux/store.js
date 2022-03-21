  import { configureStore } from '@reduxjs/toolkit' ; 
    import rootSlice from './rootSlice'; 
    import settingsSlice from './settingsSlice';
    const store=configureStore({         
    reducer:{                            
      root:rootSlice,
      settings:settingsSlice                   
    }                                    
    })                                  
 
    export default store;                
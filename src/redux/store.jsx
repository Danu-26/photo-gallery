import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "./photoSlice";
import photoDetailsReducer from "./photoDetailsSlice"; 

const store = configureStore({
    reducer: {
        photos: photoReducer,
        photoDetails: photoDetailsReducer,  
    },
});

export default store;

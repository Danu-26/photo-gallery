import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//http://localhost:3000/photos this is my local fake api 
const API_URL = "http://localhost:3000/photos";

export const fetchPhotos = createAsyncThunk("fetchPhotos", async () => {
    const response = await axios.get(API_URL);
    // console.log(response.data); 
    return response.data.slice(0, 1050); 
});


const photoSlice = createSlice({
    name: "photos",
    initialState: { photos: [], isLoading: false, error: false },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhotos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPhotos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.photos = action.payload;
            })
            .addCase(fetchPhotos.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default photoSlice.reducer;

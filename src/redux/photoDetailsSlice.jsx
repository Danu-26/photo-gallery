import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/photos";

// Async action to fetch photo by ID
export const fetchPhotoById = createAsyncThunk("photoDetails/fetchPhotoById", async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    console.log(response.data);
    return response.data;
});

const photoDetailsSlice = createSlice({
    name: "photoDetails",
    initialState: { photo: null, isLoading: false, error: null }, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhotoById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchPhotoById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.photo = action.payload; 
            })
            .addCase(fetchPhotoById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message; 
            });
    },
});

export default photoDetailsSlice.reducer;

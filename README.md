
# Project setup
git clone https://github.com/Danu-26/photo-gallery.git
Start the project: npm run dev
Start local json server:npx json-server --watch db.json --port 3000

# Redux Setup

## Store Configuration
In this project, Redux is used to manage the app's state. I create the Redux store using `@reduxjs/toolkit`, which combines multiple reducers to handle different states:

- photosReducer: Manages the list of photos.
- photoDetailsReducer: Manages the details of one specific photo.

The store is set up like this:
- photos: Stores the list of all photos.
- photoDetails: Stores the details of a single photo.

## Creating Slices

- photoSlice: Manages fetching and displaying the list of photos. It uses createAsyncThunk to get data from the local API (`http://localhost:3000/photos`) and stores the photos, loading state, and error messages.
  
- photoDetailsSlice: Manages the state for a single photo's details. It also uses createAsyncThunk to fetch data for a photo by its ID from the same local API.

# Managing Data
With Redux, data is managed in a predictable way. Each slice handles a specific part of the state:

- photoSlice: Stores an array of photos and updates the state when the data is fetched or if there's an error.
- photoDetailsSlice: Stores details of a single photo and updates when the data is fetched by the photo ID.

In both slices, extraReducers manage the loading and error states using the `pending`, `fulfilled`, and `rejected` statuses.




import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./playlistSlice"; // Import your reducer

const store = configureStore({
  reducer: {
    playlist: playlistReducer, // Assign the reducer to "playlist" slice
  },
});

export default store;
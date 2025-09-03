import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Take Five", "Claire de Lune", "Respect"];

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addGlobalSong: (state, action) => {
      return [...state, action.payload]; // Append song immutably
    },
    removeSong: (state, action) => {
      return state.filter((song) => song !== action.payload); // Remove song immutably
    },
  },
});

export const { addGlobalSong, removeSong } = playlistSlice.actions;
export default playlistSlice.reducer;
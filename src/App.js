import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGlobalSong, removeSong } from "./playlistSlice";
import './App.css';

function App() {
  const playlist = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  const [newSong, setNewSong] = useState("");

  // Handle pressing the Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newSong.trim() !== '') {
      dispatch(addGlobalSong(newSong));
      setNewSong("");
    }
  };

  return (
    <div className="container">
      <h2>Playlist</h2>
      <ul>
        {playlist.map((song, index) => (
          <li key={index} onClick={() => dispatch(removeSong(song))}>
            {song}
          </li>
        ))}
      </ul>
      <input
        onChange={(e) => setNewSong(e.target.value)}
        value={newSong}
        onKeyPress={handleKeyPress} // Add onKeyPress handler here
      />
      <button
        onClick={() => {
          dispatch(addGlobalSong(newSong));
          setNewSong("");
        }}
      >
        Add Global Song
      </button>
    </div>
  );
}

export default App;
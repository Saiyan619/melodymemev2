import React, { useState } from "react";
import { Editor } from "primereact/editor";
import Canvas from "./Canvas";
import { MainContext } from "./Context";

export default function CustomEditor() {
  const { handleTrackCover, fetchSongs, loader } = MainContext();
  const [text, setText] = useState('');
  const [musicName, setMusicName] = useState('')
  const [artistName, setArtistName] = useState('')

  function handleMusicName(e) {
    setMusicName(e.target.value);
    console.log(musicName)
  }
  function handleArtistName(e) {
    setArtistName(e.target.value);
    console.log(artistName)
  }

  return (
      <div>
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '120px' }} />
      </div>

      <div className="flex gap-10">
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text"> Add Track Name</span>
  </div>
  <input onChange={handleMusicName}  type="text" placeholder="Blank Space " className="input input-bordered w-full max-w-xs" />
      </label>

      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Add Artiste Name</span>
  </div>
  <input onChange={handleArtistName} type="text" placeholder="e.g Taylor Swift" className="input input-bordered w-full max-w-xs" />
        </label>
      </div>
      
      <div className="flex items-center gap-5">
        <input
        onChange={handleTrackCover}
        type="text" placeholder="e.g delicate Taylor swift..."
          className="input input-bordered w-full max-w-xs mt-4" />

        <button onClick={fetchSongs}  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded font-bold" >
        <span className={`${loader} loading-spinner`}></span>
          Search Music Cover 
        </button>


      </div>

      <Canvas
        html={text}
        musicName={musicName}
        artistName={artistName}
      />
    
      </div>
    )
}
        
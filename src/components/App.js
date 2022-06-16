import React, { useEffect, useState } from 'react';
import TracksPage from './TracksPage';
import '../App.css';
import vinyl from '../assets/vinyl_PNG88.png';

function App() {
  const [deepCuts, setDeepCuts] = useState([]);
  const [addTrack, setAddTrack] = useState({});

  useEffect(() => {
    fetch('http://localhost:8001/tracks')
      .then((res) => res.json())
      .then((data) => setDeepCuts(data));
  }, [addTrack]);

  return (
    <div>
      <div className='header'>
        <img src={vinyl} alt='vinyl record' />
        <h1>Flatiron Deep Cuts</h1>
      </div>
      <TracksPage deepCuts={deepCuts} setAddTrack={setAddTrack} />
    </div>
  );
}

export default App;

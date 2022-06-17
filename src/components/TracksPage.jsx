import React, { useEffect, useState } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {

  const [songTracks, setSongTracks] = useState([])
  const [searchMusic, setSearchMusic] = useState('')

  useEffect(() => {
    fetch("http://localhost:8001/tracks")
    .then(res => res.json())
    .then(data => setSongTracks(data))
  }, [])

  function formInput(obj) {
    setSongTracks([...songTracks, obj])
  }

  function  handleMusicSearch(value) {
    setSearchMusic(value)
  }
  
  function deleteTrack(id) {
    const deletedTrack = songTracks.filter(song => song.id !== id)
    setSongTracks(deletedTrack)
  }

  return (
    <div>
      <Search onHandleMusicSearch={handleMusicSearch} />
      <AddTrackForm onFormInput={formInput}/>
      <TracksList songTracks={songTracks} searchMusic={searchMusic} onDeleteTrack={deleteTrack}/>
    </div>
  )
}

export default TracksPage
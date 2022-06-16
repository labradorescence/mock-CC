import React, { useEffect, useState } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
  const [tracks, setTracks] = useState()
  const [searchBy, setSearchBy] = useState()

  useEffect(() => {
    fetch('http://localhost:8001/tracks')
    .then(r => r.json())
    .then(d => setTracks(d))
  }, [])
  const helpSubmit = (track) => {
    setTracks([...tracks, track])
  }
  const helpSearch = (filter) => {
    setSearchBy(filter.toString())
  }
  console.log(tracks)
  return (
    <div>
      <Search helpSearch={helpSearch}/>
      <AddTrackForm helpSubmit={helpSubmit}/>
      <TracksList tracks={searchBy?tracks.filter(track=> 
        track.artist.toLowerCase().includes(searchBy) || 
        track.title.toLowerCase().includes(searchBy)):tracks}/>
    </div>
  )
}

export default TracksPage
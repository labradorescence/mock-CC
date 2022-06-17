import React from 'react'
import Track from './Track'

function TracksList({ songTracks, searchMusic, onDeleteTrack }) {

  const filteredMusic = songTracks.filter((music) => {
    return music.title.toLowerCase().includes(searchMusic.toLowerCase()) || music.artist.toLowerCase().includes(searchMusic.toLowerCase())
  } )
  
  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {filteredMusic.map(song => {
          return <Track song={song} key={song.id} onDeleteTrack={onDeleteTrack}/>
        })}
      </tbody>
    </table>
  )
}

export default TracksList
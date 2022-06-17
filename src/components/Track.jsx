import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({ song , onDeleteTrack }) {
  
  const {title, artist, BPM, image= {defaultVinyl}, id} = song

  function handleClick() {
   fetch(`http://localhost:8001/tracks/${id}`, {
      method: "DELETE"
   })
   onDeleteTrack(id)
  }

  
  return (
    <tr className="table-row" onClick={handleClick}>
        <td className="row-image">
            <img src={image} alt="title" />
        </td>
        <td className="row-title">{title}</td>
        <td>{artist}</td>
        <td>{BPM}</td>
    </tr>
  )
}

export default Track
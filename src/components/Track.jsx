import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({ song }) {
  
  const {title, artist, BPM, image= {defaultVinyl}, id} = song

  
  return (
    <tr className="table-row">
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
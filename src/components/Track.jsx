import React, { useState } from 'react';
import defaultVinyl from '../assets/vinyl_PNG111.png';

function Track({
  id,
  title,
  artist,
  BPM,
  image = defaultVinyl,
  setDeleteTrack,
}) {
  const handleDelete = (e) => {
    fetch(`http://localhost:8001/tracks/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => setDeleteTrack(data));
  };
  return (
    <tr className='table-row' id={id}>
      <td className='row-image'>
        {/* you can use the default image if no image is given */}
        <img src={image} alt='title' />
      </td>
      <td className='row-title'>{title}</td>
      <td>{artist}</td>
      <td>{BPM}</td>
      <td>
        <button onClick={handleDelete}>delete</button>
      </td>
    </tr>
  );
}

export default Track;

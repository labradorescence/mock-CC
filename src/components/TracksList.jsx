import React from 'react';
import Track from './Track';

function TracksList({ filteredData, setDeleteTrack }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>
            <h3 className='row-image'>Img</h3>
          </th>
          <th>
            <h3 className='row-title'>Title</h3>
          </th>
          <th>
            <h3 className=''>Artist</h3>
          </th>
          <th>
            <h3 className=''>BPM</h3>
          </th>
        </tr>
        {filteredData.map((track) => (
          <Track
            key={track.name}
            id={track.id}
            title={track.title}
            artist={track.artist}
            BPM={track.BPM}
            image={track.image}
            setDeleteTrack={setDeleteTrack}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TracksList;

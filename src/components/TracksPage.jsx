import React, { useState } from 'react';
import Search from './Search';
import AddTrackForm from './AddTrackForm';
import TracksList from './TracksList';

function TracksPage({ deepCuts, setAddTrack, setDeleteTrack }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = deepCuts.filter((track) => {
    return track.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return (
    <div>
      <Search setSearchQuery={setSearchQuery} />
      <AddTrackForm setAddTrack={setAddTrack} />
      <TracksList filteredData={filteredData} setDeleteTrack={setDeleteTrack} />
    </div>
  );
}

export default TracksPage;

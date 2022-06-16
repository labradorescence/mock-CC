import React, { useState } from 'react';

function AddTrackForm({ setAddTrack }) {
  const defaultFormData = {
    title: '',
    artist: '',
    BPM: '',
    image: '',
  };
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch('http://localhost:8001/tracks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => setAddTrack(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={formData.image}
          type='text'
          name='image'
          placeholder='Image URL'
          onChange={handleChange}
        />
        <input
          value={formData.title}
          type='text'
          name='title'
          placeholder='title'
          onChange={handleChange}
        />
        <input
          value={formData.artist}
          type='text'
          name='artist'
          placeholder='Artist'
          onChange={handleChange}
        />
        <input
          value={formData.BPM}
          type='number'
          name='BPM'
          placeholder='BPM'
          step='1.00'
          onChange={handleChange}
        />
      </div>
      <input className='' type='submit' value='Add Track' />
    </form>
  );
}

export default AddTrackForm;

import React, { useState } from 'react'

function AddTrackForm({helpSubmit}) {
  const defaultForm = {
    image:'',
    title:'',
    artist:'',
    BPM:''
  }
  const [formData, setFormData] = useState(defaultForm)
  const handleChange = (key, value) => {
    setFormData({...formData, [key]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8001/tracks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(r => r.json())
    .then(d => helpSubmit(d))
  }

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input value={formData.image} onChange = {(e) => handleChange(e.target.name, e.target.value)} type="text" name="image" placeholder="Image URL"/>
          <input value={formData.title} onChange = {(e) => handleChange(e.target.name, e.target.value)} type="text" name="title" placeholder="title" />
          <input value={formData.artist} onChange = {(e) => handleChange(e.target.name, e.target.value)} type="text" name="artist" placeholder="Artist" />
          <input value={formData.BPM} onChange = {(e) => handleChange(e.target.name, e.target.value)} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm
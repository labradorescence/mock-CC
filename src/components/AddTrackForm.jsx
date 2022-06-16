import React, { useState } from 'react'

function AddTrackForm({onFormInput}) {

  const starterData = {
    image:"",
    title:"",
    artist:"",
    bpm: ""
  }

  const [formData, setFormData ] = useState(starterData)

  function handleFormSubmit(e){
    e.preventDefault()
    fetch("http://localhost:8001/tracks",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accepts":  "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(newData => onFormInput(newData))
    setFormData(starterData)
  }


  function handleChange(e) {
    const { name, value }=e.target
    setFormData({...formData, [name]:value})
  }

  return (
      <form onSubmit={handleFormSubmit}>
        <div>
          <input value={formData.image} type="text" name="image" placeholder="Image URL" onChange={handleChange}/>
          <input value={formData.title} type="text" name="title" placeholder="Title" onChange={handleChange}/>
          <input value={formData.artist} type="text" name="artist" placeholder="Artist" onChange={handleChange}/>
          <input value={formData.bpm} type="number" name="BPM" placeholder="BPM" step="1.00" onChange={handleChange}/>
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm
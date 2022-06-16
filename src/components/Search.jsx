import React from 'react'

function Search({onHandleMusicSearch}) {

  function handleChange(e){
    onHandleMusicSearch(e.target.value)
  }
  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={handleChange}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search
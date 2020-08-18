import React from 'react'
import '../search/searchbar-style.css'

const SearchBar = ({ placeholder, handleSearch }) => {
  return (
    <div className='search-bar-container'>
      <input className='search-bar' type='search' placeholder={placeholder} onChange={handleSearch} />
    </div>
  )
}

export default SearchBar

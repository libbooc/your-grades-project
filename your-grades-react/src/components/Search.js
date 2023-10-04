import React from 'react'

const Search = ({ searchTerm, handleSearchChange}) => {

  return (
    <div>
      <input className='search' type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
    </div>
  )
}

export default Search
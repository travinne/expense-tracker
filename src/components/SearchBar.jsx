import React from 'react'

function SearchBar({search, setSearch}) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <> 
    <div className='searchbar'>Search bar</div>
    <input type="text" 
    placeholder='Type to search...'
     value={search} 
     onChange={handleChange} />
    </>
   
  )
}

export default SearchBar
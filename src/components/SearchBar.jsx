import React, { useState } from 'react'

function SearchBar() {
  const [input, setInput] = useState('')
  const fetchData = (value) =>{
    fetch()
  }

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }

  return (
    <> 
    <div className='sarchbar'>Search bar</div>
    <input type="text" placeholder='Type to search...' value={input} onChange={(e) => setInput(e.target.value)} />
    </>
   
  )
}

export default SearchBar
import React, { useState } from 'react'

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <form method='GET' className='flex' action={`/explorer/${query}`} >
      <input
        className='max-w-screen-xs lg:max-w-screen-lg w-screen rounded-md pl-3 py-2'
        type='text'
        placeholder='Search Block / Address / Transaction (Bitcoin and Ethereum)'
        onChange={handleChange}
        value={query}
        spellCheck={false}
      >
      </input>
    </form>
  )
}

export default Search
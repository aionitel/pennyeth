import React, { useState } from 'react'

const NFTSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <form method='GET' className='flex' action={`/nft/${query}`} >
      <input
        className='w-screen lg:max-w-screen-lg 2xl:max-w-screen-xl rounded-md pl-3 py-2'
        type='text'
        placeholder='Search NFTs'
        onChange={handleChange}
        value={query}
        spellCheck={false}
      >
      </input>
    </form>
  )
}

export default NFTSearch;
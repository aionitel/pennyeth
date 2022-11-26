import React, { useState } from 'react'

interface SearchProps {
  path: string;
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({ path, placeholder }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <form method='GET' className='flex' action={`${path}${query}`} >
      <input
        className='w-screen lg:max-w-screen-lg 2xl:max-w-screen-xl rounded-md pl-3 py-2 text-black'
        type='text'
        placeholder={placeholder}
        onChange={handleChange}
        value={query}
        spellCheck={false}
      >
      </input>
    </form>
  )
}

export default Search;
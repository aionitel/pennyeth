import React, { useState } from 'react'

const NewsSearch: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <form method='GET' className='flex' action={`/news/${query}`} >
      <input
        className='lg:max-w-screen-lg 2xl:max-w-screen-xl w-screen rounded-md pl-3 py-2 text-black'
        type='text'
        placeholder='Search News'
        onChange={handleChange}
        value={query}
        spellCheck={false}
      >
      </input>
    </form>
  )
}

export default NewsSearch;
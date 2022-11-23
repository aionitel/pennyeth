import React, { useState } from 'react'

const AssetSearch: React.FC = () => {
  const [asset, setAsset] = useState<string>("");

  const handleChange = (e) => {
    e.preventDefault();
    setAsset(e.target.value);
  }

  return (
    <form method='GET' className='flex' action={`/${asset}`} >
      <input
        className='w-screen lg:max-w-screen-lg 2xl:max-w-screen-xl rounded-md pl-3 py-2 text-black'
        type='text'
        placeholder='Search Asset (Name or Ticker, eg. "Bitcoin")'
        onChange={handleChange}
        value={asset}
        spellCheck={false}
      >
      </input>
    </form>
  )
}

export default AssetSearch;
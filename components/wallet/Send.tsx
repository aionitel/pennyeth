import React, { useState } from 'react'

const Send: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [address, setAddress] = useState<string>("");

  return (
    <div>
      <div className='flex justify-center'>
        <input
          className='bg-black text-chartGray w-36 text-5xl'
          type='number'
          step='any'
          placeholder='0'
          min='0'
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          value={amount}
          spellCheck={false}
        />
        <h1 className='text-blue text-3xl m-3'>ETH</h1>
      </div>
      <div className='flex justify-center text-xl text-chartGray'>
        <h1>To</h1>
        <input
          className='bg-black'
          type='text'
          placeholder='Address'
          min='0'
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          spellCheck={false}
        />
      </div>
    </div>
  )
}

export default Send;
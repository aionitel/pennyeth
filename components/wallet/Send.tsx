import React, { useState } from 'react'

const Send: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);

  return (
    <div>
      <div className='flex justify-center'>
        <input
          className='bg-black text-chartGray w-20'
          style={{ fontSize: 100 }}
          type='number'
          step='any'
          placeholder='0'
          min='0'
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          value={amount}
          spellCheck={false}
        />
        <h1 className='text-blue'>ETH</h1>
      </div>
    </div>
  )
}

export default Send;
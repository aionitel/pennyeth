import React, { useState } from 'react'
import { useMoralis } from "react-moralis";

const Send: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [address, setAddress] = useState<string>("");

  const { Moralis } = useMoralis();

  const handleSend = async () => {
    const tx = await Moralis.transfer({
      type: 'native',
      amount: Moralis.Units.ETH(amount === NaN ? 0 : amount),
      receiver: address
    })
  }

  return (
    <div>
      <div className='flex justify-center'>
        <input
          className='bg-black text-chartGray w-36 text-5xl'
          type='number'
          step='any'
          placeholder='0'
          min={0}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          value={amount}
          spellCheck={false}
        />
        <h1 className='text-blue text-3xl m-3'>ETH</h1>
      </div>
      <div className='flex justify-between mx-4 py-2 text-xl text-chartGray mt-16'>
        <h1>To</h1>
        <input
          className='bg-black px-2 text-white border-2 border-almostBlack rounded-md 2xl:w-72'
          type='text'
          placeholder='Address'
          min='0'
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          spellCheck={false}
        />
      </div>
      <div className='flex justify-center mt-3 2xl:mt-20'>
        <button 
          className='bg-blue text-white text-center mt-5 py-5 px-7 hover:scale-105 transition-all rounded-2xl text-base hover:rounded-none duration-300'
          onClick={handleSend}
        >
          <h1>Send</h1>
        </button>
      </div>
    </div>
  )
}

export default Send;
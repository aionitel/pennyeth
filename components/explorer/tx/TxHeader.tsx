import React from 'react'
import { Tx } from '../../../data/utils/types';

interface TxHeaderProps {
  tx: Tx;
}

const TxHeader:React.FC<TxHeaderProps> = ({ tx }) => {
  return (
    <div className='w-screen lg:max-w-screen-lg 2xl:max-w-screen-xl'>
      <div className='flex-row lg:flex text-3xl mt-7 lg:ml-8 ml-4 text-white'>
        <h1 className='mr-2'>Transaction</h1>
        <h1>{tx.ticker === 'eth' ? '0x' : null}{tx.hash.slice(0, 15)}...</h1>
      </div>
      <div className='text-chartGray mt-8 lg:ml-8 ml-4'>
        {
          tx.ticker === 'btc' 
          ? <p>This transaction was first broadcast to the Bitcoin network on {new Date(tx.dateReceived).toDateString()} at {new Date(tx.dateReceived).toLocaleTimeString()}.
              It currently has {tx.confirmations.toLocaleString()} confirmations on the blockchain. </p>
          : <p>This transaction was first broadcast to the Ethereum network on {new Date(tx.dateReceived).toDateString()} at {new Date(tx.dateReceived).toLocaleTimeString()}.
          It currently has {tx.confirmations.toLocaleString()} confirmations on the blockchain. </p>
        }
      </div>
    </div>
  )
}

export default TxHeader
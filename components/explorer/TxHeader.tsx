import React, { Dispatch, SetStateAction, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

interface Tx {
  type: string;
  ticker: string;
  hash: string;
  fees: number;
  inputs: any;
  outputs: any;
  dateReceived: string;
  dateConfirmed: string;
  confirmations: string;
  block: string;
}

interface TxHeaderProps {
  tx: Tx;
}

const TxHeader:React.FC<TxHeaderProps> = ({ tx }) => {
  const [textOpen, setTextOpen] = useState<boolean>(false);
  
  return (
    <div className='max-w-screen-lg w-screen'>
      <div className='flex-row text-white'>
        <div className='flex text-3xl mt-7 ml-8'>
          <h1 className='mr-2'>Transaction</h1>
          <h1 style={{ display: textOpen ? 'none' : 'block' }}>{tx.hash.slice(0, 15)}</h1>
          <h1 className='lg:hidden block'>...</h1>
          <h1 className='hover:cursor-pointer hidden lg:block' onClick={() => setTextOpen(true)} style={{ display: textOpen ? 'none' : 'block'}}>...</h1>
          <h1 className='hidden lg:block' style={{ display: textOpen ? 'block' : 'none' }}>{tx.hash}</h1>
          <IoMdClose className='mt-1 ml-1 hidden lg:block hover:cursor-pointer hover:scale-110 transition-all' onClick={() => setTextOpen(false)} style={{ display: textOpen ? 'block' : 'none'}} />
        </div>
      </div>
      <div className='text-chartGray mt-8 ml-8'>
        <p>This transaction was first broadcast to the Bitcoin network on {new Date(tx.dateReceived).toDateString()} at {new Date(tx.dateReceived).toLocaleTimeString()}.
            It currently has {tx.confirmations.toLocaleString()} confirmations on the blockchain.
            The transaction was confirmed on {new Date(tx.dateConfirmed).toDateString()} at {new Date(tx.dateConfirmed).toLocaleTimeString()}.
        </p>
      </div>
    </div>
  )
}

export default TxHeader
import React from 'react'

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
  size: number;
}

interface TxHeaderProps {
  tx: Tx;
}

const TxHeader:React.FC<TxHeaderProps> = ({ tx }) => {
  return (
    <div className='max-w-screen-lg w-screen'>
      <div className='flex-row lg:flex text-3xl mt-7 lg:ml-8 ml-4 text-white'>
        <h1 className='mr-2'>Transaction</h1>
        <h1>{tx.hash.slice(0, 15)}...</h1>
      </div>
      <div className='text-chartGray mt-8 lg:ml-8 ml-4'>
        <p>This transaction was first broadcast to the Bitcoin network on {new Date(tx.dateReceived).toDateString()} at {new Date(tx.dateReceived).toLocaleTimeString()}.
            It currently has {tx.confirmations.toLocaleString()} confirmations on the blockchain.
            The transaction was confirmed on {new Date(tx.dateConfirmed).toDateString()} at {new Date(tx.dateConfirmed).toLocaleTimeString()}.
        </p>
      </div>
    </div>
  )
}

export default TxHeader
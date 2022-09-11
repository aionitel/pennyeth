import React from 'react'
import { ImArrowRight } from 'react-icons/im'

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

interface TxSummaryProps {
  tx: Tx
}

const TxSummary: React.FC<TxSummaryProps> = ({ tx }) => {
  return (
    <>
    <div className='mt-10 ml-8'>
      <b className='text-chartGray text-3xl'>Summary</b>
    </div>
      <div className='flex text-white my-6 ml-8'>
        <h1 className='text-chartGray'>Fee</h1>
        <h1 className='ml-12 mr-1'>{tx.fees}</h1>
        <h1>{tx.ticker.toUpperCase()}</h1>
      </div>
      <div className='flex justify-between text-white ml-8'>
        <div>
          {
              tx.inputs.hasOwnProperty("addresses") ? tx.inputs.map(item => (
              <h1 key=''>
                {item.addresses[0]}
              </h1>
            ))
            : <div className="flex"><h1 className='text-green-400 mr-1'>COINBASE</h1><h1>(Newly Generated Coins)</h1></div>
          }
        </div>
        <ImArrowRight />
        <div>
          {
            tx.outputs.map(item => (
              <h1 key=''>
                {item.addresses[0]}
              </h1>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default TxSummary
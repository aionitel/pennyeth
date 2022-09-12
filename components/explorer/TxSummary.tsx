import Link from 'next/link';
import React from 'react'
import { ImArrowRight, ImArrowDown } from 'react-icons/im'

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
  size: number;
}

interface TxSummaryProps {
  tx: Tx
}

const TxSummary: React.FC<TxSummaryProps> = ({ tx }) => {
  console.log(tx)
  return (
    <>
    <div className='mt-10 lg:ml-8 ml-4'>
      <b className='text-white text-3xl'>Summary</b>
    </div>
      <div className='flex text-chartGray my-6 lg:ml-8 ml-4'>
        <h1 className='text-chartGray'>Fee</h1>
        <h1 className='ml-12 mr-1'>{tx.fees}</h1>
        <h1>{tx.ticker.toUpperCase()}</h1>
      </div>
      <div className='flex-row lg:flex justify-between text-white lg:ml-8 ml-4'>
          {
              tx.inputs[0].output_index !== -1 ? tx.inputs.map(item => (
              <Link href={`/address/${item.addresses[0]}?ticker=${tx.ticker}`} passHref>
                <h1 key='' className='text-blue hover:cursor-pointer hover:underline hover:opacity-[0.9]'>
                  {item.addresses[0]}
                </h1>
              </Link>
            ))
            : <div className="flex"><h1 className='text-green-400 mr-1'>COINBASE</h1><h1>(Newly Generated Coins)</h1></div>
          }
        <ImArrowRight className='hidden lg:block text-xl' />
        <ImArrowDown className='lg:hidden block text-xl' />
        <div>
          {
            tx.outputs.map(item => (
              <Link href={`/address/${item.addresses[0]}?ticker=${tx.ticker}`} passHref>
                <h1 key='' className='text-blue hover:cursor-pointer hover:underline hover:opacity-[0.9]'>
                  {item.addresses[0]}
                </h1>
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default TxSummary
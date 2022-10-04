import React from 'react'
import Link from 'next/link';
import { ImArrowRight } from 'react-icons/im'
import { Tx } from '../../../data/utils/types'

interface BtcTxSummaryProps {
  tx: Tx
}

const BtcTxSummary: React.FC<BtcTxSummaryProps> = ({ tx }) => {
  return (
    <>
    <div className='mt-10 lg:ml-8 ml-4'>
      <b className='text-white text-3xl'>Summary</b>
    </div>
      <div className='flex text-chartGray my-5 lg:ml-8 ml-4'>
        <h1 className='text-chartGray'>Fee</h1>
        <h1 className='ml-12 mr-1'>{tx.fees * 0.00000001}</h1>
        <h1>{tx.ticker.toUpperCase()}</h1>
      </div>
      <div className='flex text-chartGray lg:ml-8 ml-4 mb-5'>
        <h1>Total</h1>
        <h1 className='ml-8'>{tx.total * 0.00000001} {tx.ticker.toUpperCase()}</h1>
      </div>
      <div className='flex-row lg:flex justify-between text-white lg:ml-8 ml-4'>
        <div className='flex-row'>
          <h1 className='block lg:hidden'>From</h1>
          {
              tx.inputs[0].output_index !== -1 ? tx.inputs.map(item => (
              <div className='flex'>
                <Link href={`/explorer/address/${item.addresses[0]}?ticker=${tx.ticker}`} passHref>
                  <div>
                    <h1 key='' className='text-blue hover:cursor-pointer hover:underline hover:opacity-[0.9] hidden lg:block'>
                      {tx.ticker === 'eth' ? '0x' : null}{item.addresses[0]}
                    </h1>
                    <h1 key='' className='text-blue hover:cursor-pointer hover:underline hover:opacity-[0.9] block lg:hidden'>
                      {tx.ticker === 'eth' ? '0x' : null}{item.addresses[0].slice(0, 30)}...
                    </h1>
                  </div>
                </Link>
                <h1 className='text-chartGray ml-2'>{item.output_value * 0.00000001} BTC</h1>
              </div>
            ))
            : <div className="flex"><h1 className='text-green-400 mr-1'>COINBASE</h1><h1>(Newly Generated Coins)</h1></div>
          }
          </div>
        <ImArrowRight className='hidden lg:block text-xl' />
        <div>
          {
            tx.outputs.map(item => (
              <div className='flex'>
                <Link href={`/explorer/address/${item.addresses[0]}?ticker=${tx.ticker}`} passHref>
                  <div>
                  <h1 key='' className='text-blue hover:cursor-pointer hover:underline hover:opacity-[0.9] hidden lg:block'>
                    {tx.ticker === 'eth' ? '0x' : null}{item.addresses[0]}
                    </h1>
                    <h1 key='' className='text-blue hover:cursor-pointer hover:underline hover:opacity-[0.9] block lg:hidden'>
                      {tx.ticker === 'eth' ? '0x' : null}{item.addresses[0].slice(0, 30)}...
                    </h1>
                  </div>
                </Link>
                <h1 className='text-chartGray ml-2'>{item.value * 0.00000001} BTC</h1>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default BtcTxSummary;
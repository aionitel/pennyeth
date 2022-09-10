import Link from 'next/link';
import React from 'react'
import { ImArrowRight } from 'react-icons/im'

const TxCard: React.FC = ({ tx }: any) => {
  console.log(tx)
  return (
    <div className='border-2 border-dashed rounded-sm p-2'>
      <div className='flex justify-between'>
        <h1>Hash</h1>
        <Link href={`/tx/${tx.hash}`} passHref>
          <h1 className='text-blue hover:underline hover:cursor-pointer hover:opacity-[0.9]'>{tx.hash}</h1>
        </Link>
      </div>
      <div className='flex justify-between'>
        {
          tx.inputs[0].output_index === -1 ? <h1 className='text-green-400'>COINBASE</h1> : <h1>{tx.inputs[0]}</h1>
        }
        <ImArrowRight />
        <div>
          {
            tx.outputs[0].addresses[0]
          }
        </div>
      </div>
    </div>
  ) 
}

export default TxCard;
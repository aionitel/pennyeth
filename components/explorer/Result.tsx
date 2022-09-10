import React from 'react'
import { SiHiveBlockchain } from 'react-icons/si'
import { BsCreditCard } from 'react-icons/bs'
import Link from 'next/link'
import { MdAccountBalance } from 'react-icons/md'

const Result: React.FC = ({ data }: any) => {
  return (
    <Link href={{
      pathname: data.type === 'Block' ? `/block/${data.hash}` : data.type === 'Address' ? `/address/${data.address}` : `/tx/${data.hash}`,
      query: {
        ticker: data.ticker
      }
    }}
      passHref
    >
      <div className='flex text-white border p-5 hover:cursor-pointer hover:bg-almostBlack transition-all duration-300'>
        {
          data.type === 'Block' ? <SiHiveBlockchain className='text-3xl' /> : null
        }
        {
          data.type === 'Address' ? <MdAccountBalance className='text-3xl' /> : null
        }
        {
          data.type === 'Transaction' ? <BsCreditCard className='text-3xl' /> : null
        }
        <div className='flex mt-1 mx-3'>
          <h1 className='text-medGray'>{data.ticker.toUpperCase()}</h1>
          <h1 className='ml-8 mr-1'>{data.type}</h1>
        </div>
      </div>
    </Link>
  )
}

export default Result;
import React from 'react'
import Link from 'next/link'
import { FaWallet } from 'react-icons/fa'
import { SiDatabricks } from 'react-icons/si'
import { BiTransfer } from 'react-icons/bi'

interface ResultProps {
  data: any;
}

const Result: React.FC<ResultProps> = ({ data }) => {
  return (
    <Link href={{
      pathname: data.type === 'Block' ? `/block/${data.hash}` : data.type === 'Address' ? `/address/${data.address}` : `/tx/${data.hash}`,
      query: {
        ticker: data.ticker
      }
    }}
      passHref
    >
      <div className='flex text-white border p-5 hover:cursor-pointer hover:bg-almostBlack transition-all duration-300 w-screen lg:max-w-screen-lg 2xl:max-w-screen-xl'>
        {
          data.type === 'Block' ? <SiDatabricks className='text-2xl' /> : null
        }
        {
          data.type === 'Address' ? <FaWallet className='text-2xl' /> : null
        }
        {
          data.type === 'Transaction' ? <BiTransfer className='text-2xl' /> : null
        }
        <div className='flex mx-3'>
          <h1 className='text-medGray'>{data.ticker.toUpperCase()}</h1>
          <h1 className='ml-8 mr-1'>{data.type}</h1>
        </div>
      </div>
    </Link>
  )
}

export default Result;
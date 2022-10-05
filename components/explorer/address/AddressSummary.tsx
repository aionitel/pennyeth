import React from 'react'
import { FaClipboard } from 'react-icons/fa';
import { Address } from '../../../data/utils/types';

interface AddressSummaryProps {
  address: Address
}

const AddressSummary: React.FC<AddressSummaryProps> = ({ address }) => {
  return (
    <div className='lg:flex justify-center flex-row my-10'>
      <div className='border-2 border-almostBlack rounded p-8 mr-20'>
        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${address.address}`} width={200} />
      </div>
      <div className='text-chartGray'>
        <div className='flex justify-between border-b pb-2'>
          <h1 className='mr-20'>Address</h1>
          <div className='ml-20 flex'>
            <h1 className='hidden lg:block'>{address.address}</h1>
            <h1 className='lg:hidden block'>{address.address.slice(0, 10)}</h1>
            <FaClipboard className='ml-2 mt-0.5 hover:text-blue hover:cursor-pointer' onClick={() => {
              navigator.clipboard.writeText(address.address)
            }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressSummary;
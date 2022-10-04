import React from 'react'
import { Address } from '../../../data/utils/types';

interface AddressSummaryProps {
  address: Address
}

const AddressSummary: React.FC<AddressSummaryProps> = ({ address }) => {
  return (
    <div className='lg:flex justify-center flex-row'>
      <div className='border-2 border-almostBlack rounded p-8'>
        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${address.address}`} width={200} />
      </div>
      <div className='text-chartGray'>
        <div className='flex justify-between'>
          <h1 className='mr-20'>Address</h1>
          <div className='ml-20'>
            <h1 className='hidden lg:block'>{address.address}</h1>
            <h1 className='lg:hidden block'>{address.address.slice(0, 10)}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressSummary;
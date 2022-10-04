import React from 'react'
import { Address } from '../../../data/utils/types';

interface AddressSummaryProps {
  address: Address
}

const AddressSummary: React.FC<AddressSummaryProps> = ({ address }) => {
  return (
    <div className='flex justify-center'>
      <div className='border-2 border-almostBlack rounded p-8'>
        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${address.address}`} width={200} />
      </div>
      <div>
        hello
      </div>
    </div>
  )
}

export default AddressSummary;
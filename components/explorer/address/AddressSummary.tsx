import React from 'react'
import { FaClipboard } from 'react-icons/fa';
import { Address } from '../../../data/utils/types';

interface AddressSummaryProps {
  address: Address
}

const AddressSummary: React.FC<AddressSummaryProps> = ({ address }) => {

  const price_formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

  return (
    <div className='lg:flex justify-center flex-row my-10'>
      <div className='border-2 border-almostBlack rounded p-8 lg:mr-20'>
        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${address.address}`} width={200} />
      </div>
      <div className='text-chartGray flex-row justify-between mt-5'>
        <div className='flex border-b pb-2 justify-between'>
          <h1>Address</h1>
          <div className='flex'>
            <h1 className='hidden lg:block'>{address.address}</h1>
            <h1 className='lg:hidden block'>{address.address.slice(0, 10)}</h1>
            <FaClipboard className='ml-2 mt-0.5 hover:text-blue hover:cursor-pointer' onClick={() => {
              navigator.clipboard.writeText(address.address)
            }} />
          </div>
        </div>
        <div className='flex justify-between py-3 border-b'>
          <h1>Transactions</h1>
          <h1>{address.n_txs.toLocaleString()}</h1>
        </div>
        <div className='flex justify-between py-3 border-b'>
          <h1>Total Received</h1>
          <h1>{price_formatter.format(address.totalReceived * 0.00000001)} BTC</h1>
        </div>
        <div className='flex justify-between py-3 border-b'>
          <h1>Total Sent</h1>
          <h1>{price_formatter.format(address.totalSent * 0.00000001)} BTC</h1>
        </div>
        <div className='flex justify-between py-3'>
          <h1>Final Balance</h1>
          <h1>{price_formatter.format(address.balance * 0.00000001)} BTC</h1>
        </div>
      </div>
    </div>
  )
}

export default AddressSummary;
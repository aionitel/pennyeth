import React from 'react'
import { useRecoilValue } from 'recoil';
import { Address } from '../../../data/utils/types';
import { allAssetsAtom } from '../../../state/atoms';

interface AddressHeaderProps {
  address: Address
}

const AddressHeader: React.FC<AddressHeaderProps> = ({ address }) => {
  const allAssets = useRecoilValue(allAssetsAtom);

  const price_formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

  return (
    <div>
      <h1 className='text-3xl mt-7 lg:ml-8 ml-4 text-white'>Address {address.address.slice(0, 20)}...</h1>
      <p className='text-chartGray mt-8 lg:ml-8 ml-4'>This address has received a total of {address.totalReceived * 0.00000001} BTC (${price_formatter.format(address.totalReceived * 0.00000001 * allAssets[0].price)}) and has sent a total of {address.totalSent * 0.00000001} BTC (${price_formatter.format(address.totalSent * 0.00000001 * allAssets[0].price)}). The current balance of this address is {address.balance * 0.00000001} BTC (${price_formatter.format(address.balance * 0.00000001 * allAssets[0].price)}).</p>
    </div>
  )
}

export default AddressHeader;
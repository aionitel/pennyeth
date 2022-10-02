import React from 'react'
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../state/atoms';

const Receive: React.FC = () => {
  const user = useRecoilValue(userAtom);

  return (
    <div>
      <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user}`} width={250} className='py-10' />
      <h1 className='text-chartGray py-10 border-t border-chartGray'>ETH address: {user}</h1>
    </div>
  )
}

export default Receive;
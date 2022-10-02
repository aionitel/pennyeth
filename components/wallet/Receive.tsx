import React from 'react'
import ReactTooltip from 'react-tooltip';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../state/atoms';

const Receive: React.FC = () => {
  const user = useRecoilValue(userAtom);

  return (
    <div>
      <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user}`} width={180} className='pb-10 ml-2' />
      <div data-tip={(<div>this is a tip</div>)}
        className='text-chartGray py-10 border-t border-chartGray text-xs'> ETH Address: {user.slice(0, 5)}...{user.slice(10, 15)}
      </div>
      <ReactTooltip place='right'>
        <h1>{user}</h1>
      </ReactTooltip>
    </div>
  )
}

export default Receive;
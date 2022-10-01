import React from 'react'
import { motion } from 'framer-motion';
import Transfer from './Transfer';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../state/atoms';
import ReactTooltip from 'react-tooltip';
import { AiFillCloseCircle } from 'react-icons/ai'

const LoggedInHeader: React.FC = () => {
  const [user, setUser] = useRecoilState(userAtom);

  return (
    <motion.div>
      <div className='flex justify-center mr-6'>
        <h1><p className='text-green-400 text-center'>Wallet Connected</p><p>{user.slice(0, 8)}...{user.slice(10, 18)}</p></h1>
        <div className='flex pl-5 pt-4 text-2xl decoration-red' data-tip={(<div>this is a tip</div>)}>
            <AiFillCloseCircle className='text-rose-500 hover:opacity-[0.9] hover:cursor-pointer' onClick={() => setUser("")} />
        </div>
          <ReactTooltip place='right'>
            <h1>Disconnect wallet from PennyETH.</h1>
          </ReactTooltip>
      </div>
      <Transfer />
    </motion.div>
  )
}

export default LoggedInHeader;
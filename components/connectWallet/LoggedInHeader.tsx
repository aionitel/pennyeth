import React from 'react'
import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../state/atoms';
import Transfer from './Transfer';

const LoggedInHeader: React.FC = () => {
  const user = useRecoilValue(userAtom);

  return (
    <motion.div
      className='mt-10'
    >
      <div>
        <h1><p className='text-green-400'>Wallet Connected</p>  {user.slice(0, 20)}</h1>
      </div>
      <Transfer />
    </motion.div>
  )
}

export default LoggedInHeader;
import React from 'react'
import { motion } from 'framer-motion';
import Transfer from './Transfer';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../state/atoms';
import ReactTooltip from 'react-tooltip';
import { AiFillCloseCircle } from 'react-icons/ai'
import { useToasts } from 'react-toast-notifications';
import { useMoralis } from 'react-moralis';

const LoggedInHeader: React.FC = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const { addToast } = useToasts();
  const { logout } = useMoralis();

  const handleLogout = () => {
    setUser("")

    logout();

    addToast("Disconnected wallet from PennyETH.", {
      appearance: 'info',
      autoDismiss: true
    })
  }

  return (
    <motion.div>
      <div className='flex justify-center mr-6'>
        <h1><p className='text-green-400 text-center text-sm'>Wallet Connected</p><p>{user.slice(0, 8)}...{user.slice(10, 18)}</p></h1>
        <div className='flex ml-7 mt-2 text-2xl' data-tip={(<div>this is a tip</div>)}>
            <AiFillCloseCircle className='text-rose-500 hover:opacity-[0.9] hover:cursor-pointer' onClick={() => handleLogout()} />
        </div>
          <ReactTooltip place='right'>
            <h1>Disconnect wallet from PennyETH.</h1>
          </ReactTooltip>
      </div>
      <div className='mt-8'>
        <Transfer />
      </div>
    </motion.div>
  )
}

export default LoggedInHeader;
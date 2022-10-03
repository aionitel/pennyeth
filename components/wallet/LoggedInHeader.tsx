import React from 'react'
import { motion } from 'framer-motion';
import Transfer from './Transfer';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../state/atoms';
import ReactTooltip from 'react-tooltip';
import { AiFillCloseCircle } from 'react-icons/ai'
import { useToasts } from 'react-toast-notifications';
import { useMoralis } from 'react-moralis';
import Wallet from './Wallet';

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
      <Wallet />
      <div className='mt-8'>
        <Transfer />
      </div>
    </motion.div>
  )
}

export default LoggedInHeader;
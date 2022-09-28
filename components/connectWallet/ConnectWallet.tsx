import React from 'react'
import { motion } from 'framer-motion'
import { AiFillQuestionCircle } from 'react-icons/ai'
import ReactTooltip from 'react-tooltip'
import { useMoralis } from 'react-moralis'
import { useRecoilState } from 'recoil'
import { userAtom } from '../../state/atoms'

// Connect button that allows for user to connect eth or sol wallet with modal

const ConnectWallet: React.FC = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  const handleLogin = async () => {
    if (!isAuthenticated) {
      await authenticate()
        .then(function(user) {
          
        })
    }
  }

  return (
    <>
      <motion.div
      >
        <div className='flex items-center'>
          <button 
            className='bg-blue text-white text-center mt-5 py-5 px-7 hover:scale-105 transition-all rounded-2xl text-base ml-8 hover:rounded-none duration-300'
            onClick={() => handleLogin()}
          >
            <h1>Connect Wallet</h1>
          </button>
          <div className='flex pl-5 pt-4 text-2xl decoration-red' data-tip={(<div>this is a tip</div>)}>
            <AiFillQuestionCircle className='text-lightgray'  />
          </div>
          <ReactTooltip place='right'>
            <h1>
              Connect your <br /> Metamask Ethereum <br /> wallet to have full <br /> functionality.
            </h1>
          </ReactTooltip>
        </div>
      </motion.div>
    </>
  )
}

export default ConnectWallet
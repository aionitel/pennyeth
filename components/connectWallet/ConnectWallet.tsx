import React, { useState } from 'react'
import Modal from 'react-modal'
import Metmask from './connectCrypto/Metmask'
import WalletConnect from './connectCrypto/WalletConnect'
import PhantomWallet from './connectCrypto/PhantomWallet'
import { motion } from 'framer-motion'
import { AiFillQuestionCircle } from 'react-icons/ai'
import ReactTooltip from 'react-tooltip'

// Connect button that allows for user to connect eth or sol wallet with modal

const ConnectWallet: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
      >
        <div className='flex items-center'>
          <button 
            className='bg-blue text-white text-center mt-5 py-5 px-7 hover:scale-105 transition-all rounded-2xl text-base ml-8 hover:rounded-none duration-200'
            onClick={() => setModalOpen(true)}
          >
            <h1>Connect Wallet</h1>
          </button>
          <div className='flex pl-5 pt-4 text-2xl decoration-red' data-tip={(<div>this is a tip</div>)}>
            <AiFillQuestionCircle className='text-lightgray'  />
          </div>
          <ReactTooltip place='right'>
            <h1>
              Connect your <br /> Ethereum or Solana <br /> wallet to have full <br /> functionality.
            </h1>
          </ReactTooltip>
        </div>
      </motion.div>
      <Modal
        className='flex-col justify-center hidden lg:flex'
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.10)',
            opacity: typeof window !== 'undefined' && screen.width < 1200 ? 1 : 1
          },
          content: {
            position: 'absolute',
            top: '230px',
            bottom: '270px',
            left: '500px',
            right: '500px',
            border: '1px solid #ccc',
            background: 'black',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '20px',
            outline: 'none',
            opacity: typeof window !== 'undefined' && screen.width < 1200 ? 1 : 1
          }
        }}
        >
        <Metmask />
        <PhantomWallet />
        <WalletConnect />
      </Modal>
    </>
  )
}

export default ConnectWallet
import React, { useState } from 'react'
import { currUserAtom } from '../../state/atoms'
import { useRecoilState } from 'recoil'
import Modal from 'react-modal'

// when user has connected wallet, show wallet address in navbar

const LoggedInHeader = () => {
  const [user, setUser] = useRecoilState(currUserAtom)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  
  return (
    <div className='text-white border border-white rounded-3xl opacity-1'>
      <h1 className='text-green-500'>Connected</h1>
      <h1>{user.slice(0, 10)}</h1>
      <button onClick={() => setModalOpen(true)}>
        <h1>Logout</h1>
      </button>
      <Modal
        isOpen={modalOpen}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.10)',
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
          }
        }}
        >
        <h1>Logout?</h1>
        <button 
          onClick={() => {
            setModalOpen(false)
            setUser("")
          }} 
          className='bg-red rounded-lg'>
          <h1>Yes</h1>
        </button>
    </Modal>
    </div>
  )
}

export default LoggedInHeader
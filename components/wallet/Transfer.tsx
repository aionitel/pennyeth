import React, { useState } from 'react'
import Modal from 'react-modal'

const Transfer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isSend, setIsSend] = useState<boolean>(true);

  return (
    <>
      <div 
        className='
          bg-blue 
          text-white 
          text-center 
          py-5 
          hover:scale-105 
          transition-all 
          rounded-2xl 
          text-base 
          hover:cursor-pointer
          hover:rounded-none 
          duration-300
          mr-12
          ml-6
          '
        onClick={() => setModalOpen(true)}
      >
        <h1>Send / Receive</h1>
      </div>
      <Modal
        className='flex justify-center'
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
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            opacity: typeof window !== 'undefined' && screen.width < 1200 ? 1 : 1
          },
          content: {
            position: 'absolute',
            top: '100px',
            bottom: '140px',
            left: '500px',
            right: '500px',
            border: '2px solid #141414',
            background: 'black',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            opacity: typeof window !== 'undefined' && screen.width < 1200 ? 1 : 1
          }
        }}
        >
          <div>
            <div className='text-chartGray flex justify-between text-3xl'>
              <button onClick={() => setIsSend(true)} className={`w-52 ${isSend ? null : 'border-b-2'}`}>Send</button>
              <button onClick={() => setIsSend(false)} className={`w-56 border-l-2 py-4 ${isSend ? 'border-b-2' : null }`}>Receive</button>
            </div>
            <div>

            </div>
          </div>
      </Modal>
    </>
  )
}

export default Transfer;
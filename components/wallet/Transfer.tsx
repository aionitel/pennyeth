import React, { useState } from 'react'
import Modal from 'react-modal'

const Transfer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            opacity: typeof window !== 'undefined' && screen.width < 1200 ? 1 : 1
          },
          content: {
            position: 'absolute',
            top: '230px',
            bottom: '270px',
            left: '500px',
            right: '500px',
            border: '1px solid #141414',
            background: 'black',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            opacity: typeof window !== 'undefined' && screen.width < 1200 ? 1 : 1
          }
        }}
        >
          <div>
            <div className='flex text-chartGray text-2xl border-b border-chartGray py-4'>
              <button className='px-20'>Send</button>
              <button className='px-20'>Receive</button>
            </div>
          </div>
      </Modal>
    </>
  )
}

export default Transfer;
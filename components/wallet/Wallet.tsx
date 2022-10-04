import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { userAtom } from '../../state/atoms';
import Modal from 'react-modal'
import Link from 'next/link';
import axios from 'axios';
import { useMoralis } from 'react-moralis';

const Wallet: React.FC = () => {
  const [user, setUser] = useRecoilState(userAtom);

  const { logout } = useMoralis();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>();

  // fetch user's eth balance to be shown on this modal
  const fetchBalance = async () => {
    const url = `https://deep-index.moralis.io/api/v2/${user}/balance`

    const { data : res } = await axios.get(url, {
      headers: {
        'X-API-KEY': process.env.NEXT_PUBLIC_NFT_KEY as string,
      }
    });

    setBalance(res.balance);
  }

  useEffect(() => {
    fetchBalance();
  })

  return (
    <>
      <div className='flex justify-center rounded-2xl mr-6 hover:opacity-[0.8] hover:cursor-pointer' onClick={() => setModalOpen(true)}>
        <h1><p className='text-green-400 text-center text-sm'>Wallet Connected</p><p className='text-lg'>{user.slice(0, 8)}...{user.slice(10, 18)}</p></h1>
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
            top: '180px',
            bottom: '220px',
            left: '500px',
            right: '500px',
            border: '2px solid #202020',
            background: 'black',
            overflow: 'auto',
            borderRadius: 5,
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            opacity: typeof window !== 'undefined' && screen.width < 1200 ? 1 : 1
            }
          }}
        >
        <div>
          <div className='text-chartGray lg:text-xs 2xl:text-2xl flex mt-8'>
            <h1>ETH Address: </h1>
            <Link href={`/explorer/address/${user}`}>
              <h1 className='text-blue ml-1 hover:underline hover:opacity-[0.9] hover:cursor-pointer'>{user}</h1>
            </Link>
          </div>
          <div className='ml-12 mt-4 2xl:ml-20 2xl:pl-20'>
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user}`} 
              width={225} 
              className='ml-4 2xl:ml-20 2xl:my-12'
            />
          </div>
          <div className='text-chartGray text-center flex justify-center my-3 2xl:my-12'>
            <h1>Balance:</h1>
            <h1 className='ml-1 text-blue'>{balance / 1000000000000000000} ETH</h1>
          </div>
          <div 
            className='bg-red flex justify-center text-white py-4 mx-20 hover:cursor-pointer hover:scale-105 transition-all rounded-2xl text-base hover:rounded-none duration-300'
            onClick={() => {
              setUser("");
              logout();
            }}
          >
            <h1>Logout</h1>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Wallet;
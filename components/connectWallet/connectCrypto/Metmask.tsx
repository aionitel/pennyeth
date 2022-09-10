import React from 'react'
import { useMoralis } from 'react-moralis'
import { useRecoilState } from 'recoil'
import { currUserAtom } from '../../../state/atoms'
import Image from 'next/image'
import { useToasts } from 'react-toast-notifications'

const Metmask: React.FC = () => {
  const { Moralis, isAuthenticated, user: MoralisUser } = useMoralis()

  const [user, setUser] = useRecoilState(currUserAtom)
  const { addToast } = useToasts() // for showing notifications

  const logoSize = 39; // metamask image size

  const handleLogin = async () => {
    const user = await Moralis.authenticate()

    if (!user) {
      addToast("Couldn't login with Metamask", {
        appearance: 'warning',
        autoDismiss: true,
      })
    }

    setUser(user?.get("ethAddress"))

    addToast(`Logged in with Metamask, your wallet address: ${user?.get("ethAddress")}`, {
      appearance: 'success',
      autoDismiss: true,
    })
  }

  return (
    <button
      onClick={() => handleLogin()}
      className='
      flex
      bg-gray 
      text-white 
      text-center 
      mx-14
      my-2
      py-2 px-2 
      rounded-lg 
      hover:scale-110 
      transition-all
      justify-center
      '
    >
      <h1 className='text-center mr-2'>Connect with Metamask</h1>
      <h1>🦊</h1>
    </button>
  )
}

export default Metmask

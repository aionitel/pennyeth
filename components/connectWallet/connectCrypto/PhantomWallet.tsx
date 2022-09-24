import React from 'react'
import { useMoralis } from 'react-moralis'
import { useRecoilState } from 'recoil'
import { currUserAtom } from '../../../state/atoms'
import { useToasts } from 'react-toast-notifications'
import { BiGhost } from 'react-icons/bi'

const PhantomWallet: React.FC = () => {
  const { Moralis } = useMoralis()
  const [user, setUser] = useRecoilState(currUserAtom)
  const { addToast } = useToasts() // for showing notifications

  const logoSize = 30; // phantom wallet logo size

  const handleLogin = async () => {
    const user = await Moralis.authenticate({ type: 'sol' })

    if (!user) { 
      addToast("Couldn't login with Phantom Wallet", {
        appearance: 'warning',
        autoDismiss: true,
      })
    }

    setUser(user?.get("ethAddress"))

    addToast(`Logged in with Phantom Wallet, your wallet address: ${user?.get("ethAddress")}`, {
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
      mx-14
      my-2
      px-2
      py-2
      rounded-lg 
      hover:scale-110 
      transition-all
      justify-center
      '
    >
      <h1 className='mr-2'>Connect with PhantomWallet</h1>
      <BiGhost className='text-2xl' />
    </button>
  )
}

export default PhantomWallet
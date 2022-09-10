import React from 'react'
import { useMoralis } from 'react-moralis'
import { useRecoilState } from 'recoil'
import { currUserAtom } from '../../../state/atoms'
import { useToasts } from 'react-toast-notifications'

const WalletConnect: React.FC = () => {
  const { Moralis } = useMoralis()

  const [user, setUser] = useRecoilState(currUserAtom)
  const { addToast } = useToasts() // for showing notifications

  const handleLogin = async () => {
    const user = await Moralis.authenticate({ provider: 'walletconnect' })

    if (!user) {
      addToast("Couldn't login with WalletConnect", {
        appearance: 'warning',
        autoDismiss: true,
      })
    }

    setUser(user?.get("ethAddress"))

    addToast(`Logged in with WalletConnect, your wallet address: ${user?.get("ethAddress")}`, {
      appearance: 'success',
      autoDismiss: true,
    })
  }

  return (
    <button
      onClick={() => handleLogin()}
      className='
      bg-gray 
      text-white 
      text-center 
      mx-14
      py-2 px-2
      my-2
      rounded-lg 
      hover:scale-110 
      transition-all'
    >
      <h1>Connect with WalletConnect</h1>
    </button>
  )
}

export default WalletConnect
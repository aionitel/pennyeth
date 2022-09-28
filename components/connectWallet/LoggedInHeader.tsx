import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../../state/atoms'

// when user has connected wallet, show wallet address in navbar

const LoggedInHeader = () => {
  const user = useRecoilValue(userAtom);
  
  return (
    <div className='text-white text-center'>
      <div>
        <h1>Wallet Connected</h1>
        <p>{user.slice(0, 15)}...</p>
      </div>
    </div>
  )
}

export default LoggedInHeader;
import dynamic from 'next/dynamic'
import React from 'react'
import MobileNavBar from '../nav/mobile/MobileNavBar'
import NavBar from '../nav/NavBar'

const Layout: React.FC = ({ children }: any) => {
  return (
    <div className='flex font-inter bg-black'>
      <NavBar />
      <main>
        <MobileNavBar />
        {children}
      </main>
    </div>   
  )
}

export default Layout

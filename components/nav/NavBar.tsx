import React from 'react'
import NavBarItemsData from './NavItemData'
import Link from 'next/link'
import ConnectWallet from '../connectWallet/ConnectWallet'
import { useRecoilValue } from 'recoil'
import { currUserAtom } from '../../state/atoms'
import LoggedInHeader from '../connectWallet/LoggedInHeader'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Logo from './Logo'

// desktop side navbar

// dynamically turn ssr off for NavItem, to avoid 'location is not defined' errors
const DynamicNavItem = dynamic(() => import('./NavItem'), {ssr: false})
const DynamicCurrPriceLogos = dynamic(() => import('../price/CurrPriceLogos'), {ssr: false})

const NavBar: React.FC = () => {
  const user = useRecoilValue(currUserAtom)

  return (
    <nav 
      className="border-r border-r-lightgray hidden lg:block text-white"
    >
      <div className='flex-row my-8 ml-7 justify-between'>
        <motion.div 
          className='flex my-5'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href='/' passHref>
            <Logo />
          </Link>
        </motion.div>
        <DynamicCurrPriceLogos />
        {user ? <LoggedInHeader /> : <ConnectWallet />}
      </div>
        {NavBarItemsData.map(item => (
          <DynamicNavItem key={1} title={item.title} path={item.path} Icon={item.icon} />
        ))}
    </nav>
  )
}

export default NavBar

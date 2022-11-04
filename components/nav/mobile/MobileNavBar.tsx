import { RiBarChartHorizontalLine } from 'react-icons/ri'
import Link from 'next/link'
import { BiCoin } from 'react-icons/bi'
import { motion } from 'framer-motion'

// toggle mobile navbar
if (typeof window === 'object') {
  const btn = document.querySelector('button.mobile-menu-button')
  const menu = document.querySelector('.mobile-menu')
  
  btn?.addEventListener('click', () => {
    menu?.classList.toggle("hidden")
  })

  document.onload = () => { // hiding mobile navbar on reload
    menu?.classList.toggle("visible")
  }

  menu?.addEventListener('click', () => {
    menu?.classList.toggle('hidden')
  })
}

export const Navbar: React.FC = () => {
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  };
  
  return (
    <nav className="py-6 sticky top-0 z-[1000] lg:hidden block bg-black">
      <div className="flex justify-between text-white">
        <div className="flex align-center justify-between lg:order-2">
          <button type="button" className="sm:transition-all mobile-menu-button inline-flex text-5xl items-center mr-4 sm:hover:scale-110 hover:cursor-pointer ml-6 rounded-lg lg:hidden hover" aria-controls="mobile-menu-2" aria-expanded="false">
            <RiBarChartHorizontalLine />
          </button>
        </div>
        <div className='text-2xl mt-2'>
          <h1>PennyETH</h1>
        </div>
        <div className='text-5xl'>
          <Link href='/' passHref>
            <BiCoin />
          </Link>
        </div>
      </div>
      <motion.div
        initial="closed"
        animate="open"
        variants={sideVariants}
        className='mobile-menu hidden'
      >
        <ul className='flex-row text-center my-7 lg:hidden'>
          <MobileNavButton name='Home' path='/' />
          <MobileNavButton name="Assets" path='/assets' />  
          <MobileNavButton name='Explorer' path='/explorer' />  
          <MobileNavButton name='NFTs' path='/nfts' />  
          <MobileNavButton name='About' path='/about' />
        </ul>
      </motion.div>
    </nav>
  );
};

interface MobileNavButtonProps {
  name: string;
  path: string;
}

// components for individual mobile navbar buttons
const MobileNavButton: React.FC<MobileNavButtonProps> = ({ name, path }) => {
  return (
    <li className='ml-2 my-7'>
      <div className='text-lg hover:cursor-pointer opacity-[0.7] text-white hover:underline hover:opacity-[1] lg:mr-4 hover:underline-offset-4'>
        <Link href={path}>
          <h1>{name}</h1>
        </Link>
      </div>
    </li>
  )
}

export default Navbar;
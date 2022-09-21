import { BiNews } from 'react-icons/bi'
import { RiHandCoinLine as HandIcon } from 'react-icons/ri'
import { IconType } from 'react-icons'
import { GiTwoCoins } from 'react-icons/gi' 
import { SiHomeadvisor } from 'react-icons/si'
import { CgSmileMouthOpen } from 'react-icons/cg'
import { IoMdPlanet } from 'react-icons/io'

// universal navbar items (assets, about, etc...) to be used for both desktop and mobile navbars, and better modularity

interface NavBarItemsType{
  title: string,
  path: string,
  icon: IconType
}

// data for each clickable item in navbar, need different navName because of actual page names and endpoints: /transfer vs send / receive

const NavBarItemsData: NavBarItemsType[] = [
  {
    title: 'Home',
    path: '/',
    icon: SiHomeadvisor
  },
  {
    title: 'Assets',
    path: '/assets',
    icon: HandIcon
  },
  {
    title: "Explorer",
    path: '/explorer',
    icon: IoMdPlanet
  },
  {
    title: 'NFTs',
    path: '/nfts',
    icon: CgSmileMouthOpen
  },
  {
    title: 'News',
    path: '/news',
    icon: BiNews
  },
  {
    title: 'About',
    path: '/about',
    icon: GiTwoCoins
  }
]

export default NavBarItemsData
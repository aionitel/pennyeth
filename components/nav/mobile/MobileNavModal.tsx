import React from 'react'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import MobileNavItem from './MobileNavItem'
import NavBarItemsData from '../NavItemData'
import { navOpenAtom } from '../../../state/atoms'
import { useRecoilState } from 'recoil'
import { slide as Menu } from 'react-burger-menu'

// main mobile navbar component that slides out when three bars are pressed

var styles ={
  bmItemList: {
    color: 'black',
    padding: 0.1
  },
}

const MobileNavModal: React.FC = () => {
  const [modalOpen, setModalOpen] = useRecoilState(navOpenAtom) // close navbar when pressing "Connect Wallet" button

  return (
    <div className='bg-black'>
      <RiBarChartHorizontalLine />
      <Menu isOpen={modalOpen} styles={ styles } left width={ 250 } onOpen={() => setModalOpen(true)} onClose={() => setModalOpen(false)}>
        {
          NavBarItemsData.map(item => (
            <MobileNavItem title={item.title} path={item.path} Icon={item.icon} key=''/>
          ))
        }
      </Menu>
    </div>
  )
}

export default MobileNavModal
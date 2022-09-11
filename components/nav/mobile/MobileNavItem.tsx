import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { navOpenAtom } from '../../../state/atoms'
import { useRecoilState } from 'recoil'

interface MobileNavItemProps {
  title: string,
  path: string,
  Icon: IconType,
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ title, path, Icon }) => { // item for each button on sliding mobile navbar, very similar to desktop navbar item
  const [modalOpen, setModalOpen] = useRecoilState(navOpenAtom);

  return (
    <Link href={path} passHref>
      <div className='flex w-72 hover:cursor-pointer' onClick={() => setModalOpen(false)}>
        <li>
          <a className="flex items-center text-sm py-4 h-14 my-5">
            <div className='bg-gray p-3 rounded-full'>
            <Icon className={ typeof window === 'object' ? 
              location.pathname === path ? 'text-blue text-xl' : 'text-white text-xl' : "text-white"} />
            </div>
            <span>
              <h1 className='text-white text-xl ml-7'>{title}</h1>
            </span>
          </a>
        </li>
      </div>
    </Link>
  )
}

export default MobileNavItem
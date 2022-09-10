import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'

interface NavItemProps {
  title: string,
  path: string,
  Icon: IconType,
}

// desktop navitem

const NavItem: React.FC<NavItemProps> = ({ title, path, Icon }) => {
  const [urlPathname, setUrlPathname] = useState<string>('/');

  // set current pathname everytime user changes path (goes to new page), initially /
  useEffect(() => setUrlPathname(location.pathname), [location.pathname])

  return (
    <Link href={path} passHref>
      <motion.div className='flex w-72 mx-2 hover:cursor-pointer hover:bg-gray rounded-full transition-all duration-300'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a className="flex items-center text-sm px-6 h-12 overflow-hidden my-6">
          <div className='bg-gray p-3 rounded-full'>
            <Icon style={{
              fontSize: 20,
              color: urlPathname === path ? 'blue' : 'white'
            }}/>
          </div>
          <span>
            <h1 className='text-white text-xl ml-7'>{title}</h1>
          </span>
        </a>
      </motion.div>
    </Link>
  )
}

export default NavItem

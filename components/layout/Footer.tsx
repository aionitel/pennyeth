import React from 'react'
import { FiGithub } from 'react-icons/fi'

const Footer: React.FC = () => {
  return (
    <div className='flex justify-between border-t border-lightgray text-lightgray py-12 mt-10'>
      <h1 className='ml-8'>©2022 PennyETH</h1>
      <a href='https://github.com/oranges0da/pennyeth' rel="noopener noreferrer" target='_blank'>
        <FiGithub className='text-3xl hover:cursor-pointer pr-4 hover:text-4xl transition-all duration-500' />
      </a>
    </div>
  )
}

export default Footer
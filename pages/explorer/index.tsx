import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Search from '../../components/search/Search'

const Explorer: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PennyETH • Explorer</title>
      </Head>
      <div className='text-white h-screen'>
        <div className='lg:ml-10 my-8 text-black'>
          <Search path='/explorer' placeholder='Search Block / Address / Transaction' />
        </div>
      </div>
    </div>
  )
}

export default Explorer;
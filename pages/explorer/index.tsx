import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Search from '../../components/explorer/Search'

const Explorer: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PennyETH • Explorer</title>
      </Head>
      <div className='text-white h-screen'>
        <div className='lg:ml-10 mx-4 my-8 text-black'>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Explorer;
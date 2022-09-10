import { NextPage } from 'next'
import React, { useEffect} from 'react'
import Head from 'next/head'

const News: NextPage = () => {
  return (
    <>
      <Head>
        <title>PennyETH  •  News</title>
      </Head>
      <div className='h-screen'>
        <h1 className='text-white'>News page</h1>
      </div>
    </>
  )
}

export default News

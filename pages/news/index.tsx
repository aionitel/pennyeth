import { NextPage } from 'next'
import React, { useEffect} from 'react'
import Head from 'next/head'
import NewsSearch from '../../components/news/NewsSearch'

const News: NextPage = () => {
  return (
    <>
      <Head>
        <title>PennyETH  •  News</title>
      </Head>
      <div className='h-screen'>
        <div className='lg:mx-10 mx-2 my-8'>
          <NewsSearch />
        </div>
      </div>
    </>
  )
}

export default News

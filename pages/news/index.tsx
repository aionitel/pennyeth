import { NextPage } from 'next'
import React, { useEffect} from 'react'
import Head from 'next/head'
import NewsCarousel from '../../components/news/carousel/NewsCarousel'
import { useRecoilValue } from 'recoil'
import { newsAtom } from '../../state/atoms'

const News: NextPage = () => {
  // get news data for NewsCarousel
  const newsData = useRecoilValue(newsAtom);

  return (
    <>
      <Head>
        <title>PennyETH  •  News</title>
      </Head>
      <div className='h-screen'>
        <div className='text-white'>
          <h1 className='text-3xl ml-8 my-7'>Latest Crypto News</h1>
          <NewsCarousel newsData={newsData} />
        </div>
      </div>
    </>
  )
}

export default News

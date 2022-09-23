import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import HomeChart from '../components/chart/YearChart'
import dynamic from 'next/dynamic'
import { useRecoilValue } from 'recoil'
import { newsAtom, weeklyBtcAtom } from '../state/atoms'
import MobileNewsCarousel from '../components/news/carousel/MobileNewsCarousel'

// size of bitcoin logo in header 
const btcIconSize = 45;

const Home: NextPage = () => {
  // dynamically import certain components that do data fetching stuff without ssr
  const DynamicNewsCarousel = dynamic(() => import('../components/news/carousel/NewsCarousel'), {ssr: false})
  const DynamicBtcText = dynamic(() => import("../components/price/BtcText"), {ssr: false})
  const DynamicCollection = dynamic(() => import('../components/collection/MiniCollection'), {ssr: false})

  // get weekly timeseries btc data
  const weeklyBtc = useRecoilValue(weeklyBtcAtom);

  // get news data for NewsCarousel
  const newsData = useRecoilValue(newsAtom);

  return (
    <>
      <Head>
        <title>PennyETH</title>
      </Head>
      <div className='flex text-white'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className='lg:mr-20 lg:pr-20'>
            <div className='lgtext-3xl text-2xl lg:text-left lg:ml-6 my-8 ml-12'>
              <a href='https://bitcoin.org/bitcoin.pdf' rel="noopener noreferrer" target='_blank'>
                <img src='https://i.imgur.com/wbZ6UVD.png' height={btcIconSize} width={btcIconSize} alt='main-btc' className='inline mb-2' />
              </a>
              <h1 className='inline mx-2'>is</h1>
              <DynamicBtcText />
              <h1 className='inline'> today.</h1>
            </div>
          </div>
          <div className='lg:flex lg:mt-4 mt-10'>
            <HomeChart data={weeklyBtc} marginLeft={30} marginRight={0} />
            <div className='flex-row hidden lg:inline'>
            </div>
          </div>
          <div className='ml-7'>
            <DynamicCollection />
          </div>
          <div>
            <h1 className='ml-7 my-6 text-2xl'>Latest Crypto News</h1>
            <MobileNewsCarousel />
            <DynamicNewsCarousel newsData={newsData} />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Home;
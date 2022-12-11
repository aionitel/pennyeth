import { NextPage } from 'next'
import React, { useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import HomeChart from '../components/chart/YearChart'
import dynamic from 'next/dynamic'
import MobileNewsCarousel from '../components/news/carousel/MobileNewsCarousel'
import fetchNews from '../data/news/fetchNews'
import fetchDailyAsset from '../data/prices/time/fetchDailyAsset'
import fetchAllAssets from '../data/prices/metric/fetchAllAssets'
import { useRecoilState } from 'recoil'
import { allAssetsAtom, newsAtom, weeklyBtcAtom } from '../state/atoms'

const Home: NextPage = ({ newsData, weeklyBtc, allAssetsData }: any) => {
  // dynamically import certain components that do data fetching stuff without ssr
  const DynamicNewsCarousel = dynamic(() => import('../components/news/carousel/NewsCarousel'), {ssr: false});
  const DynamicBtcText = dynamic(() => import("../components/price/BtcText"), {ssr: false});
  const DynamicCollection = dynamic(() => import("../components/collection/Collection"), {ssr: false});

  const [currWeeklyBtc, setCurrWeeklyBtc] = useRecoilState(weeklyBtcAtom);
  const [newsArticles, setNewsArticles] = useRecoilState(newsAtom);
  const [allAssets, setAllAssets] = useRecoilState(allAssetsAtom);

  useEffect(() => {
    setCurrWeeklyBtc(weeklyBtc);
    setNewsArticles(newsData);
    setAllAssets(allAssetsData);
  }, [])

  return (
    <div>
      <Head>
        <title>PennyETH</title>
      </Head>
      <div className='flex text-white'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div >
            <div className='lgtext-3xl text-2xl lg:text-left lg:ml-6 my-8 ml-12'>
              <a href='https://bitcoin.org/bitcoin.pdf' rel="noopener noreferrer" target='_blank'>
                <img src='https://i.imgur.com/wbZ6UVD.png' alt='main-btc' className='inline mb-2 w-14 h-14' />
              </a>
              <h1 className='inline mx-2'>is</h1>
              <DynamicBtcText />
              <h1 className='inline'> today.</h1>
            </div>
          </div>
          <div className='lg:flex lg:mt-4 mt-10 '>
            <HomeChart data={weeklyBtc} marginLeft={30} marginRight={20} />
            <div className='flex-row hidden lg:inline'>
            </div>
          </div>
          <div className='ml-7'>
            <DynamicCollection />
          </div>
          <div>
            <h1 className='ml-7 my-6 text-2xl'>Latest Crypto News</h1>
            <MobileNewsCarousel newsData={newsData} />
            <DynamicNewsCarousel newsData={newsData} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const tickers = [
    "BTC",
    "ETH",
    "SOL",
    "ADA",
    "XRP"
  ]

  const fetchData = async () => {
    const newsData = await fetchNews();
    const weeklyBtc = await fetchDailyAsset("btc");
    const allAssetsData = await fetchAllAssets(tickers);
    
    return {
      newsData, weeklyBtc, allAssetsData
    }
  }

  const { newsData, weeklyBtc, allAssetsData } = await fetchData();
  
  return {
    props: {
      newsData,
      weeklyBtc,
      allAssetsData
    }
  }
}

export default Home;
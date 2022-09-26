import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import ListCard from '../../components/asset/ListCard'
import { useRecoilValue } from 'recoil'
import { allAssetsAtom } from '../../state/atoms'
import { AiOutlineNodeIndex } from 'react-icons/ai'
import { FaDog } from 'react-icons/fa'
import { FcKey } from 'react-icons/fc'

interface Asset {
  name: string,
  ticker: string,
  image: string,
  price: number,
  dailyChange: number,
  volume: number,
  marketCap: number,
  marketDominance: number,
  supply: number,
  rank: number,
  stockToFlow: number,
  medianTxFee: number,
  allTimeHigh: number,
  hashRate: number,
  overview: string,
  desc: string,
  background: string,
  blockReward: number,
  consensusAlgorithm: string,
}

const Home: NextPage = () => {
  const DynamicCollection = dynamic(() => import('../../components/collection/Collection'), {ssr: false});

  const allAssets = useRecoilValue(allAssetsAtom);
  
  return (
    <>
      <Head>
        <title>PennyETH  •  Assets</title>
      </Head>
      <div className='flex bg-black mb-14'>
        <motion.div 
          className='flex flex-col text-white items-center'
          exit={{ opacity:0 }}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ duration: 1 }}
        >
          <div className='lg:flex my-7'>
            <ListCard title='DeFi Projects' Icon={AiOutlineNodeIndex} assets={allAssets.slice(1, 4)} />
            <ListCard title='Privacy Coins' Icon={FcKey} assets={allAssets.slice(10, 13)} />
            <ListCard title="Meme Coins" Icon={FaDog} assets={allAssets.slice(13, 15)} />
          </div>
          <DynamicCollection />
        </motion.div>
      </div>
    </>
  )
}

export default Home
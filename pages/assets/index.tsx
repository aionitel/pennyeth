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

const Assets: NextPage = () => {
  const allAssets = useRecoilValue(allAssetsAtom);
  
  return (
    <div>
      <Head>
        <title>PennyETH  •  Assets</title>
      </Head>
      <div className='flex bg-black'>
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
        </motion.div>
      </div>
    </div>
  )
}

export default Assets;
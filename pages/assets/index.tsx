import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { allAssetsAtom } from '../../state/atoms'
import { AiOutlineNodeIndex } from 'react-icons/ai'
import AssetSearch from '../../components/asset/AssetSearch'
import TickerCard from '../../components/asset/TickerCard'

const Assets: NextPage = () => {
  const allAssets = useRecoilValue(allAssetsAtom);
  
  return (
    <div>
      <Head>
        <title>PennyETH  •  Assets</title>
      </Head>
      <div className='flex bg-black h-screen'>
        <motion.div 
          className='flex flex-col text-white'
          exit={{ opacity:0 }}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ duration: 1 }}
        >
          <div className='lg:ml-10 my-8'>
            <AssetSearch />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Assets;
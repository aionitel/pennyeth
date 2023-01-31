import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import Head from 'next/head'
import AssetCard from '../../components/asset/AssetCard'
import Search from '../../components/search/Search'
import fetchAllAssets from '../../data/prices/metric/fetchAllAssets'

// main assets page, display search and list some cool coins

const Assets: NextPage = ({ allAssets }: any) => {
  return (
    <div>
      <Head>
        <title>PennyETH  •  Assets</title>
      </Head>
      <div className='flex bg-black'>
        <motion.div 
          className='flex flex-col text-white'
          exit={{ opacity:0 }}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ duration: 1 }}
        >
          <div className='lg:ml-10 my-8'>
            <Search path='/' placeholder='Search Name or Ticker e.g. "Bitcoin"' />
          </div>
          <div className='lg:ml-10 mx-5'>
            <h1 className='text-4xl my-4'>Top Bitcoins</h1>
            <div>
              {
                allAssets.slice(0, 3).map(asset => (
                  <div key='' className='my-8'>
                    <AssetCard asset={asset} />
                  </div>
                ))
              }
            </div>
            <h1 className='text-4xl my-10'>Trending Assets</h1>
            <div className='mb-20'>
              <AssetCard asset={allAssets[0]} />
              <div className='my-8'>
                <AssetCard asset={allAssets[3]} />
              </div>
              <AssetCard asset={allAssets[1]} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  // fetch all data for coins needed on page load
  const fetchData = async () => {
    const tickers = [
      "BTC",
      "BCH",
      "BSV",
      "XRP",
    ]
  
    const allAssets = fetchAllAssets(tickers);

    return allAssets;
  }

  const allAssets = await fetchData();

  return {
    props: {
      allAssets
    }
  }
}

export default Assets;
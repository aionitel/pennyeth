import Head from 'next/head'
import { NextPage } from 'next'
import Search from '../../components/search/Search'

const NFTPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>PennyETH  •  NFTs</title>
      </Head>
      <div className='h-screen bg-black'>
        <div className='lg:mx-10 my-8'>
          <Search path='/nfts/' placeholder='Search NFTs' />
        </div>
      </div>
    </>
  )
}

export default NFTPage;
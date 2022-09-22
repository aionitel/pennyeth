import Head from 'next/head'
import { NextPage } from 'next'
import NFTSearch from '../../components/nft/NFTSearch'

const NFTPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>PennyETH  •  NFTs</title>
      </Head>
      <div className='h-screen bg-black'>
        <div className='lg:mx-10 mx-2 my-8'>
          <NFTSearch />
        </div>
      </div>
    </>
  )
}

export default NFTPage;
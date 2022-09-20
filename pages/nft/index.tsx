import Head from 'next/head'
import { NextPage } from 'next'
import NFTSearch from '../../components/nft/NFTSearch'

const NFTPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>PennyETH  •  NFTs</title>
      </Head>
      <div className='h-screen bg-black text-white'>
        <div>
          <NFTSearch />
        </div>
      </div>
    </>
  )
}

export default NFTPage;
import Head from 'next/head'
import { NextPage } from 'next'
import NFTSearch from '../../components/nft/NFTSearch'

const NFTPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>PennyETH  •  Search NFTs</title>
      </Head>
      <div className='h-screen bg-black'>
        <div className='lg:ml-8 mt-8 mx-4 lg:mx-0'>
          <NFTSearch />
        </div>
      </div>
    </>
  )
}

export default NFTPage;
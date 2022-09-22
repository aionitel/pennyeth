import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'
import NFTCard from '../../components/nft/NFTCard';
import NFTSearch from '../../components/nft/NFTSearch';
import fetchNFT from '../../data/nft/fetchNFT';
import { NFT } from '../../data/utils/types';

interface NFTSPageProps {
  nfts: NFT[]
}

const NFTS: React.FC<NFTSPageProps> = ({ nfts }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>PennyETH • NFT Results</title>
      </Head>
      <div className='lg:m-8 mx-2 my-6'>
        <NFTSearch />
      </div>
      <h1 className='text-white text-xl lg:text-3xl text-center lg:mr-20 mb-8'>Your search for "{router.query.nfts}" yielded {nfts.length} results.</h1>
      <div className='flex flex-wrap justify-center lg:justify-start lg:ml-7'>
        {
          nfts.reverse().map(item => (
            <div key='' className='m-4'>
              <NFTCard nft={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const nfts = await fetchNFT(context.query.nfts as string);

  return {
    props: { nfts }
  }
}

export default NFTS;
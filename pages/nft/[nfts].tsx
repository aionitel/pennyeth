import Head from 'next/head';
import React from 'react'
import NFTCard from '../../components/nft/NFTCard';
import NFTSearch from '../../components/nft/NFTSearch';
import fetchNFT from '../../data/nft/fetchNFT';
import { NFT } from '../../data/utils/types';

interface NFTSPageProps {
  nfts: NFT[]
}

const NFTS: React.FC<NFTSPageProps> = ({ nfts }) => {
  return (
    <div>
      <Head>
        <title>PennyETH • Results</title>
      </Head>
      <div className='lg:m-8'>
        <NFTSearch />
      </div>
      <div className='flex flex-wrap'>
        {
          nfts.map(item => (
            <div key=''>
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
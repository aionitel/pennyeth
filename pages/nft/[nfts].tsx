import Head from 'next/head';
import React from 'react'
import fetchNFT from '../../data/nft/fetchNFT';
import { NFT } from '../../data/utils/types';

interface NFTSPageProps {
  nfts: NFT[]
}

const NFTS: React.FC<NFTSPageProps> = ({ nfts }) => {
  return (
    <div className='text-white'>
      <Head>
        <title>PennyETH • Results</title>
      </Head>
      <div>
        {
          nfts.map(item => (
            <div key=''>
              <img src={item.image} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const nfts = await fetchNFT(context.query.nft as string);

  return {
    props: { nfts }
  }
}

export default NFTS;
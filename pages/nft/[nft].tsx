import React from 'react'
import fetchNFT from '../../data/nft/fetchNFT';

const NFTQuery: React.FC = ({ nft }: any) => {
  console.log(nft)
  return (
    <div className='text-white'>
    </div>
  )
}

export async function getServerSideProps(context) {
  const nft = await fetchNFT(context.query.nft as string);

  return {
    props: { nft }
  }
}

export default NFTQuery;
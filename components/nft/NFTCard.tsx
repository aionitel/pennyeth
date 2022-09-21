import React from 'react'
import { NFT } from '../../data/utils/types';

interface NFTCardProps {
  nft: NFT;
}

const imageSize = 400;

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <a href={`https://opensea.io/assets/ethereum/${nft.address}/${nft.id}`} target='_blank' className='hover:cursor-pointer'>
      <div className='basis-1/3 flex-wrap mx-4'>
        <img src={nft.image} height={imageSize} width={imageSize} className='rounded-md' />
        <div className='flex text-white'>
          <h1>{nft.name}</h1>
        </div>
      </div>
    </a>
  )
}

export default NFTCard;
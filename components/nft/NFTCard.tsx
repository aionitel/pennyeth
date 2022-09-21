import React from 'react'
import { NFT } from '../../data/utils/types';

interface NFTCardProps {
  nft: NFT;
}

const imageSize = 300;

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <a href={`https://opensea.io/assets/ethereum/${nft.address}/${nft.id}`} target='_blank' className='hover:cursor-pointer'>
      <div>
        <img src={nft.image} height={imageSize} width={imageSize} />
        <div className='flex text-white'>
        </div>
      </div>
    </a>
  )
}

export default NFTCard;
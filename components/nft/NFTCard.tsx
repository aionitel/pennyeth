import React from 'react'
import { NFT } from '../../data/utils/types';

interface NFTCardProps {
  nft: NFT;
}

const imageSize = 300;

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <a href={`https://opensea.io/assets/ethereum/${nft.address}/${nft.id}`} target='_blank' className='hover:cursor-pointer'>
      <div className='basis-1/3 flex-wrap'>
        <img src={nft.image} height={imageSize} width={imageSize} className='rounded-md' />
        <div className='flex-row text-white'>
          {
            nft.name.includes("#") ? <h1>#{nft.name.split("#")[1]}</h1> : null
          }
      </div>
      </div>
    </a>
  )
}

export default NFTCard;
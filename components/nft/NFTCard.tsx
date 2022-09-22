import React, { useState } from 'react'
import { NFT } from '../../data/utils/types';

interface NFTCardProps {
  nft: NFT;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <a href={`https://opensea.io/assets/ethereum/${nft.address}/${nft.id}`} target='_blank' className='hover:cursor-pointer'>
      <div className='basis-1/3 flex-wrap overflow-hidden' onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <div className='overflow-hidden justify-center flex'>
          <img src={nft.image} className='block transition-all duration-300 rounded-t-lg' style={{ scale: hover ? '1.1' : '1', maxHeight: 300 }} />
        </div>
        <div className='flex-row text-white'>
          <h1 style={{ textDecoration: hover ? 'underline' : null }} className='p-3'>{nft.name.split("#")[0]}</h1>
          {
            nft.name.includes("#") ? <h1 style={{ textDecoration: hover ? 'underline' : null }} className='ml-3'>#{nft.name.split("#")[1]}</h1> : null // split nft number from name
          }
      </div>
      </div>
    </a>
  )
}

export default NFTCard;
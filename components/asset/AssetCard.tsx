import React from 'react'
import { Asset } from '../../data/utils/types';

interface TickerCardProps {
  asset: Asset;
}

const AssetCard: React.FC<TickerCardProps> = ({ asset }) => {
  return (
    <div className='flex justify-between'>
      <div className='flex'>
        <img src={asset.image} alt={asset.name} className='w-10 h-10' />
        <div>
          <h1>{asset.name}</h1>
          <h1>{asset.ticker}</h1>
        </div>
      </div>
      <div>
        {asset.price}
      </div>
    </div>
  )
}

export default AssetCard;
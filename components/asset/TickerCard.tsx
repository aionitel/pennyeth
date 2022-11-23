import React from 'react'
import { Asset } from '../../data/utils/types';

interface TickerCardProps {
  asset: Asset;
}

const TickerCard: React.FC<TickerCardProps> = ({ asset }) => {
  return (
    <div>
      <div>
        <h1>{asset.name}</h1>
      </div>
      <div>

      </div>
    </div>
  )
}

export default TickerCard;
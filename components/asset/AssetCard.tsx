import Link from 'next/link';
import React, { useState } from 'react'
import { RiArrowDownFill, RiArrowUpFill } from 'react-icons/ri';
import { Asset } from '../../data/utils/types';

interface AssetCardProps {
  asset: Asset
}

const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  const [hover, setHover] = useState<boolean>(false);

  const formatter = new Intl.NumberFormat("en", {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
  })

  return (
    <Link href={`/${asset.ticker.toLocaleLowerCase()}`} passHref>
      <div className='bg-almostBlack rounded-2xl h-56 w-56 flex-row hover:cursor-pointer' onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <div>
          <img src={asset.image} width={60} className='ml-4 transition-all duration-300'
            style={{
              scale: hover ? '1.15' : '1'
            }}
          />
        </div>
        <div className='flex justify-between mt-10'>
          <div>
            <h1 className='text-2xl'>{asset.ticker}</h1>
            <h1>{asset.name}</h1>
          </div>
          <div>
            <h1>${formatter.format(asset.price)}</h1>
            {
              asset.dailyChange < 0 ? <h1 className='text-red'>{asset.dailyChange.toFixed(2)}%</h1>
              : <h1 className='text-green-400'>+{asset.dailyChange.toFixed(2)}%</h1>
            }
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AssetCard;
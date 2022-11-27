import React from 'react'
import { Asset } from '../../data/utils/types';
import Link from 'next/link';
import  { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'

interface TickerCardProps {
  asset: Asset;
}

const AssetCard: React.FC<TickerCardProps> = ({ asset }) => {
  return (
    <Link href={`/${asset.ticker.toLocaleLowerCase()}`} passHref>
      <div className='flex justify-between text-white border p-5 hover:cursor-pointer hover:bg-almostBlack'>
        <div className='flex'>
          <img src={asset.image} alt={asset.name} className='w-10 h-10 mt-0.5 mx-2' />
          <div>
            <h1>{asset.name}</h1>
            <h1 className='text-medGray'>{asset.ticker}</h1>
          </div>
        </div>
        <div className='pt-2.5'>
          {
            asset.dailyChange < 0 
            ? <div className='flex'>
                <RiArrowDownSFill className='text-red-500 mt-2' />
                <h1 className='text-red'>{asset.dailyChange.toFixed(2)}%</h1>
              </div>
            : <div className='flex'>
                <RiArrowUpSFill className='text-green-400 mt-2' />
                <h1 className='text-green-400'>{asset.dailyChange.toFixed(2)}%</h1>
              </div>
          }
        </div>
      </div>
    </Link>
  )
}

export default AssetCard;
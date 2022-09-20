import React from 'react'
import { IconType } from 'react-icons';
import Link from 'next/link'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'

interface Asset {
  name: string,
  ticker: string,
  image: string,
  price: number,
  dailyChange: number,
  volume: number,
  marketCap: number,
  marketDominance: number,
  supply: number,
  rank: number,
  stockToFlow: number,
  medianTxFee: number,
  allTimeHigh: number,
  hashRate: number,
  overview: string,
  desc: string,
  background: string,
  blockReward: number,
  consensusAlgorithm: string,
}

interface ListCardProps {
  title: string,
  Icon: IconType,
  assets: Asset[]
}

const logoSize = 20;

const ListCard: React.FC<ListCardProps> = ({ title, Icon, assets }) => {
  return (
    <div className='flex-row my-4 mx-5 lg:my-0 bg-lightgray rounded-xl lg:max-w-xs 2xl:max-w-md w-screen'>
      <div className='flex'>
        <Icon className='text-2xl ml-4' style={{ marginTop: 18 }} />
        <h1 className='text-lg my-4 mx-2'>Top {title}</h1>
      </div>
      {
        assets.map((item, index) => (
          <Link href={`/${item.ticker.toLowerCase()}`} passHref key='list-card-item'>
            <div className='flex justify-between my-2 text-sm hover:cursor-pointer'>
              <div className='flex mx-5'>
                <h1 className='mr-4 text-medGray'>{index + 1}</h1>
                <img src={item.image} height={logoSize} width={logoSize} className='mr-2 pb-1' />
                <h1>{item.name}</h1>
                <h1 className='text-medGray mx-2'>{item.ticker}</h1>
              </div>
              <div className='ml-18 mr-4'>
                {
                  item.dailyChange < 0 ? <div className='flex'><RiArrowDownSFill className='mt-1 text-red' /><h1 className='text-red'>{item.dailyChange.toFixed(2)}%</h1> </div>
                  : <div className='flex'><RiArrowUpSFill className='mt-1 text-green-400' /><h1 className='text-green-400'>{item.dailyChange.toFixed(2)}%</h1></div>
                }
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default ListCard
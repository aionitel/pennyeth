import React from 'react'
import  { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { allAssetsAtom } from '../../state/atoms'

interface AssetProps {
  name: string,
  ticker: string,
  image: string,
  price: number,
  dailyChange: number,
  volume: number,
  marketCap: number,
  marketDominance: number,
  supply: number,
}

const Collection: React.FC = () => {
  const allAssets = useRecoilValue(allAssetsAtom);
  const assets = allAssets.slice(0, 15)

  return (
    <div className='flex-row w-screen lg:max-w-screen-lg 2xl:max-w-screen-xl'>
      <div className='flex justify-between text-md lg:text-sm my-4 ml-2 border-t pt-5 border-lightgray'>
        <h1 className='ml-5 lg:w-48 2xl:w-40'>Name</h1>
        <h1 className='mr-12 lg:mr-0 lg:w-40'>Price</h1>
        <h1 className='hidden lg:block w-40'>24h%</h1>
        <h1 className='hidden lg:block w-40'>Volume(24h)</h1>
        <h1 className='pr-6 hidden lg:block w-40'>Market Cap</h1>
        <h1 className='hidden lg:block w-40'>Market Dominance</h1>
        <h1 className='hidden lg:block mr-8'>Supply</h1>
      </div>
      {
        assets.map(item => (
          <div key='' className='border-y border-lightgray border-dashed hover:cursor-pointer hover:bg-almostBlack'>
            <CollectionItem 
              name={item.name} 
              ticker={item.ticker}
              image={item.image}
              price={item.price} 
              dailyChange={item.dailyChange} 
              volume={item.volume} 
              marketCap={item.marketCap}
              marketDominance={item.marketDominance}
              supply={item.supply}
            />
          </div>
        ))
      }
    </div>
  )
}

interface AssetProps {
  name: string,
  ticker: string,
  image: string,
  price: number,
  dailyChange: number,
  volume: number,
  marketCap: number,
  marketDominance: number,
  supply: number,
}

const CollectionItem: React.FC<AssetProps> = ({ name, ticker, image, price, dailyChange, volume, marketCap, marketDominance, supply }) => {
  const logoSize = 30;
  const width = 40;

  const price_formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

 const compact_formtatter = new Intl.NumberFormat("en", { notation: 'compact' });

  return (
    <Link href={`/${ticker.toLowerCase()}`} passHref>
      <div className='flex justify-between lg:justify-start text-md lg:text-sm py-5'>
        <div className='flex w-44 lg:w-32'>
          <img src={image} alt='' style={{ height: logoSize , width: logoSize, marginTop: 5 }} className='mx-3' />
          <div>
            <h1>{name}</h1>
            <h1 className='text-sm opacity-[0.7]'>{ticker}</h1>
          </div>
        </div>
        <div className='pt-3 ml-20 w-48'>
          <h1>${price_formatter.format(price)}</h1>
        </div>
        <div className='w-56'>
          {
            dailyChange < 0 ? <div className='hidden lg:flex pt-2'><RiArrowDownSFill className='text-2xl text-red' /><h1 className='text-red hidden lg:flex pt-1'>{price_formatter.format(dailyChange)}%</h1></div> 
            : <div className='hidden lg:flex pt-2'><RiArrowUpSFill className='hidden lg:flex mt-1 text-2xl text-green-400' /><h1 className='text-green-400 hidden lg:flex pt-1'>{price_formatter.format(dailyChange)}%</h1></div>
          }
        </div>
        <h1 className='hidden pt-3 lg:flex w-52'>{compact_formtatter.format(volume)} {ticker}</h1>
        <h1 className='hidden pt-3 lg:flex w-52'>${compact_formtatter.format(marketCap)}</h1>
        <h1 className='hidden pt-3 lg:flex w-44'>{marketDominance.toFixed(2)}%</h1>
        <h1 className='hidden pt-3 lg:flex'>{compact_formtatter.format(supply)}</h1>
      </div>
    </Link>
  )
}

export default Collection
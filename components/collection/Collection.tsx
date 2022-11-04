import React from 'react'
import  { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'
import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { allAssetsAtom } from '../../state/atoms'

const Collection: React.FC = () => {
  const allAssets = useRecoilValue(allAssetsAtom);

  return (
    <div className='flex-row w-screen lg:max-w-screen-xl'>
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
        allAssets.map(item => (
          <div key='' className='border-y border-lightgray border-dashed hover:cursor-pointer hover:bg-almostBlack'>
            <CollectionItem
              asset={item}
            />
          </div>
        ))
      }
    </div>
  )
}

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
}

interface CollectionItemProps {
  asset: Asset
}

const CollectionItem: React.FC<CollectionItemProps> = ({ asset }) => {
  const logoSize = 30;
  const width = 40;

  const price_formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
  });

 const compact_formtatter = new Intl.NumberFormat("en", { notation: 'compact' });

  return (
    <Link href={`/${asset.ticker.toLowerCase()}`} passHref>
      <div className='flex justify-between lg:justify-start text-md lg:text-sm py-5'>
        <div className='flex w-40 lg:w-32'>
          <img src={asset.image} alt='' style={{ height: logoSize , width: logoSize, marginTop: 5 }} className='mx-3' />
          <div>
            <h1>{asset.name}</h1>
            <h1 className='text-sm opacity-[0.7]'>{asset.ticker}</h1>
          </div>
        </div>
        <div className='pt-3 ml-20 w-48'>
          <h1>${price_formatter.format(asset.price)}</h1>
        </div>
        <div className='w-56'>
          {
            asset.dailyChange < 0 ? <div className='hidden lg:flex pt-2'><RiArrowDownSFill className='text-2xl text-red' /><h1 className='text-red hidden lg:flex pt-1'>{price_formatter.format(asset.dailyChange)}%</h1></div> 
            : <div className='hidden lg:flex pt-2'><RiArrowUpSFill className='hidden lg:flex mt-1 text-2xl text-green-400' /><h1 className='text-green-400 hidden lg:flex pt-1'>{price_formatter.format(asset.dailyChange)}%</h1></div>
          }
        </div>
        <h1 className='hidden pt-3 lg:flex w-52'>{compact_formtatter.format(asset.volume)} {asset.ticker}</h1>
        <h1 className='hidden pt-3 lg:flex w-52'>${compact_formtatter.format(asset.marketCap)}</h1>
        <h1 className='hidden pt-3 lg:flex w-44'>{asset.marketDominance.toFixed(2)}%</h1>
        <h1 className='hidden pt-3 lg:flex'>{compact_formtatter.format(asset.supply)}</h1>
      </div>
    </Link>
  )
}

export default Collection
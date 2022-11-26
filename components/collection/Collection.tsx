import React from 'react'
import { useRecoilValue } from 'recoil'
import  { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'
import { getChartWidth } from '../../data/utils/getDimensions'
import { allAssetsAtom } from '../../state/atoms'
import Link from 'next/link'
import { Asset } from '../../data/utils/types'

const Collection: React.FC = () => {
  const allAssets = useRecoilValue(allAssetsAtom);
  const assets = allAssets.slice(0, 5);

  return (
    <div className='flex-row border-2 border-chartGray border-dashed rounded'
      style={{
        width: getChartWidth() - 45,
      }}
    >
      <div className='flex justify-between lg:justify-start my-4 ml-2'>
        <h1 className='ml-4 w-1/6'>Name</h1>
        <h1 className='ml-10 mr-4 lg:mr-0 w-1/5'>Price</h1>
        <h1 className='hidden lg:block w-1/6'>24h%</h1>
        <h1 className='ml-3 hidden lg:block w-1/4'>Volume(24h)</h1>
        <h1 className='hidden lg:block'>Market Cap</h1>
      </div>
      {
        assets.map(item => (
          <div key='' className='hover:cursor-pointer hover:bg-almostBlack transition-all duration-300'>
            <CollectionItem
              asset={item}
            />
          </div>
        ))
      }
    </div>
  )
}

interface CollectionProps {
  asset: Asset
}

const CollectionItem: React.FC<CollectionProps> = ({ asset }) => {
  const logoSize = 30;

  const price_formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

 const compact_formatter = new Intl.NumberFormat("en", { notation: 'compact' })

  return (
    <Link href={`/${asset.ticker.toLowerCase()}`} passHref>
      <div className='flex justify-between lg:justify-start text-md py-5'>
        <div className='flex w-1/5'>
          <img src={asset.image} alt='' style={{ height: logoSize , width: logoSize, marginTop: 5 }} className='mx-3' />
          <div>
            <h1>{asset.name}</h1>
            <h1 className='text-sm opacity-[0.7]'>{asset.ticker}</h1>
          </div>
        </div>
        <div className='pt-2 lg:w-1/5 mr-4 lg:mr-0'>
          <h1>${price_formatter.format(asset.price)}</h1>
        </div>
        {
          asset.dailyChange < 0 ? <div className='hidden lg:flex mt-1 w-1/5'><RiArrowDownSFill className='mt-1 text-2xl text-red' /><h1 className='text-red hidden lg:flex pt-1'>{price_formatter.format(asset.dailyChange)}%</h1></div> 
          : <div className='hidden lg:flex mt-1 w-1/5'><RiArrowUpSFill className='hidden lg:flex mt-2 text-2xl text-green-400' /><h1 className='text-green-400 hidden lg:flex pt-1'>{price_formatter.format(asset.dailyChange)}%</h1></div>
        }
        <h1 className='hidden lg:flex mt-2 w-1/4'>{compact_formatter.format(asset.volume)} {asset.ticker}</h1>
        <h1 className='hidden lg:flex mt-2'>${compact_formatter.format(asset.marketCap)}</h1>
      </div>
    </Link>
  )
}

export default Collection;
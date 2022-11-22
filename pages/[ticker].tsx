import { NextPage } from 'next'
import Head from 'next/head';
import { useState } from 'react';
import AssetHeader from '../components/asset/AssetHeader';
import fetchAsset from '../data/prices/metric/fetchAsset';
import { Asset } from '../data/utils/types';

interface AssetPageProps {
  asset: Asset;
}

// main asset page

const AssetPage: NextPage<AssetPageProps> = ({ asset }) => {
  const [textOpen, setTextOpen] = useState<boolean>(false); // keeping track if user enlarged text passage or not

  // price formatter
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
  });

  return (
    <div 
      className='lg:pt-10 pt-4 w-screen lg:max-w-screen-lg 2xl:max-w-screen-xl'
    >
      <Head>
        <title>PennyETH • {asset.name}</title>
      </Head>
      <div className='text-white'>
        <div className='lg:mb-10 mb-10'>
          <AssetHeader asset={asset} />
        </div>
        {
          asset.consensusAlgorithm ? 
            <div className='flex ml-6 text-xl mb-6 mt-4'>
              <h1 className='text-white mr-2'>Consensus Algorithm:</h1>
              <h1 className='text-chartGray'>{asset.consensusAlgorithm}</h1>
            </div>
            : null
        }
        <div className='lg:max-w-screen-lg 2xl:max-w-screen-xl w-screen'>
          <h1 className='text-white text-3xl ml-6 mb-5'>Overview</h1>
        <div dangerouslySetInnerHTML={{ __html: asset.overview }} className='text-chartGray ml-6' />
      </div>
      </div>
      <h1 className='text-white text-3xl ml-6 my-7 text-center lg:text-left'>Price Info</h1>
      <div className='text-white hidden lg:flex justify-between ml-6 border-t-2 border-almostBlack text-center'>
        <div className='py-5 border-r-2 ml-4 border-almostBlack pr-20'>
          <h2 className='text-chartGray'>Market Cap</h2>
          <h2>${formatter.format(asset.marketCap)}</h2>
        </div>
        <div className='py-5 border-r-2 border-almostBlack pr-20'>
          <h2 className='text-chartGray'>Volume</h2>
          <h2>{formatter.format(asset.volume)} {asset.ticker}</h2>
        </div>
        <div className='mt-5 pr-14 border-r-2 border-almostBlack'>
          <h2 className='text-chartGray'>All Time High</h2>
          <h2>${formatter.format(asset.allTimeHigh)}</h2>
        </div>
        <div className='py-5 border-r-2 border-almostBlack pr-20 hidden 2xl:block'>
          <h2 className='text-chartGray'>Stock to Flow</h2>
          <h2>{formatter.format(asset.stockToFlow)}</h2>
        </div>
      </div>
      <div className='text-white flex-col lg:hidden justify-between mr-20 text-center ml-20'>
        <div className='py-5 border-b border-almostBlack'>
          <h2 className='text-chartGray'>Market Cap</h2>
          <h2>{formatter.format(asset.marketCap)}</h2>
        </div>
        <div className='py-5 border-b border-almostBlack'>
          <h2 className='text-chartGray'>Volume</h2>
          <h2>{formatter.format(asset.volume)}</h2>
        </div>
        <div className='mt-4'>
          <h2 className='text-chartGray'>All Time High</h2>
          <h2>${formatter.format(asset.allTimeHigh)}</h2>
        </div>
        <div className='py-7 border-b border-almostBlack'>
          <h2 className='text-chartGray'>Stock to Flow</h2>
          <h2>{formatter.format(asset.stockToFlow)}</h2>
        </div>
      </div>
      {
        asset.desc ?
          <div className='ml-6 mb-10'>
            <h1 className='text-white text-3xl my-6'>Detailed Info</h1>
            {
              textOpen 
              ? <div className='inline text-chartGray'>
                  <p dangerouslySetInnerHTML={{ __html: asset.desc }} className='inline' />
                  <p className='inline hover:cursor-pointer duration-300' onClick={() => setTextOpen(false)}>✖️</p>
                </div>
              : <div className='inline text-chartGray'>
                  <p dangerouslySetInnerHTML={{ __html: asset.desc.slice(0, 300) }} className='inline' />
                  <p onClick={() => setTextOpen(true)} className='hover:cursor-pointer inline ml-1 text-4xl'>...</p>
                </div>
            }
        </div>
        : null
      }
    </div>
  )
}

export async function getServerSideProps(context) {
  const ticker = context.params.ticker as string;
  const asset = await fetchAsset(ticker);

  return {
    props: {
      asset
    }
  }
}

export default AssetPage;
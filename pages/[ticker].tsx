import { NextPage } from 'next'
import Head from 'next/head';
import AssetHeader from '../components/asset/AssetHeader';
import YearChart from '../components/chart/YearChart';
import fetchAsset from '../data/prices/metric/fetchAsset';
import fetchDailyAsset from '../data/prices/time/fetchDailyAsset';

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

interface AssetPageProps {
  asset: Asset;
  weeklyAsset: any
}

const allowedChart = [
  "BTC",
  "ADA",
  "USDT",
  "XRP",
  "XMR",
  "DOGE",
]

const AssetPage: NextPage<AssetPageProps> = ({ asset, weeklyAsset }) => {

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
  });

  return (
    <div className='lg:pt-12 pt-4 h-screen w-screen lg:max-w-screen-lg xl:max-w-screen-xl'>
      <Head>
        <title>PennyETH • {asset.name}</title>
      </Head>
      <div className='text-white'>
        <div className='lg:mb-10 mb-5'>
          <AssetHeader asset={asset} />
        </div>
        {
          allowedChart.includes(asset.ticker) ? <YearChart data={weeklyAsset} marginLeft={25} marginRight={0} /> : null
        }
      </div>
      <h1 className='text-white text-3xl ml-6 mb-5 text-center lg:text-left'>Price Info</h1>
      <div className='text-white hidden lg:flex justify-between ml-6 border-t-2 border-almostBlack text-center'>
        <div className='py-5 border-r-2 ml-4 border-almostBlack pr-20'>
          <h2 className='text-chartGray'>Market Cap</h2>
          <h2>${formatter.format(asset.marketCap)}</h2>
        </div>
        <div className='py-5 border-r-2 border-almostBlack pr-20'>
          <h2 className='text-chartGray'>Volume</h2>
          <h2>{formatter.format(asset.volume)} {asset.ticker}</h2>
        </div>
        <div className='py-5 border-r-2 border-almostBlack pr-20'>
          <h2 className='text-chartGray'>Stock to Flow</h2>
          <h2>{formatter.format(asset.stockToFlow)}</h2>
        </div>
        <div className='mt-5 pr-14'>
          <h2 className='text-chartGray'>All Time High</h2>
          <h2>${formatter.format(asset.allTimeHigh)}</h2>
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
        <div className='py-5 border-b border-almostBlack'>
          <h2 className='text-chartGray'>Stock to Flow</h2>
          <h2>{formatter.format(asset.stockToFlow)}</h2>
        </div>
        <div className='mt-10'>
          <h2 className='text-chartGray'>All Time High</h2>
          <h2>${formatter.format(asset.allTimeHigh)}</h2>
        </div>
      </div>
      <div className='lg:max-w-screen-lg 2xl:max-w-screen-xl w-screen'>
        <h1 className='text-white text-3xl ml-6 my-5'>Overview</h1>
        <div dangerouslySetInnerHTML={{ __html: asset.overview }} className='text-chartGray ml-6' />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const ticker = context.params.ticker as string;
  const asset = await fetchAsset(ticker);
  const weeklyAsset = await fetchDailyAsset(ticker);

  return {
    props: {
      asset,
      weeklyAsset
    }
  }
}

export default AssetPage;
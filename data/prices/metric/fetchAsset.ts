import axios from 'axios';
import { logos } from '../../images/images';

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

const fetchAsset = async (ticker: string) => {
  const metric_url = `https://data.messari.io/api/v1/assets/${ticker}/metrics`
  const profile_url =`https://data.messari.io/api/v1/assets/${ticker}/profile` 

  const { data: metric_data } = await axios.get(metric_url);
  const { data: profile_data } = await axios.get(profile_url);

  const asset: Asset = {
    name: profile_data["data"]["name"],
    ticker: profile_data["data"]["symbol"],
    image: logos[profile_data["data"]["symbol"]],
    price: metric_data["data"]["market_data"]["price_usd"],
    dailyChange: metric_data["data"]["market_data"]["percent_change_usd_last_24_hours"],
    volume: metric_data["data"]["market_data"]["volume_last_24_hours"],
    marketCap: metric_data["data"]["marketcap"]["current_marketcap_usd"],
    marketDominance: metric_data["data"]["marketcap"]["marketcap_dominance_percent"],
    supply: metric_data["data"]["supply"]["circulating"],
    rank: metric_data["data"]["marketcap"]["rank"],
    stockToFlow: metric_data["data"]["supply"]["stock_to_flow"],
    medianTxFee: metric_data["data"]["blockchain_stats_24_hours"]["median_tx_fee"],
    allTimeHigh: metric_data["data"]["all_time_high"]["price"],
    hashRate: metric_data["data"]["mining_stats"]["hash_rate"],
    overview: profile_data["data"]["overview"],
    desc: profile_data["data"]["technology"],
    background: profile_data["data"]["background"],
    blockReward: profile_data["data"]["token_details"]["block_reward"],
    consensusAlgorithm: profile_data["data"]["consensus_algorithm"]
  }

  return asset;
}

export default fetchAsset;
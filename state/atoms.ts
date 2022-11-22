import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { NewsArticle } from "../data/utils/types";

const { persistAtom } = recoilPersist();

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

// curr user's eth address
export const userAtom = atom({
  key: 'user',
  default: '' as string ,
  effects_UNSTABLE: [persistAtom]
})

// to close and open modal on certain events
export const navOpenAtom = atom({ 
  key: 'modalOpen',
  default: false as boolean,
  effects_UNSTABLE: [persistAtom]
})

export const newsAtom = atom({
  key: "news",
  default: [] as NewsArticle[],
  effects_UNSTABLE: [persistAtom]
})

// weekly btc and eth ytd data
export const weeklyBtcAtom  = atom({
  key: "weeklyBtc",
  default: [],
  effects_UNSTABLE: [persistAtom]
})

export const allAssetsAtom = atom({
  key: "allAssets",
  default: [ // bs starting values
  {
    dailyChange: 3.57456209859366,
    image: "https://i.imgur.com/wbZ6UVD.png",
    marketCap
: 
377999350649.8065,
marketDominance
: 
32.76475609563796,
name
: 
"Bitcoin",
price
: 
19672.361584407277,
supply
: 
19162337,
ticker
: 
"BTC",
volume
: 
16647736105.544996
  },
  {
    dailyChange: 3.57456209859366,
    image: "https://i.imgur.com/wbZ6UVD.png",
    marketCap
: 
377999350649.8065,
marketDominance
: 
32.76475609563796,
name
: 
"Bitcoin",
price
: 
19672.361584407277,
supply
: 
19162337,
ticker
: 
"BTC",
volume
: 
16647736105.544996
  },
  {
    dailyChange: 3.57456209859366,
    image: "https://i.imgur.com/wbZ6UVD.png",
    marketCap
: 
377999350649.8065,
marketDominance
: 
32.76475609563796,
name
: 
"Bitcoin",
price
: 
19672.361584407277,
supply
: 
19162337,
ticker
: 
"BTC",
volume
: 
16647736105.544996
  },
  {
    dailyChange: 3.57456209859366,
    image: "https://i.imgur.com/wbZ6UVD.png",
    marketCap
: 
377999350649.8065,
marketDominance
: 
32.76475609563796,
name
: 
"Bitcoin",
price
: 
19672.361584407277,
supply
: 
19162337,
ticker
: 
"BTC",
volume
: 
16647736105.544996
  }
],
  effects_UNSTABLE: [persistAtom]
})
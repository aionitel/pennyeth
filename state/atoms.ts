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
      dailyChange: "Loading...",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fe596a334-ec86-4a84-96df-17900077efc2%2Fd7gwtxy-a0648d53-d900-425d-85e4-96fdeb5e7968.gif%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U1OTZhMzM0LWVjODYtNGE4NC05NmRmLTE3OTAwMDc3ZWZjMlwvZDdnd3R4eS1hMDY0OGQ1My1kOTAwLTQyNWQtODVlNC05NmZkZWI1ZTc5NjguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3MRvpWhxgH2zcoTCs1n14jxPp32J08J8Y7T6mSvyy1E&f=1&nofb=1&ipt=c56e19603a748f57c5e87a32bb9557e7d3431eef09eeec0d84a56920e64d9453&ipo=images",
      marketCap: "Loading...",
      marketDominance: "Loading...",
      name: "Loading...",
      price: "Loading...",
      supply: "Loading...",
      ticker: "Loading...",
      volume: "Loading..."
    }
  ],
  effects_UNSTABLE: [persistAtom]
})
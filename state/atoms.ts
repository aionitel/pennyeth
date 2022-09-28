import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { NewsArticle } from "../data/utils/types";

const { persistAtom } = recoilPersist();

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
  default: [],
  effects_UNSTABLE: [persistAtom]
})

export const allWeeklyAssetsAtom = atom({
  key: 'allWeeklyAssets',
  default: [],
  effects_UNSTABLE: [persistAtom]
})

export const nftAtom = atom({
  key: 'nft',
  default: [],
  effects_UNSTABLE: [persistAtom]
})
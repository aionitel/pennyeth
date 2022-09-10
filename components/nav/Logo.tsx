import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { allAssetsAtom, newsAtom, weeklyBtcAtom } from '../../state/atoms';
import fetchNews from '../../data/news/fetchNews';
import { images } from '../../data/images/images';
import { BiCoin } from 'react-icons/bi'
import fetchAllAssets from '../../data/prices/metric/fetchAllAssets';
import fetchDailyAsset from '../../data/prices/time/fetchDailyAsset';

const Logo = () => {
  const [currWeeklyBtc, setCurrWeeklyBtc] = useRecoilState(weeklyBtcAtom);
  const [newsArticles, setNewsArticles] = useRecoilState(newsAtom);
  const [allAssets, setAllAssets] = useRecoilState(allAssetsAtom);

  const tickers = [
    "BTC",
    "ETH",
    "SOL",
    "ADA",
    "USDT",
    "BCH",
    "XRP",
    "BNB",
    "LTC",
    "FIL",
    "XMR",
    "ZEC",
    "DASH",
    "DOGE",
    "ETC",
    "SHIB",
  ]

  useEffect(() => {
    const fetchAndSetPrices = async () => {

      // fetch latest news
      const articles = await fetchNews();

      // fetch percent change in last week for btc and eth
      const weeklyBtc = await fetchDailyAsset("btc");

      // fetch all asset data for assets page
      const allAssetData = await fetchAllAssets(tickers);

      setAllAssets(allAssetData);

      setCurrWeeklyBtc(weeklyBtc);

      const new_articles = articles.forEach(item => {
        item.image = images[Math.floor(Math.random() * images.length)];
      })
      
      setNewsArticles(articles);
    }

    fetchAndSetPrices();
  }, [])

  return (
    <div className='flex'>
      <BiCoin className='ml-5 text-4xl hover:cursor-pointer' />
      <h1 className='ml-1 text-3xl hover:cursor-pointer'>PennyETH</h1>
    </div>
  )
}

export default Logo
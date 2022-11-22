import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { allAssetsAtom, newsAtom, weeklyBtcAtom } from '../../state/atoms';
import fetchNews from '../../data/news/fetchNews';
import { images } from '../../data/images/images';
import { BiCoin } from 'react-icons/bi'
import fetchAllAssets from '../../data/prices/metric/fetchAllAssets';
import fetchDailyAsset from '../../data/prices/time/fetchDailyAsset';

const Logo = () => {
  return (
    <div className='flex'>
      <BiCoin className='ml-5 text-4xl hover:cursor-pointer' />
      <h1 className='ml-1 text-3xl hover:cursor-pointer'>PennyETH</h1>
    </div>
  )
}

export default Logo
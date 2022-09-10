import React from 'react'
import { useRecoilValue } from 'recoil'
import { allAssetsAtom } from '../../state/atoms'

const BtcText = () => {
  // get asset data from recoil
  const assetData = useRecoilValue(allAssetsAtom);
  
  return (
    <div className='inline'>
    {
      assetData[0].dailyChange < 0 ? <h1 className='text-red inline'>down {assetData[0].dailyChange.toFixed(2)}%</h1>
      :  <h1 className='text-green-400 inline'>up {assetData[0].dailyChange.toFixed(2)}%</h1>
    }
    </div>
  )
}

export default BtcText
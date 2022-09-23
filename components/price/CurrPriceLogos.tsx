import React from 'react'
import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { allAssetsAtom } from '../../state/atoms';
import Link from 'next/link';

const logoSize = 30;

const CurrPriceLogos: React.FC = () => {
  // get asset data from recoil
  const assetData = useRecoilValue(allAssetsAtom);

  return (
    <motion.div 
      className='flex text-base mt-6 mb-3'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link href='/bitcoin' passHref>
        <div className='flex hover:cursor-pointer'>
          <img
            src='https://i.imgur.com/wbZ6UVD.png' 
            width={logoSize} 
            alt='btc_logo'
          />
          <h1 className='mt-1 ml-2'>${assetData[0].price.toLocaleString().slice(0, 9)}</h1>
        </div>
      </Link>
      <Link href='/ethereum' passHref>
        <div className='flex hover:cursor-pointer pl-4'>
          <img
            src='https://i.imgur.com/izIV4k9.png' 
            alt='eth_logo'
            style={{ width: logoSize - 5, height: logoSize - 4, marginTop: 3 }}
          />
          <h1 className='mt-1 ml-2'>${assetData[1].price.toLocaleString().slice(0, 8)}</h1>
        </div>
      </Link>
    </motion.div>
  )
}

export default CurrPriceLogos;
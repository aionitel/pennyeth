import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react'
import fetchAddr from '../../data/explorer/fetchAddr';

const Address: NextPage = ({ address }: any) => {
  return (
    <div>
      <Head>
        <title>PennyETH • {address.address}</title>
      </Head>
      <div className='text-white'>
        {address.address}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const address = await fetchAddr(context.query.ticker, context.query.address);

  return {
    props: { address }
  }
}

export default Address;
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react'
import AddressHeader from '../../components/explorer/address/AddressHeader';
import AddressSummary from '../../components/explorer/address/AddressSummary';
import Search from '../../components/explorer/Search';
import fetchAddr from '../../data/explorer/fetchAddr';
import { Address } from '../../data/utils/types';

interface AddressPageProps {
  address: Address
}

const Address: NextPage<AddressPageProps> = ({ address }) => {
  console.log(address)
  return (
    <div>
      <Head>
        {address.type === 'btc' ? <title>PennyETH • Address {address.address}</title>
        : <title>PennyETH • Address 0x{address.address}</title>}
      </Head>
      <div className='w-screen lg:max-w-screen-lg 2xl:max-w-screen-xl mb-20 pb-20'>
        <div className='lg:ml-8 mx-4 my-8'>
          <Search />
        </div>
        <AddressHeader address={address} />
        <AddressSummary address={address} />
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
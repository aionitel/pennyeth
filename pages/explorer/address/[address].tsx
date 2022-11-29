import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import AddressHeader from '../../../components/explorer/address/AddressHeader';
import AddressSummary from '../../../components/explorer/address/AddressSummary';
import fetchAddr from '../../../data/explorer/fetchAddr';
import { Address } from '../../../data/utils/types';
import Search from '../../../components/search/Search';

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
          <Search path='/explorer' placeholder='Search Block / Address / Transaction' />
        </div>
        <AddressHeader address={address} />
        <AddressSummary address={address} />
        <div>
          <h1 className='text-white text-3xl ml-8'>Transactions</h1>
        </div>
        <div className='ml-8'>
          {address.txs.map(item => (
            <Link href={`/explorer/tx/${item.tx_hash}?ticker=${address.ticker}`} passHref>
              <div>
                <h1 className='text-blue hover:underline underline-offset-2 hover:opacity-[0.9] hover:cursor-pointer my-4 hidden lg:block' key=''>{item.tx_hash}</h1>
                <h1 className='text-blue hover:underline hover:opacity-[0.9] hover:cursor-pointer my-4 block lg:hidden' key=''>{item.tx_hash.slice(0, 30)}...</h1>
              </div>
            </Link>
          ))}
        </div>
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
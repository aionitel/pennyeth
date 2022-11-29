import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Search from '../../components/search/Search'
import fetchChain from '../../data/explorer/fetchChain'

const Explorer: NextPage = ({ btcChain, ethChain }: any) => {
  return (
    <div>
      <Head>
        <title>PennyETH • Explorer</title>
      </Head>
      <div className='text-white h-screen'>
        <div className='lg:ml-10 my-8 text-black'>
          <Search path='/explorer/' placeholder='Search Block / Address / Transaction' />
        </div>
        <div className='flex-row text-center'>
          <div className='lg:ml-10'>
            <h1 className='text-3xl'>Bitcoin Network</h1>
            <div className='text-chartGray mx-8'>
              <div className='flex justify-between my-8 border-b pb-4 border-chartGray'>
                <h1>Latest Height</h1>
                <h1>{btcChain.height.toLocaleString()}</h1>
              </div>
              <div className='flex justify-between my-8 border-b pb-6 border-chartGray'>
                <h1>Latest Block Hash</h1>
                <Link href={`/explorer/block/${btcChain.hash}?ticker=btc`} passHref>
                  <div>
                    <h1 className='text-blue hover:opacity-[0.9] hover:cursor-pointer hover:underline underline-offset-2 hidden lg:block'>{btcChain.hash}</h1>
                    <h1 className='text-blue hover:opacity-[0.9] block lg:hidden'>{btcChain.hash.slice(0, 10)}...</h1>
                  </div>
                </Link>
              </div>
              <div className='flex justify-between my-8 border-b pb-4 border-chartGray'>
                <h1 className='mt-1.5'>Latest Peer Count</h1>
                <div className='flex-row'>
                  <div className='flex'>
                    <h1 className='text-green-400 mr-1.5'>Confirmed</h1>
                    <h1>{btcChain.peerCount}</h1>
                  </div>
                  <div className='flex'>
                    <h1 className='text-red mr-1.5'>Unconfirmed</h1>
                    <h1>{btcChain.uncofirmedCount}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className='text-3xl mt-10'>Ethereum Network</h1>
            <div className='text-chartGray lg:ml-16 lg:mr-8 mx-8'>
              <div className='flex justify-between my-8 border-b pb-4 border-chartGray'>
                <h1>Latest Height</h1>
                <h1>{ethChain.height.toLocaleString()}</h1>
              </div>
              <div className='flex justify-between my-8 border-b pb-6 border-chartGray'>
                <h1>Latest Block Hash</h1>
                <Link href={`/explorer/block/${ethChain.hash}?ticker=eth`} passHref>
                  <div>
                    <h1 className='text-blue hover:opacity-[0.9] hover:cursor-pointer hover:underline underline-offset-2 hidden lg:block'>{ethChain.hash}</h1>
                    <h1 className='text-blue hover:opacity-[0.9] block lg:hidden'>{ethChain.hash.slice(0, 10)}...</h1>
                  </div>
                </Link>
              </div>
              <div className='flex justify-between my-8 border-b pb-4 border-chartGray'>
                <h1 className='mt-1.5'>Latest Peer Count</h1>
                <div className='flex-row'>
                  <div className='flex'>
                    <h1 className='text-green-400 mr-1.5'>Confirmed</h1>
                    <h1>{ethChain.peerCount}</h1>
                  </div>
                  <div className='flex'>
                    <h1 className='text-red mr-1.5'>Unconfirmed</h1>
                    <h1>{ethChain.uncofirmedCount}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  // seperate function is neccesary to avoid 429 error
  const fetchData = async () => {
    const btcChain = await fetchChain("btc");
    const ethChain = await fetchChain("eth");

    return { btcChain, ethChain };
  }

  const { btcChain, ethChain } = await fetchData();

  return {
    props: {
      btcChain,
      ethChain,
    }
  }
}

export default Explorer;
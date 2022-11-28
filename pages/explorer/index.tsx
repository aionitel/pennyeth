import { NextPage } from 'next'
import Head from 'next/head'
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
        <div className='flex-row lg:flex lg:justify-between'>
          <div className='lg:ml-10'>
            <div className='flex'>
              <h1 className='text-3xl'>Bitcoin Network</h1>
              <img src='https://i.imgur.com/wbZ6UVD.png' className='w-20 h-20' />
            </div>
          </div>
          <div className='border-r border-lightgray h-[600px] hidden lg:block' />
          <div>
            <h1>Ethereum Network</h1>
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
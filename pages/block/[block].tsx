import { NextPage } from 'next'
import Head from 'next/head';
import React from 'react'
import fetchBlock from '../../data/explorer/fetchBlock';
import { BsFillInfoCircleFill } from 'react-icons/bs'
import ReactTooltip from 'react-tooltip';
import Search from '../../components/explorer/Search';
import Link from 'next/link';

interface Block {
  type: string;
  ticker: string;
  hash: string;
  height: number;
  nonce: number;
  size: number;
  time: string;
  depth: number;
  txs: string[];
  prevBlock: string;
  merkleRoot: string;
}

interface BlockPageProps {
  block: Block
}

const Block: NextPage<BlockPageProps> = ({ block }) => {
  return (
    <div>
      <Head>
        {
          block.height === 0 ? <title>PennyETH • Genesis Block</title> : <title>PennyETH • Block {block.height}</title>
        }
      </Head>
      <div className='ml-14 text-medGray'>
        <div className='mt-8 text-black'><Search /></div>
        <div className='flex-row'>
          <span className='flex'>
            {
              block.height === 0 ? block.ticker === 'btc' ? 
              <h1 className='text-3xl my-6 text-white'>Genesis Block</h1> 
              : null 
              : <h1 className='text-3xl my-6 text-white'>Block {block.height}</h1>
            }
            <BsFillInfoCircleFill className='mt-8 mx-2 text-lightgray' data-tip={<h1></h1>} />
            <ReactTooltip place='right'>
              <h1>Block at height <br /> {block.height.toLocaleString()} in the blockchain.</h1>
            </ReactTooltip>
          </span>
          <span className='flex mb-4'>
            <h1>This block was mined on {new Date(block.time).toDateString().slice(3, 15)} at {new Date(block.time).toLocaleTimeString()}.</h1>
            {
              block.height === 0 ? block.ticker === 'btc' ? <h1>(By Satoshi Nakamoto!)</h1> : null : null
            }
          </span>
        </div>
        <div className='flex-row'>
          <div className='flex justify-between border-b py-4'>
            <h1>Hash</h1>
            <h1>{block.hash}</h1>
          </div>
          <div className='flex justify-between border-b py-4'>
            <h1>Height</h1>
            <h1>{block.height}</h1>
          </div>
          <div className='flex justify-between border-b py-4'>
            <h1>Confirmations</h1>
            <h1>{block.depth + 1}</h1>
          </div>
          <div className='flex justify-between border-b py-4'>
            <h1>Nonce</h1>
            <h1>{block.nonce}</h1>
          </div>
          <div className='flex justify-between border-b py-4'>
            <h1>Merkle Root</h1>
            <h1>{block.merkleRoot}</h1>
          </div>
          <div className='flex justify-between border-b py-4'>
            <h1>Size:</h1>
            <h1>{block.size}</h1>
          </div>
          <div className='flex justify-between border-b py-4'>
            <h1>Previous Block</h1>
            <Link href={`/block/${block.prevBlock}?ticker=${block.ticker}`} passHref>
              <h1 className='text-blue hover:cursor-pointer hover:underline hover:opacity-[0.9] ml-2'>{block.prevBlock}</h1>
            </Link>
          </div>
        </div>
      <div className='my-8'>
        <div className='flex'>
          <h1 className='text-3xl text-white mb-2'>Block Transactions</h1>
          <BsFillInfoCircleFill data-tip={<h1></h1>} className='mt-3 mx-2 text-lightgray' />
          <ReactTooltip place='right'>
            <h1>All transactions included in this block.</h1>
          </ReactTooltip>
        </div>
        {
          block.txs.map(item => (
            <Link href={`/tx/${item}`} passHref key=''>
              <h1 className='my-4 text-blue hover:cursor-pointer hover:opacity-[0.9] hover:underline'>{item}</h1>
            </Link>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  // get block pertaining to page
  const block = await fetchBlock(context.query.ticker, context.query.block);

  return {
    props: { block }
  }
}

export default Block;
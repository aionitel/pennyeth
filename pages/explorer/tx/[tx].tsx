import { NextPage } from "next";
import Head from "next/head";
import fetchTx from "../../../data/explorer/fetchTx";
import TxHeader from "../../../components/explorer/tx/TxHeader";
import Link from "next/link";
import Search from "../../../components/explorer/Search";
import { Tx } from '../../../data/utils/types'
import BtcTxSummary from "../../../components/explorer/tx/BtcTxSummary";
import EthTxSummary from "../../../components/explorer/tx/EthTxSummary";
import { FaClipboard } from "react-icons/fa";

interface TxPageProps {
  tx: Tx
}

const Tx: NextPage<TxPageProps> = ({ tx }) => {
  return (
    <div className='w-screen lg:max-w-screen-lg 2xl:max-w-screen-xl mb-20 pb-20'>
      <Head>
        <title>PennyETH • Transaction {tx.ticker === 'eth' ? '0x' : null}{tx.hash}</title>
      </Head>
        <div className='mt-8 lg:ml-8 mx-4 text-black'><Search /></div>
        <TxHeader tx={tx} />
        {tx.ticker === 'btc' ? <BtcTxSummary tx={tx} /> : <EthTxSummary tx={tx} />}
      <div className='mt-10 lg:ml-8 ml-4'>
        <h1 className='text-white text-3xl'>Details</h1>
      </div>
      <div className='flex-row text-chartGray lg:mx-0 lg:ml-8 mx-5'>
        <div className='flex justify-between border-b py-4'>
          <h1>Hash</h1>
          <div className="flex">
            <h1 className='hidden lg:block'>{tx.ticker === 'eth' ? '0x' : null}{tx.hash}</h1>
            <h1 className='block lg:hidden'>{tx.ticker === 'eth' ? '0x' : null}{tx.hash.slice(0, 25)}...</h1>
            <FaClipboard className='ml-2 mt-1 hover:text-blue hover:cursor-pointer' onClick={() => {
                navigator.clipboard.writeText(tx.hash as string);
              }} />
          </div>
        </div>
        <div className='flex justify-between border-b py-4'>
          <h1>Status</h1>
          {
            Number(tx.confirmations) >= 1 ? <h1 className='text-green-400'>Confirmed</h1> : <h1 className='text-red'>Unconfirmed</h1>
          }
        </div>
        <div className='flex justify-between border-b py-4'>
          <h1>Included in block:</h1>
          <Link href={`/explorer/block/${tx.block}?ticker=${tx.ticker}`} passHref>
            <div>
              <h1 className='text-blue hidden lg:block hover:cursor-pointer hover:underline hover:opacity-[0.9]'>{tx.ticker === 'eth' ? '0x' : null}{tx.block}</h1>
              <h1 className='text-blue block lg:hidden hover:cursor-pointer hover:underline hover:opacity-[0.9]'>{tx.ticker === 'eth' ? '0x' : null}{tx.block.slice(0, 15)}...</h1>
            </div>
          </Link>
        </div>
        <div className='flex justify-between border-b py-4'>
          <h1>Confirmations</h1>
          <h1>{tx.confirmations.toLocaleString()}</h1>
        </div>
        <div className='flex justify-between border-b py-4'>
          <h1>Size</h1>
          <h1>{tx.size} Bytes</h1>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const tx = await fetchTx(context.query.ticker, context.query.tx);

  return {
    props: { tx }
  }
}

export default Tx;
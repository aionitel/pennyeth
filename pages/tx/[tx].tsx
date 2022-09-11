import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import fetchTx from "../../data/explorer/fetchTx";
import { IoMdClose } from 'react-icons/io'
import { ImArrowRight } from 'react-icons/im'

interface Tx {
  type: string;
  ticker: string;
  hash: string;
  fees: number;
  inputs: any;
  outputs: any;
  dateReceived: string;
  dateConfirmed: string;
  confirmations: string;
}

interface TxPageProps {
  tx: Tx
}

const Tx: NextPage<TxPageProps> = ({ tx }) => {
  const [textOpen, setTextOpen] = useState<boolean>(false);
  console.log(tx)

  return (
    <div>
      <Head>
        <title>PennyETH • Transaction {tx.hash}</title>
      </Head>
      <div className='max-w-screen-lg w-screen'>
        <div className='flex-row text-white'>
          <div className='flex text-3xl mt-7 ml-8'>
            <h1 className='mr-2'>Transaction</h1>
            <h1 style={{ display: textOpen ? 'none' : 'block' }}>{tx.hash.slice(0, 15)}</h1>
            <h1 className='lg:hidden block'>...</h1>
            <h1 className='hover:cursor-pointer hidden lg:block' onClick={() => setTextOpen(true)} style={{ display: textOpen ? 'none' : 'block'}}>...</h1>
            <h1 className='hidden lg:block' style={{ display: textOpen ? 'block' : 'none' }}>{tx.hash}</h1>
            <IoMdClose className='mt-1 ml-1 hidden lg:block hover:cursor-pointer hover:scale-110 transition-all' onClick={() => setTextOpen(false)} style={{ display: textOpen ? 'block' : 'none'}} />
          </div>
        </div>
        <div className='mt-10 ml-8'>
          <h1 className='text-chartGray text-3xl'>Summary</h1>
        </div>
        <div className='flex text-white my-6 ml-8'>
          <h1 className='text-chartGray'>Fee</h1>
          <h1 className='ml-12 mr-1'>{tx.fees / 100000000}</h1>
          <h1>{tx.ticker.toUpperCase()}</h1>
        </div>
        <div className='flex justify-between text-white ml-8'>
          <div>
            {
                tx.inputs.hasOwnProperty("addresses") ? tx.inputs.map(item => (
                <h1 key=''>
                  {item.addresses[0]}
                </h1>
              ))
              : <div className="flex"><h1 className='text-green-400 mr-1'>COINBASE</h1><h1>(Newly Generated Coins)</h1></div>
            }
          </div>
          <ImArrowRight />
          <div>
            {
              tx.outputs.map(item => (
                <h1 key=''>
                  {item.addresses[0]}
                </h1>
              ))
            }
          </div>
        </div>
        <div className='text-chartGray'>
          <h1>This transaction was first broadcast to the Bitcoin network on {new Date(tx.dateReceived).toDateString()} at {new Date(tx.dateReceived).toLocaleTimeString()}.
              It currently has {tx.confirmations.toLocaleString()} confirmations on the blockchain.
              The transaction was later confirmed on {new Date(tx.dateConfirmed).toDateString()} at {new Date(tx.dateConfirmed).toLocaleTimeString()}.
          </h1>
        </div>
        <div className='mt-10 ml-8'>
          <h1 className='text-chartGray text-3xl'>Details</h1>
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
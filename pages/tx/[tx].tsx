import { NextPage } from "next";
import Head from "next/head";
import fetchTx from "../../data/explorer/fetchTx";
import { ImArrowRight } from 'react-icons/im'
import TxHeader from "../../components/explorer/TxHeader";

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
  block: string;
}

interface TxPageProps {
  tx: Tx
}

const Tx: NextPage<TxPageProps> = ({ tx }) => {
  return (
    <div>
      <Head>
        <title>PennyETH • Transaction {tx.hash}</title>
      </Head>
        <TxHeader tx={tx} />
      <div className='mt-10 ml-8'>
        <b className='text-chartGray text-3xl'>Summary</b>
      </div>
      <div className='flex text-white my-6 ml-8'>
        <h1 className='text-chartGray'>Fee</h1>
        <h1 className='ml-12 mr-1'>{tx.fees}</h1>
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
      <div className='mt-10 ml-8'>
        <h1 className='text-chartGray text-3xl'>Details</h1>
      </div>
      <div className='flex-row text-white'>
        <div className='flex justify-between border-b py-4'>
          <h1>Hash</h1>
          <h1>{tx.hash}</h1>
        </div>
        <div className='flex justify-between border-b py-4'>
          <h1>Included in block:</h1>
          <h1>{tx.block}</h1>
        </div>
        <div className='flex justify-between border-b py-4'>
          <h1>Confirmations</h1>
        </div>
        <div className='flex justify-between border-b py-4'>
          <h1>Nonce</h1>
        </div>
        <div className='flex justify-between border-b py-4'>
          <h1>Merkle Root</h1>
        </div>
        <div className='flex justify-between border-b py-4'>
          <h1>Size:</h1>
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
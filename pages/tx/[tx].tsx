import { NextPage } from "next";
import Head from "next/head";
import fetchTx from "../../data/explorer/fetchTx";
import TxHeader from "../../components/explorer/TxHeader";
import TxSummary from "../../components/explorer/TxSummary";
import Link from "next/link";

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
        <TxSummary tx={tx} />
      <div className='mt-10 ml-8'>
        <h1 className='text-white text-3xl'>Details</h1>
      </div>
      <div className='flex-row text-chartGray'>
        <div className='flex justify-between border-b py-4'>
          <h1>Hash</h1>
          <h1>{tx.hash}</h1>
        </div>
        <div className='flex justify-between border-b py-4'>
          <h1>Included in block:</h1>
          <Link href={`/block/${tx.block}?ticker=${tx.ticker}`} passHref>
            <h1 className='text-blue hover:cursor-pointer hover:underline hover:opacity-[0.9]'>{tx.block}</h1>
          </Link>
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
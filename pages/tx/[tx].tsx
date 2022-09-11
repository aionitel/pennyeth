import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import fetchTx from "../../data/explorer/fetchTx";
import { BsThreeDots } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

const Tx: NextPage = ({ tx }: any) => {
  const [textOpen, setTextOpen] = useState<boolean>(false);

  return (
    <div>
      <Head>
        <title>PennyETH • Transaction {tx.hash}</title>
      </Head>
      <div>
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
          <h1 className='text-chartGray text-2xl'>Summary</h1>
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
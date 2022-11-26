import { NextPage } from "next";
import Head from "next/head";
import Result from "../../components/explorer/Result";
import fetchAddr from "../../data/explorer/fetchAddr";
import fetchBlock from "../../data/explorer/fetchBlock";
import fetchTx from "../../data/explorer/fetchTx";
import { useRouter } from "next/router";
import Search from "../../components/search/Search";

const Query: NextPage = ({ data }: any) => {
  const router = useRouter();
  const query = router.query;

  return (
    <div>
      <Head>
        <title>PennyETH • Results</title>
      </Head>
      <div className='m-10 h-screen'>
        <Search path='/explorer' placeholder='Search Block / Address / Transaction' />
        {
          query.query.length < 20 ? <h1 className='text-white text-center my-5 text-2xl'>Your search for {query.query} yielded {data.length as string} result(s)</h1>
          : <h1 className='text-white text-center my-5 text-2xl'>Your search for {query.query.slice(0, 10)}... yielded {data.length as string} result(s)</h1>
        }
        {
          data.map(item => (
            <div key='' className='my-5'>
              <Result data={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const btc_block = await fetchBlock("btc", context.params.query).catch(e => { return "Error" })
  const eth_block = await fetchBlock("eth", context.params.query).catch(e => { return "Error" })

  const btc_address = await fetchAddr("btc", context.params.query).catch(e => { return "Error" })
  const eth_address = await fetchAddr("eth", context.params.query).catch(e => { return "Error" })

  const btc_tx = await fetchTx("btc", context.params.query).catch(e => { return "Error" })
  const eth_tx = await fetchTx("eth", context.params.query).catch(e => { return "Error" })

  const unfiltered = [
    btc_block,
    eth_block,
    btc_address,
    eth_address,
    btc_tx,
    eth_tx 
  ]

  const data = unfiltered.filter(item => item !== 'Error')

  return {
    props: {
      data
    }
  }
}

export default Query;
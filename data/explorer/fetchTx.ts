import axios from 'axios'
import { Tx } from '../utils/types';

const fetchTx = async (ticker: string, txId: string) => {
  const url = `https://api.blockcypher.com/v1/${ticker}/main/txs/${txId}`;

  const { data: res } = await axios.get(url);

  const tx: Tx = {
    type: "Transaction",
    ticker,
    hash: res.hash,
    fees: res.fees,
    inputs: res.inputs,
    outputs: res.outputs,
    dateReceived: res.received,
    confirmations: res.confirmations,
    block: res.block_hash,
    size: res.size,
    total: res.total,
  }

  return tx;
}

export default fetchTx;
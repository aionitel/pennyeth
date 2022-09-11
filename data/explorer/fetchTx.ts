import axios from 'axios'

interface Tx {
  type: string;
  ticker: string;
  hash: string;
  fees: number,
  inputs: any;
  outputs: any;
  dateReceived: number;
  dateConfirmed: number;
  confirmations: string;
  block: string;
}

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
    dateConfirmed: res.confirmed,
    confirmations: res.confirmations,
    block: res.block_hash,
  }

  return tx;
}

export default fetchTx;
import axios from 'axios'

interface TxIn {
  prevHash: string;
  outIdx: number;
  outValue: number; // in satoshis
  script: string;
  sequence: string;
  addresses: string[];
  scriptType: string;
}

interface TxOut {
  value: number; // in satoshis
  script: string;
  addresses: string[];
  scriptType: string;
}

interface Tx {
  type: string;
  ticker: string;
  hash: string;
  vin: number;
  vout: number;
  inputs: TxIn[],
  outputs: TxOut[]
}

const fetchTx = async (ticker: string, txId: string) => {
  const url = `https://api.blockcypher.com/v1/${ticker}/main/txs/${txId}`;

  const { data: res } = await axios.get(url);

  const tx: Tx = {
    type: "Transaction",
    ticker,
    hash: res.hash,
    vin: res.vin_sz,
    vout: res.vout_sz,
    inputs: res.inputs,
    outputs: res.outputs
  }

  return tx;
}

export default fetchTx;
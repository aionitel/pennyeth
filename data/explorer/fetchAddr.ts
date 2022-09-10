import axios from 'axios';

interface Address {
  type: string;
  ticker: string;
  address: string;
  totalReceived: number;
  totalSent: number;
  balance: number,
  n_txs: number;
  txs: string[]; // list of tx hashes belonging to address
}

const fetchAddr = async (ticker: string, addr: string) => {
  const url = `https://api.blockcypher.com/v1/${ticker}/main/addrs/${addr}`;

  const { data: res } = await axios.get(url);

  const address: Address = {
    type: "Address",
    ticker,
    address: res.address,
    totalReceived: res.total_received,
    totalSent: res.total_sent,
    balance: res.balance,
    n_txs: res.n_tx,
    txs: res.txrefs
  }

  return address;
}

export default fetchAddr;
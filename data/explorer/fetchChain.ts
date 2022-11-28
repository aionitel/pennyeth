import axios from 'axios'
import { Chain } from '../utils/types';

const fetchChain = async (chain: string) => { // chain is btc or eth
  const url = `https://api.blockcypher.com/v1/${chain}/main`;

  const { data: res } = await axios.get(url);

  const blockchain: Chain = {
    height: res.height,
    hash: res.hash,
    peerCount: res.peer_count,
    uncofirmedCount: res.unconfirmed_count,
  }

  return blockchain;
}

export default fetchChain;
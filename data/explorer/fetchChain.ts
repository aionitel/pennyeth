import axios from 'axios'

const fetchChain = async (chain: string) => { // chain is btc or eth
  const url = `https://api.blockcypher.com/v1/${chain}/main`;

  const { data: res } = await axios.get(url);
}

export default fetchChain;
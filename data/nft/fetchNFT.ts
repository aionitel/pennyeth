import axios from 'axios'
import { NFT } from '../utils/types';

const fetchNFT = async (q: string) => {
  const url = `https://deep-index.moralis.io/api/v2/nft/search?q=${q}?chain=eth&format=decimal&filter=global&limit=5`;

  const { data: res } = await axios.get(url, { headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_NFT_KEY }});

  const nfts: NFT[] = res.result.map(item => {
    return {
      id: item.token_id,
      address: item.token_address,
      uri: item.token_uri,
      name: JSON.parse(item.metadata).name,
      image: JSON.parse(item.metadata).image,
      desc: JSON.parse(item.metadata).description,
      type: item.contract_type,
      hash: item.token_hash,
      block: item.block_number_minted,
      miner: item.minter_address,
      tx: item.transaction_minted
    }
  });

  return nfts;
};

export default fetchNFT;
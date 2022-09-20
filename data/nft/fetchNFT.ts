import axios from 'axios'

const fetchNFT = async (q: string) => {
  const url = `https://deep-index.moralis.io/api/v2/nft/search?q=${q}?chain=eth&format=decimal&filter=global`;

  const { data: res } = await axios.get(url, { headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_NFT_KEY }});

  return res;
};

export default fetchNFT;
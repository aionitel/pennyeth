export interface Tx {
  type: string;
  ticker: string;
  hash: string;
  fees: number;
  inputs: any;
  outputs: any;
  dateReceived: string;
  confirmations: string;
  block: string;
  size: number;
  total: number;
}

export interface Address {
  type: string;
  ticker: string;
  address: string;
  totalReceived: number;
  totalSent: number;
  balance: number,
  n_txs: number;
  txs: any[]; // list of tx hashes belonging to address
}

export interface Block {
  type: string;
  ticker: string;
  hash: string;
  height: number;
  nonce: number;
  size: number;
  time: string;
  depth: number;
  txs: string[];
  prevBlock: string;
  merkleRoot: string;
}

export interface NFT {
  id: string;
  address: string;
  uri: string;
  name: string;
  image: string;
  desc: string;
  type: string;
  hash: string;
  block: string;
  miner: string;
  tx: string;
}

export interface NewsArticle {
  title: string,
  image: string,
  date: string,
  url: string,
}

export interface Asset {
  name: string,
  ticker: string,
  image: string,
  price: number,
  dailyChange: number,
  volume: number,
  marketCap: number,
  marketDominance: number,
  supply: number,
  rank: number,
  stockToFlow: number,
  medianTxFee: number,
  allTimeHigh: number,
  hashRate: number,
  overview: string,
  desc: string,
  background: string,
  blockReward: number,
  consensusAlgorithm: string,
}

export interface Chain {
  height: number;
  hash: string;
  peerCount: number;
  uncofirmedCount: number;
}
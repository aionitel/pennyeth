export interface Tx {
  type: string;
  ticker: string;
  hash: string;
  fees: number;
  inputs: any;
  outputs: any;
  dateReceived: string;
  dateConfirmed: string;
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
  txs: string[]; // list of tx hashes belonging to address
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
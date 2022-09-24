import React from 'react'
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>PennyETH  •  About</title>
      </Head>
      <div className='w-screen text-center lg:text-left text-white lg:m-10 lg:max-w-screen-lg'>
        <div>
          <h1 className='text-5xl'>What is PennyETH?</h1>
          <p className='text-lg text-chartGray my-7'>
            PennyETH is a crypto web app that has Ethereum and Solana intergrations,
            aswell as Web 3.0 capabilities, if that's your thing.
            Users can view technical and price information about various cryptocurrencies.
            PennyETH also allows users to explore Bitcoin and Ethereum's blockchain,
            and view various NFTs and NFT collections. 
            You can even send and recieve Ethereum or Solana by connecting your wallet.
          </p>
        </div>
        <div>
          <h1 className='text-5xl'>This is free, right?</h1>
          <p className='text-chartGray text-lg my-7'>
            Yes, this web app is completely free and open source. (F.O.S.S.)
          </p>
        </div>
        <div>
          <h1 className='text-5xl mb-7'>Where can I find the code for this?</h1>
          <p className='text-lg inline text-chartGray'>All the code is available on Github</p>
          <a className='text-lg inline ml-1 text-blue hover:underline hover:opacity-[0.9]' href='https://github.com/oranges0da/pennyeth' target='__blank'>here.</a>
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
    </>
  )
}

export default About;
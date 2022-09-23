import React, { useEffect } from 'react'
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>PennyETH  •  About</title>
      </Head>
      <div className='w-screen'>
        <div className='m-5 lg:m-10 text-center lg:text-left'>
          <h1 className='text-5xl text-white'>What is this?</h1>
          <p className='text-lg text-chartGray'>This is jksdfk</p>
        </div>
      </div>
    </>
  )
}

export default About
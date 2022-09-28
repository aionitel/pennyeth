import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { MoralisProvider } from 'react-moralis'
import { RecoilRoot } from 'recoil'
import { ToastProvider } from 'react-toast-notifications'
import NextNProgress from "nextjs-progressbar";
import { useEffect } from 'react'

const PennyETH = ({ Component, pageProps }: AppProps) => {

  if (typeof window !== 'undefined') {
    document.body.style.background = 'black';
  }

  return (
    <MoralisProvider serverUrl={process.env.NEXT_PUBLIC_DAPP_URL as string} appId={process.env.NEXT_PUBLIC_APP_ID as string}>
      <RecoilRoot>
        <ToastProvider>
          <Layout>
            <NextNProgress color='#1552F0' />
            <Component {...pageProps} /> 
          </Layout>
        </ToastProvider>
      </RecoilRoot>
    </MoralisProvider>
  )
}

export default PennyETH;
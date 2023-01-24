import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { RecoilRoot } from 'recoil'
import { ToastProvider } from 'react-toast-notifications'
import NextNProgress from "nextjs-progressbar";

const App = ({ Component, pageProps }: AppProps) => {

  // make entire web page background color black
  if (typeof window !== 'undefined') {
    document.body.style.background = 'black';
  }

  return (
    <RecoilRoot>
      <ToastProvider>
        <Layout>
          <NextNProgress color='#1552F0' />
          <Component {...pageProps} /> 
        </Layout>
      </ToastProvider>
    </RecoilRoot>
  )
}

export default App;
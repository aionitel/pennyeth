import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { RecoilRoot } from 'recoil'
import { ToastProvider } from 'react-toast-notifications'
import NextNProgress from "nextjs-progressbar";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const App = ({ Component, pageProps }: AppProps) => {

  // make entire web page background color black
  if (typeof window !== 'undefined') {
    document.body.style.background = 'black';
  }

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);
    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, []);

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
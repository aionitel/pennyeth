import { NextPage } from 'next'
import React, { useEffect} from 'react'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { newsAtom } from '../../state/atoms'
import { NewsArticle } from '../../data/utils/types'

const News: NextPage = () => {
  const news: NewsArticle[] = useRecoilValue(newsAtom);

  return (
    <>
      <Head>
        <title>PennyETH  •  News</title>
      </Head>
      <div className='h-screen'>
        <div>
          <h1>Latest News</h1>
          <div>
            {
              news.map(item => (
                <h1>{item.title}</h1>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default News

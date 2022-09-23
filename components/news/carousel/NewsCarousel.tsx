import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'
import { useRecoilValue } from 'recoil'
import { NewsArticle } from '../../../data/utils/types'
import { newsAtom } from '../../../state/atoms'
import NewsCard from '../NewsCard'

interface NewsCarouselProps {
  newsData: NewsArticle[]
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ newsData }) => {
  return (
    <div className='hidden lg:flex'>
        <Carousel rows={1} gap={0} containerStyle={{ width: 1500 }}
          cols={3}
        >
          {
            newsData.map(item => (
              <Carousel.Item key=''>
                <NewsCard title={item.title} image={item.image} date={item.date} url={item.url} />
              </Carousel.Item>
            ))
          }
        </Carousel>
      </div>
  )
}

export default NewsCarousel
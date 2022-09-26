import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'
import { useRecoilValue } from 'recoil'
import { getChartWidth } from '../../../data/utils/getDimensions'
import { NewsArticle } from '../../../data/utils/types'
import { newsAtom } from '../../../state/atoms'
import NewsCard from '../NewsCard'

interface NewsCarouselProps {
  newsData: NewsArticle[]
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ newsData }) => {
  return (
    <div className='hidden lg:flex'>
        <Carousel
          rows={1}
          cols={3}
          containerStyle={{ width: getChartWidth() }}
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
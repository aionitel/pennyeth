import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'
import { useRecoilValue } from 'recoil'
import images from '../../../data/images/images'
import { newsAtom } from '../../../state/atoms'
import NewsCard from '../NewsCard'

// type for news article that will be displayed
interface NewsArticleProps {
  title: string,
  image: string
  date: string,
  url: string,
}

interface NewsCarouselProps {
  newsData: NewsArticleProps[]
}

const NewsCarousel: React.FC = () => {
  const newsData = useRecoilValue(newsAtom);

  return (
    <div className='hidden lg:flex'>
        <Carousel rows={1} gap={0} containerStyle={{ width: 1500 }}
          cols={
            typeof window !== 'undefined' ? screen.width <= 901 ? 3 : 3 : null
          }
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
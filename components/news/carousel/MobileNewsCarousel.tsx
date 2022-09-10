import React from 'react'
import { useRecoilValue } from 'recoil'
import { newsAtom } from '../../../state/atoms'
import NewsCard from '../NewsCard'
import Carousel from 'nuka-carousel/lib/carousel'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'

const MobileNewsCarousel: React.FC = () => {
  const newsData = useRecoilValue(newsAtom);

  return (
    <div className='flex lg:hidden'>
      <Carousel 
        cellSpacing={0} 
        slidesToShow={1} 
        style={{ width: 380 }}
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}>
            <AiOutlineLeftCircle className='text-4xl opacity-70 ml-1' />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>
            <AiOutlineRightCircle className='text-4xl opacity-70 mr-1' />
          </button>
        )}
      >
        {
          newsData.map(item => (
            <div key='news_carousel'>
              <NewsCard title={item.title} image={item.image} date={item.date} url={item.url} />
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default MobileNewsCarousel
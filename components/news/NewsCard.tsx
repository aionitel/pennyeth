import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../data/images/images'

interface NewsProps {
  title: string,
  image: string,
  date: string,
  url: string,
}

const NewsImageSize = 350;

const NewsCard: React.FC<NewsProps> = ({ title, image, date, url }) => {
  const [hover, setHover] = useState<boolean>(false);
  const [cover, setCover] = useState<string>("");

  window.onload = function() {
    setCover(images[Math.floor(Math.random() * images.length)]);

    console.log("setting images");
  }

  return (
    <a href={url} target='_blank' rel="noopener noreferrer" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <div className='flex-row hover:cursor-pointer hover:underline'>
        <div className='overflow-hidden flex justify-center'>
          <img 
            src={image} 
            alt='' 
            className='mb-2 transition-all duration-1000 rounded-xl hover:rounded-none'
            style={{
              scale: hover ? 1.25 : 1,
              height: NewsImageSize - 150,
              width: NewsImageSize
            }}
          />
        </div>
        <div className='mx-2 ml-4 lg:ml-0'>
          <h1 className='mb-1'>{title}</h1>
          <h1>{date.slice(0, 10)}</h1>
        </div>
      </div>
    </a>
  )
}

export default NewsCard;
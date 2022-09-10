import axios from 'axios';

interface NewsArticleProps {
  title: string,
  image: string,
  date: string,
  url: string,
}

const fetchNews = async () => {
  const url = `https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_NEWS_KEY}&language=en&q=crypto`;

  const { data: res } = await axios.get(url);

  // array of 10 articles fetched from api
  const articles: NewsArticleProps[] = res.results.map(item => {
    return {
      title: item.title,
      image: null,
      date: item.pubDate,
      url: item.link
    }
  })

  return articles;
}

export default fetchNews;
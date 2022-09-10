import axios from 'axios'

// fetch latest news articles for bitcoin and return array of articles

interface NewsArticleProps {
  title: string,
  authors: string[],
  image: string,
  date: string,
  url: string,
}

const fetchBtcArticles = async () => {
  const url = `https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_NEWS_KEY}&country=us&q=bitcoin`

  const { data: res } = await axios.get(url);

  // array of 10 articles fetched from api
  const articles = res.results.filter(item => item["image_url"] !== null)

  return articles;
}

export default fetchBtcArticles;
import axios from 'axios'

// need to parse res data into price data that recharts can use
interface Data {
  date: string,
  price: number,
}

// fetching ytd data for btc
const fetchDailyAsset = async (asset: string) => {
  const today = new Date();
  const daysOfYear = [];
  const year_start = new Date(2021, 0, 1);

  for (var d = new Date(2021, 0, 1); d <= today; d.setDate(d.getDate() + 1)) {
    daysOfYear.push(new Date(d).toDateString());
  }

  const url = `https://data.messari.io/api/v1/assets/${asset}/metrics/price/time-series?start=${year_start.toString()}&end=${today.toString()}&interval=1d`

  const { data: res } = await axios.get(url);

  const data: Data[] = res.data.values.map((item, index) => {

    const date = today.toLocaleTimeString()

    return {
      "date": daysOfYear[index].slice(3, 16),
      "price": item[4].toFixed(2)
    }
  })

  return data;
}

export default fetchDailyAsset;
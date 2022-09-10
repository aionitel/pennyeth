import axios from 'axios'

interface Profile {
  name: string;
  ticker: string;
  tagline: string;
  height: number;
  peerCount: number;
}

const fetchProfile = async (ticker: string) => {
  const url1 = `https://data.messari.io/api/v2/assets/${ticker}/profile`;
  const url2 = `https://api.blockcypher.com/v1/${ticker}/main`;

  const { data: res1 } = await axios.get(url1);
  const { data: res2 } = await axios.get(url2);

  const profile: Profile = {
    name: res1.data.name,
    ticker: res1.data.symbol,
    tagline: res1.data.profile.general.overview.tagline,
    height: res2.height,
    peerCount: res2.peer_count
  };

  return profile;
}

export default fetchProfile;
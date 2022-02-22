import axios from 'axios';

const KEY = 'AIzaSyCpeviv-z5srKQ_0hINyt_Sv7t28141c50';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});

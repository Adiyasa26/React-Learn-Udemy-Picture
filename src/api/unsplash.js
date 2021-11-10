import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID myqzw4ZR45r_b5COnWIFMIgbxk7G-HVlcxGyYKANhlc',
  },
});

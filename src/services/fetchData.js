import axios from 'axios';

export const fetchModel = (url, callback) => {
    axios.get(url, { responseType: 'blob' })
      .then(response => callback(null, response.data))
      .catch(error => callback(error, null));
  };
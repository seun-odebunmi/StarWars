import axios from 'axios';

import { BASE_URL } from '../constants/';

const fetchService = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

const handleError = error => {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);

    return error.response.message;
  } else if (error.request) {
    console.log(error.request);

    return 'No response from server';
  } else {
    console.log('Error', error.message);

    return error.message;
  }
};

export { fetchService, handleError };

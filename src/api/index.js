import axios from 'axios';
import { toast } from 'react-toastify';

import { BASE_URL } from '../constants/';

const fetchService = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

fetchService.interceptors.request.use(
  config => {
    console.log('requesting.....');
    return config;
  },
  error => Promise.reject(error)
);

fetchService.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

const handleError = error => {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);

    return toast.error(error.response.message);
  } else if (error.request) {
    console.log(error.request);
    const errMsg = 'No response from server';

    return toast.error(errMsg);
  } else {
    console.log('Error', error.message);

    return toast.error(error.message);
  }
};

export { fetchService, handleError };

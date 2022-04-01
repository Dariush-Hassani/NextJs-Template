import axios from 'axios';
import { store } from '../Redux/Store';
import { baseUrl } from '../Utils/Config';

const AxiosClient = axios.create();

AxiosClient.interceptors.request.use(
  request => {
    let newUrl = baseUrl + request.url;
    request.url = newUrl;
    const token = store.getState().Auth.token;
    request.headers.Authorization = 'bearer ' + token;
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);
AxiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default AxiosClient;

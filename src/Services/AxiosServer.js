import axios from 'axios';
import { store } from '../Redux/Store';
import { baseUrl } from '../Utils/Config';

const AxiosServer = axios.create();

AxiosServer.interceptors.request.use(
  request => {
    let newUrl = baseUrl + request.url;
    request.url = newUrl;
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);
AxiosServer.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default AxiosServer;

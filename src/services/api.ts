import axios, { AxiosRequestConfig } from 'axios';
import { accessToken } from './credentials';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular',
  // params: { language: 'en-US', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accessToken}`
  }
};

export const fetchApiMovies = async ({ url }: AxiosRequestConfig) => {
  try {
    const response = await axios.request({ ...options, url })
    return response
  } catch (error) {
    console.error(error);
  }
}
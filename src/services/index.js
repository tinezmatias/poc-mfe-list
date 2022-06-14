// Vendor
import axios from 'axios';
// Internals
import { queryBuilder } from '../utils';
import { API_BASE_URL } from '../constants';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

/**
 * Get the most recent movies
 * e.x: https://api.themoviedb.org/3/discover/movie?api_key=apikey&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
 */
export const discoverMovies = async () => {
  const url = queryBuilder('/discover/movie', [
    'include_adult',
    'include_video',
    'language',
    'page',
    'sort_by',
    'with_watch_monetization_types',
  ]);
  const response = await apiClient.get(url);
  return response.data;
};

/**
 * Get the movies that match with the string
 * e.x: https://api.themoviedb.org/3/search/movie?api_key=apikey&language=en-US&query=spider&page=1&include_adult=false
 */
export const findMoviesByString = async (queryString) => {
  const url = queryBuilder(
    '/search/movie',
    ['language', 'page', 'include_adult'],
    {
      query: queryString,
    }
  );
  const response = await apiClient.get(url);
  return response.data;
};

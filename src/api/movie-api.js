import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = '416beb3e83d9731306f15d9723d6e0f4';

const getAxiosApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '416beb3e83d9731306f15d9723d6e0f4',
    language: 'en-US',
  },
});

export const getTrendingMovies = async () => {
  const movies = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return movies.data;
};

export const getSearchMovies = async query => {
  const movies = await getAxiosApi.get(`/search/movie`, {
    params: query,
  });
  return movies.data;
};

export const getMovieDetails = async id => {
  const movies = await getAxiosApi.get(`/movie/${id}`);
  return movies.data;
};

export const getMovieCredits = async id => {
  const movies = await getAxiosApi.get(`/movie/${id}/credits`);
  return movies.data;
};

export const getMovieReviews = async id => {
  const movies = await getAxiosApi.get(`/movie/${id}/reviews`);
  return movies.data;
};

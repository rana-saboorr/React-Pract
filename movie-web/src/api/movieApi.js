
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL ?? 'https://api.themoviedb.org/3';

const fetchData = async (url) => {
  const res = await fetch(url);

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  return data.results || data;
};

export const getTrendingMovies = () => {
  return fetchData(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
};

export const searchMovies = (query) => {
  return fetchData(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
};

export const getGenres = () => {
  return fetchData(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
};

export const getMoviesByGenre = (genreId) => {
  return fetchData(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );
};

export const getMovieDetails = (movieId) => {
  return fetchData(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
};

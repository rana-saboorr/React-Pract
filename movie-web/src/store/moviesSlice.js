import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getTrendingMovies,
  getGenres,
  getMoviesByGenre,
} from '../api/movieApi';

export const fetchTrendingMovies = createAsyncThunk(
  'movies/fetchTrending',
  async () => {
    const movies = await getTrendingMovies();
    return movies;
  },
);

export const fetchGenres = createAsyncThunk('movies/fetchGenres', async () => {
  const data = await getGenres();
  // TMDB returns { genres: [...] }
  return Array.isArray(data) ? data : data.genres ?? [];
});

export const fetchMoviesByGenre = createAsyncThunk(
  'movies/fetchMoviesByGenre',
  async (genreId) => {
    const movies = await getMoviesByGenre(genreId);
    return { genreId, movies };
  },
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    trending: [],
    genres: [],
    moviesByGenre: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.trending = action.payload;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to load trending movies';
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      })
      .addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
        const { genreId, movies } = action.payload;
        state.moviesByGenre[genreId] = movies;
      });
  },
});

export default moviesSlice.reducer;


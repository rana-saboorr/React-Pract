import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context';
import {
  fetchGenres,
  fetchMoviesByGenre,
  fetchTrendingMovies,
} from '../store/moviesSlice';

const FEATURED_GENRES = ['Action',
  'Comedy',
  'Sci-Fi',
  'Drama',
  'Fantasy',
  'Thriller',];
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';

function MovieRow({ title, movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="mb-3 text-lg font-semibold text-white">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {movies.map((movie) => (
          <article
            key={movie.id}
            className="min-w-[160px] max-w-[180px] flex-shrink-0 rounded-xl bg-gray-900 shadow-md shadow-black/40 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50"
          >
            {movie.poster_path ? (
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="h-52 w-full rounded-t-xl object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex h-52 items-center justify-center rounded-t-xl bg-gray-800 text-xs text-gray-400">
                No image
              </div>
            )}
            <div className="p-3">
              <h3 className="line-clamp-2 text-sm font-medium text-white">
                {movie.title}
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                {movie.release_date?.slice(0, 4) || '—'}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Home() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { trending, genres, moviesByGenre, status, error } = useSelector(
    (state) => state.movies,
  );

  useEffect(() => {
    dispatch(fetchTrendingMovies());
    dispatch(fetchGenres());
  }, [dispatch]);

  const getGenreIdByName = useCallback(
    (name) => genres.find((g) => g.name === name)?.id,
    [genres],
  );

  useEffect(() => {
    FEATURED_GENRES.forEach((name) => {
      const id = getGenreIdByName(name);
      if (id && !moviesByGenre[id]) {
        dispatch(fetchMoviesByGenre(id));
      }
    });
  }, [dispatch, getGenreIdByName, moviesByGenre]);

  const isLoading = status === 'loading' && trending.length === 0;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <section className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Discover movies and build your own watchlist
          </h1>
          <p className="mt-2 max-w-xl text-sm text-gray-300">
            Browse what&apos;s trending, explore by genre, and keep a private
            list of favorites on your dashboard.
          </p>
        </div>

        {!user && (
          <div className="flex gap-2 self-start md:self-auto">
            <Link
              to="/signin"
              className="rounded-full border border-gray-600 px-4 py-2 text-sm font-medium text-gray-100 transition hover:border-white hover:text-white"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-500"
            >
              Sign Up
            </Link>
          </div>
        )}
      </section>

      {isLoading && (
        <p className="py-10 text-center text-sm text-gray-400">
          Loading movies for you...
        </p>
      )}

      {error && (
        <p className="mb-4 text-sm text-red-400">
          Something went wrong while loading movies. Please try again later.
        </p>
      )}

      <MovieRow title="Trending this week" movies={trending} />

      {FEATURED_GENRES.map((name) => {
        const id = getGenreIdByName(name);
        const movies = id ? moviesByGenre[id] : [];
        return (
          <MovieRow
            key={name}
            title={`${name} movies`}
            movies={movies ?? []}
          />
        );
      })}
    </div>
  );
}

export default Home;


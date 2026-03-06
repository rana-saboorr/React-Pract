import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context';

const AVAILABLE_GENRES = [
  'Action',
  'Comedy',
  'Sci-Fi',
  'Drama',
  'Fantasy',
  'Thriller',
];

function Dashboard() {
  const { user, logout, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [moviesInput, setMoviesInput] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!user) return;
    setSelectedGenres(user.interests ?? []);
    if (Array.isArray(user.movies) && user.movies.length > 0) {
      setMoviesInput(user.movies.join(', '));
    }
  }, [user]);

  const handleToggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre],
    );
  };

  const parseMovies = useCallback((input) => {
    return input
      .split(/[,.]/)
      .map((m) => m.trim())
      .filter(Boolean);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user) return;

    const movies = parseMovies(moviesInput);

    updateUserProfile({
      interests: selectedGenres,
      movies,
    });

    setMessage(
      user.movies && user.movies.length > 0
        ? 'Your preferences have been updated.'
        : 'Your preferences have been saved.',
    );
    setTimeout(() => setMessage(''), 2500);
  };

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const hasExistingMovies = Array.isArray(user?.movies) && user.movies.length > 0;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 text-white">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">
            Welcome back{user?.name ? `, ${user.name}` : ''} 👋
          </h1>
          <p className="mt-1 text-sm text-gray-300">
            This is your private dashboard. Choose the genres you love and keep
            a list of movies you don&apos;t want to forget.
          </p>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-500"
        >
          Logout
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.4fr,1fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-gray-900 p-5 shadow-lg shadow-black/40"
        >
          <h2 className="mb-3 text-lg font-semibold text-white">
            Your interests
          </h2>

          <p className="mb-3 text-xs text-gray-300">
            Pick a few genres you tend to watch. We&apos;ll use these to group
            your personal movie list.
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {AVAILABLE_GENRES.map((genre) => {
              const active = selectedGenres.includes(genre);
              return (
                <button
                  key={genre}
                  type="button"
                  onClick={() => handleToggleGenre(genre)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                    active
                      ? 'border-red-500 bg-red-600/20 text-red-200'
                      : 'border-gray-700 bg-gray-800 text-gray-200 hover:border-gray-500'
                  }`}
                >
                  {genre}
                </button>
              );
            })}
          </div>

          <label className="mb-2 block text-sm font-medium text-white">
            Movies you like
          </label>
          <p className="mb-2 text-xs text-gray-400">
            Type movie names separated by comma or full stop, for example:{' '}
            <span className="font-mono">
              Dhoom, Om Shanti Om. Interstellar, 3 Idiots
            </span>
          </p>

          <textarea
            value={moviesInput}
            onChange={(event) => setMoviesInput(event.target.value)}
            rows={4}
            className="w-full rounded-xl border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Start listing your favourites..."
          />

          <button
            type="submit"
            className="mt-4 inline-flex justify-center rounded-full bg-red-600 px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-500"
          >
            {hasExistingMovies ? 'Update' : 'Add'}
          </button>

          {message && (
            <p className="mt-3 text-xs font-medium text-emerald-400">
              {message}
            </p>
          )}
        </form>

        <section className="rounded-2xl bg-gray-900 p-5 shadow-lg shadow-black/40">
          <h2 className="mb-3 text-lg font-semibold text-white">
            Your movies by genre
          </h2>
          {(!selectedGenres.length ||
            !Array.isArray(user?.movies) ||
            user.movies.length === 0) && (
            <p className="text-sm text-gray-400">
              Once you pick some genres and add movies, they&apos;ll show up
              here grouped by your interests.
            </p>
          )}

          {selectedGenres.length > 0 && Array.isArray(user?.movies) && (
            <div className="space-y-4">
              {selectedGenres.map((genre) => (
                <div key={genre}>
                  <h3 className="text-sm font-semibold text-gray-100">
                    {genre}
                  </h3>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs text-gray-300">
                    {(user.movies ?? []).map((movie) => (
                      <li key={`${genre}-${movie}`}>{movie}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Dashboard;


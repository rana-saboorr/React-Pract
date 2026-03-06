import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context';

function Header() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const isOnAuthPage =
    location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <header className="sticky top-0 z-20 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-wide text-white">
            Movie<span className="text-red-500">Web</span>
          </span>
        </Link>

        <nav className="flex items-center gap-3 text-sm">
          <Link
            to="/"
            className="hidden text-gray-300 transition hover:text-white sm:inline"
          >
            Home
          </Link>

          {user && (
            <span className="hidden text-gray-400 sm:inline">
              Hi, <span className="font-medium text-white">{user.name}</span>
            </span>
          )}

          {user ? (
            <>
              <Link
                to="/dashboard"
                className="rounded-full border border-gray-600 px-3 py-1 text-xs font-medium text-gray-100 transition hover:border-red-500 hover:text-white"
              >
                Dashboard
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full bg-red-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            !isOnAuthPage && (
              <div className="flex items-center gap-2">
                <Link
                  to="/signin"
                  className="rounded-full border border-gray-600 px-3 py-1 text-xs font-medium text-gray-100 transition hover:border-white hover:text-white"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="rounded-full bg-red-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-red-500"
                >
                  Sign Up
                </Link>
              </div>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;


import { useAuth } from "../Context";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white border border-black p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-4 ">
          Welcome, {user.name}
        </h2>
        <p className="text-gray-700 mb-6">Email: {user.email}</p>
        <p className="text-gray-700 mb-6">Password: {user.password}</p>

        <button
          onClick={logout}
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-400 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

import { useState } from "react";
import { useAuth } from "../Context";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please enter email and password");
      return;
    }

    const success = signin(form.email, form.password);
    if (!success) {
      setError("Invalid Input");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white p-8 border border-black shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Signin</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2"
          />  
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-grey-300 transition-colors"
          >
          Signin
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-black font-semibold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;

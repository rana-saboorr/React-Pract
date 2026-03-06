import { useState } from "react";
import { useAuth } from "../Context";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    } 

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.email === form.email)) {
      setError("Email already exists");
      return;
    }

    signup(form);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="bg-white border border-black p-8 shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Signup</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none "
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none "
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value})}
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none "
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-grey-400 transition-colors"
          >
            Signup
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-black font-semibold">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./Context";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Dashboard from "./Components/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) setUser(storedUser);

    if (!localStorage.getItem("users"))
      localStorage.setItem("users", JSON.stringify([]));
  }, []);

  const signup = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  const signin = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (e) => e.email === email && e.password === password,
    );
    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthProvider value={{ user, signup, signin, logout }}>
      <Router>
        <Routes>
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/signin"
            element={!user ? <Signin /> : <Navigate to="/dashboard" />}
          />

          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/signin" />}
          />

          <Route
            path="*"
            element={<Navigate to={user ? "/dashboard" : "/signup"} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

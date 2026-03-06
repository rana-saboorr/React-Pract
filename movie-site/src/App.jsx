import React, { useEffect, useState } from "react";
import "./App.css";
import { Header, Footer } from "./Components/index";
import { Outlet } from "react-router-dom";
import { login, logout } from "./store/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
  
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (savedUser) {
      dispatch(login({ userData: savedUser }));
    } else {
      dispatch(logout());
    }

    setLoading(false); 
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-800">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

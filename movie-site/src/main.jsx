import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signin from "./pages/Signin.jsx"
import Signup from "./pages/Signup.jsx";
import ProtectedSearch from "./pages/ProtectedSearch.jsx"

import Store from "./store/Store.js"
import {AuthLayout} from "./Components/index.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: (
          <AuthLayout authentication={false}>
            <Signin />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/protectedsearch",
        element: (
          <AuthLayout authentication={true}>
            <ProtectedSearch />
          </AuthLayout>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);

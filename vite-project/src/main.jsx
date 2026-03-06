import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from "./components/About/About.jsx"
import Contacts from './components/Contact/Contacts.jsx'
import Users from './components/Users/Users.jsx'


// const router=createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "/",
//         element: <Home/>
//       },

//       {
//           path:"about",
//           element:<About/> 
//       },
//       {
//         path:"contacts",
//         element:<Contacts/>
//       }
//       ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contacts' element={<Contacts/>}/>
      <Route path='user:/userid' element = {<Users/>}/>
      <Route path='app' element = {<App/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

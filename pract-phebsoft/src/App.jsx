  import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route, 
    RouterProvider 
  } from 'react-router-dom'

import Layout from './Layouts/Layout.jsx'
import Home from './Screens/Home.jsx'
import Whyus from './Screens/Whyus.jsx'
import Query from './Screens/Query.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path="whyus" element={<Whyus />} />
      <Route path="query" element={<Query />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from './Layouts/Layout.jsx';
import Home from './Pages/Home.jsx';
import Aboutus from "./Pages/Aboutus.jsx";
import Menu from './Pages/Menu.jsx';
import Events from './Pages/Events.jsx';
import Service from './Pages/Service.jsx';
import Contact from './Pages/Contact.jsx';
import './App.css';
import { MenuProvider } from './Context/MenuContext.jsx'; 


function App() {
  return (
   <MenuProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />       
            <Route path="/menu" element={<Menu />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/events" element={<Events />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </MenuProvider>
  );
}

export default App;

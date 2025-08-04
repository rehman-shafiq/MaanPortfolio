
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import AboutUs from './Components/AboutUs/AboutUs'
import Services from './Components/Services/Services'
import Project from './Components/Projects/Project'
import Layout from './Components/Layout/Layout';
/* import { useState } from 'react'; */

function App() {
  /*   const [hidesite, setHidesite] = useState(true);
    const toggleSite = () => {
        if (hidesite) {
           setHidesite(document.body.style.display = 'none'); ;
           
        } else {
            setHidesite(document.body.style.display = 'block');
        }
       
} */
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Header />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Projects" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

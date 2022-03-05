import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './Component/Nav';
import Home from './Component/Home';
import About from './Component/About';
import Footer from './Component/Footer';
import Resume from './Component/Resume';
import Portofilo from './Component/Portofilo';


function App() {
  return (
   <>
   <Nav />
   <Routes>
   <Route exact path="/" element={<Home />} />
   <Route exact path="/About" element={<About />} />
   <Route exact path="/Resume" element={<Resume />} />
   <Route exact path="/Footer" element={<Footer />} />
   <Route exact path="/Portofilo" element={<Portofilo />} />
   </Routes>
   </>
  );
}

export default App;

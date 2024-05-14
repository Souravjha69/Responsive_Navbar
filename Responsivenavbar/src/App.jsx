import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import {About, Home, Contact, Services} from "./Components";
// import Home from "./Components/Home";
// import Contact from "./Components/Contact";
// import Services from "./Components/Services";

function App ()  {
  return <>
  <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
  </div>
  </>
};

export default App;
import React from "react";
import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/about/AboutUs";

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact />
      </Routes>
      </Router>
      <Home />
      <AboutUs />
      </>
     
  );
}

export default App;

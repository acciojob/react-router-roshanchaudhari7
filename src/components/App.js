
import React from "react";
import './../styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

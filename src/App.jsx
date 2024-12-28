import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import 'semantic-ui-css/semantic.min.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Card from "./components/Card";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/:user" element={<Card />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
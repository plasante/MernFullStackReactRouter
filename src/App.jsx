import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/:user" exact component={Card} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
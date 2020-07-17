import React from "react";
import Main from "./main.js"
import Weathers from "./components/weather-react"

import SignUp from "./components/sign_up"

import Login from "./components/log_in"

import { BrowserRouter , Switch , Route } from "react-router-dom";  

import Bar from './components/navBar';
import List from './components/list';

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/login" component={Login} />
      //<Route path="/Signup" component={SignUp} />
      <Route path="/Main" component={Main} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

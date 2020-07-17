import React from "react";
import Main from "./main.js"
import Weathers from "./components/weather-react"
import Bar from './components/navBar/navBar.js';
import SignUp from "./components/sign_up"
import Login from "./components/log_in"
import List from './components/list/list.js';
import { BrowserRouter , Switch , Route } from "react-router-dom";  
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

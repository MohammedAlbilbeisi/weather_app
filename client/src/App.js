import React from "react";
import Weathers from "./components/weather-react"
import Login from "./components/log_in"
import SignUp from "./components/sign_up"
import Bar from './components/navBar';
import List from './components/list';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Bar/>
      <Weathers />
      <List/>
     
    </div>
  );
}

export default App;

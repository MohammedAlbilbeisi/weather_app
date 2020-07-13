import React from "react";
import Weathers from "./components/weather-react"
import Login from "./components/log_in"
import SignUp from "./components/sign_up"
import Bar from './component/navBar/navBar';
import List from './component/list/list';
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

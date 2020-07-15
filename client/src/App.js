import React from "react";
import SignUp from "./components/sign_up"
import Login from "./components/log_in"
import {BrowserRouter} from "react-router-dom";  
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter><SignUp /></BrowserRouter>
    </div>
  );
}

export default App;

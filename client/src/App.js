import React from "react";

import Main from "./components/main";

import SignUp from "./components/sign_up";

import Login from "./components/log_in";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <SignUp />} />
          <Route path="/Signup" component={SignUp} />
          <Route path="/Login" component={Login} />
          <Route path="/Main" component={Main} />
          <Route path="*" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

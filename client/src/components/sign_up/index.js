import React from "react";
import Login from "./../log_in/index.js"
import {BrowserRouter,Switch,Route,Link}from "react-router-dom";   
import axios from "axios";
import "./register.css"
class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : "",
      email : "",

    };
  }

  handelChange(e){
    this.setState({
      [e.target.name]:e.target.value,
    })
  }
  handelSubmite(e) {
    e.preventDefault();
    axios.post('http//localhost:3000/user', {
    username: this.state.username,
    password: this.state.password,
    email: this.state.email,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }


  render() {
    return (
      <div className="inner-container">
        
        <form  onSubmit={this.handelSubmite.bind(this)} className="box">
         <h1 className="header">
                  Sign Up
                </h1>
          <div className="input-group">
            
            <input
              type="text"
              name="username"
              value = {this.state.username}
              onChange = {this.handelChange.bind(this)}
              className="login-input"
              placeholder="Username"/>
          </div><br/>

          <div className="input-group">
            
            <input
             type="text"
              name="email"
              value = {this.state.email}
              onChange = {this.handelChange.bind(this)}
              className="login-input"
              placeholder="Email"/>
          </div><br/>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value = {this.state.password}
              onChange = {this.handelChange.bind(this)}
              className="login-input"
              placeholder="Password"/>
          </div><br />
          <button class="btn">Sign Up</button>
          <div>
          <p><Link to = "/login">log in</Link> if you have an account</p>
          <Route path = "/login"></Route>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
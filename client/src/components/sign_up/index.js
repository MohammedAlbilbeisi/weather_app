import React from "react";
import Login from "./../log_in/index.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "./register.css";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };
  }

  handelChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handelSubmite(e) {
    e.preventDefault();
    var data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    fetch("http://localhost:4000/main/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data);
        window.location.href = "/main/Main";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <div className="inner-container">
        <form onSubmit={this.handelSubmite.bind(this)} className="box">
          <h1 className="header">Sign Up</h1>
          <div className="input-group">
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handelChange.bind(this)}
              className="login-input"
              placeholder="Username"
            />
          </div>
          <br />

          <div className="input-group">
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handelChange.bind(this)}
              className="login-input"
              placeholder="Email"
            />
          </div>
          <br />

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handelChange.bind(this)}
              className="login-input"
              placeholder="Password"
            />
          </div>
          <br />
          <button class="btn">SignUp</button>
          <div>
            <Router>
              <p>
                <a href="/Login">LongIn</a> if you have an account
              </p>
            </Router>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;

import React from "react";
import axios from "axios";
import "./../sign_up/register.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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
      clientUserName: this.state.username,
      clientPassword: this.state.password,
    };
    fetch("http://localhost:4000/main/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
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
          <h1 className="header">Log In</h1>
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
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handelChange.bind(this)}
              className="login-input"
              placeholder="Password"
            />
          </div>
          <br />
          <button class="btn">LogIn </button>
        </form>
      </div>
    );
  }
}
export default Login;

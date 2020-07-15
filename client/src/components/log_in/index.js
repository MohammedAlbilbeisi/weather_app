import React from "react";
import axios from "axios";
import "./../sign_up/register.css"
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : "",

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
                  Log In
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
              type="password"
              name="password"
              value = {this.state.password}
              onChange = {this.handelChange.bind(this)}
              className="login-input"
              placeholder="Password"/>
          </div><br />
          <button class="btn">Log In </button>
        </form>
      </div>
    );
  }
}
export default Login;
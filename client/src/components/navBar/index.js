import React from "react";
import "./style.css";
class bar extends React.Component {
  render() {
    return (
      <body>
        <div className="an">
          <label className="logo">AccuWeather</label>
          <ul>
            <li>
              <a className="H1" href="#home">
                Home
              </a>
            </li>
            {/* <li><a  className="H1" href="log in">log in</a></li> */}
            <li>
              <a className="H1" href="main/logout">
                log out
              </a>
            </li>
            <li>
              <a className="H1" href="#about">
                About
              </a>
            </li>
          </ul>
        </div>
      </body>
    );
  }
}
export default bar;

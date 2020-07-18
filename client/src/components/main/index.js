import React from "react";
import Weathers from "../weather-react";
import Bar from "../navBar";
import List from "../list";
class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Bar />
        <Weathers />
      </div>
    );
  }
}
export default Main;

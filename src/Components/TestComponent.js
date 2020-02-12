import React, { Component } from "react";
import ReactDOM from "react-dom";

class component1 extends Component {
  myMethod() {
    return;
  }

  render() {
    return <div>eeeee</div>;
  }
}

ReactDOM.render(<component1 />, document.getElementById("root"));

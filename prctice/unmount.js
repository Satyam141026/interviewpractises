import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import "./index.css";
import Student from "./Compo/Student";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.show ? <Student /> : <h1>Child remove</h1>}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Click here
        </button>
      </div>
    );
  }
}

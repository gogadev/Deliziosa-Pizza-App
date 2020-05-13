import React, { Component } from "react";

import Menu from "./pages/menu/Menu";
import pizzaAPI from "./data/api";

import "./App.css";

//https://codesandbox.io/s/vVoQVk78?file=/api.js:164-721

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzas: pizzaAPI,
    };
  }

  render() {
    const { pizzas } = this.state;
    return (
      <React.Fragment>
        <Menu pizzas={pizzas} />
      </React.Fragment>
    );
  }
}

export default App;

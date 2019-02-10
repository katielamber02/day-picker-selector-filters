import React, { Component } from "react";

import "./App.css";
import Builder from "./container/Builder";

import BelkaApp from "./Belka/BelkaApp";
import { Toggle } from "./Patterns/ex1";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">some text from APP</header>
        <TodoList />
        <Builder />
        <Toggle />
        <BelkaApp />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import NavigationBar from "./NavigationBar";
import FlashMessagesList from "./FlashMessagesList";


class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <FlashMessagesList />
        {this.props.children}
      </div>
    );
  }
}

export default App;

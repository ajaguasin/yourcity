import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {
    fetch("/food/")
      .then(res => res.json())
      // .then(res => res.text())
      .then(food => console.log(food));
  }
  render() {
    return <h1>Home</h1>;
  }
}
export default Home;

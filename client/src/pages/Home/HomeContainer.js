import React, { Component } from "react";
import Home from "./Home";
export default class HomeContainer extends Component {
  componentDidMount() {
    // fetch("/food/")
    //   .then(res => res.json())
    //   // .then(res => res.text())
    //   .then(food => console.log(food));
  }
  render() {
    return <Home />;
  }
}

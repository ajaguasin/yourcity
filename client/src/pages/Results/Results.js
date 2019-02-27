import React, { Component } from "react";

class Results extends Component {
  componentDidMount() {
    fetch("/results")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log(JSON.stringify(myJson));
      });
  }
  render() {
    return <h1>Results</h1>;
  }
}
export default Results;

import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;

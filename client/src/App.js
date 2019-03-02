import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Search from "./pages/Search";
import Layout from "./components/Layout";
class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/search" component={Search} />
          </Layout>
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

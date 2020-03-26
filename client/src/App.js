import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

export default function App() {

  return (
    <Router>
      <div className="App">
        <h1>Welcome to the Bubbles App!</h1>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/protected" component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

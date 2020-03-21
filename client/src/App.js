import React, { useState } from "react";

// #3 Define some routes by importing from rrd
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// #7 import the Login component that was created
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import getToken from "./utils/axiosWithAuth";
import "./styles.scss";

function App() {
  const loggedIn = getToken;

  return (
    <Router>
      <div className="App">

        {/*  #4 Let's create a nav tag and create some links */}
        <nav>
          <Link to="/">Home</Link>

          {/* #15 Add a Login Link to the Navigation */}
          <Link to="/login">Login</Link>
        </nav>

        {/* #5 Define some routes */}
        {/* #8 Add Login component to login Route */}
        <Route exact path="/login" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path="/bubbles" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
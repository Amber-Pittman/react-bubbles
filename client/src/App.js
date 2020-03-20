import React, { useState } from "react";

// #3 Define some routes by importing from rrd
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// #7 import the Login component that was created
import Login from "./components/Login";
import "./styles.scss";

function App() {


  return (
    <Router>
      <div className="App">

        {/*  #4 Let's create a nav tag and create some links */}
        <nav>
          <Link to="/">Home</Link>
        </nav>

        {/* #5 Define some routes */}
        {/* #8 Add Login component to login Route */}
        <Route exact path="/login" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
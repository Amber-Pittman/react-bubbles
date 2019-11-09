import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./styles.scss";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import getToken from "./utils/api";

function App() {
  const signedIn = getToken();

  return (
    
    <Router>
      <div className="wrapper">
        <nav>
          <div>
            <h2 className='bubbles'>Login for Color Bubbles</h2>
          </div>
          <div>
            <Link to='/' className='link'>Home</Link>
            
            {/* #19 Add a SignIn Link to the Navigation */}
            {!signedIn && <Link to='/' className='link'>Login</Link>}
            
            {/* #43 Add an Account Link to the Navigation */}
            {signedIn && <Link to='/bubbles' className='link'> Bubbles</Link>}
          </div>
        </nav>

        <Route exact path="/" component={Login} />
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
